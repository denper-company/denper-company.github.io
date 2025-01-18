import cssUrl from "/src/index.css?url";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = cssUrl;
document.head.appendChild(link);
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const sw = "serviceWorker" in navigator;
    for await (const link of document.querySelectorAll('link[media="print"]')) {
      link.media = "all";
    }
    const [{ StrictMode }, { createRoot }, { default: Router }] =
      await Promise.all([
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
    if (import.meta.env.PROD && sw) {
      const { Workbox } = await import("workbox-window/Workbox.mjs");
      const wb = new Workbox("/sw.js");
      await wb.register();
      await wb.update();
    }
  } catch (error) {}
});
