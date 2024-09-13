importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"f5f06b1bcb11bbd15f35e0d58d2d75e0","url":"app.webmanifest"},{"revision":"d515f04b947a3a4e6690593904861e0d","url":"assets/index-BB7kTS5e.js"},{"revision":"fac8709c13d3fa1107e4c76060c12c1a","url":"assets/index-CZWkRmAs.js"},{"revision":"3bca776ccefd3b2427b924da548a031f","url":"assets/index-Dl5gnnQj.js"},{"revision":"1f6768ff4e13aacb8f7b874256cff3a2","url":"assets/index-Ds-wrE2x.css"},{"revision":"79c823c2e07770fee7eac8f0ce1cadda","url":"assets/Workbox-CBq1dIaw.js"},{"revision":"a97935d8e65f59502763692da4ca571c","url":"icon.png"},{"revision":"1bff0761176111b5fea5219c6e06c076","url":"icon.svg"},{"revision":"a103f77b516e0f67d72a22b89428c5e0","url":"index.html"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
