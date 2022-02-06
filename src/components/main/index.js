import { lazy } from "react";

const Header = lazy(() => import("components/common/header"));
const Section = lazy(() => import("components/section"));

export default function Main() {
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
      <Header />
      <Section />
    </main>
  );
}
