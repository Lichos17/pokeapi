import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PublicRoutes />} />
        <Route path="auth/*" element={<PrivateRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
