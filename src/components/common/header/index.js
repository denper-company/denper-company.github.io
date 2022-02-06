import SwitchTheme from "components/common/theme";
import SwitchLocale from "components/common/locale";
import { ReactComponent as Logo } from "logo.svg";

export default function Header() {
  return (
    <header className="flex flex-none flex-wrap items-center justify-between gap-4 p-4">
      <Logo className="h-12" />
      <nav className="inline-flex flex-wrap items-center gap-4">
        <SwitchLocale />
        <SwitchTheme />
      </nav>
    </header>
  );
}
