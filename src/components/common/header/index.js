import SwitchTheme from "components/common/theme";
import SwitchLocale from "components/common/locale";
import { ReactComponent as Logo } from "logo.svg";

export default function Header() {
  return (
    <header className="p-4 gap-4 flex-none flex flex-wrap items-center justify-between">
      <Logo className="h-12" />
      <nav className="gap-4 inline-flex flex-wrap items-center">
        <SwitchLocale />
        <SwitchTheme />
      </nav>
    </header>
  );
}
