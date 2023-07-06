import { LOCALES } from "contexts/locale";

export default async function localeTranslation(language) {
  const found = Object.values(LOCALES).find(
    (locale) => locale.bcp47.toLowerCase() === language.toLowerCase(),
  );
  const locale = found?.localeName ?? "en";
  const translation =
    locale === "en" ? { en: {} } : await import(`locales/${locale}.json`);
  return [locale, translation];
}
