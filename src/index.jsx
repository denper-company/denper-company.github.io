import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "/src/router";
import "/src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);

setTimeout(async () => {
  try {
    if (import.meta.env.PROD && "serviceWorker" in navigator) {
      const { Workbox } = await import(
        "https://storage.googleapis.com/workbox-cdn/releases/7.1.0/workbox-window.prod.mjs"
      );
      const wb = new Workbox("/sw.js");
      const skipWaiting = () => {
        wb.addEventListener("controlling", () => window.location.reload());
        wb.messageSkipWaiting();
      };
      wb.addEventListener("waiting", skipWaiting);
      document.addEventListener(
        "visibilitychange",
        async () => !document.hidden && wb.update(),
      );
      await wb.register();
    }
  } catch (error) {}
}, 0);
