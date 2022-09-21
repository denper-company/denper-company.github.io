import { lazy } from "react";
import usePageViews from "hooks/page-views";

const Header = lazy(() => import("components/common/header"));
const Section = lazy(() => import("components/section"));

export default function App() {
  usePageViews();
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
      <Header />
      <Section />
    </main>
  );
}
