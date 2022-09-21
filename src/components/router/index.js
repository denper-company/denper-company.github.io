import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorUI from "components/common/error/ui";
import Loader from "components/common/loader";

const Root = lazy(() => import("components/root"));

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorUI />,
    },
    {
      path: "*",
      element: (
        <Navigate
          to={{
            pathname: "/",
            search: window.location.search,
          }}
          replace
        />
      ),
    },
  ]);
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </Suspense>
  );
}
