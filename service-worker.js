const CACHE_NAME = 'ram1025-v31-20251006';
const BASE_PATH = '/ram1025/';

// NEE SCREENSHOTS LO UNNA FILES ANNI - LIVE FEED TAPPA
const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'ABST-BRAIN.html',
  BASE_PATH + 'ABST-GAME.html',
  BASE_PATH + 'constitution.html',
  BASE_PATH + 'chitra.html',
  BASE_PATH + 'dpr.html',
  BASE_PATH + 'dpr-complete.html',
  BASE_PATH + 'executive-summary.html',
  BASE_PATH + 'scan.html',
  BASE_PATH + 'Jarvis-Ai.html',
  BASE_PATH + '36-Pillars-Book.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'style.css',
  BASE_PATH + 'sm2.js',
  BASE_PATH + 'icon-192.png',
  BASE_PATH + 'icon-512.png',
  BASE_PATH + 'apple-touch-icon.png',
  BASE_PATH + 'qr-code.png',
  BASE_PATH + 'miniature-model.jpg',
  BASE_PATH + 'day-mode.jpg',
  BASE_PATH + 'night-mode.jpg',
  BASE_PATH + '36-pillars-108.json',
  BASE_PATH + 'Education-school-280.json',
  BASE_PATH + 'Education-college-250.json',
  BASE_PATH + 'Education-competitive-340.json',
  BASE_PATH + 'Education-others-130.json',
  BASE_PATH + 'LICENSE.md',
  BASE_PATH + 'README.md',
  BASE_PATH + 'MyJeevandhara_Investor_Note.pdf',
  BASE_PATH + 'Datacentre-dpr.pdf',
  BASE_PATH + 'Project_MJ_Detailed_Blueprint.pdf'
];

// Install - Cache all files
self.addEventListener('install', event => {
  console.log('[SW] Installing v31 - Caching', urlsToCache.length, 'files...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.all(
          urlsToCache.map(url => {
            return cache.add(url).then(() => {
              console.log('[SW] ✅', url.split('/').pop());
            }).catch(err => {
              console.error('[SW] ❌', url.split('/').pop(), '-', err.message);
            });
          })
        );
      })
      .then(() => {
        console.log('[SW] All done - Activating');
        return self.skipWaiting();
      })
  );
});

// Activate - Delete old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating v31...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch - Cache first + Live Feed fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  // LIVE FEED CLICK CHESTE - Coming Soon page
  if (url.pathname.includes('live-feed.html')) {
    event.respondWith(
      new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Live Feed</title>
          <style>
            body { font-family: Arial; text-align: center; padding: 50px; background: #1a1a1a; color: #fff; }
            h1 { color: #00d9ff; }
            a { color: #00d9ff; text-decoration: none; padding: 10px 20px; border: 2px solid #00d9ff; border-radius: 8px; display: inline-block; margin-top: 20px; }
          </style>
        </head>
        <body>
          <h1>🚀 Live Feed Coming Soon</h1>
          <p>This feature is under development</p>
          <a href="/ram1025/">← Back to Home</a>
        </body>
        </html>
      `, { headers: {'Content-Type': 'text/html'} })
    );
    return;
  }
  
  // Normal cache first
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(res => {
          if (res.status === 200) {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
          }
          return res;
        });
      })
      .catch(() => {
        if (event.request.destination === 'document') {
          return caches.match(BASE_PATH + 'index.html');
        }
        return new Response('Offline', {status: 404});
      })
  );
});
