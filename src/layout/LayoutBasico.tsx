import { Outlet } from "react-router-dom";
import Header from "../componentes/layout/Header";
import Footer from "../componentes/layout/Footer";
import "../styles/layout/Layout.css";

const LayoutBasico = () =>{
    return(
        <div className="layout-basic">
            <Header/>
            <main className="content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default LayoutBasico;