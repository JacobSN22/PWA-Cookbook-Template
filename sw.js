const staticCacheName = 'site-static'

const dynamicCacheName = 'site-dynamic-v1'

const assets = [
   '/',
   ':/index.html',
   ':/js/app.js',
   ':/js/ui.js',
   ':/js/materialize.min.js',
   ':/css/style.css',
   ':/css/materialize.min.css',
   ':/img/dish.png',
]

self.addEventListener("install", event => {
   event.waitUntil(
      caches.open(staticCacheName).then(cache => {
         cache.addAll(assets)
      })
   )
});
 
self.addEventListener("activate", event => {
   event.waitUntil(
      caches.keys().then(keys => {
         return Promise.all(keys.filter(key => key !== staticCacheName).map(key => caches.delete(key)))
      })
   )
});

self.addEventListener('fetch', event => {

   if(!(event.request.url.indexOf('http') === 0)) return;

   event.respondWith(
      caches.match(event.request).then(cache => {

         return cache || fetch(event.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
               cache.put(event.request.url, fetchRes.clone())
               return fetchRes
            })
         })
      })
   )
});