import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "/src/router";
import "/src/index.css";

const sw = "serviceWorker" in navigator;

document
  .querySelectorAll('link[media="print"]')
  .forEach((link) => (link.media = "all"));

setTimeout(async () => {
  try {
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        {sw && <link rel="manifest" href="/app.webmanifest" />}
        <Router />
      </StrictMode>,
    );
    if (import.meta.env.PROD && sw) {
      const { Workbox } = await import("workbox-window/Workbox.mjs");
      const wb = new Workbox("/sw.js");
      await wb.register();
      await wb.update();
    }
  } catch (error) {}
}, 0);
