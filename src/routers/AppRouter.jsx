import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoute";

export const MainRouter = () => {
  const { email } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<PublicRoutes isAuth={!!email} />} />
        <Route path="/*" element={<PrivateRoutes isAuth={!!email} />} />
      </Routes>
    </BrowserRouter>
  );
};
