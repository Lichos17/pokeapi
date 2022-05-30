import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Dashboard, Login, Signup } from "../components";
import { PrivateRoute, PrivateRoutes } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoute";

export const MainRouter = () => {
  const [auth, setAuth] = useState(false);

  const onClick = () => {
    setAuth(!auth);
  };

  return (
    <BrowserRouter>
      <button onClick={onClick}>Oas</button>
      <Routes>
        <PrivateRoute
          path="dashboard"
          isAuth={true}
          Component={<Dashboard />}
        />
        <PublicRoutes path="login" isAuth={true} Component={<Login />} />
        <PublicRoutes path="signup" isAuth={true} Component={<Signup />} />
        <Route path="*" element={<h1>not foun</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
