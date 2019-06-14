self.addEventListener('install', event => {
  console.log('install', event)
  caches.open('pwa-demo').then(cache => {
    cache.addAll([
      './',
      './index.html',
      './index.js'
    ])
  });
})

self.addEventListener('fetch', event => {
  const req = event.request;
  const p = cacheFirst(req)
    .then(cachedResponse => {
      console.log('cachedResponse', cachedResponse)
      return cachedResponse
    });
    event.respondWith(p);
})

function cacheFirst(req) {
  return caches.open('pwa-demo')
      .then(cache => {
        return cache.match(req)

      })

}