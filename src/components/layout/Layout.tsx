import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const showFooter = location.pathname === "/";

  return (
    <>
      <Header />
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
