const CACHE_NAME = 'ram1025-v15-20251004'; // v14 → v15
const BASE_PATH = '/ram1025/';

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'ABST-BRAIN.html',
  BASE_PATH + 'dpr.html',
  BASE_PATH + 'constitution.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'icon-192.png',
  BASE_PATH + 'icon-512.png',
  BASE_PATH + 'apple-touch-icon.png',
  BASE_PATH + 'style.css',
  BASE_PATH + 'MyJeevandhara_Investor_Note.pdf',
  BASE_PATH + 'Project_MJ_Detailed_Blueprint.pdf'
];

// Install - pre-cache anni files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Pre-caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate - old cache delete
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch - Cache First, then Network
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  // HTML, PDF, Images ki Cache First
  if (event.request.url.includes('.html') || 
      event.request.url.includes('.pdf') || 
      event.request.url.includes('.png') ||
      event.request.url.includes('.jpg')) {
    
    event.respondWith(
      caches.match(event.request)
        .then(cached => {
          if (cached) {
            console.log('[SW] Serving from cache:', event.request.url);
            return cached;
          }
          // Cache lo lekapothe network nundi techuko + cache chey
          return fetch(event.request).then(res => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, res.clone());
              return res;
            });
          });
        })
    );
  } else {
    // CSS, JS ki Network First
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
