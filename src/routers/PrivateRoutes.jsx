import React from "react";
import { Routes, Route } from "react-router-dom";

export const PrivateRoutes = () => (
  <Routes>
    <Route path="login" element={<h1>login</h1>} />
    <Route path="signup" element={<h1>Team</h1>} />
    <Route path="*" element={<h1>Home</h1>} />
  </Routes>
);
