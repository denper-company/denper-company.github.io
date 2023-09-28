import { useEffect } from "react";

export default function useSEO({ title, description }) {
  useEffect(() => {
    try {
      document.title = title;
      document.head.querySelector('meta[name="description"]').content =
        description;
      document.head.querySelector('meta[property="og:title"]').content = title;
      document.head.querySelector('meta[property="og:description"]').content =
        description;
    } catch (error) {}
  }, [title, description]);
}
