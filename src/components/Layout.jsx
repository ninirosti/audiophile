// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import Categories from "./Categories";
import infoImg from "../assets/info.png";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  const showCategories = pathname !== "/"; // show on all pages EXCEPT Home

  return (
    <>
      <Header />
      <Outlet />
      {showCategories && <Categories />} {/* appears on non-Home pages */}
      <InfoSection image={infoImg} />
      <Footer />
    </>
  );
}
