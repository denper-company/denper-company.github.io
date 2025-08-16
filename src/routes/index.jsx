import { Link, Outlet, ScrollRestoration } from "react-router";
import Logo from "src/components/logo";

export function Component() {
  return (
    <>
      <main className="flex min-h-dvh flex-col items-center-safe justify-center-safe gap-16 p-4 text-center">
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

export function ErrorBoundary() {
  return (
    <main className="absolute inset-0 flex flex-col items-center-safe justify-center-safe gap-2 bg-red-50 text-center text-red-700 dark:bg-red-950 dark:text-red-300">
      <meta
        name="robots"
        content="none, noindex, nofollow, noarchive, nositelinkssearchbox, nosnippet, notranslate, noimageindex"
      />
      <header>
        <h1 className="text-xl">
          <strong>Oops!</strong>
        </h1>
        <h2 className="text-lg">Something busted that we didn't anticipate.</h2>
      </header>
    </main>
  );
}
