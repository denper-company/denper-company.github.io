import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "components/common/error/boundary";
import ErrorUI from "components/common/error/ui";
import Loader from "components/common/loader";
import LocaleContextProvider from "contexts/locale";

const Router = lazy(() => import("components/router"));

export default function Root() {
  return (
    <ErrorBoundary
      fallback={(error, retry) => <ErrorUI error={error} retry={retry} />}
    >
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <LocaleContextProvider>
            <Router />
          </LocaleContextProvider>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}
