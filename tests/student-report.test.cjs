const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const core=fs.readFileSync(path.join(__dirname,'..','app_core.js'),'utf8');
const code=core.slice(core.indexOf('    function egeStudentReport(data)'),core.indexOf('    async function downloadStudentHTML()'));
let copied='',download='',href='',drawn=[];
function elem(tag){return {tag,children:[],style:{},value:'',appendChild(x){this.children.push(x);return x},querySelector(){return null},setAttribute(){},focus(){},select(){},addEventListener(k,fn){this.handler=fn},click(){download=this.download},remove(){},getContext(){return {fillRect(){},fillText(t){drawn.push(t)}}},toDataURL(){return 'data:image/png;base64,test'}}}
const host=elem('div'),body=elem('body');const loc={set href(v){href=v}};
const sandbox={document:{getElementById:()=>host,createElement:elem,body},navigator:{clipboard:{writeText:async s=>{copied=s}}},location:loc,Date,encodeURIComponent};
vm.runInNewContext(code,sandbox);
const rows=[{taskNum:'1',status:'correct',studentAnswer:'4',correctAnswer:'4'},{taskNum:'3',topic:'Задание 11. Графики функций',status:'wrong',studentAnswer:'private@example.org',correctAnswer:'8'},{taskNum:'5',status:'empty',studentAnswer:'',correctAnswer:'19'}];
const data={email:'teacher+test@example.org',title:'Тренировка',finished:Date.now(),seconds:125,correct:1,wrong:1,empty:1,manualTasks:['2','4'],showCorrect:true,rows};
function actions(){return host.children.at(-1).children.find(x=>x.tag==='div'&&x.children.some(b=>b.tag==='button')).children;}
(async()=>{
 sandbox.egeStudentReport(data);const panel=host.children[0];assert(!panel.children.some(x=>x.tag==='input'));
 await actions()[1].handler();assert.match(copied,/Шкатулка математических интерактивов/);assert.match(copied,/Верно: 1 из 3/);assert.match(copied,/Неверно: 3/);assert.match(copied,/Не решено: 5/);assert.match(copied,/Ручная проверка: 2, 4/);assert.match(copied,/№ 4 — ручная проверка/);assert.match(copied,/№ 3 — Задание 11. Графики функций/);assert.match(copied,/02:05/);assert(!copied.includes('private@example.org'));assert(!copied.includes('Ученик:'));assert(!copied.includes('верный ответ:'));
 await actions()[0].handler();assert.match(href,/^mailto:teacher%2Btest@example.org/);assert.match(decodeURIComponent(href),/Ручная проверка: 2, 4/);assert(!decodeURIComponent(href).includes('private@example.org'));
 actions()[2].handler();assert.equal(download,'Результат_работы.png');assert(drawn.includes('Шкатулка математических интерактивов'));assert(drawn.includes('№ 2  Р'));assert(drawn.includes('№ 3  −'));assert(drawn.includes('№ 5  ·'));assert(drawn.includes('№ 1  +'));assert(drawn.some(x=>x.includes('Графики функций')));
 console.log('PASS: no student name or raw answer, exact variant numbers, email, copy and canvas status labels');
 sandbox.egeStudentReport({...data,email:'',rows:[],correct:0,wrong:0,empty:0});assert.equal(actions().length,2);await actions()[0].handler();assert.match(copied,/Ручная проверка: 2, 4/);console.log('PASS: no email option and second-part-only variant');
 const longRows=Array.from({length:250},(_,i)=>({taskNum:String(i+1),status:'correct'}));sandbox.egeStudentReport({...data,rows:longRows,correct:250,wrong:0,empty:0,manualTasks:[]});href='';await actions()[0].handler();assert.equal(href,'');assert.match(copied,/№ 250 — верно/);console.log('PASS: oversized mail draft falls back to complete copied report');
 assert(core.includes('data-variant-number="${taskCounter}"'));assert(core.includes("manualTasks:secondPartTasks.map(task=>task.getAttribute('data-variant-number')).filter(Boolean)"));
})().catch(e=>{console.error(e);process.exitCode=1});
