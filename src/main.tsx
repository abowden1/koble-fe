import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.tsx";

import "../scss/custom.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
            <RouterProvider router={router} />
    // </React.StrictMode>,
);
