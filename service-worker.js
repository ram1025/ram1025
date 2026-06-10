const CACHE_NAME = 'ram1025-v10-20251004'; // v9 → v10 ki marchu - constitution.html 'a' fix kosam
const BASE_PATH = '/ram1025/';

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'dpr.html',
  BASE_PATH + 'constitution.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'icon-192.png',
  BASE_PATH + 'icon-512.png',
  BASE_PATH + 'apple-touch-icon.png',
  BASE_PATH + 'style.css'
];

// Install - new cache create chey
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting(); // ventane activate
});

// Activate - old cache v9, v8 anni delete
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim(); // open tabs control lo teesukuntundi
});

// Fetch - network first, cache fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request).then(res => {
      // Network nunchi kotta file vasthe cache update chey
      const resClone = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
      return res;
    }).catch(() => {
      return caches.match(event.request).then(cached => {
        return cached || caches.match(BASE_PATH + 'index.html');
      });
    })
  );
});
