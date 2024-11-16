importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"4e42435483e4f2c5b06d2f27fcad02bf","url":"app.webmanifest"},{"revision":"5b532df19824fddea9087132c50dc11a","url":"assets/index-C6Vy4CLJ.js"},{"revision":"9146dea46961bd343c7cc3f950025cb9","url":"assets/index-D-nACveZ.js"},{"revision":"10135845a5b6d71a53bdef0ab3e72b5d","url":"assets/index-D3f4-MWb.css"},{"revision":"d1d2cbd0225e9d17ed26f193a8073d43","url":"assets/index-DiY8ZHAq.js"},{"revision":"4f949da5f8731b0eb27e018e2b97142c","url":"assets/Workbox-CKMfoH04.js"},{"revision":"10b859c9e9b3fa0fda3766ff1eb682b4","url":"denper.apk"},{"revision":"294fd1e6b9645109da1e727f1db8de64","url":"icon.png"},{"revision":"4a6199b7037d6c8b51ce550b26a48727","url":"icon.svg"},{"revision":"9ceaa7bde4c4bc6db43049b65dba3ffe","url":"index.html"},{"revision":"3fe14eb834e4263cf516902a36f53cf3","url":"maskable.svg"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
