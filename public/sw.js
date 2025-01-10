importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js",
);
const {
  recipes: { pageCache, staticResourceCache, imageCache },
  routing: { registerRoute },
  strategies: { CacheFirst, StaleWhileRevalidate },
  cacheableResponse: { CacheableResponsePlugin },
  expiration: { ExpirationPlugin },
} = workbox;
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () =>
  self.clients
    .matchAll({
      type: "window",
    })
    .then((windowClients) =>
      windowClients.forEach((windowClient) =>
        windowClient.navigate(windowClient.url),
      ),
    ),
);
pageCache();
staticResourceCache();
imageCache();
registerRoute(
  ({ request }) => request.destination === "font",
  new CacheFirst({
    cacheName: "fonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);
registerRoute(
  ({ request }) => request.destination === "manifest",
  new StaleWhileRevalidate({
    cacheName: "manifests",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);
