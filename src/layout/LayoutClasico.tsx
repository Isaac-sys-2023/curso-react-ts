import { Outlet } from "react-router-dom";
import Header from "../componentes/layout/Header";
import Footer from "../componentes/layout/Footer";
import NavBar from "../componentes/layout/Navbar";
import "../styles/layout/Layout.css";

const LayoutClasico = () =>{
    return(
        <div className="layout-classic">
            <Header/>
            <NavBar/>
            <main className="content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default LayoutClasico;