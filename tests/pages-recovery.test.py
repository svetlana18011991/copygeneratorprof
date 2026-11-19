"""Run from repository root: python3 tests/pages-recovery.test.py"""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

path = Path(__file__).resolve().parents[1] / 'ege_versions' / 'build.py'
spec = importlib.util.spec_from_file_location('ege_build', path)
b = importlib.util.module_from_spec(spec)
spec.loader.exec_module(b)
DAY = b.DAY
NOW = 1_800_000_000
OLD = 'a'*40
FIRST = b.RECOVERY_SHA
NEXT = 'b'*40
LATER = 'c'*40

class StateTests(unittest.TestCase):
    def setUp(self):
        self.git_check = patch.object(b.subprocess, 'run')
        self.git_check.start()
        self.addCleanup(self.git_check.stop)

    def seed(self):
        return b.state(FIRST, None, NOW, baseline=OLD)

    def test_bootstrap_without_prior_deployment(self):
        with patch.object(b, 'fetch_previous') as net:
            self.assertIsNone(b.load_previous('', '', None, '', NOW))
            net.assert_not_called()

    def test_specific_404_recovery_preserves_first_and_legacy(self):
        with patch.object(b, 'fetch_previous', side_effect=RuntimeError('HTTP Error 404')), \
             patch.object(b, 'get_history', return_value=OLD):
            recovered = b.load_previous('https://example.test', FIRST, None, b.RECOVERY_RUN, NOW)
        result = b.state(NEXT, recovered, NOW)
        self.assertEqual(set(result['versions']), {OLD[:12], FIRST[:12], NEXT[:12]})
        self.assertEqual(result['legacy_until'], NOW+21*DAY)
        self.assertEqual(result['versions'][FIRST[:12]]['retired'], NOW)

    def test_no_silent_reset_on_subsequent_404(self):
        with patch.object(b, 'fetch_previous', side_effect=RuntimeError('HTTP Error 404')):
            for sha, run in [(NEXT, b.RECOVERY_RUN), (FIRST, 'different-run'), (NEXT, 'new-run')]:
                with self.assertRaisesRegex(RuntimeError, '404'):
                    b.load_previous('', sha, None, run, NOW)

    def test_saved_manifest_bypasses_unavailable_site(self):
        original = b.state(NEXT, self.seed(), NOW+DAY)
        with tempfile.TemporaryDirectory() as d:
            p = Path(d)/'ege-release.json'
            p.write_text(json.dumps(original))
            with patch.object(b,'fetch_previous',side_effect=AssertionError('No network request allowed')):
                recovered = b.load_previous('', NEXT, p, '', NOW+2*DAY)
                self.assertEqual(recovered,original)
                same = b.state(NEXT,recovered,NOW+2*DAY)
                self.assertEqual(same,original)
                with self.assertRaises(RuntimeError):
                    b.load_previous('', LATER,p,'',NOW+2*DAY)
        changed = b.state(LATER,recovered,NOW+2*DAY)
        self.assertEqual(changed['versions'][FIRST[:12]]['retired'], NOW+DAY)
        self.assertEqual(changed['versions'][NEXT[:12]]['retired'], NOW+2*DAY)
        pruned = b.state(LATER,changed,NOW+26*DAY)
        self.assertEqual(set(pruned['versions']),{LATER[:12]})

    def test_public_manifest_remains_fallback(self):
        m = self.seed()
        with patch.object(b, 'fetch_previous', return_value=m) as net:
            self.assertEqual(b.load_previous('https://example.test',FIRST,None,'',NOW),m)
            net.assert_called_once_with('https://example.test',FIRST)

if __name__ == '__main__':
    unittest.main(verbosity=2)
