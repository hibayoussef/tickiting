import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SignUp from "./modules/Auth/pages/SignUp";
import Home from "./pages/Home/Pages/Home";
import ForgotPassword from "./modules/Auth/pages/ForgotPassword";
import ResetPassword from "./modules/Auth/pages/ResetPassword";
import VerificationCode from "./modules/Auth/pages/VerificationCode";
import SignIn from "./modules/Auth/pages/SignIn";

const AppRouting: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verification-code" element={<VerificationCode />} />
      </Routes>
    </Layout>
  );
};

export default AppRouting;
