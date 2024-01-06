import { Outlet, ScrollRestoration } from "react-router-dom";
import LocaleContextProvider from "contexts/locale";

export function Component() {
  return (
    <LocaleContextProvider>
      <Outlet />
      <ScrollRestoration getKey={({ pathname }) => pathname} />
    </LocaleContextProvider>
  );
}
