import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { MenuProvider } from "./components/Menucontext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // children: [
    //   {
    //     path: "/",
    //     element: ,
    //   },
    // ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </StrictMode>
);
