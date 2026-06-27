const CACHE_NAME = 'ram1025-v21-20251004';
const BASE_PATH = '/ram1025/';

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'ABST-BRAIN.html',
  BASE_PATH + 'dpr.html',
  BASE_PATH + 'constitution.html',
  BASE_PATH + 'Jarvis-Ai.html',
  BASE_PATH + 'dpr-complete.html',
  BASE_PATH + '36-Pillars-Book.html',
  BASE_PATH + 'ABST-GAME.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'style.css',
  
  // ICONS & IMAGES
  BASE_PATH + 'icon-192.png',
  BASE_PATH + 'icon-512.png',
  BASE_PATH + 'apple-touch-icon.png',
  BASE_PATH + 'miniature-model.jpg',
  BASE_PATH + 'day-mode.jpg',
  BASE_PATH + 'night-mode.jpg',
  
  // PDF FILES
  BASE_PATH + 'MyJeevandhara_Investor_Note.pdf',
  BASE_PATH + 'Project_MJ_Detailed_Blueprint.pdf',
  
  // ABST BRAIN - 5 MAIN JSON FILES ONLY
  BASE_PATH + '36-pillars-108.json',
  BASE_PATH + 'Education-school-280.json',
  BASE_PATH + 'Education-college-250.json',
  BASE_PATH + 'Education-competitive-340.json',
  BASE_PATH + 'Education-others-130.json'
];

// Install
self.addEventListener('install', event => {
  console.log('[SW] Installing v21...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Pre-caching 5 main JSON files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] All files cached');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('[SW] Cache failed:', err);
        console.error('[SW] Missing:', err.message);
      })
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch - Cache First
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  const url = event.request.url;
  
  if (url.includes('.html') || 
      url.includes('.pdf') || 
      url.includes('.json') ||
      url.includes('.png') ||
      url.includes('.jpg')) {
    
    event.respondWith(
      caches.match(event.request)
        .then(cached => {
          if (cached) {
            console.log('[SW] Cache hit:', url);
            return cached;
          }
          return fetch(event.request).then(res => {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, res.clone());
              return res;
            });
          }).catch(() => {
            if (url.includes('.json')) {
              return new Response('[]', {headers: {'Content-Type': 'application/json'}});
            }
            if (url.includes('.pdf')) {
              return new Response('PDF Not Available Offline', {status: 404});
            }
            if (url.includes('.html')) {
              return caches.match(BASE_PATH + 'index.html');
            }
            return new Response('Offline', {status: 404});
          });
        })
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
