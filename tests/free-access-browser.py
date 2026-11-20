from playwright.sync_api import sync_playwright
from pathlib import Path
from bs4 import BeautifulSoup
root=Path(__file__).resolve().parent.parent
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage','--disable-gpu'],timeout=10000)
 page=b.new_page(viewport={'width':390,'height':844})
 # Real DOM and rendering, without navigation or external network requests.
 html=BeautifulSoup((root/'free.html').read_text(),'html.parser')
 for tag in html.find_all('script'):tag.decompose()
 page.set_content(str(html),wait_until='domcontentloaded',timeout=10000)
 page.add_script_tag(content=(root/'ege_free_bank.js').read_text())
 page.add_script_tag(content=(root/'ege_free.js').read_text())
 page.locator('#generateFree').evaluate('(b)=>b.click()')
 page.wait_for_function('document.querySelectorAll(".task").length===19')
 assert page.locator('#freePaper').is_visible()
 first=page.locator('.task-text').all_text_contents()
 assert len(first)==19
 widths=page.evaluate('[document.documentElement.scrollWidth,innerWidth]');print('mobile width',widths)
 assert widths[0]<=widths[1]+1
 page.locator('#topAnswers').evaluate('(b)=>b.click()');page.wait_for_function('document.querySelectorAll(".answer-row").length===19')
 assert page.locator('#freeAnswers').is_visible();print('PASS: 19 tasks and 19 answers')
 page.locator('#generateAnother').evaluate('(b)=>b.click()');page.wait_for_function('document.getElementById("variantTitle").textContent==="Вариант №2"')
 assert page.locator('#freeAnswers').is_hidden()
 second=page.locator('.task-text').all_text_contents();assert first!=second
 print('PASS: regeneration and answer reset')
 # Strip other scripts to test actual gate independently; browser storage is shimmed for opaque test origin.
 html=BeautifulSoup((root/'index.html').read_text(),'html.parser')
 gate=html.find(id='passwordGate');styles=html.find(id='password-gate-styles')
 gatejs=html.find(id='password-gate-script').string
 page.set_content('<!doctype html><html><head>'+str(styles)+'</head><body class="auth-locked">'+str(gate)+'<main id="paid">Paid generator</main></body></html>',wait_until='domcontentloaded')
 page.evaluate('''() => {const local=new Map(),session=new Map();const wrap=m=>({getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,String(v)),removeItem:k=>m.delete(k)});Object.defineProperty(window,'localStorage',{value:wrap(local),configurable:true});Object.defineProperty(window,'sessionStorage',{value:wrap(session),configurable:true});}''')
 page.add_script_tag(content=(root/'ege_access_config.js').read_text());page.add_script_tag(content=gatejs)
 assert page.locator('#egeChoicePanel').is_visible();assert page.locator('#paid').is_hidden();assert page.locator('#passwordGateForm').is_hidden()
 page.locator('#egeFullEntry').click();assert page.locator('#passwordGateForm').is_visible();assert page.locator('#egeChoicePanel').is_hidden()
 page.locator('#passwordGateInput').fill('invalid-password');page.locator('#passwordGateForm button[type=submit]').click();assert page.locator('#passwordGateError').is_visible()
 page.locator('#egeBackToChoice').click();assert page.locator('#egeChoicePanel').is_visible();print('PASS: start, full access, invalid password, back')
 page.set_content('<!doctype html><html><head>'+str(styles)+'</head><body class="auth-locked">'+str(gate)+'<main id="paid">Paid generator</main></body></html>',wait_until='domcontentloaded')
 page.evaluate('''() => {localStorage.setItem('generator_access_remember_exam26_eye_v1',JSON.stringify({hash:532287797,expires:Date.now()+86400000}));}''')
 page.add_script_tag(content=gatejs);assert page.locator('#passwordGate').count()==0;assert page.locator('#paid').is_visible();print('PASS: remembered full access bypasses start')
 b.close()
