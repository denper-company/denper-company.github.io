importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js",
);
const {
  recipes: { pageCache, staticResourceCache, imageCache },
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
