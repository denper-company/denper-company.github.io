import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Loader from "components/loader";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("routes/app"),
    children: [
      {
        index: true,
        lazy: () => import("routes/home"),
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
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}
