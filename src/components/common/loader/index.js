import { ReactComponent as Logo } from "logo.svg";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen animate-pulse">
      <Logo className="h-16 pointer-events-none" />
    </div>
  );
}
