import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate, Routes } from "react-router-dom";
import { Dashboard, Login, PokemonId, PokemonImages } from "../components";

export const PrivateRoutes = ({ isAuth }) => {
  return isAuth ? (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/:id" element={<PokemonId />} />
      <Route path="dashboard/image/:id" element={<PokemonImages />} />
      <Route path="*" element={<>not found</>} />
    </Routes>
  ) : (
    <Navigate replace to="auth/login" />
  );
};

PrivateRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
