importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"4e42435483e4f2c5b06d2f27fcad02bf","url":"app.webmanifest"},{"revision":"88fa8d0efeed43e270a60d3965ad4da4","url":"assets/index-Ba14apgj.js"},{"revision":"c06348aa95d6dadae3a0b738716bfaf1","url":"assets/index-BWinPSlY.js"},{"revision":"50a14162cc6152c22b0593af20147496","url":"assets/index-CdiUQ8yc.css"},{"revision":"c81d05f28bc5d54cf189bce5beb8159d","url":"assets/index-DIUuZzRd.js"},{"revision":"79c823c2e07770fee7eac8f0ce1cadda","url":"assets/Workbox-CBq1dIaw.js"},{"revision":"10b859c9e9b3fa0fda3766ff1eb682b4","url":"denper.apk"},{"revision":"294fd1e6b9645109da1e727f1db8de64","url":"icon.png"},{"revision":"4a6199b7037d6c8b51ce550b26a48727","url":"icon.svg"},{"revision":"a466859800a005713ab39de3cddba27e","url":"index.html"},{"revision":"3fe14eb834e4263cf516902a36f53cf3","url":"maskable.svg"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
