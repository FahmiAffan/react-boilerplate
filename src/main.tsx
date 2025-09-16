import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.tsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { CookiesProvider } from "react-cookie";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
