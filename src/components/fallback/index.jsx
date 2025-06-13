import Logo from "src/components/logo";

export default function Fallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center-safe justify-center-safe gap-4">
      <Logo className="pointer-events-none h-16 motion-safe:animate-pulse" />
    </div>
  );
}
