import {
  isRouteErrorResponse,
  Outlet,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import Logo from "src/components/logo";

export function Component() {
  return (
    <>
      <main className="flex min-h-dvh flex-col items-center-safe justify-center-safe gap-16 p-4 text-center">
        <nav>
          <a href="/" title="DENPER Company logo">
            <Logo className="h-16" />
          </a>
        </nav>
        <Outlet />
      </main>
      <ScrollRestoration getKey={({ pathname }) => pathname} />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  const status = isRouteError ? error.status : "Oops";
  const data = isRouteError ? error.data : "Something went wrong";
  return (
    <main className="absolute inset-0 flex flex-col items-center-safe justify-center-safe gap-2 text-center">
      <meta
        name="robots"
        content="none, noindex, nofollow, noarchive, nositelinkssearchbox, nosnippet, notranslate, noimageindex"
      />
      <title>{`${status} ~ DENPER Company`}</title>
      <header>
        <h1 className="text-xl font-bold">{status}</h1>
        <h2 className="text-lg">{data}</h2>
      </header>
      <br />
      <a href="/" className="underline underline-offset-8">
        Go Home
      </a>
    </main>
  );
}
