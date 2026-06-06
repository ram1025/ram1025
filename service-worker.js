self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('myjeevandhara-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './dpr.html',
        './constitution.html',
        './style.css',
        './manifest.json',
        './seal.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
