import "src/index.css";
const sw = "serviceWorker" in navigator;
document.addEventListener("DOMContentLoaded", async () => {
  try {
    for await (const link of document.querySelectorAll('link[media="print"]')) {
      link.media = "all";
    }
    const [{ StrictMode }, { createRoot }, { Router }] = await Promise.all([
      import("react"),
      import("react-dom/client"),
      import("src/router"),
    ]);
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        {sw && <link rel="manifest" href="/app.webmanifest" />}
        <Router />
      </StrictMode>,
    );
  } catch (error) {}
});
window.addEventListener("load", async () => {
  try {
    if (import.meta.env.PROD && sw) {
      const { Workbox } = await import("workbox-window/Workbox.mjs");
      const wb = new Workbox("/sw.js");
      await wb.register();
      await wb.update();
    }
  } catch (error) {}
});
