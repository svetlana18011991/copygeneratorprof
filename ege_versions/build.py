#!/usr/bin/env python3
"""Build the published site and immutable, deduplicated student snapshots.
No commits are created. Only the Pages artifact is rebuilt.
"""
import argparse, hashlib, json, os, re, shutil, subprocess, time, urllib.parse, urllib.request
from pathlib import Path

HERE=Path(__file__).resolve().parent
DAY=86400
LIMIT=950_000_000

def git(*args):
    return subprocess.check_output(['git',*args])

def textgit(*args): return git(*args).decode().strip()

def get_history(head):
    first=textgit('log','--reverse','--diff-filter=A','--format=%H',head,'--','ege_versions/build.py').splitlines()
    if not first: raise RuntimeError('Cannot determine initial release')
    try: return textgit('rev-parse',first[0]+'^')
    except subprocess.CalledProcessError: return first[0]

def published_files(sha):
    for entry in git('ls-tree','-rz','--full-tree',sha).split(b'\0'):
        if not entry: continue
        meta,name=entry.split(b'\t',1);mode,kind,oid=meta.decode().split();name=name.decode('utf-8')
        if kind!='blob' or mode not in ('100644','100755'): continue
        parts=Path(name).parts
        if any(x.startswith('.') for x in parts) or parts[0] in ('tests','ege_versions','ege-archive','ege-objects'): continue
        if name in ('CNAME','ege-release.json','v.html'): continue
        yield name,oid

def write(path,data):
    path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(data if isinstance(data,bytes) else data.encode('utf-8'))

def validate_previous(m, expected):
    if not isinstance(m, dict) or m.get('active') != expected[:12]:
        raise RuntimeError('Published manifest is not the last successful deployment')
    versions = m.get('versions')
    if not isinstance(versions, dict) or versions.get(expected[:12], {}).get('sha') != expected:
        raise RuntimeError('Previous manifest has an invalid active revision')
    if not isinstance(m.get('legacy'), str) or not isinstance(m.get('legacy_until'), int):
        raise RuntimeError('Previous manifest lacks legacy metadata')
    for key, value in versions.items():
        if (not isinstance(value, dict) or not isinstance(value.get('sha'), str)
                or not re.fullmatch(r'[0-9a-f]{40}', value['sha']) or key != value['sha'][:12]
                or 'retired' not in value or (value['retired'] is not None and not isinstance(value['retired'], int))):
            raise RuntimeError('Previous manifest contains invalid revision metadata')
    return m


def fetch_previous(base,expected):
    if not expected: return None
    url=base.rstrip('/')+'/ege-release.json?build='+str(time.time_ns())
    last=None
    for _ in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers={'Cache-Control':'no-cache'}),timeout=25) as f: m=json.load(f)
            return validate_previous(m, expected)
        except Exception as e: last=str(e)
        time.sleep(4)
    raise RuntimeError('Cannot safely read previous publication: '+str(last))

# Recovery is restricted to the known first successful test deployment, which
# completed before its manifest was available from the published site. It is
# not a general 'ignore missing previous state' switch.
RECOVERY_SHA = '76b4d654566a34b7b2c5072ac58b9e61cb036395'
RECOVERY_RUN = '44441377518'


def load_previous(base, expected, previous_json, recovery_run, now):
    if previous_json:
        m = json.loads(previous_json.read_text())
        return validate_previous(m, expected) if expected else m
    if not expected:
        return None
    try:
        return fetch_previous(base, expected)
    except RuntimeError:
        if expected != RECOVERY_SHA or recovery_run != RECOVERY_RUN:
            raise
        # This specific run was the very first versioned deployment. Rebuild
        # both its active revision and the preceding legacy bank from Git.
        # The transition period starts anew so no previously issued link loses days.
        print('Recovering known first test deployment from Git history.', flush=True)
        return state(expected, None, now)


def state(head, previous, now, baseline=None):
    if previous:
        versions={k:dict(v) for k,v in previous['versions'].items()};legacy=previous['legacy'];legacy_until=previous['legacy_until']
        active=previous['active']
        if active!=head[:12]: versions[active]['retired']=now
    else:
        old=baseline or get_history(head);legacy=old[:12];legacy_until=now+21*DAY
        versions={legacy:{'sha':old,'retired':now}}
    current=head[:12]
    if current in versions and versions[current]['sha']!=head:raise RuntimeError('Version identifier collision')
    versions[current]={'sha':head,'retired':None}
    # 2 extra days absorb build duration, CDN cache and delays in switching publications.
    versions={k:v for k,v in versions.items() if k==current or (k==legacy and now<legacy_until) or (v['retired'] is not None and now < v['retired']+23*DAY)}
    for k,v in versions.items():
        if not re.fullmatch(r'[0-9a-f]{40}',v['sha']) or k!=v['sha'][:12]: raise RuntimeError('Invalid preserved revision')
        subprocess.run(['git','cat-file','-e',v['sha']+'^{commit}'],check=True)
    return {'active':current,'versions':versions,'legacy':legacy,'legacy_until':legacy_until}

SCRIPT_RE=re.compile(r'(<script\b[^>]*?\bsrc\s*=\s*)([\"\'])([^\"\']+)\2',re.I)
def script_paths(html, mapping, archive):
    def replace(m):
        u=urllib.parse.urlsplit(m[3]); path=urllib.parse.unquote(u.path).removeprefix('./')
        if u.scheme or u.netloc or path not in mapping:return m[0]
        url=mapping[path] if archive else path+'?v='+mapping[path].split('/')[-1].split('.')[0][:16]
        return m[1]+m[2]+url+m[2]
    return SCRIPT_RE.sub(replace,html)

def inject(html, code):
    if not re.search(r'<head\s*>',html,re.I):raise RuntimeError('No head in index.html')
    return re.sub(r'<head\s*>',lambda m:m[0]+code,html,count=1,flags=re.I)

def safe_json(data):return json.dumps(data,ensure_ascii=True,separators=(',',':')).replace('<','\\u003c')

def build(out, manifest):
    if out.exists(): raise RuntimeError('Output folder must not exist')
    out.mkdir(parents=True)
    assets=(HERE/'asset-map.js').read_text()
    router=(HERE/'router.js').read_text()
    current=manifest['active']
    for version,entry in manifest['versions'].items():
        sha=entry['sha']; tree=dict(published_files(sha));mapping={}
        if not all(x in tree for x in ('index.html','app_core.js','link_trial.js')):raise RuntimeError('Required files absent in '+sha)
        for name,oid in tree.items():
            if name=='index.html':continue
            ext=Path(name).suffix.lower()
            if not re.fullmatch(r'\.[a-z0-9]{1,10}',ext):ext='.bin'
            # Archived core rewrites generated student asset references, not the tasks themselves.
            if name=='app_core.js':
                raw=git('cat-file','blob',oid)
                marker=b'            document.open();\n            document.write(html);'
                raw=raw.replace(b'\r\n',b'\n')
                if raw.count(marker)!=1:raise RuntimeError('Student render hook not found in '+sha)
                patched=raw.replace(marker,b'            if (window.__EGE_REWRITE_STUDENT) html=window.__EGE_REWRITE_STUDENT(html);\n'+marker)
                key=hashlib.sha256(patched).hexdigest();data=patched
            else:key=oid;data=None
            rel='ege-objects/'+key+ext;mapping[name]=rel
            if not (out/rel).exists():write(out/rel,data if data is not None else git('cat-file','blob',oid))
            if version==current:write(out/name,git('cat-file','blob',oid))
        html=git('cat-file','blob',tree['index.html']).decode('utf-8-sig')
        # Historical entry pages cannot produce new links; route ordinary access to root.
        setup='''<base href="../../"><script>window.__EGE_RELEASE={id:%s,archive:true,root:new URL('../../',location.href).href};window.__EGE_ARCHIVE_FILES=%s;if(!location.hash.startsWith('#student='))location.replace(window.__EGE_RELEASE.root);</script>'''%(safe_json(version),safe_json(mapping))
        archived=script_paths(html,mapping,True)
        archived=inject(archived,setup+'<script>'+assets+'</script>')
        write(out/'ege-archive'/version/'index.html',archived)
        if version==current:
            setup='''<script>window.__EGE_RELEASE={id:%s,archive:false,root:new URL('./',location.href).href};if(location.hash.startsWith('#student='))location.replace(new URL('v.html'+location.hash,window.__EGE_RELEASE.root).href);</script>'''%safe_json(version)
            # Root uses original files, but a new script URL for every changed blob.
            rootmap={name:'ege-objects/'+oid+Path(name).suffix for name,oid in tree.items()}
            write(out/'index.html',inject(script_paths(html,rootmap,False),setup))
    write(out/'ege-release.json',safe_json(manifest))
    write(out/'v.html','''<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Интерактивный вариант</title><style>body{background:#f4f7f6;color:#333;font:16px/1.5 Arial,sans-serif;padding:20px}main{max-width:620px;margin:10vh auto;background:white;padding:28px;border-radius:14px;box-shadow:0 6px 24px #0002}h2{color:#003399}</style></head><body><main><h2 id="heading">Открываем интерактивный вариант…</h2><p id="message">Проверяем срок действия и версию банка.</p></main><script>'''+router+'</script></body></html>')
    write(out/'.nojekyll','')
    # The Pages artifact must not exceed the service limit. Never silently drop an active version.
    total=sum(p.stat().st_size for p in out.rglob('*') if p.is_file())
    if total>LIMIT:raise RuntimeError(f'Publication {total:,} bytes exceeds safety limit {LIMIT:,}. Existing site remains unchanged.')
    print(f'Built {len(manifest["versions"])} versions; {total:,} bytes.')

def main():
    p=argparse.ArgumentParser();p.add_argument('--out',required=True,type=Path);p.add_argument('--base-url',default='');p.add_argument('--previous-sha',default='');p.add_argument('--previous-json',type=Path);p.add_argument('--recovery-run',default='');p.add_argument('--baseline');p.add_argument('--now',type=int,default=int(time.time()));a=p.parse_args()
    head=textgit('rev-parse','HEAD');previous=load_previous(a.base_url,a.previous_sha,a.previous_json,a.recovery_run,a.now)
    m=state(head,previous,a.now,a.baseline);build(a.out,m)
if __name__=='__main__':main()
