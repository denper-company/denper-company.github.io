import { lazy } from "react";
import usePageViews from "hooks/page-views";

const Header = lazy(() => import("components/header"));
const Section = lazy(() => import("components/section"));

export function Component() {
  usePageViews();
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Section />
    </main>
  );
}
