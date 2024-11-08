importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"4e42435483e4f2c5b06d2f27fcad02bf","url":"app.webmanifest"},{"revision":"111961cc95a04f9f9b7ded3174b2f154","url":"assets/index-5D2xvBur.js"},{"revision":"50a14162cc6152c22b0593af20147496","url":"assets/index-BAFRRXzj.css"},{"revision":"d9fa8446dfd6f7fea51961b44b544e39","url":"assets/index-Bs6X8t34.js"},{"revision":"cce1c8350336eac35c9d2b96a5a527c5","url":"assets/index-Dtx7AHbG.js"},{"revision":"4f949da5f8731b0eb27e018e2b97142c","url":"assets/Workbox-CKMfoH04.js"},{"revision":"10b859c9e9b3fa0fda3766ff1eb682b4","url":"denper.apk"},{"revision":"294fd1e6b9645109da1e727f1db8de64","url":"icon.png"},{"revision":"4a6199b7037d6c8b51ce550b26a48727","url":"icon.svg"},{"revision":"72fab747e5bf20232d56b53dc7e4b94e","url":"index.html"},{"revision":"3fe14eb834e4263cf516902a36f53cf3","url":"maskable.svg"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
