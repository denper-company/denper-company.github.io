importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);

const {
  core: { clientsClaim },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;

clientsClaim();

self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

pageCache();
staticResourceCache();
imageCache();
