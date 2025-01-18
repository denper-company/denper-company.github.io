import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Loader from "/src/components/loader";

const router = createBrowserRouter([
  {
    path: "/",
    HydrateFallback: Loader,
    lazy: () => import("/src/routes"),
    children: [
      {
        index: true,
        lazy: () => import("/src/routes/home"),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function Router() {
  return <RouterProvider router={router} />;
}
