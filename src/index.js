import "react-app-polyfill/stable";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "index.css";
import Router from "components/router";
import { isProduction } from "environment";

Array.from(document.head.querySelectorAll('[media="print"]')).forEach(
  (query) => (query.media = "all"),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);

setTimeout(async () => {
  try {
    if (isProduction) {
      if ("serviceWorker" in navigator) {
        const { Workbox } = await import("workbox-window");
        const wb = new Workbox(`${process.env.PUBLIC_URL}/service-worker.js`);
        const skipWaiting = () => {
          wb.addEventListener("controlling", () => {
            window.location.reload();
          });
          wb.messageSkipWaiting();
        };
        wb.addEventListener("waiting", skipWaiting);
        document.addEventListener("visibilitychange", async () => {
          if (document.visibilityState === "visible") {
            await wb.update();
          }
        });
        await wb.register();
      }
    }
  } catch (error) {}
}, 0);
