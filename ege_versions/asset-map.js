// Loaded only in a preserved student version. The map addresses immutable files.
(function(){
  const root = new URL(window.__EGE_RELEASE.root);
  const here = new URL('./',location.href);
  const files = window.__EGE_ARCHIVE_FILES;
  function map(value){
    if (!value || /^(?:data:|blob:|#|javascript:|mailto:|tel:)/i.test(value.trim())) return value;
    let u; try {u = new URL(value,root);} catch(e){return value;}
    if (u.origin !== root.origin) return value;
    let path;
    if (u.pathname.startsWith(here.pathname)) path = u.pathname.slice(here.pathname.length);
    else if (u.pathname.startsWith(root.pathname)) path = u.pathname.slice(root.pathname.length);
    else return value;
    try {path=decodeURIComponent(path);} catch(e){return value;}
    if (!Object.prototype.hasOwnProperty.call(files,path)) return value;
    const mapped=new URL(files[path],root); mapped.hash=u.hash; return mapped.href;
  }
  function css(s){return s.replace(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*?))\s*\)/gi,(whole,a,b,c)=>{
    const val=a??b??c; const next=map(val); return next===val?whole:'url("'+next.replace(/"/g,'%22')+'")';
  });}
  window.__EGE_REWRITE_STUDENT = function(html){
    const doc=new DOMParser().parseFromString(html,'text/html');
    const base=doc.querySelector('base');if(base)base.href=root.href;
    for(const node of doc.querySelectorAll('[src],[href],[xlink\\:href],[poster],[style],[srcset]')){
      for(const name of ['src','href','xlink:href','poster']) if(node.hasAttribute(name)&&node.tagName!=='BASE') node.setAttribute(name,map(node.getAttribute(name)));
      if(node.hasAttribute('style'))node.setAttribute('style',css(node.getAttribute('style')));
      const srcset=node.getAttribute('srcset');
      if(srcset&&!/data:/i.test(srcset)) node.setAttribute('srcset',srcset.split(',').map(part=>part.replace(/^(\s*)(\S+)/,(whole,space,url)=>space+map(url))).join(','));
    }
    for(const node of doc.querySelectorAll('style'))node.textContent=css(node.textContent);
    return '<!DOCTYPE html>\n'+doc.documentElement.outerHTML;
  };
})();
