import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate, Routes } from "react-router-dom";
import { Login } from "../components";

export const PublicRoutes = ({ isAuth }) => {
  return !isAuth ? (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  ) : (
    <Navigate replace to="/dashboard" />
  );
};

PublicRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
