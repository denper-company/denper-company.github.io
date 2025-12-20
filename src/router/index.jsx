import { createBrowserRouter, replace, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import HydrateFallback from "src/components/fallback";

const router = createBrowserRouter([
  {
    path: "/",
    HydrateFallback,
    lazy: async () => import("src/routes"),
    children: [
      {
        index: true,
        lazy: async () => import("src/routes/route"),
      },
    ],
  },
  {
    path: "*",
    async loader() {
      replace("/");
      throw redirect("/");
    },
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function Router() {
  return <RouterProvider router={router} />;
}
