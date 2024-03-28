import { ReactComponent as Logo } from "logo.svg";

export default function Loader() {
  return (
    <div className="flex min-h-dvh animate-pulse items-center justify-center">
      <Logo className="pointer-events-none h-16" />
    </div>
  );
}
