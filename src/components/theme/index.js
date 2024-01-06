import fbt from "fbt";
import { useCallback, useEffect, useState } from "react";
import { SwatchIcon } from "@heroicons/react/24/outline";
import Select from "components/select";
import themeOptions from "enums/Theme$FbtEnum";

export default function SwitchTheme() {
  const [theme, setTheme] = useState(
    () => window.sessionStorage?.getItem?.("theme") ?? "system",
  );
  useEffect(() => {
    const {
      documentElement: { dataset },
    } = document;
    dataset.colorScheme = theme;
    window.sessionStorage?.setItem?.("theme", theme);
  }, [theme]);
  const handleChange = useCallback(({ target: { value } }) => {
    setTheme(() => value);
  }, []);
  return (
    <Select
      value={theme}
      onChange={handleChange}
      icon={<SwatchIcon className="h-5" />}
      className="capitalize"
      aria-label={fbt("Theme", "label")}
      title={fbt("Theme", "label")}
    >
      {themeOptions.map((option, index) => (
        <option key={option} value={option}>
          <fbt desc="theme">
            <fbt:enum enum-range={themeOptions} value={index} />
          </fbt>
        </option>
      ))}
    </Select>
  );
}
