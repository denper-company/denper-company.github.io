import Spin from "src/components/spin";

export default function Fallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center-safe justify-center-safe gap-4">
      <Spin className="pointer-events-none h-16 motion-safe:animate-spin" />
      <p>Loading, please wait...</p>
    </div>
  );
}
