// Layout - Overall page layout

import { Header, Footer, Copyright, BackToTop } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default Layout;
