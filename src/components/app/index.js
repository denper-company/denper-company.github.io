import {
  Outlet,
  isRouteErrorResponse,
  useRouteError,
  ScrollRestoration,
} from "react-router-dom";
import { gtag } from "reportWebVitals";
import LocaleContextProvider from "contexts/locale";

export function Component() {
  return (
    <LocaleContextProvider>
      <Outlet />
      <ScrollRestoration getKey={({ pathname }) => pathname} />
    </LocaleContextProvider>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();
  gtag("event", "exception", {
    description: isRouteErrorResponse(error)
      ? error?.data?.message ?? error?.data
      : error?.message ?? error,
    fatal: true,
  });
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p>
        {isRouteErrorResponse(error) ? (
          <>
            {error.status} {error.statusText}
          </>
        ) : (
          <>
            Something went wrong on our side, we already received the error and
            our team is working on it.
          </>
        )}
      </p>
      <button onClick={() => window.location.reload()} className="underline">
        Retry
      </button>
    </div>
  );
}
