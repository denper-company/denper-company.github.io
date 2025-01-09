import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { Loader } from "/src/components/loader";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("/src/routes"),
    HydrateFallback: Loader,
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

export function Router() {
  return <RouterProvider router={router} />;
}
