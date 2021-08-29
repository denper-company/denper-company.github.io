import { lazy } from "react";
import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import { useLocaleContext } from "contexts/locale";

const App = lazy(() => import("components/app"));

export default function Router() {
  const [searchParams] = useSearchParams();
  useLocaleContext();
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="*"
        element={
          <Navigate
            to={{
              pathname: "/",
              search: `${searchParams}`,
            }}
            replace
          />
        }
      />
    </Routes>
  );
}
