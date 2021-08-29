import { lazy } from "react";

const Header = lazy(() => import("components/common/header"));
const Section = lazy(() => import("components/section"));

export default function Main() {
  return (
    <main className="mx-auto max-w-screen-2xl min-h-screen flex flex-col">
      <Header />
      <Section />
    </main>
  );
}
