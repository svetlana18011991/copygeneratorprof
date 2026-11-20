'use strict';
const fs=require('node:fs'), vm=require('node:vm'),crypto=require('node:crypto'),path=require('node:path');
const [bankDir,outDir]=process.argv.slice(2);
if(!bankDir||!outDir)throw Error('Usage: node build-free.cjs BANK_DIRECTORY OUTPUT_DIRECTORY');
// Use exactly the same main-bank source order as the full generator.
const sources=['task1.js','task2.js','task3.js','task4.js','task5.js','task6.js','task7.js','task8.js','task9.js','task10.js','task11.js','task11_images_1.js','task11_images_2.js','task12.js','task13.js','task14.js','task15.js','task16.js','task17.js','task18.js','task19.js','task20.js','archive_task12.js','ege_exam_structure.js'];
const w={database:{}}; const ctx=vm.createContext({window:w,console});
for(const file of sources)vm.runInContext(fs.readFileSync(path.join(bankDir,file),'utf8'),ctx,{filename:file,timeout:10000});
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const rank=(namespace,arr)=>arr.map((item,i)=>({item,key:hash('free-bank-20261120:'+namespace+':'+i)})).sort((a,b)=>a.key.localeCompare(b.key)).map(x=>x.item);
const diagrams=[], diagramIndexes=new Map(), groups=[];let fullCount=0,freeCount=0;
for(const tid of w.egeExamStructure.activeTaskIds){
 const data=w.database[tid];if(!data||!data.prototypes)throw Error('Missing '+tid);
 const n=Number(tid.slice(4));
 const protos=data.prototypes.map((p,pi)=>({pi,tasks:rank(tid+':'+pi,p.tasks.map((t,ti)=>({t,ti,svg:t.svg_code||p.svg_code||''})).filter(x=>x.t&&typeof x.t.text==='string'&&x.t.text.trim()&&x.t.answer!=null))})).filter(x=>x.tasks.length);
 const full=protos.reduce((a,x)=>a+x.tasks.length,0);const target=Math.max(1,Math.ceil(full*.2));fullCount+=full;
 const pool=rank(tid,protos), selected=[];
 for(let i=0;selected.length<target;i++){let found=0;for(const p of pool){const entry=p.tasks[i];if(!entry)continue;found++;selected.push(entry);if(selected.length>=target)break;}if(!found)break;}
 if(!selected.length)throw Error('Empty free task '+tid);
 const tasks=selected.map(({t,svg})=>{
 let d=-1;if(svg){if(!diagramIndexes.has(svg)){diagramIndexes.set(svg,diagrams.length);diagrams.push(svg);}d=diagramIndexes.get(svg);}
 return [t.text,String(t.answer),d];
 });
 freeCount+=tasks.length;groups.push({number:n,part:Number(data.part||1),tasks});console.log(`${tid}: ${tasks.length}/${full}`);
}
if(groups.length!==19||groups.some((x,i)=>x.number!==i+1||x.part!==(i<12?1:2)))throw Error('Unexpected exam structure');
fs.mkdirSync(outDir,{recursive:true});fs.writeFileSync(path.join(outDir,'ege_free_bank.js'),'/* Separate FREE sample, selected deterministically from original main bank. */\nwindow.EGE_FREE_BANK = '+JSON.stringify({groups,diagrams})+';\n');
console.log({freeCount,fullCount,diagrams:diagrams.length,ratio:freeCount/fullCount});
