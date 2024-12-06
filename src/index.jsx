import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "/src/router";
import "/src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <link rel="manifest" href="/app.webmanifest" />
    <Router />
  </StrictMode>,
);

setTimeout(async () => {
  try {
    if (import.meta.env.PROD && "serviceWorker" in navigator) {
      const { Workbox } = await import("workbox-window/Workbox.mjs");
      const wb = new Workbox("/sw.js");
      await wb.register();
      await wb.update();
    }
  } catch (error) {}
}, 0);
