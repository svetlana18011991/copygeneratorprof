(async function(){
  const msg = document.getElementById('message');
  const heading = document.getElementById('heading');
  const fail = (title,text) => {heading.textContent=title;msg.textContent=text;};
  const expired = () => fail('Срок действия ссылки истёк','Интерактивный вариант был доступен 21 день. Обратитесь к учителю за новой ссылкой.');
  const hash=location.hash;
  if (!hash.startsWith('#student=')) return fail('Нет варианта','Попросите учителя прислать ссылку.');
  const token=hash.slice(9);
  try {
    let version;
    const modern=/^3\.([0-9a-f]{12})\.([A-Za-z0-9_-]{1,14000})$/.exec(token);
    if (modern) {
      version=modern[1];
      const raw=atob(modern[2].replace(/-/g,'+').replace(/_/g,'/')+'='.repeat((4-modern[2].length%4)%4));
      let n=0,m=1,done=false;
      for(let i=2;i<7&&i<raw.length;i++){const b=raw.charCodeAt(i);n+=(b&127)*m;if(b<128){done=true;break;}m*=128;}
      if(!done||n>0xffffffff)throw Error('Повреждена дата ссылки.');
      const now=Math.floor(Date.now()/60000);
      if(n<=now)return expired();
      if(n>now+21*1440+5)throw Error('Проверьте дату и время на устройстве.');
    } else if (!/^(?:2\.)?[A-Za-z0-9_-]{20,14000}$/.test(token)) throw Error('Неверный формат ссылки.');
    const response=await fetch('ege-release.json',{cache:'no-store'});
    if(!response.ok)throw Error('Не удалось загрузить список версий. Повторите попытку.');
    const manifest=await response.json();
    if(!version){if(Date.now()/1000>=manifest.legacy_until)return expired();version=manifest.legacy;}
    if(!/^[0-9a-f]{12}$/.test(version)||!Object.prototype.hasOwnProperty.call(manifest.versions,version))throw Error('Версия банка недоступна. Попросите учителя прислать новую ссылку.');
    location.replace(new URL('ege-archive/'+version+'/index.html'+hash,location.href).href);
  } catch(e){fail('Не удалось открыть вариант',e.message||'Повторите попытку.');}
})();
