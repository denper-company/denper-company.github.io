import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Loader from "components/common/loader";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("components/app"),
    children: [
      {
        index: true,
        lazy: () => import("components/home"),
      },
    ],
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

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </Suspense>
  );
}
