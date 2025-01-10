importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js",
);
const {
  recipes: { pageCache, staticResourceCache, imageCache },
  routing: { registerRoute },
  strategies: { CacheFirst },
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
const cacheName = "fonts";
const matchCallback = ({ request }) => request.destination === "font";
const maxAgeSeconds = 30 * 24 * 60 * 60;
const maxEntries = 60;
registerRoute(
  matchCallback,
  new CacheFirst({
    cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries,
        maxAgeSeconds,
      }),
    ],
  }),
);
