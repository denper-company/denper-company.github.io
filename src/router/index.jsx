import { createBrowserRouter, redirect, replace } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Fallback as HydrateFallback } from "#src/components/fallback";

const router = createBrowserRouter([
  {
    HydrateFallback,
    children: [
      {
        index: true,
        lazy: () => import("#src/routes/route"),
      },
    ],
    lazy: () => import("#src/routes"),
    path: "/",
  },
  {
    loader() {
      replace("/");
      throw redirect("/");
    },
    path: "*",
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function Router() {
  return <RouterProvider router={router} useTransitions />;
}
