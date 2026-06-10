const CACHE_NAME = 'abst-v3-20251004'; // <- change this version number every time you update code
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/LICENSE'
];

// Install: cache new files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting(); // activate immediately
});

// Activate: delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null))
    )
  );
  self.clients.claim(); // take control of open tabs
});

// Fetch: network first, then cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
