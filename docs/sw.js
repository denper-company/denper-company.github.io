importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"4e42435483e4f2c5b06d2f27fcad02bf","url":"app.webmanifest"},{"revision":"3710f5da682249855b49b1d41eddc9fe","url":"assets/index--ArH7CMx.js"},{"revision":"c7587cfbce4c64d72eae020126af91c3","url":"assets/index-BkoSndUm.js"},{"revision":"c35d65e5eb4a7aa7ca4fdb11014a8b0c","url":"assets/index-CfKE_PPK.css"},{"revision":"1b3a8f1ebafcc86e6a68c268e48e7b7d","url":"assets/index-D_yqDMkm.js"},{"revision":"79c823c2e07770fee7eac8f0ce1cadda","url":"assets/Workbox-CBq1dIaw.js"},{"revision":"10b859c9e9b3fa0fda3766ff1eb682b4","url":"denper.apk"},{"revision":"294fd1e6b9645109da1e727f1db8de64","url":"icon.png"},{"revision":"4a6199b7037d6c8b51ce550b26a48727","url":"icon.svg"},{"revision":"afbf09706fc84dc8bf6983b65e28ecc5","url":"index.html"},{"revision":"3fe14eb834e4263cf516902a36f53cf3","url":"maskable.svg"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
