import SwitchTheme from "components/theme";
import SwitchLocale from "components/locale";
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
