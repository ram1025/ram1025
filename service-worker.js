const CACHE_NAME = 'ram1025-v24-20251004';
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
  BASE_PATH + 'Datacentre-dpr.pdf',

  // ABST BRAIN - 5 MAIN JSON FILES ONLY
  BASE_PATH + '36-pillars-108.json',
  BASE_PATH + 'Education-school-280.json',
  BASE_PATH + 'Education-college-250.json',
  BASE_PATH + 'Education-competitive-340.json',
  BASE_PATH + 'Education-others-130.json'
];

// Install - Individual file caching with error tracking
self.addEventListener('install', event => {
  console.log('[SW] Installing v24...');
  event.waitUntil(
    caches.open(CACHE_NAME)
     .then(cache => {
        console.log('[SW] Pre-caching', urlsToCache.length, 'files...');
        // addAll vaddu - okati fail aite anni fail avtay
        return Promise.all(
          urlsToCache.map(url => {
            return cache.add(url).then(() => {
              console.log('[SW] ✅ Cached:', url.split('/').pop());
            }).catch(err => {
              console.error('[SW] ❌ FAILED to cache:', url, err.message);
              // Fail aite skip chey, migatha continue avvali
              return Promise.resolve();
            });
          })
        );
      })
     .then(() => {
        console.log('[SW] All files processed - skipping wait');
        return self.skipWaiting();
      })
  );
});

// Activate - Old caches delete chey
self.addEventListener('activate', event => {
  console.log('[SW] Activating v24...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k!== CACHE_NAME).map(k => {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
      )
    ).then(() => {
      console.log('[SW] Claiming all clients');
      return self.clients.claim();
    })
  );
});

// Fetch - Cache First Strategy with Detailed Logging
self.addEventListener('fetch', event => {
  if (event.request.method!== 'GET') return;

  const url = event.request.url;
  const filename = url.split('/').pop().split('?')[0];

  event.respondWith(
    caches.match(event.request)
     .then(cached => {
        if (cached) {
          console.log('[SW] ✅ Cache HIT:', filename);
          return cached;
        }

        console.log('[SW] ❌ Cache MISS:', filename);
        return fetch(event.request).then(res => {
          // Success response matrame cache chey
          if (res.status === 200) {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, res.clone());
              console.log('[SW] Cached new:', filename);
              return res;
            });
          }
          return res;
        }).catch(() => {
          // Offline fallbacks
          if (url.includes('.json')) {
            console.log('[SW] JSON fallback: empty array');
            return new Response('[]', {
              headers: {'Content-Type': 'application/json'}
            });
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
});
