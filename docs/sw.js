const ON='st-1795892940528';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(ON).then(c=>Promise.all(['./','ilanlar.json','manifest.webmanifest','ikon-192.png'].map(u=>c.add(u).catch(()=>{})))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(L=>Promise.all(L.filter(k=>k!==ON).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(ON).then(c=>c.put(u.pathname.endsWith('ilanlar.json')?'ilanlar.json':e.request,k));return r}).catch(()=>caches.match(u.pathname.endsWith('ilanlar.json')?'ilanlar.json':e.request).then(r=>r||caches.match('./'))))});
