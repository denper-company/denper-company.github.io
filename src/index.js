import "react-app-polyfill/stable";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "index.css";
import Router from "components/router";
import { isProduction } from "environment";
import reportWebVitals, { gtag } from "reportWebVitals";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);

(async () => {
  try {
    if (isProduction) {
      Array.from(document.head.querySelectorAll('[media="print"]')).forEach(
        (print) => (print.media = "all")
      );
      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      reportWebVitals(({ name, delta, value, id }) => {
        // Assumes the global `gtag()` function exists, see:
        // https://developers.google.com/analytics/devguides/collection/ga4
        gtag("event", name, {
          // Built-in params:
          value: delta, // Use `delta` so the value can be summed.
          // Custom params:
          metric_id: id, // Needed to aggregate events.
          metric_value: value, // Optional.
          metric_delta: delta, // Optional.

          // OPTIONAL: any additional params or debug info here.
          // See: https://web.dev/debug-web-vitals-in-the-field/
          // metric_rating: 'good' | 'ni' | 'poor',
          // debug_info: '...',
          // ...
        });
      });
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
  } catch (error) {
    gtag("event", "exception", {
      description: error?.message ?? error,
    });
  }
})();
