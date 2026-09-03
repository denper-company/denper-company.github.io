import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "#src/router";

const sw = "serviceWorker" in navigator;
document.addEventListener(
  "DOMContentLoaded",
  () => {
    for (const link of document.querySelectorAll('link[media="print"]')) {
      link.media = "all";
    }
    createRoot(document.querySelector("#root")).render(
      <StrictMode>
        {sw && <link rel="manifest" href="/app.webmanifest" />}
        <Router />
      </StrictMode>,
    );
  },
  { once: true },
);
window.addEventListener(
  "load",
  async () => {
    try {
      if (import.meta.env.PROD && sw) {
        const { Workbox } =
            await import("https://storage.googleapis.com/workbox-cdn/releases/7.4.1/workbox-window.prod.mjs"),
          wb = new Workbox("/sw.js");
        await wb.register();
        await wb.update();
      }
    } catch {
    } finally {
      document.querySelector("noscript").remove();
    }
  },
  { once: true },
);
