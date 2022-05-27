import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

export const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<h1>This is the home</h1>} />
    <Route path="/about" element={<h1>This is the about</h1>} />
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
);
