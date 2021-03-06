import fbt from "fbt";
import { useCallback, useEffect, useState } from "react";
import { ColorSwatchIcon } from "@heroicons/react/outline";
import Select from "components/common/select";
import themeOptions from "enums/Theme$FbtEnum";

export default function SwitchTheme() {
  const [theme, setTheme] = useState(
    () => window.sessionStorage?.getItem?.("theme") ?? "system"
  );
  useEffect(() => {
    const {
      document: {
        documentElement: { dataset },
      },
    } = window;
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
      icon={<ColorSwatchIcon className="h-5" aria-hidden="true" />}
      className="capitalize"
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
