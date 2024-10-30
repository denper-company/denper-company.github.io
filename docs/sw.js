importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"4e42435483e4f2c5b06d2f27fcad02bf","url":"app.webmanifest"},{"revision":"50a14162cc6152c22b0593af20147496","url":"assets/index-BAFRRXzj.css"},{"revision":"18036ae0e10adb246e4a4b6d52faec37","url":"assets/index-BGzi31R5.js"},{"revision":"f943771ea177f174501ff29fd2713ba6","url":"assets/index-Cqglt64e.js"},{"revision":"e63a240b6298bbba42166368b8cb0a43","url":"assets/index-D_cHrHtS.js"},{"revision":"4f949da5f8731b0eb27e018e2b97142c","url":"assets/Workbox-CKMfoH04.js"},{"revision":"10b859c9e9b3fa0fda3766ff1eb682b4","url":"denper.apk"},{"revision":"294fd1e6b9645109da1e727f1db8de64","url":"icon.png"},{"revision":"4a6199b7037d6c8b51ce550b26a48727","url":"icon.svg"},{"revision":"0ab3ead7c93c11510efb84df8705f4c0","url":"index.html"},{"revision":"3fe14eb834e4263cf516902a36f53cf3","url":"maskable.svg"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
