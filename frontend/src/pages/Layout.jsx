// Layout - Overall page layout

import { Header, Footer, Copyright, BackToTop } from "../components";
const { Outlet } = require("react-router-dom");

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
