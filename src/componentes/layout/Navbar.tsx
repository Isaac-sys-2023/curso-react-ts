import '../../styles/layout/Nabvar.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className='link-navbar link-selected' to="/">Inicio</NavLink>
      <NavLink className='link-navbar' to="/about">Acerca</NavLink>
    </nav>
  );
};
export default NavBar;