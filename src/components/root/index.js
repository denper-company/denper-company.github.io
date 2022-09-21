import { lazy } from "react";
import { ScrollRestoration } from "react-router-dom";
import LocaleContextProvider from "contexts/locale";

const App = lazy(() => import("components/app"));

export default function Root() {
  return (
    <LocaleContextProvider>
      <App />
      <ScrollRestoration getKey={({ pathname }) => pathname} />
    </LocaleContextProvider>
  );
}
