import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoute";

export const MainRouter = () => {
  const [auth, setAuth] = useState(localStorage.getItem("token") || false);
  const onClick = () => {
    setAuth(!auth);
    localStorage.setItem("token", "1");
  };

  return (
    <BrowserRouter>
      <button onClick={onClick}>Oas</button>
      <Routes>
        <Route path="/auth/*" element={<PublicRoutes isAuth={auth} />} />
        <Route path="/*" element={<PrivateRoutes isAuth={auth} />} />
      </Routes>
    </BrowserRouter>
  );
};
