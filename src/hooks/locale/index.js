import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LOCALES } from "contexts/locale";
import localeTranslation from "common/locale-translation";
import { gtag } from "reportWebVitals";

export default function useLocale() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get("lang") ?? "en";
  const [state, setState] = useState(() => ({
    context: {
      locale: "en",
    },
    translations: { en: {} },
  }));
  useEffect(() => {
    const found = Object.values(LOCALES).find(
      (locale) =>
        locale.bcp47.toLowerCase() ===
        window.navigator?.language?.toLowerCase(),
    );
    if (found) {
      setSearchParams({
        lang: found?.bcp47,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    async function init() {
      const [locale, translations] = await localeTranslation(lang);
      setState((state) => ({
        ...state,
        context: {
          ...state.context,
          locale,
        },
        translations,
      }));
    }
    if (lang) {
      init().catch((error) => {
        gtag("event", "exception", {
          description: error?.message ?? error,
        });
      });
    }
  }, [lang]);
  useEffect(() => {
    const html = document.documentElement;
    const locale = LOCALES[state.context.locale];
    html.lang = locale.bcp47;
    html.dir = locale.rtl ? "rtl" : "ltr";
  }, [state.context.locale]);
  return [state, setState];
}
