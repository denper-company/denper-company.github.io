importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"81210a2935679646fb54a931ca647edc","url":"app.webmanifest"},{"revision":"24b35ab90af8be73546abbce2acea628","url":"assets/index-D4t_kBus.js"},{"revision":"1f6768ff4e13aacb8f7b874256cff3a2","url":"assets/index-Ds-wrE2x.css"},{"revision":"f14f6c6f7a276c21da23194865ab4993","url":"assets/index-DxMWzv1t.js"},{"revision":"a0c74f0989823ed3c7667638372dd3aa","url":"assets/index-yHTGK8XM.js"},{"revision":"79c823c2e07770fee7eac8f0ce1cadda","url":"assets/Workbox-CBq1dIaw.js"},{"revision":"4d554d11728ddbacaf6096583fc2b396","url":"CNAME"},{"revision":"3e7586c002610fa16e1da0fa23f3073d","url":"icon.svg"},{"revision":"a607d8b4954d2943cd7f2dea5399f0fe","url":"index.html"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
