/*
 * ПРОБНЫЙ РЕЖИМ ССЫЛОК НА ИНТЕРАКТИВНЫЕ ВАРИАНТЫ — 2026-11-18
 * Не требуется серверное хранилище: в URL записан компактный план выбора
 * заданий, а ученику выдаётся штатный HTML через downloadStudentHTML().
 * Этот файл не изменяет банк задач и не отправляет ответы учителю.
 */
(function () {
    'use strict';

    const PREFIX = '#student=';
    const MAX_LINK_LENGTH = 6200;
    const MAX_TASKS = 250;
    const LIFE_MINUTES = 21 * 24 * 60;
    const nowMinute = () => Math.floor(Date.now() / 60000);
    const release = () => window.__EGE_RELEASE || null;
    const combinedFingerprint = q => parseInt(hashText(JSON.stringify(q)), 36) >>> 0;

    const el = id => document.getElementById(id);
    const val = id => (el(id) ? el(id).value : '');
    const checked = id => !!(el(id) && el(id).checked);
    const setVal = (id, value) => { if (el(id)) el(id).value = value; };
    const setCheck = (id, value) => { if (el(id)) el(id).checked = !!value; };

    function hashText(value) {
        let hash = 2166136261;
        for (let i = 0; i < value.length; i++) {
            hash ^= value.charCodeAt(i);
            hash = Math.imul(hash, 16777619) >>> 0;
        }
        return hash.toString(36);
    }

    function getSourceTask(tid, kind, protoIndex, taskIndex) {
        const db = window.getPrototypeData(tid, kind);
        const proto = db && db.prototypes && db.prototypes[protoIndex];
        const task = proto && proto.tasks && proto.tasks[taskIndex];
        if (!task || typeof task !== 'object') {
            throw new Error(`Задание ${tid}: не найден прототип ${protoIndex + 1}, аналог ${taskIndex + 1}.`);
        }
        return { task, proto };
    }

    function taskFingerprint(tid, kind, protoIndex, taskIndex) {
        const {task, proto} = getSourceTask(tid, kind, protoIndex, taskIndex);
        // Подпись исходного задания, включая рисунок и верный ответ,
        // чтобы изменения в банке не подменили задачу в старой ссылке.
        return hashText(JSON.stringify([
            task.id ?? '', task.text ?? '', task.answer ?? '',
            task.svg_code ?? '', task.imageHTML ?? '', proto.svg_code ?? ''
        ]));
    }

    // v2: binary task records, no network or compression API required.
    // Preserve numeric IDs versus task-prefixed IDs, as the generator uses both.
    // Existing v1 URLs remain readable.
    function toBase64(bytes) {
        let binary = '';
        for (let i = 0; i < bytes.length; i += 2048) {
            binary += String.fromCharCode(...bytes.subarray(i, i + 2048));
        }
        return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }
    function fromBase64(token) {
        if (!/^[A-Za-z0-9_-]{1,14000}$/.test(token)) throw new Error('Повреждён код варианта.');
        const binary = atob(token.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - token.length % 4) % 4));
        return Uint8Array.from(binary, c => c.charCodeAt(0));
    }
    function encode(data, versioned = false) {
        const out = [];
        const put = n => {
            if (!Number.isSafeInteger(n) || n < 0 || n > 0xffffffff) throw new Error('Некорректный номер задания.');
            while (n >= 128) { out.push((n % 128) + 128); n = Math.floor(n / 128); }
            out.push(n);
        };
        const str = value => {
            const bytes = new TextEncoder().encode(value);
            put(bytes.length); for (const byte of bytes) out.push(byte);
        };
        const [theme, sticker, timer, signature, gender, name, bgUrl] = data.o;
        const themeIndex = ['none','winter','spring','summer','autumn','custom'].indexOf(theme);
        const stickerIndex = ['none','cat','sci','ro'].indexOf(sticker);
        if (themeIndex < 0 || stickerIndex < 0 || !['female','male'].includes(gender)) throw new Error('Неподдерживаемые параметры оформления.');
        out.push(data.c.reduce((n, flag, i) => n | (flag ? 1 << i : 0), 0) | (data.r ? 16 : 0) | (signature ? 32 : 0) | (gender === 'male' ? 64 : 0));
        out.push(themeIndex | (stickerIndex << 3));
        if (versioned) put(data.expires);
        put(data.n); put(timer); str(name); str(bgUrl); put(data.q.length);
        for (const entry of data.q) {
            const [tid, kind, pi, ti, fingerprint] = entry;
            const match = /^(task|archive_task)?([1-9][0-9]{0,2})$/.exec(tid);
            if (!match) throw new Error('Неизвестный тип задания: ' + tid);
            const type = match[1] === 'archive_task' ? 2 : match[1] === 'task' ? 1 : 0;
            put(Number(match[2]) * 8 + type * 2 + kind);
            put(pi); put(ti);
            const h = parseInt(fingerprint, 36) >>> 0;
            if (!versioned) out.push(h & 255, (h >>> 8) & 255, (h >>> 16) & 255, h >>> 24);
        }
        if (versioned) {
            const h = combinedFingerprint(data.q);
            out.push(h & 255, h >>> 8 & 255, h >>> 16 & 255, h >>> 24);
            return '3.' + data.release + '.' + toBase64(Uint8Array.from(out));
        }
        return '2.' + toBase64(Uint8Array.from(out));
    }
    function decode(token) {
        const versioned = token.startsWith('3.');
        let version = '';
        if (versioned) {
            const m = /^3\.([0-9a-f]{12})\.([A-Za-z0-9_-]+)$/.exec(token);
            if (!m) throw new Error('Повреждён код варианта.');
            version = m[1]; token = '2.' + m[2];
        }
        if (!token.startsWith('2.')) {
            return JSON.parse(new TextDecoder('utf-8', {fatal: true}).decode(fromBase64(token)));
        }
        const bytes = fromBase64(token.slice(2)); let pos = 0;
        const byte = () => { if (pos >= bytes.length) throw new Error('Ссылка обрезана.'); return bytes[pos++]; };
        const get = () => {
            let n = 0, m = 1;
            for (let i = 0; i < 5; i++) {
                const b = byte(); n += (b & 127) * m;
                if (n > 0xffffffff) break;
                if (b < 128) return n;
                m *= 128;
            }
            throw new Error('Повреждён код варианта.');
        };
        const str = () => {
            const length = get();
            if (length > 4000 || pos + length > bytes.length) throw new Error('Ссылка обрезана.');
            const value = new TextDecoder('utf-8', {fatal:true}).decode(bytes.subarray(pos, pos + length));
            pos += length; return value;
        };
        const flags = byte(), appearance = byte();
        if (flags & 128 || appearance & 224) throw new Error('Неизвестные настройки варианта.');
        const expires = versioned ? get() : null;
        const n = get(), timer = get(), name = str(), bg = str(), count = get();
        if (!count || count > MAX_TASKS) throw new Error('Некорректное число заданий.');
        const q = [];
        for (let i = 0; i < count; i++) {
            const id = get(), type = (id >> 1) & 3, number = Math.floor(id / 8);
            if (type > 2 || number < 1 || number > 999) throw new Error('Некорректный номер задания.');
            const pi = get(), ti = get();
            const fingerprint = versioned ? null : (byte() | byte() << 8 | byte() << 16 | byte() << 24) >>> 0;
            q.push([['','task','archive_task'][type] + number, id & 1, pi, ti, versioned ? null : fingerprint.toString(36)]);
        }
        const checksum = versioned ? (byte() | byte() << 8 | byte() << 16 | byte() << 24) >>> 0 : null;
        if (pos !== bytes.length) throw new Error('Повреждён код варианта.');
        return {v:1, release:version, expires, checksum, r:flags & 16 ? 1 : 0, n,
            c:[0,1,2,3].map(i => (flags >> i) & 1),
            o:[['none','winter','spring','summer','autumn','custom'][appearance & 7],
                ['none','cat','sci','ro'][(appearance >> 3) & 3], timer, flags & 32 ? 1 : 0,
                flags & 64 ? 'male' : 'female', name, bg], q};
    }

    function validateEntry(entry) {
        if (!Array.isArray(entry) || entry.length !== 5) throw new Error('Неверный состав варианта.');
        const [tid, kindCode, pi, ti, fingerprint] = entry;
        if (typeof tid !== 'string' || !/^(?:[1-9][0-9]{0,2}|task[1-9][0-9]{0,2}|archive_task[1-9][0-9]{0,2})$/.test(tid) ||
            (kindCode !== 0 && kindCode !== 1) ||
            !Number.isInteger(pi) || pi < 0 || !Number.isInteger(ti) || ti < 0 ||
            typeof fingerprint !== 'string' || !/^[0-9a-z]{1,7}$/.test(fingerprint)) {
            throw new Error('Ссылка содержит некорректные данные о заданиях.');
        }
        const kind = kindCode === 1 ? 'extra' : 'main';
        const actual = taskFingerprint(tid, kind, pi, ti);
        if (actual !== fingerprint) {
            throw new Error(`Задание ${tid} изменилось после создания ссылки. Попросите учителя сформировать новую ссылку.`);
        }
        const {task} = getSourceTask(tid, kind, pi, ti);
        return {
            tid, kind, protoIndex:pi, taskIndex:ti,
            taskKey:String(task.id ?? task.text ?? ti)
        };
    }

    function readOptions() {
        const theme = val('theme-select');
        const sticker = val('sticker-select');
        if (sticker === 'custom') {
            throw new Error('Собственные стикеры пока нельзя передать ссылкой. Выберите встроенные стикеры или «Без стикеров». Для своего набора остаётся скачивание HTML.');
        }
        let bgUrl = '';
        if (theme === 'custom') {
            bgUrl = window.getSelectedCustomBg();
            if (/^(blob:|data:)/i.test(bgUrl)) {
                throw new Error('Загруженный с устройства фон нельзя передать компактной ссылкой. Укажите интернет-адрес фона или выберите встроенный фон.');
            }
            if (bgUrl && !/^https?:\/\//i.test(bgUrl)) {
                throw new Error('Для собственного фона нужна прямая ссылка, начинающаяся с https://.');
            }
            if (bgUrl.length > 1000) throw new Error('Ссылка на фоновую картинку слишком длинная.');
        }
        return {
            c: [checked('toggle-instant-check') ? 1 : 0,
                checked('toggle-show-correct') ? 1 : 0,
                checked('toggle-explanations') ? 1 : 0,
                checked('toggle-ordered-tasks') ? 1 : 0],
            o: [theme, sticker, Number(val('timer-input')) || 0,
                checked('toggle-signature') ? 1 : 0,
                val('teacher-gender'), checked('toggle-signature') ? val('teacher-name').trim().slice(0, 150) : '',
                bgUrl]
        };
    }

    function buildPayload() {
        const generated = window.currentGeneratedTasks;
        if (!Array.isArray(generated) || generated.length < 1) {
            throw new Error('Сначала сгенерируйте интерактивный вариант.');
        }
        if (generated.length > MAX_TASKS) throw new Error('Для ссылки выбрано слишком много задач. Уменьшите вариант или используйте HTML.');
        const opts = readOptions();
        return {
            v: 1,
            r: window.randomVariantMode ? 1 : 0,
            n: window.randomVariantMode ? Number(window.randomVariantNumber) || 0 : 0,
            c: opts.c,
            o: opts.o,
            q: generated.map(entry => {
                const tid = String(entry.taskTid || '');
                const kind = entry.taskKind === 'extra' ? 'extra' : 'main';
                const pi = Number(entry.protoIndex);
                const ti = Number(entry.sourceTaskIndex);
                return [tid, kind === 'extra' ? 1 : 0, pi, ti, taskFingerprint(tid, kind, pi, ti)];
            })
        };
    }

    function showStatus(message, bad) {
        const status = el('ege-link-share-status');
        if (status) {
            status.textContent = message;
            status.style.color = bad ? '#ffaaaa' : '#ceffd9';
        }
    }

    window.egeShowStudentLink = async function () {
        const box = el('ege-link-share-box');
        if (box) box.style.display = 'block';
        try {
            if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
                throw new Error('Опубликуйте пробный репозиторий на GitHub Pages, затем создавайте ссылки.');
            }
            const current = release();
            if (!current || current.archive || !/^[0-9a-f]{12}$/.test(current.id)) {
                throw new Error('Ссылки с защитой банка доступны после публикации через GitHub Actions. Обновите страницу после установки.');
            }
            showStatus('Проверяем актуальность версии…', false);
            const manifestUrl = new URL('ege-release.json', current.root);
            const response = await fetch(manifestUrl.href, {cache:'no-store'});
            if (!response.ok) throw new Error('Не удалось проверить версию сайта. Повторите попытку.');
            const manifest = await response.json();
            if (manifest.active !== current.id) throw new Error('Генератор обновился. Обновите страницу (Ctrl+F5), затем создайте вариант и ссылку заново.');
            const payload = buildPayload();
            payload.release = current.id;
            payload.expires = nowMinute() + LIFE_MINUTES;
            const url = new URL('v.html', current.root);
            url.hash = 'student=' + encode(payload, true);
            if (url.href.length > MAX_LINK_LENGTH) {
                throw new Error('Слишком длинная ссылка для надёжной отправки через мессенджеры. Уменьшите число заданий или скачайте HTML-файл.');
            }
            el('ege-link-share-url').value = url.href;
            el('ege-link-open').href = url.href;
            showStatus(`Ссылка готова · ${payload.q.length} заданий. Действует до ${new Date(payload.expires*60000).toLocaleString('ru-RU')}. Отправьте ученику без архива.`, false);
            if (box) box.scrollIntoView({behavior:'smooth', block:'nearest'});
        } catch (error) {
            if (el('ege-link-share-url')) el('ege-link-share-url').value = '';
            if (el('ege-link-open')) el('ege-link-open').removeAttribute('href');
            showStatus(error.message || String(error), true);
        }
    };

    window.egeCopyStudentLink = async function () {
        const field = el('ege-link-share-url');
        if (!field || !field.value) { showStatus('Сначала создайте ссылку.', true); return; }
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(field.value);
            } else {
                field.focus();field.select();
                if (!document.execCommand('copy')) throw new Error('Браузер не разрешил копирование');
            }
            showStatus('Ссылка скопирована. Теперь её можно отправить ученику.', false);
        } catch (error) {
            field.focus();field.select();
            showStatus('Выделите ссылку в поле и скопируйте вручную.', true);
        }
    };

    function setCheckedOptions(payload) {
        if (!Array.isArray(payload.c) || payload.c.length !== 4 || !Array.isArray(payload.o) || payload.o.length !== 7) {
            throw new Error('Некорректные настройки варианта.');
        }
        setCheck('toggle-instant-check', payload.c[0]);
        setCheck('toggle-show-correct', payload.c[1]);
        setCheck('toggle-explanations', payload.c[2]);
        setCheck('toggle-ordered-tasks', payload.c[3]);
        const [theme, sticker, timer, signature, gender, name, bgUrl] = payload.o;
        if (!['none','winter','spring','summer','autumn','custom'].includes(theme) ||
            !['none','cat','sci','ro'].includes(sticker) ||
            !Number.isFinite(timer) || timer < 0 || timer > 1440 ||
            !['female','male'].includes(gender) ||
            typeof name !== 'string' || name.length > 150 ||
            typeof bgUrl !== 'string' || bgUrl.length > 1000 ||
            (bgUrl && !/^https?:\/\//i.test(bgUrl))) {
            throw new Error('Неподдерживаемые параметры оформления.');
        }
        setVal('theme-select', theme);
        setVal('sticker-select', sticker);
        setVal('timer-input', String(timer));
        setCheck('toggle-signature', signature);
        setVal('teacher-gender', gender);
        setVal('teacher-name', name);
        setVal('custom-bg-url', bgUrl);
        window.customBgDataUrl = '';
    }

    function showStudentError(message) {
        // При ошибке пользователь видит ясную страницу, а не скрытый генератор.
        const block = document.createElement('div');
        block.style.cssText='box-sizing:border-box;max-width:680px;margin:12vh auto;padding:30px 23px;background:#fff;border-radius:15px;box-shadow:0 8px 35px #0002;font:16px/1.5 Arial,sans-serif;color:#333';
        const heading=document.createElement('h2');
        heading.textContent=message.startsWith('Срок действия') ? 'Срок действия ссылки истёк' : 'Не удалось открыть интерактивный вариант';
        heading.style.color='#b92a2a';
        const p=document.createElement('p'); p.textContent=message;
        const msg=document.createElement('p');msg.textContent='Попросите учителя отправить новую ссылку. Если ошибка повторяется, сообщите, на каком устройстве вы открываете работу.';
        block.append(heading,p,msg);
        document.documentElement.classList.remove('ege-student-link');
        document.body.replaceChildren(block);
        document.body.style.background='#f4f7f6';
        document.title='Ошибка открытия варианта';
    }

    async function openFromLink() {
        try {
            const token=location.hash.slice(PREFIX.length);
            const payload=decode(token);
            if (!payload || payload.v !== 1 || !Array.isArray(payload.q) || !payload.q.length || payload.q.length > MAX_TASKS ||
                (payload.r !== 0 && payload.r !== 1) || !Number.isInteger(payload.n) || payload.n < 0 || payload.n > 99999) {
                throw new Error('Ссылка содержит неподдерживаемый формат варианта.');
            }
            if (payload.release) {
                if (!release() || release().id !== payload.release) throw new Error('Не удалось загрузить нужную версию банка. Обновите страницу и повторите попытку.');
                if (!Number.isInteger(payload.expires) || payload.expires <= nowMinute()) throw new Error('Срок действия варианта истёк. Ссылка действовала 21 день. Обратитесь к учителю за новой ссылкой.');
                if (payload.expires > nowMinute() + LIFE_MINUTES + 5) throw new Error('Некорректная дата ссылки. Проверьте дату и время устройства.');
                // Проверка состава и содержимого всего варианта одним хешем вместо 4 байт на каждую задачу.
                payload.q = payload.q.map(entry => {
                    const [tid, kind, pi, ti] = entry;
                    return [tid, kind, pi, ti, taskFingerprint(tid,kind===1?'extra':'main',pi,ti)];
                });
                if (combinedFingerprint(payload.q) !== payload.checksum) throw new Error('Состав варианта повреждён или банк изменился. Попросите новую ссылку.');
            }
            setCheckedOptions(payload);
            const plan=payload.q.map(validateEntry);
            if (payload.r) {
                const expected = window.getActiveExamTaskIds();
                const unique = new Set(plan.map(t=>t.tid));
                if (plan.length !== expected.length || unique.size !== expected.length ||
                    plan.some(t=>t.kind !== 'main') || expected.some(tid=>!unique.has(tid))) {
                    throw new Error('Состав полного варианта не соответствует текущей структуре ЕГЭ.');
                }
                const picks={};
                for (const task of plan) picks[task.tid] = {protoIndex:task.protoIndex, taskIndex:task.taskIndex, taskKey:task.taskKey};
                window.randomVariantPicks=picks;
                window.randomVariantMode=true;
                window.randomVariantNumber=payload.n;
                window.generateVariant({useRandomPicks:true, silent:true});
            } else {
                window.generateVariant({manualPlan:plan, silent:true});
            }
            const actual=window.currentGeneratedTasks || [];
            if (actual.length !== plan.length) throw new Error('Не все задания из ссылки удалось восстановить.');
            for (let i=0; i<plan.length; i++) {
                const expected=plan[i], current=actual[i];
                if (current.taskTid !== expected.tid || current.taskKind !== expected.kind ||
                    current.protoIndex !== expected.protoIndex || current.sourceTaskIndex !== expected.taskIndex) {
                    throw new Error(`Задание ${i+1} восстановлено неверно. Попросите новую ссылку.`);
                }
            }
            window.__EGE_LINK_STUDENT_VIEWER = true;
            await window.downloadStudentHTML();
            if (window.__EGE_LINK_STUDENT_VIEWER_RENDERED !== true) {
                throw new Error('Не удалось подготовить ученическую страницу.');
            }
        } catch (error) {
            console.error('[ЕГЭ ссылка]', error);
            showStudentError(error.message || String(error));
        }
    }

    // После загрузки всех JS с банком задач и инициализации элементов управления.
    if (location.hash.startsWith(PREFIX)) {
        window.addEventListener('load', () => setTimeout(openFromLink, 0), {once:true});
    }
})();
