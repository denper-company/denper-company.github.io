importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"10606d458ca40ce3294d71425a2869f2","url":"app.webmanifest"},{"revision":"41f904efd1f4c3b223b3d5585e69f761","url":"assets/index-BBigEn5C.css"},{"revision":"e767a4942c72d04efe858b12ca714d27","url":"assets/index-CWxMI9lV.js"},{"revision":"613ba6ad31c19dbd04c19d852ba2555a","url":"assets/index-DdYlNaic.js"},{"revision":"3410838f3fcb11dcb86e9e6d8505022b","url":"assets/index-DONANeuf.js"},{"revision":"79c823c2e07770fee7eac8f0ce1cadda","url":"assets/Workbox-CBq1dIaw.js"},{"revision":"e77247e4a939c871dcfa57e5576ff508","url":"DENPER.apk"},{"revision":"294fd1e6b9645109da1e727f1db8de64","url":"icon.png"},{"revision":"4a6199b7037d6c8b51ce550b26a48727","url":"icon.svg"},{"revision":"9627496e870b7e612debdc21a8ffed4a","url":"index.html"},{"revision":"66b78d730ec9994973ffe16b7bcd0bc9","url":"maskable.svg"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
