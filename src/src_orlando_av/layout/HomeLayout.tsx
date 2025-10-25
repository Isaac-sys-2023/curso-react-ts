// src/src_orlando_av/layout/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../componentes/layout/HeaderOAV";
import Footer from "../componentes/layout/FooterOAV";
import NavBar from "../componentes/layout/NavbarOAV";
import "../styles/layout/MainLayout.css";

//EN AQUI APRENDI ALGO INTERESANTE, 2 MANERAS DE HACER LAYOUTS
/*Outlet:	Lugar donde React Router inyecta las rutas hijas
children: ReactNode	Se usa cuando tú pasas manualmente el contenido al componente*/
const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
