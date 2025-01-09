import { Logo } from "/src/components/logo";

export function Loader() {
  return (
    <div className="absolute inset-0 flex animate-pulse items-center justify-center">
      <Logo className="pointer-events-none h-16" />
    </div>
  );
}
