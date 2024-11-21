import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Loader from "/src/components/loader";

const router = createBrowserRouter(
  [
    {
      path: "/",
      lazy: () => import("/src/routes"),
      HydrateFallback: Loader,
      children: [
        {
          index: true,
          lazy: () => import("/src/routes/route"),
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function Router() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
