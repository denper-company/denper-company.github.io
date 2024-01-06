import fbt from "fbt";
import { lazy } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
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

export function ErrorBoundary() {
  let error = useRouteError();
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p>
        {isRouteErrorResponse(error) ? (
          <>
            {error.status} {error.statusText}
          </>
        ) : (
          <fbt desc="error">
            Something went wrong on our side, we already received the error and
            our team is working on it.
          </fbt>
        )}
      </p>
      <button onClick={() => window.location.reload()} className="underline">
        <fbt desc="retry">Retry</fbt>
      </button>
    </div>
  );
}
