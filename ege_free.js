(function(){
    'use strict';
    const el = id => document.getElementById(id);
    const bank = window.EGE_FREE_BANK;
    const generateButton=el('generateFree'),anotherButton=el('generateAnother');
    const answerButtons=[el('topAnswers'),el('bottomAnswers')];
    const paper=el('freePaper'),tasksEl=el('freeTasks'),answers=el('freeAnswers'),answersList=el('answerList');
    const last=new Map();
    let selected=[],nextNumber=0,generating=false;
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
            if(task[2]>=0){const diagram=document.createElement('div');diagram.className='task-diagram';diagram.innerHTML=bank.diagrams[task[2]];content.append(diagram);}
            if(group.part===1){const line=document.createElement('div');line.className='answer-line';line.textContent='Ответ: ____________________';content.append(line);}
            row.append(num,content);article.append(row);frag.append(article);
        }
        tasksEl.replaceChildren(frag);
    }
    function drawAnswers(){const frag=document.createDocumentFragment();for(const {group,task} of selected){
        const row=document.createElement('div');row.className='answer-row';row.dataset.number=group.number;
        const num=document.createElement('div');num.className='answer-num';num.textContent=group.number+'.';
        const value=document.createElement('div');value.className='answer-value';value.innerHTML=mathHTML(task[1]);row.append(num,value);frag.append(row);
    }answersList.replaceChildren(frag);}
    function hideAnswers(){clearTypeset(answersList);answersList.replaceChildren();answers.hidden=true;for(const b of answerButtons){b.textContent='Показать ответы';b.setAttribute('aria-expanded','false');}}
    async function toggleAnswers(){if(!selected.length||generating)return;if(!answers.hidden){hideAnswers();return;}
        drawAnswers();answers.hidden=false;for(const b of answerButtons){b.textContent='Скрыть ответы';b.setAttribute('aria-expanded','true');}await typeset(answersList);answers.scrollIntoView({behavior:'smooth',block:'start'});}
    async function generate(){if(generating)return;if(!validBank()){showError('Не удалось загрузить бесплатный банк заданий. Обновите страницу.');return;}
        generating=true;generateButton.disabled=anotherButton.disabled=true;for(const b of answerButtons)b.disabled=true;
        clearError();hideAnswers();
        try{
            selected=bank.groups.map(group=>{const n=group.tasks.length,prev=last.get(group.number);let i=n>1&&Number.isInteger(prev)?(prev+1+Math.floor(Math.random()*(n-1)))%n:Math.floor(Math.random()*n);last.set(group.number,i);return {group,task:group.tasks[i]};});
            nextNumber++;el('variantTitle').textContent='Вариант №'+nextNumber;clearTypeset(tasksEl);drawTasks(selected);paper.hidden=false;el('topAnswers').hidden=false;
            generateButton.textContent='Сгенерировать новый вариант';el('variantStatus').textContent='Готово: 19 заданий.';
            await typeset(tasksEl);paper.scrollIntoView({behavior:'smooth',block:'start'});
        }catch(e){console.error(e);selected=[];paper.hidden=true;el('topAnswers').hidden=true;showError('Не удалось сформировать вариант. Попробуйте ещё раз.');}
        finally{generating=false;generateButton.disabled=anotherButton.disabled=false;for(const b of answerButtons)b.disabled=false;}
    }
    generateButton.addEventListener('click',generate);anotherButton.addEventListener('click',generate);for(const b of answerButtons)b.addEventListener('click',toggleAnswers);
    if(!validBank()){generateButton.disabled=true;showError('Бесплатный банк не загрузился. Обновите страницу.');}
})();
