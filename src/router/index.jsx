import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import HydrateFallback from "src/components/loader";

const router = createBrowserRouter([
  {
    path: "/",
    HydrateFallback,
    lazy: () => import("src/routes"),
    children: [
      {
        index: true,
        lazy: () => import("src/routes/route"),
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
