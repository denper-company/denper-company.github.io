import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { LOCALES, useLocaleContext } from "contexts/locale";
import { GlobeAltIcon } from "@heroicons/react/outline";
import Select from "components/common/select";

export default function SwitchLocale() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [
    {
      context: { locale },
    },
  ] = useLocaleContext();
  const handleChange = useCallback(
    ({ target: { value } }) => {
      if (value === "en") {
        searchParams.delete("lang");
        setSearchParams(searchParams);
      } else {
        setSearchParams({
          lang: value,
        });
      }
    },
    [searchParams, setSearchParams]
  );
  return (
    <Select
      value={LOCALES[locale].bcp47}
      onChange={handleChange}
      icon={<GlobeAltIcon className="h-5" aria-hidden="true" />}
    >
      {Object.entries(LOCALES).map(([key, value]) => (
        <option key={key} value={value.bcp47} lang={value.bcp47}>
          {value.displayName}
        </option>
      ))}
    </Select>
  );
}
