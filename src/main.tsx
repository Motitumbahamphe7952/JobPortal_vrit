import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import DetailedJob from "./components/JobSection/DetailedJob";
import ComingSoon from "./components/ComingSoonSection/ComingSoon";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/job/:id" element={<DetailedJob />} />

      <Route path="*" element={<ComingSoon />} />
    </Route>,
  ),
);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
