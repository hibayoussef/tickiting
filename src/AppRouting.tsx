import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Pages/Home";

const AppRouting: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouting;
