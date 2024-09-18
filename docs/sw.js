importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-sw.js",
);
const {
  core: { clientsClaim },
  precaching: { precache },
  recipes: { pageCache, staticResourceCache, imageCache },
} = workbox;
clientsClaim();
precache([{"revision":"4e42435483e4f2c5b06d2f27fcad02bf","url":"app.webmanifest"},{"revision":"c407f99136c3324575f18f8867242b28","url":"assets/index-14VgTZ8j.css"},{"revision":"790c4821045013a72b9267006c26a8cd","url":"assets/index-1xjOORy7.js"},{"revision":"88ec8c870183c252900909b2765d66ed","url":"assets/index-Bofnkeyt.js"},{"revision":"fa524205df243032796ad5dfaf92883c","url":"assets/index-CmCx13k6.js"},{"revision":"79c823c2e07770fee7eac8f0ce1cadda","url":"assets/Workbox-CBq1dIaw.js"},{"revision":"10b859c9e9b3fa0fda3766ff1eb682b4","url":"denper.apk"},{"revision":"294fd1e6b9645109da1e727f1db8de64","url":"icon.png"},{"revision":"4a6199b7037d6c8b51ce550b26a48727","url":"icon.svg"},{"revision":"a97457586d5daad191d5cf7adb6e45ac","url":"index.html"},{"revision":"66b78d730ec9994973ffe16b7bcd0bc9","url":"maskable.svg"},{"revision":"d37d4d99caf249901d311e3f7626aeef","url":"robots.txt"},{"revision":"6bab52e457b571a0cc15eea7ad51930c","url":"sitemap.txt"}]);
self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
pageCache();
staticResourceCache();
imageCache();
