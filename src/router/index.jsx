import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import HydrateFallback from "src/components/loader";

const router = createBrowserRouter([
  {
    path: "/",
    HydrateFallback,
    lazy: {
      Component: async () => (await import("src/routes")).Component,
      ErrorBoundary: async () =>
        (await import("src/routes/error-boundary")).ErrorBoundary,
    },
    children: [
      {
        index: true,
        lazy: {
          Component: async () => (await import("src/routes/route")).Component,
        },
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
