const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const core=fs.readFileSync(path.join(__dirname,'..','app_core.js'),'utf8');
const code=core.slice(core.indexOf('    function egeStudentReport(data)'),core.indexOf('    async function downloadStudentHTML()'));
let copied='',download='',drawn=[],shared=null,shareError=null;
function elem(tag){return {tag,children:[],style:{},value:'',appendChild(x){this.children.push(x);return x},querySelector(){return null},setAttribute(){},focus(){},select(){},addEventListener(k,fn){this.handler=fn},click(){download=this.download},remove(){},getContext(){return {fillRect(){},fillText(t){drawn.push(t)}}},toDataURL(){return 'data:image/png;base64,test'}}}
const host=elem('div'),body=elem('body');
const navigator={clipboard:{writeText:async s=>{copied=s}},share:async payload=>{if(shareError) throw shareError;shared=payload}};
const sandbox={document:{getElementById:()=>host,createElement:elem,body},navigator,Date};
vm.runInNewContext(code,sandbox);
const rows=[{taskNum:'1',status:'correct',studentAnswer:'4',correctAnswer:'4'},{taskNum:'3',topic:'Задание 11. Графики функций',status:'wrong',studentAnswer:'private@example.org',correctAnswer:'8'},{taskNum:'5',status:'empty',studentAnswer:'',correctAnswer:'19'}];
const data={email:'teacher+test@example.org',title:'Тренировка',finished:Date.now(),seconds:125,correct:1,wrong:1,empty:1,manualTasks:['2','4'],showCorrect:true,rows};
function actions(){return host.children.at(-1).children.find(x=>x.tag==='div'&&x.children.some(b=>b.tag==='button')).children;}
function status(){return host.children.at(-1).children.find(x=>x.tag==='p'&&x.textContent.includes('отправ'))}
(async()=>{
 sandbox.egeStudentReport(data);
 const panel=host.children[0];assert(!panel.children.some(x=>x.tag==='input'));
 assert.deepEqual(actions().map(x=>x.textContent),['Поделиться результатами','Скопировать отчёт','Скачать карточку PNG']);
 await actions()[0].handler();
 assert.match(shared.text,/Шкатулка математических интерактивов/);assert.match(shared.text,/Верно: 1 из 3/);
 assert.match(shared.text,/Неверно: 3/);assert.match(shared.text,/Не решено: 5/);
 assert.match(shared.text,/Ручная проверка: 2, 4/);assert.match(shared.text,/№ 4 — ручная проверка/);
 assert.match(shared.text,/№ 3 — Задание 11. Графики функций/);assert.match(shared.text,/02:05/);
 assert(!shared.text.includes('private@example.org'));assert(!shared.text.includes('teacher+test@example.org'));
 assert(!shared.text.includes('Ученик:'));assert(!shared.text.includes('верный ответ:'));
 await actions()[1].handler();assert.equal(copied,shared.text);
 actions()[2].handler();assert.equal(download,'Результат_работы.png');
 assert(drawn.includes('Шкатулка математических интерактивов'));assert(drawn.includes('№ 2  Р'));
 assert(drawn.includes('№ 3  −'));assert(drawn.includes('№ 5  ·'));assert(drawn.includes('№ 1  +'));
 assert(drawn.some(x=>x.includes('Графики функций')));
 console.log('PASS: share, copy, PNG; exact task numbers, diagnosis, no names or emails');
 // OS share menu cancelled: no fallback copy is forced.
 shareError={name:'AbortError'};copied='';sandbox.egeStudentReport(data);
 await actions()[0].handler();assert.equal(copied,'');
 // Share API fails: automatically copy full report.
 shareError={name:'NotAllowedError'};await actions()[0].handler();assert.match(copied,/Верно: 1 из 3/);
 console.log('PASS: cancelled share and OS share failure with clipboard fallback');
 // No Web Share API (desktop): only copying and saving.
 delete navigator.share; sandbox.egeStudentReport({...data,rows:[],correct:0,wrong:0,empty:0});
 assert.deepEqual(actions().map(x=>x.textContent),['Скопировать отчёт','Скачать карточку PNG']);
 await actions()[0].handler();assert.match(copied,/Ручная проверка: 2, 4/);
 const longRows=Array.from({length:250},(_,i)=>({taskNum:String(i+1),status:'correct'}));
 sandbox.egeStudentReport({...data,rows:longRows,correct:250,wrong:0,empty:0,manualTasks:[]});
 await actions()[0].handler();assert.match(copied,/№ 250 — верно/);
 assert(!core.includes('EGE_REPORT_EMAIL')); assert(!core.includes('mailto:'));
 assert(core.includes('data-variant-number="${taskCounter}"'));
 console.log('PASS: desktop fallback, second part only, long report, no email integration');
})().catch(e=>{console.error(e);process.exitCode=1});
