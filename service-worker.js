const CACHE_NAME = `FindMyCar-V2${Date.now()}`;
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/orientation.js',
    '/setPosition.js',
    '/callPosition.js',
    '/deleteStoredPosition.js',
    '/buttonsDisplayer.js',
    '/copyright.js'
    // ajoute les fichiers que tu veux mettre en cache
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Activer le service worker et gérer l'ancien cache
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
