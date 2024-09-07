import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "/src/router";
import "/src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
