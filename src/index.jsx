import "/src/index.css";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const sw = "serviceWorker" in navigator;
    document
      .querySelectorAll('link[media="print"]')
      .forEach((link) => (link.media = "all"));
    const [{ StrictMode }, { createRoot }, { Router }] = await Promise.all([
      import("react"),
      import("react-dom/client"),
      import("/src/router"),
    ]);
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        {sw && <link rel="manifest" href="/app.webmanifest" />}
        <Router />
      </StrictMode>,
    );
    setTimeout(async () => {
      try {
        if (import.meta.env.PROD && sw) {
          const { Workbox } = await import("workbox-window/Workbox.mjs");
          const wb = new Workbox("/sw.js");
          await wb.register();
          await wb.update();
        }
      } catch (error) {}
    });
  } catch (error) {}
});
