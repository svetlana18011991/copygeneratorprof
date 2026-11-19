// Tests the URL codec, task identity verification and student restoration
// without external servers. Run: node tests/link-trial.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const code = fs.readFileSync(path.join(__dirname, '..', 'link_trial.js'), 'utf8');

const bank = {
  task1: {prototypes: [{svg_code:'', tasks:[{id:'a',text:'Первая задача',answer:'4',svg_code:'<svg/>'},{id:'b',text:'Другая задача',answer:'8'}]}]},
  task2: {prototypes: [{svg_code:'', tasks:[{id:'c',text:'Вторая задача',answer:'9'}]}]},
};
bank['1']=bank.task1; bank['2']=bank.task2; bank['archive_task6']=bank.task1;
function setup(hash='', full=false) {
  const els = {};
  function getEl(id) {
    if (!els[id]) els[id]={
      value:'',checked:false,style:{},textContent:'',href:'',
      scrollIntoView(){},removeAttribute(attr){delete this[attr]}, focus(){},select(){}
    };
    return els[id];
  }
  const document = {
    getElementById:getEl,
    createElement(tag) {return {tag,style:{},append(){},textContent:''}},
    documentElement:{classList:{remove(){}}},
    body:{replaceChildren(){},style:{}},
    title:'generator'
  };
  const events = {};
  const loc = new URL('https://example.github.io/test-generator/index.html'+hash);
  const w = {
    location:loc,
    getPrototypeData: (tid,kind)=>bank[tid],
    getSelectedCustomBg:()=>'',
    currentGeneratedTasks:[],
    randomVariantMode:false,
    randomVariantNumber:null,
    getActiveExamTaskIds:()=>['task1','task2'],
    addEventListener:(name, fn)=>{events[name]=fn;},
    __EGE_LINK_STUDENT_VIEWER:false,
  };
  Object.assign(els,{
    'theme-select':{value:'winter'}, 'sticker-select':{value:'none'},'timer-input':{value:'45'},
    'teacher-gender':{value:'female'},'teacher-name':{value:'И.И. Иванова'},
    'ege-link-share-box':{style:{},scrollIntoView(){}},
    'ege-link-share-url':{value:'',style:{}},'ege-link-share-status':{style:{},textContent:''},
    'ege-link-open':{href:'',removeAttribute(){}},'custom-bg-url':{value:''},
    'toggle-signature':{checked:true},'toggle-show-correct':{checked:true},
    'toggle-explanations':{checked:true},'toggle-ordered-tasks':{checked:false},
    'toggle-instant-check':{checked:false},
  });
  const sandbox = {
    window:w,document,location:loc,URL,TextEncoder,TextDecoder,Uint8Array,
    btoa,atob,console, setTimeout:fn=>fn(), navigator:{clipboard:{writeText:async()=>{}}}
  };
  vm.runInNewContext(code,sandbox,{filename:'link_trial.js'});
  return {w, els,events,document,loc};
}

(async function(){
  const teacher=setup();
  teacher.w.currentGeneratedTasks=[
    {taskTid:'task1',taskKind:'main',protoIndex:0,sourceTaskIndex:0},
    {taskTid:'task2',taskKind:'main',protoIndex:0,sourceTaskIndex:0}
  ];
  teacher.w.egeShowStudentLink();
  const link=teacher.els['ege-link-share-url'].value;
  assert.match(link,/^https:\/\/example.github.io\/test-generator\/index.html#student=/);
  assert(link.length<1500,'two tasks should yield a compact link');
  assert.match(teacher.els['ege-link-share-status'].textContent,/2 заданий/);
  console.log('PASS: creates a compact link for a manual variant');

  const student=setup(new URL(link).hash);
  let generated=[];
  student.w.generateVariant = ({manualPlan})=>{
    generated=manualPlan;
    student.w.currentGeneratedTasks=manualPlan.map(p=>({
      taskTid:p.tid,taskKind:p.kind,protoIndex:p.protoIndex,sourceTaskIndex:p.taskIndex
    }));
  };
  student.w.downloadStudentHTML = async()=>{
    assert(student.w.__EGE_LINK_STUDENT_VIEWER);
    student.w.__EGE_LINK_STUDENT_VIEWER_RENDERED=true;
    student.document.getElementById('res-box').id='res-box';
    student.document.getElementById('btn-check').id='btn-check';
  };
  assert(student.events.load,'student mode registers a load handler');
  await student.events.load();
  // callback executes after setTimeout; wait for async restoration
  await new Promise(setImmediate);
  assert.equal(generated.length,2);
  assert.equal(generated[0].taskKey,'a');
  assert.equal(student.els['teacher-name'].value,'И.И. Иванова');
  assert.equal(student.els['toggle-show-correct'].checked,true);
  console.log('PASS: restores precisely the selected tasks and settings');

  const changed=setup(new URL(link).hash);
  const old=bank.task1.prototypes[0].tasks[0].answer;
  bank.task1.prototypes[0].tasks[0].answer='9999';
  changed.w.generateVariant=()=>{throw new Error('should not generate changed work');};
  changed.w.downloadStudentHTML=async()=>{};
  await changed.events.load();
  await new Promise(setImmediate);
  assert.equal(changed.document.title,'Ошибка открытия варианта');
  bank.task1.prototypes[0].tasks[0].answer=old;
  console.log('PASS: refuses to silently replace a task when the bank changes');

  const random=setup();
  random.w.currentGeneratedTasks=teacher.w.currentGeneratedTasks;
  random.w.randomVariantMode=true;
  random.w.randomVariantNumber=1234;
  random.w.egeShowStudentLink();
  const randomLink=random.els['ege-link-share-url'].value;
  const studentRandom=setup(new URL(randomLink).hash);
  let randomCalls=0;
  studentRandom.w.generateVariant=({useRandomPicks})=>{
    assert.equal(useRandomPicks,true);
    randomCalls++;
    studentRandom.w.currentGeneratedTasks=Object.keys(studentRandom.w.randomVariantPicks).map(tid=>({
      taskTid:tid,taskKind:'main',protoIndex:0,sourceTaskIndex:tid==='task1'?0:0
    }));
  };
  studentRandom.w.downloadStudentHTML=async()=>{studentRandom.w.__EGE_LINK_STUDENT_VIEWER_RENDERED=true;};
  await studentRandom.events.load();
  await new Promise(setImmediate);
  assert.equal(studentRandom.w.randomVariantNumber,1234);
  assert.equal(randomCalls,1);
  console.log('PASS: restores the random full-variant number and exact task picks');

  const mixed=setup();
  mixed.w.currentGeneratedTasks=Array.from({length:15},(_,i)=>({taskTid:['1','2','archive_task6'][i%3],taskKind:i%2?'extra':'main',protoIndex:0,sourceTaskIndex:0}));
  mixed.w.egeShowStudentLink();
  const mixedStudent=setup(new URL(mixed.els['ege-link-share-url'].value).hash);
  let mixedPlan;
  mixedStudent.w.generateVariant=({manualPlan})=>{mixedPlan=manualPlan;mixedStudent.w.currentGeneratedTasks=manualPlan.map(p=>({taskTid:p.tid,taskKind:p.kind,protoIndex:p.protoIndex,sourceTaskIndex:p.taskIndex}));};
  mixedStudent.w.downloadStudentHTML=async()=>{mixedStudent.w.__EGE_LINK_STUDENT_VIEWER_RENDERED=true;};
  await mixedStudent.events.load(); await new Promise(setImmediate);
  assert.equal(mixedPlan.length,15); assert.equal(mixedPlan[0].tid,'1'); assert.equal(mixedPlan[2].tid,'archive_task6');
  assert.equal(mixedStudent.w.__EGE_LINK_STUDENT_VIEWER_RENDERED,true);
  console.log('PASS: 15 manual tasks with numeric, archive and extra bank identifiers');
  const compact=mixed.els['ege-link-share-url'].value;
  assert.match(compact, /#student=2\./);
  // Old JSON links must continue to work after the update.
  const hashText = value => {let h=2166136261;for(let i=0;i<value.length;i++){h^=value.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}return h.toString(36);};
  const legacyPayload={v:1,r:0,n:0,c:[0,1,1,0],o:['winter','none',45,1,'female','И.И. Иванова',''],q:mixed.w.currentGeneratedTasks.map(e=>{let t=bank[e.taskTid].prototypes[0].tasks[0];return [e.taskTid,e.taskKind==='extra'?1:0,0,0,hashText(JSON.stringify([t.id,t.text,t.answer,t.svg_code||'',t.imageHTML||'','']))];})};
  const oldToken=Buffer.from(JSON.stringify(legacyPayload)).toString('base64url');
  const legacy=setup('#student='+oldToken);
  legacy.w.generateVariant=({manualPlan})=>{legacy.w.currentGeneratedTasks=manualPlan.map(p=>({taskTid:p.tid,taskKind:p.kind,protoIndex:p.protoIndex,sourceTaskIndex:p.taskIndex}));};
  legacy.w.downloadStudentHTML=async()=>{legacy.w.__EGE_LINK_STUDENT_VIEWER_RENDERED=true;};
  await legacy.events.load();await new Promise(setImmediate);
  assert.equal(legacy.w.__EGE_LINK_STUDENT_VIEWER_RENDERED,true);
  const oldLink=new URL(legacy.loc.href);const newLink=new URL(compact);
  assert(newLink.hash.length<oldLink.hash.length/2);
  console.log(`PASS: 15-task URL length ${oldLink.href.length} -> ${newLink.href.length}; old URLs still work`);
  // Regression: never let the punctuation protection span intervening prose.
  const core=fs.readFileSync(path.join(__dirname,'..','app_core.js'),'utf8');
  const regexLine=core.match(/const mathWithPunctuation = (.*);/)[1];
  const re=vm.runInNewContext(regexLine);
  const car=String.raw`Автомобиль, масса которого равна \(m=1500\) кг, начинает двигаться с ускорением, которое в течение \(t\) секунд остаётся неизменным, и проходит за это время путь \(S=400\) м. Значение силы \(F\) (в ньютонах), приложенной к автомобилю, равно \(F=\dfrac{2mS}{t^2}\). Определите наибольшее время.`;
  const matches=Array.from(car.matchAll(re),m=>m[0]);
  assert.equal(matches.length,1);assert.equal(matches[0],String.raw`\(F=\dfrac{2mS}{t^2}\).`);
  console.log('PASS: exact car-task punctuation regression');
  console.log('All link-trial tests passed.');
})().catch(err=>{console.error(err);process.exitCode=1;});
