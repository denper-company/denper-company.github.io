import { StrictMode } from "react";
import { preconnect, prefetchDNS, preinit, preload } from "react-dom";
import { createRoot } from "react-dom/client";
import Router from "/src/router";
import cssURL from "/src/index.css?url";

function Root() {
  prefetchDNS("https://rsms.me/");
  preconnect("https://rsms.me/");
  preload("https://rsms.me/inter/inter.css", { as: "style", crossOrigin: "" });
  preinit("https://rsms.me/inter/inter.css", { as: "style", crossOrigin: "" });
  preload(cssURL, { as: "style", crossOrigin: "" });
  preinit(cssURL, { as: "style", crossOrigin: "" });
  return (
    <StrictMode>
      <link rel="manifest" href="/app.webmanifest" />
      <Router />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);

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
