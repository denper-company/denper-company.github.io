import { useEffect } from "react";
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
        unstable_viewTransition
      />
    ),
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function Router() {
  useEffect(() => {
    if (document.startViewTransition) {
      const handleClick = (event) => {
        const x = event?.clientX ?? window.innerWidth / 2;
        const y = event?.clientY ?? window.innerHeight / 2;
        const r = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y),
        );
        document.documentElement.style.setProperty("--x", `${x}px`);
        document.documentElement.style.setProperty("--y", `${y}px`);
        document.documentElement.style.setProperty("--r", `${r}px`);
      };
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }
  }, []);
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
      future={{ v7_startTransition: true }}
    />
  );
}
