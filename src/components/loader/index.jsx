import Logo from "/src/components/logo";

export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center motion-safe:animate-pulse">
      <Logo className="pointer-events-none h-16" />
    </div>
  );
}
