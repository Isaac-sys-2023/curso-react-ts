import logoScesiLearn from "../../assets/LogoSCESILEARN.jpg"
import '../../styles/layout/Header.css'
import NavBar from "./Navbar";

const Header = () => {
    return(
        <header className="header">
            <img className="logo" src={logoScesiLearn} alt="Logo ScesiLearn" />
            <NavBar/>
            <button className="header-button">Inscribirme</button>
        </header>
    )
}
export default Header;