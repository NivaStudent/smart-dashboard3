const CACHE_NAME = "smart-dashboard-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/offline.html",
  "/manifest.json",
  "/src/main.js",
  "/src/styles/main.css"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).catch(() => {
      if (e.request.mode === "navigate") {
        return caches.match("/offline.html");
      }
    }))
  );
});