import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.Component/Navbar";
import Footer from "../Footer.Component/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
