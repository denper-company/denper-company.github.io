importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"92ce34652e451edca30c9cf30e1569de","url":"app.webmanifest"},{"revision":"d515f04b947a3a4e6690593904861e0d","url":"assets/index-BB7kTS5e.js"},{"revision":"fac8709c13d3fa1107e4c76060c12c1a","url":"assets/index-CZWkRmAs.js"},{"revision":"3bca776ccefd3b2427b924da548a031f","url":"assets/index-Dl5gnnQj.js"},{"revision":"1f6768ff4e13aacb8f7b874256cff3a2","url":"assets/index-Ds-wrE2x.css"},{"revision":"79c823c2e07770fee7eac8f0ce1cadda","url":"assets/Workbox-CBq1dIaw.js"},{"revision":"2e6577a16a94f040989e12cdd34f71f3","url":"DENPER.apk"},{"revision":"4a6199b7037d6c8b51ce550b26a48727","url":"icon.svg"},{"revision":"337dd1ae6ac309bf2a456db395678220","url":"index.html"},{"revision":"66b78d730ec9994973ffe16b7bcd0bc9","url":"maskable.svg"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
