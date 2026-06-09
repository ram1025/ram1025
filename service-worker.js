const CACHE_NAME = 'ram1025-v3';
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

// Install - files cache chey
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate - old cache delete
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch - cache first, network fallback, offline
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => {
        // Net lekapothe index.html ivvu
        if(event.request.destination === 'document') {
          return caches.match(BASE_PATH + 'index.html');
        }
      });
    })
  );
});
