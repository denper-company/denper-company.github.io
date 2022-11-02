window.dataLayer = window.dataLayer || [];
export function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", process.env.REACT_APP_MEASUREMENT_ID);

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(
      ({ onCLS, onFCP, onFID, onINP, onLCP, onTTFB }) => {
        const script = document.createElement("script");
        script.defer = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_MEASUREMENT_ID}`;
        document.body.appendChild(script);
        onCLS(onPerfEntry);
        onFCP(onPerfEntry);
        onFID(onPerfEntry);
        onINP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
      }
    );
  }
};

export default reportWebVitals;
