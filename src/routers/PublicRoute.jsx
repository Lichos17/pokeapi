import React from "react";
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import { Login, Signup } from "../components";
import PropTypes from "prop-types";

export const PublicRoutes = ({ isAuth }) => (
  <Routes>
    <Route
      path="/login"
      element={() =>
        !isAuth ? <Login /> : <Navigate replace to="/dashboard" />
      }
    />
    <Route
      path="/signup"
      element={() =>
        !isAuth ? <Signup /> : <Navigate replace to="/dashboard" />
      }
    />
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);

PublicRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
