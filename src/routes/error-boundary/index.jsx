import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <main className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
      <meta
        name="robots"
        content="none, noindex, nofollow, noarchive, nositelinkssearchbox, nosnippet, notranslate, noimageindex"
      />
      <header>
        <h1 className="text-3xl">Oops!</h1>
        <h2 className="text-2xl">Sorry, an unexpected error has occurred.</h2>
      </header>
      <p className="text-xl text-red-600 dark:text-red-400">
        {isRouteErrorResponse(error) ? (
          <i>
            {error.status} {error.statusText}
          </i>
        ) : (
          <i>{error.message ?? error}</i>
        )}
      </p>
      <footer>
        <nav>
          <Link
            to="/"
            replace
            reloadDocument
            className="text-blue-600 dark:text-blue-400"
          >
            <span aria-hidden="true">&larr;</span> Go home
          </Link>
        </nav>
      </footer>
    </main>
  );
}
