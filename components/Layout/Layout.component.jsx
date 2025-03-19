import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.component";
import Footer from "../Footer/Footer.component";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
