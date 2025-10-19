// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import infoImg from "../assets/info.png";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* this is where each page renders */}
      <InfoSection image={infoImg} /> {/* 👈 will show on every page */}
      <Footer />
    </>
  );
}
