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

    function encode(data) {
        const bytes = new TextEncoder().encode(JSON.stringify(data));
        let binary = '';
        for (let i = 0; i < bytes.length; i += 2048) {
            binary += String.fromCharCode(...bytes.subarray(i, i + 2048));
        }
        return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    function decode(token) {
        if (!/^[A-Za-z0-9_-]{20,14000}$/.test(token)) throw new Error('Повреждён код варианта. Попросите учителя отправить ссылку повторно.');
        const text = atob(token.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - token.length % 4) % 4));
        const bytes = Uint8Array.from(text, c => c.charCodeAt(0));
        return JSON.parse(new TextDecoder('utf-8', {fatal: true}).decode(bytes));
    }

    function validateEntry(entry) {
        if (!Array.isArray(entry) || entry.length !== 5) throw new Error('Неверный состав варианта.');
        const [tid, kindCode, pi, ti, fingerprint] = entry;
        if (typeof tid !== 'string' || !/^((task|archive)[\w-]{1,32})$/.test(tid) ||
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

    window.egeShowStudentLink = function () {
        const box = el('ege-link-share-box');
        if (box) box.style.display = 'block';
        try {
            if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
                throw new Error('Опубликуйте пробный репозиторий на GitHub Pages, затем создавайте ссылки.');
            }
            const payload = buildPayload();
            const url = new URL(window.location.href);
            url.hash = 'student=' + encode(payload);
            if (url.href.length > MAX_LINK_LENGTH) {
                throw new Error('Слишком длинная ссылка для надёжной отправки через мессенджеры. Уменьшите число заданий или скачайте HTML-файл.');
            }
            el('ege-link-share-url').value = url.href;
            el('ege-link-open').href = url.href;
            showStatus(`Ссылка готова · ${payload.q.length} заданий. Отправьте её ученику без архива.`, false);
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
        heading.textContent='Не удалось открыть интерактивный вариант';
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
