const CACHE = "bathroom-logger-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./sw.js"
];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (evt) => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((res) => res || fetch(evt.request))
  );
});