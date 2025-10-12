import { Outlet } from "react-router-dom";
import Header from "../componentes/layout/Header";
import NavBar from "../componentes/layout/Navbar";
import Sidebar from "../componentes/layout/SideBar";
import Footer from "../componentes/layout/Footer";

const FullLayout = () => {
  return (
    <div className="layout-full">
      <Header />
      <NavBar />
      <div className="main-area">
        <Sidebar />
        <main className="content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default FullLayout;