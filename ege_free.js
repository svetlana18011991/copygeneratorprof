(function(){
    'use strict';
    const el = id => document.getElementById(id);
    const bank = window.EGE_FREE_BANK;
    const generateButton=el('generateFree'),anotherButton=el('generateAnother');
    const answerButtons=[el('topAnswers'),el('bottomAnswers')];
    const paper=el('freePaper'),tasksEl=el('freeTasks'),answers=el('freeAnswers'),answersList=el('answerList');
    const checkButton=el('checkFree'), printButtons=[el('topPrint'),el('bottomPrint')], results=el('freeResults');
    const last=new Map();
    let selected=[],generating=false,examActive=false,examDeadline=0,examInterval=0,examFinished=false;
    const modes=[...document.querySelectorAll('[name="freeMode"]')], examBtn=el('startExam'), keyButtons=[el('printKeys'),el('copyKeys')];
    const topics=['','Планиметрия','Векторы','Стереометрия','Определение вероятности','Теоремы о вероятностях событий','Простейшие уравнения','Значение выражения','Производная и её график','Задачи с прикладным содержанием','Текстовые задачи','Графики функций','Исследование функций'];
    const mode=()=>modes.find(x=>x.checked)?.value||'full';
    function setExamControls(active){for(const b of [...answerButtons,...printButtons,...keyButtons])b.disabled=active;for(const b of modes)b.disabled=active;generateButton.disabled=anotherButton.disabled=active;examBtn.textContent=active?'Завершить пробный экзамен':'Пробный экзамен · 3 ч 55 мин';checkButton.textContent=active?'Завершить экзамен и проверить':'Проверить ответы';el('examNote').hidden=!active;}
    function stopExam(){examActive=false;examFinished=true;clearInterval(examInterval);examInterval=0;setExamControls(false);el('examTimer').textContent='Пробный экзамен завершён';for(const input of tasksEl.querySelectorAll('input'))input.readOnly=true;check();}
    function tick(){if(!examActive)return;const left=Math.max(0,Math.ceil((examDeadline-Date.now())/1000));const t=[Math.floor(left/3600),Math.floor(left/60)%60,left%60].map(x=>String(x).padStart(2,'0')).join(':');el('examTimer').textContent='Осталось: '+t;if(!left)stopExam();}
    async function beginExam(){if(generating)return;if(examActive){if(confirm('Завершить экзамен и проверить ответы?'))stopExam();return;}if(!confirm('Начать новый полный вариант на 3 часа 55 минут? Текущий вариант будет заменён.'))return;modes.find(x=>x.value==='full').checked=true;await generate(true);if(!selected.length||paper.hidden)return;examActive=true;examDeadline=Date.now()+235*60*1000;setExamControls(true);el('examTimer').hidden=false;tick();examInterval=setInterval(tick,250);}
    window.addEventListener('beforeunload',e=>{if(examActive){e.preventDefault();e.returnValue='';}});
    window.addEventListener('afterprint',()=>document.body.classList.remove('print-keys'));
    function showError(message){el('freeError').textContent=message;el('freeError').hidden=false;}
    function clearError(){el('freeError').textContent='';el('freeError').hidden=true;}
    // Trusted, verbatim task-bank HTML. Escape TeX comparators only inside math delimiters,
    // otherwise the browser may interpret <x or <a as HTML markup rather than math.
    function mathHTML(value){return String(value??'').replace(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\$[^$]*\$)/g,
        m=>m.replace(/</g,'&lt;').replace(/>/g,'&gt;'));}
    function validBank(){return bank&&Array.isArray(bank.groups)&&bank.groups.length===19&&Array.isArray(bank.diagrams)&&bank.groups.every((g,i)=>
        g.number===i+1&&g.part===(i<12?1:2)&&Array.isArray(g.tasks)&&g.tasks.length>0&&g.tasks.every(t=>Array.isArray(t)&&t.length===3&&typeof t[0]==='string'&&typeof t[1]==='string'&&Number.isInteger(t[2])&&t[2]>=-1&&t[2]<bank.diagrams.length));}
    function clearTypeset(root){try{window.MathJax?.typesetClear?.([root]);}catch(e){}}
    async function typeset(root){try{if(window.MathJax?.startup?.promise)await window.MathJax.startup.promise;if(window.MathJax?.typesetPromise)await window.MathJax.typesetPromise([root]);}catch(e){console.warn('MathJax:',e);}}
    function drawTasks(items){
        const frag=document.createDocumentFragment();
        for(const {group,task} of items){
            if(group.number===1||group.number===13){
                const h=document.createElement('h3');h.className='part-title';h.textContent=group.part===1?'Часть 1. Задания с кратким ответом':'Часть 2. Задания с развёрнутым ответом';frag.append(h);
                const note=document.createElement('p');note.className='part-note';note.textContent=group.part===1?'Запишите ответ к каждому заданию.':'Запишите полное решение с обоснованием.';frag.append(note);
            }
            const article=document.createElement('article');article.className='task';article.dataset.number=group.number;
            const row=document.createElement('div');row.className='task-row-free';
            const num=document.createElement('div');num.className='task-number';num.textContent=group.number+'.';
            const content=document.createElement('div');content.className='task-content';
            const text=document.createElement('div');text.className='task-text';text.innerHTML=mathHTML(task[0]);content.append(text);
            let diagram=null; if(task[2]>=0){diagram=document.createElement('div');diagram.className='task-diagram';diagram.innerHTML=bank.diagrams[task[2]];}
            if(group.part===1){
                const entry=document.createElement('div');entry.className='answer-entry';
                const input=document.createElement('input');input.type='text';input.className='ans-box';input.id='free-answer-'+group.number;input.placeholder='Ответ...';input.inputMode='decimal';input.autocomplete='off';input.setAttribute('aria-label','Ответ на задание '+group.number);
                const feedback=document.createElement('span');feedback.className='answer-feedback';feedback.setAttribute('aria-live','polite');
                input.addEventListener('input',()=>{delete input.dataset.status;delete feedback.dataset.status;feedback.textContent='';results.hidden=true;});
                entry.append(input,feedback);content.append(entry);
            }
            const line=document.createElement('div');line.className='print-answer';line.textContent=group.part===1?'Ответ: __________________________':'Решение выполняется с полным обоснованием.';content.append(line);
            row.append(num);if(diagram)row.append(diagram);row.append(content);article.append(row);frag.append(article);
        }
        tasksEl.replaceChildren(frag);
    }
    function drawAnswers(){const frag=document.createDocumentFragment();for(const {group,task} of selected){
        const row=document.createElement('div');row.className='answer-row';row.dataset.number=group.number;
        const num=document.createElement('div');num.className='answer-num';num.textContent=group.number+'.';
        const value=document.createElement('div');value.className='answer-value';value.innerHTML=mathHTML(task[1]);row.append(num,value);frag.append(row);
    }answersList.replaceChildren(frag);}
    function hideAnswers(){clearTypeset(answersList);answersList.replaceChildren();answers.hidden=true;for(const b of answerButtons){b.textContent='Показать ответы';b.setAttribute('aria-expanded','false');}}
    async function toggleAnswers(){if(!selected.length||generating||examActive)return;if(!answers.hidden){hideAnswers();return;}
        drawAnswers();answers.hidden=false;for(const b of answerButtons){b.textContent='Скрыть ответы';b.setAttribute('aria-expanded','true');}await typeset(answersList);answers.scrollIntoView({behavior:'smooth',block:'start'});}
    function normalize(value){const s=String(value).trim().replace(/\u2212/g,'-').replace(',','.');return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s)&&Number.isFinite(Number(s))?Number(s):s;}
    function check(){if(generating||!selected.length||examActive)return;const lists={correct:[],wrong:[],empty:[],manual:[]}, statuses=[];
        for(const {group,task} of selected){const n=group.number;if(group.part!==1){lists.manual.push(n);statuses.push({n,status:'manual'});continue;}const input=el('free-answer-'+n),feedback=input.nextElementSibling;const status=!input.value.trim()?'empty':normalize(input.value)===normalize(task[1])?'correct':'wrong';lists[status].push(n);statuses.push({n,status});input.dataset.status=feedback.dataset.status=status;feedback.textContent={correct:'✓ Верно',wrong:'✗ Неверно',empty:'Не решено'}[status];}
        const total=selected.length-lists.manual.length;results.replaceChildren();const title=document.createElement('h3');title.textContent=total?'Результат: '+lists.correct.length+' из '+total+' заданий первой части':'Вторая часть — самостоятельная проверка';results.append(title);
        const grid=document.createElement('div');grid.className='diag-grid';const marks={correct:'✓',wrong:'✗',empty:'—',manual:'Р'};const names={correct:'Верно',wrong:'Неверно',empty:'Не решено',manual:'Ручная проверка'};for(const {n,status} of statuses){const cell=document.createElement('div');cell.className='diag-cell';cell.dataset.status=status;cell.title='№ '+n+': '+names[status];cell.textContent=n+' '+marks[status];grid.append(cell);}results.append(grid);
        for(const [key,label] of Object.entries(names)){if(key==='manual'&&!lists.manual.length||key!=='manual'&&!total)continue;const p=document.createElement('p');p.textContent=label+': '+(lists[key].join(', ')||'—');results.append(p);}
        const missed=statuses.filter(x=>x.status==='wrong'||x.status==='empty');if(missed.length){const h=document.createElement('h3');h.textContent='Рекомендуем повторить';h.style.marginTop='16px';results.append(h);const ul=document.createElement('ul');ul.className='diag-topics';for(const {n,status} of missed){const li=document.createElement('li');li.textContent='№ '+n+' — '+topics[n]+(status==='empty'?' (нет ответа)':' (ошибка)');ul.append(li);}results.append(ul);}else if(total){const p=document.createElement('p');p.textContent='Все проверяемые задания решены верно!';results.append(p);}
        if(lists.manual.length){const note=document.createElement('p');note.textContent='Вторая часть проверяется по полному решению. Автоматическая оценка не выставляется.';results.append(note);}results.hidden=false;results.scrollIntoView({behavior:'smooth',block:'nearest'});}
    async function printKeys(){if(examActive||generating||!selected.length)return;const wasHidden=answers.hidden;try{clearTypeset(answersList);drawAnswers();answers.hidden=false;await typeset(answersList);if(!window.MathJax?.typesetPromise||answersList.querySelector('mjx-merror')){showError('Дождитесь загрузки формул перед печатью ответов.');return;}document.body.classList.add('print-keys');window.print();}finally{document.body.classList.remove('print-keys');if(wasHidden){hideAnswers();}}}
    async function copyKeys(){if(examActive||generating||!selected.length)return;const text=selected.map(({group,task})=>{const d=document.createElement('div');d.innerHTML=mathHTML(task[1]);return group.number+'. '+d.textContent;}).join('\n');try{await navigator.clipboard.writeText(text);el('variantStatus').textContent='Ответы скопированы.';}catch(e){const d=document.createElement('textarea');d.value=text;d.readOnly=true;d.style.cssText='width:100%;min-height:100px';results.replaceChildren(d);results.hidden=false;d.select();try{document.execCommand('copy');}catch(e){}el('variantStatus').textContent='Ответы готовы для копирования.';}}
    async function printVariant(){if(generating||!selected.length||examActive)return;document.body.classList.remove('print-keys');for(const b of printButtons)b.disabled=true;try{if(window.MathJax?.startup?.promise)await window.MathJax.startup.promise;await Promise.all(Array.from(tasksEl.querySelectorAll('img'),img=>img.decode?.().catch(()=>{})||Promise.resolve()));if(document.fonts?.ready)await document.fonts.ready;if(!window.MathJax?.typesetPromise){showError('Не удалось загрузить математические формулы. Обновите страницу перед сохранением PDF.');return;}if(tasksEl.querySelector('mjx-merror')||Array.from(tasksEl.querySelectorAll('mjx-container')).length===0&&/\$|\\\(/.test(tasksEl.textContent)){showError('Проверьте загрузку математических формул перед печатью.');return;}clearError();window.print();}catch(e){showError('Не удалось подготовить PDF. Попробуйте обновить страницу.');}finally{for(const b of printButtons)b.disabled=false;}}
    async function generate(forceFull=false){if(generating||examActive)return;examFinished=false;el('examTimer').hidden=true;if(!validBank()){showError('Не удалось загрузить бесплатный банк заданий. Обновите страницу.');return;}
        generating=true;generateButton.disabled=anotherButton.disabled=true;for(const b of answerButtons)b.disabled=true;
        clearError();hideAnswers();results.hidden=true;results.replaceChildren();
        try{
            selected=bank.groups.filter(g=>forceFull===true||mode()==='full'||(mode()==='first'?g.part===1:g.part===2)).map(group=>{const n=group.tasks.length,prev=last.get(group.number);let i=n>1&&Number.isInteger(prev)?(prev+1+Math.floor(Math.random()*(n-1)))%n:Math.floor(Math.random()*n);last.set(group.number,i);return {group,task:group.tasks[i]};});
            el('variantTitle').textContent='Вариант';clearTypeset(tasksEl);drawTasks(selected);paper.hidden=false;el('topAnswers').hidden=false;el('topPrint').hidden=false;
            generateButton.textContent='Сгенерировать новый вариант';el('variantStatus').textContent='Готово: '+selected.length+' заданий.';for(const b of keyButtons)b.hidden=false;checkButton.textContent=selected.some(x=>x.group.part===1)?'Проверить ответы':'Результаты и ручная проверка';
            await typeset(tasksEl);paper.scrollIntoView({behavior:'smooth',block:'start'});
        }catch(e){console.error(e);selected=[];paper.hidden=true;for(const b of keyButtons)b.hidden=true;el('topAnswers').hidden=true;el('topPrint').hidden=true;showError('Не удалось сформировать вариант. Попробуйте ещё раз.');}
        finally{generating=false;generateButton.disabled=anotherButton.disabled=false;for(const b of answerButtons)b.disabled=false;}
    }
    generateButton.addEventListener('click',generate);anotherButton.addEventListener('click',generate);for(const b of answerButtons)b.addEventListener('click',toggleAnswers);
    checkButton.addEventListener('click',()=>{if(examActive){if(confirm('Завершить экзамен и проверить ответы?'))stopExam();}else check();});examBtn.addEventListener('click',beginExam);el('printKeys').addEventListener('click',printKeys);el('copyKeys').addEventListener('click',copyKeys);for(const b of printButtons)b.addEventListener('click',printVariant);
    if(!validBank()){generateButton.disabled=true;showError('Бесплатный банк не загрузился. Обновите страницу.');}
})();
