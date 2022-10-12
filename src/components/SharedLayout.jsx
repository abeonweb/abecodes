import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"
import "../css/Nav.css";
export default function SharedLayout() {
  return (
    <div id="shared-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
