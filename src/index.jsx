import { StrictMode } from "react";
import { prefetchDNS, preconnect, preload, preinit } from "react-dom";
import { createRoot } from "react-dom/client";
import Router from "/src/router";
import styleUrl from "/src/index.css?url";

function Root() {
  prefetchDNS("https://rsms.me/");
  preconnect("https://rsms.me/", { crossOrigin: "anonymous" });
  preload("https://rsms.me/inter/inter.css", {
    crossOrigin: "anonymous",
    as: "style",
  });
  preinit("https://rsms.me/inter/inter.css", {
    crossOrigin: "anonymous",
    as: "style",
  });
  preload(styleUrl, { crossOrigin: "anonymous", as: "style" });
  preinit(styleUrl, { crossOrigin: "anonymous", as: "style" });
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
