import {
  Link,
  Outlet,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "react-router";
import { Logo } from "#src/components/logo";

export function Component() {
  return (
    <>
      <main className="flex min-h-dvh flex-col items-center-safe justify-center-safe gap-16 p-4 text-center">
        <nav>
          <Link to="/" title="DENPER Company logo" reloadDocument>
            <Logo className="h-16" />
          </Link>
        </nav>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError(),
    isRouteError = isRouteErrorResponse(error),
    data = isRouteError ? error.data : "Something went wrong",
    status = isRouteError ? error.status : "Oops";
  return (
    <main className="absolute inset-0 flex flex-col items-center-safe justify-center-safe gap-2 text-center">
      <meta
        name="robots"
        content="none, noindex, nofollow, noarchive, nositelinkssearchbox, nosnippet, notranslate, noimageindex"
      />
      <title>{`${status} - DENPER Company`}</title>
      <header>
        <h1 className="text-xl font-bold">{status}</h1>
        <h2 className="text-lg">{data}</h2>
      </header>
      <br />
      <Link to="/" className="underline underline-offset-8" reloadDocument>
        Go Home
      </Link>
    </main>
  );
}
