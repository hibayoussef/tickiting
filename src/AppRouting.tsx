import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SignInSide from "./modules/Auth/pages/SignUp";
import Home from "./pages/Home/Pages/Home";

const AppRouting: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSide />} />
        {/* أضف المزيد من الصفحات هنا */}
      </Routes>
    </Layout>
  );
};

export default AppRouting;
