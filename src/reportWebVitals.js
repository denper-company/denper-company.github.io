import { isProduction } from "environment";

if (isProduction) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_MEASUREMENT_ID}`;
  document.body.appendChild(script);
}
window.dataLayer = window.dataLayer || [];
export function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", process.env.REACT_APP_MEASUREMENT_ID);

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFCP(onPerfEntry);
      getFID(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
