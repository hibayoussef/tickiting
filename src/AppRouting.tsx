import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Pages/Home";
import Layout from "./components/layout/Layout";

const AppRouting: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* أضف المزيد من الصفحات هنا */}
      </Routes>
    </Layout>
  );
};

export default AppRouting;
