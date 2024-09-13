importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"c60dbfafd47b19bc60f3b85a871c2d96","url":"app.webmanifest"},{"revision":"24b35ab90af8be73546abbce2acea628","url":"assets/index-D4t_kBus.js"},{"revision":"1f6768ff4e13aacb8f7b874256cff3a2","url":"assets/index-Ds-wrE2x.css"},{"revision":"f14f6c6f7a276c21da23194865ab4993","url":"assets/index-DxMWzv1t.js"},{"revision":"a0c74f0989823ed3c7667638372dd3aa","url":"assets/index-yHTGK8XM.js"},{"revision":"79c823c2e07770fee7eac8f0ce1cadda","url":"assets/Workbox-CBq1dIaw.js"},{"revision":"4d554d11728ddbacaf6096583fc2b396","url":"CNAME"},{"revision":"a566d457581b4819b790a118d09babff","url":"icon.avif"},{"revision":"1bff0761176111b5fea5219c6e06c076","url":"icon.svg"},{"revision":"6e4049b0834e519c7bd380e254532280","url":"index.html"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
