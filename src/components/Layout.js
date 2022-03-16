import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
