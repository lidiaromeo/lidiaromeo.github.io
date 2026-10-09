const CACHE_NAME = 'pwa-cache-v1';
const assetsToCache = [
  './',
  './index.html',
  './style.css', // se hai un file css separato
  './app.js'   // se hai uno script js separato
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
