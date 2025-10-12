import { Outlet } from "react-router-dom";
import Header from "../componentes/layout/Header";
import Sidebar from "../componentes/layout/SideBar";
import Footer from "../componentes/layout/Footer";

export const DashboardLayout = () => {
  return (
    <div className="layout-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </div>
      <Footer/>
    </div>
  );
};