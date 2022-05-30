import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ path, isAuth, Component }) => (
  <Route
    path={path}
    element={() => (isAuth ? Component : <Navigate replace to="/login" />)}
  />
);

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  Component: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};
