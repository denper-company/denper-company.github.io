import { Link, Outlet, ScrollRestoration } from "react-router";
import Logo from "src/components/logo";

export function Component() {
  return (
    <>
      <main className="flex min-h-dvh flex-col items-center justify-center gap-16 p-4 text-center">
        <nav>
          <Link to="/" replace reloadDocument>
            <Logo className="h-16" />
          </Link>
        </nav>
        <Outlet />
      </main>
      <ScrollRestoration getKey={({ pathname }) => pathname} />
    </>
  );
}
