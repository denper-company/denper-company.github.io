import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LOCALES } from "contexts/locale";
import localeTranslation from "common/locale-translation";

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
    if (!window.sessionStorage?.getItem?.("lang") && found) {
      setSearchParams({
        lang: found?.bcp47,
      });
    }
  }, [setSearchParams]);
  useEffect(() => {
    async function init() {
      try {
        const [locale, translations] = await localeTranslation(lang);
        setState((state) => ({
          ...state,
          context: {
            ...state.context,
            locale,
          },
          translations,
        }));
      } catch (error) {}
    }
    if (lang) {
      init();
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
