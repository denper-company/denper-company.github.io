import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "#src/router";
import "#src/index.css";
const sw = "serviceWorker" in navigator;
document.addEventListener("DOMContentLoaded", async () => {
  for await (const link of document.querySelectorAll('link[media="print"]')) {
    link.media = "all";
  }
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      {sw && <link rel="manifest" href="/app.webmanifest" />}
      <Router />
    </StrictMode>,
  );
});
window.addEventListener("load", async () => {
  try {
    if (import.meta.env.PROD && sw) {
      const { Workbox } =
        await import("https://storage.googleapis.com/workbox-cdn/releases/7.4.1/workbox-window.prod.mjs");
      const wb = new Workbox("/sw.js");
      await wb.register();
      await wb.update();
    }
  } catch {
  } finally {
    document.body.removeChild(document.querySelector("noscript"));
  }
});
