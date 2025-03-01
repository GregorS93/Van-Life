import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar-Component";
import Footer from "../Footer/Footer-Component";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
