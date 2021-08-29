import { createContext, useContext } from "react";
import { init } from "fbt";
import useLocale from "hooks/locale";
import locales from "common/locales";

const LocaleContext = createContext([
  {
    context: {
      locale: "en",
    },
    translations: { en: {} },
  },
  () => {},
]);

export default function LocaleContextProvider({ children }) {
  const locale = useLocale();
  const [{ translations, context }] = locale;
  init({
    translations,
    hooks: {
      getViewerContext: () => context,
    },
  });
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export const useLocaleContext = () => useContext(LocaleContext);

export const LOCALES = locales;
