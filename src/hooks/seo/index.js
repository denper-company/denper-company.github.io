import { useEffect } from "react";
import { gtag } from "reportWebVitals";

export default function useSEO({ title, description }) {
  useEffect(() => {
    try {
      document.title = title;
      document.head.querySelector('meta[name="description"]').content =
        description;
      document.head.querySelector('meta[property="og:title"]').content = title;
      document.head.querySelector('meta[property="og:description"]').content =
        description;
    } catch (error) {
      gtag("event", "exception", {
        description: error?.message ?? error,
      });
    }
  }, [title, description]);
}
