import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Loader from "/src/components/loader";

const router = createBrowserRouter([
  {
    lazy: () => import("/src/routes"),
    children: [
      {
        path: "/",
        lazy: () => import("/src/routes/route"),
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
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
      future={{ v7_startTransition: true }}
    />
  );
}
