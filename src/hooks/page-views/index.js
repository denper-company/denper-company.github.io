import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useLocaleContext, LOCALES } from "contexts/locale";

export default function usePageViews() {
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang");
  const { pathname } = useLocation();
  const [
    {
      context: { locale },
    },
  ] = useLocaleContext();
  useEffect(() => {
    const jsonld = document.createElement("script");
    jsonld.type = "application/ld+json";
    jsonld.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        url: process.env.REACT_APP_URL,
        logo: `${process.env.REACT_APP_URL}/logo512.png`,
        name: "DENPER",
        description:
          "We are a small team of software engineers spread out all across the world, building apps that help and make people better.",
      },
    ]);
    document.body.appendChild(jsonld);
    return () => document.body.removeChild(jsonld);
  }, []);
  useEffect(() => {
    const localeNode = document.head.querySelector(
      'meta[property="og:locale"]'
    );
    localeNode.content = locale;
    const localeAlternates = Object.keys(LOCALES).reduce((accumulator, key) => {
      if (key !== locale) {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:locale:alternate");
        meta.content = key;
        accumulator.push(meta);
      }
      return accumulator;
    }, []);
    localeNode.after?.(...localeAlternates);
    return () => {
      for (const localeAlternate of localeAlternates) {
        localeAlternate.remove?.();
      }
    };
  }, [locale]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_URL}${pathname}`;
    document.head.querySelector('meta[property="og:url"]').content = lang
      ? `${url}?lang=${lang}`
      : url;
    document.head.querySelector('link[rel="canonical"]').href = lang
      ? `${url}?lang=${lang}`
      : url;
    const localeNode = document.head.querySelector(
      'link[rel="alternate"][hreflang="x-default"]'
    );
    localeNode.href = url;
    const localeAlternates = Object.values(LOCALES).reduce(
      (accumulator, { bcp47 }) => {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.href = `${url}?lang=${bcp47}`;
        link.hreflang = bcp47;
        accumulator.push(link);
        return accumulator;
      },
      []
    );
    localeNode.before?.(...localeAlternates);
    return () => {
      for (const localeAlternate of localeAlternates) {
        localeAlternate.remove?.();
      }
    };
  }, [lang, pathname]);
}
