import '../../styles/components/layout/NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className='link-navbar' to="/">Home</NavLink>
      <NavLink className='link-navbar' to="/tareasOAV">Home Orlando</NavLink>
      <NavLink className='link-navbar' to="/about">About</NavLink>
    </nav>

    
  );
};
export default NavBar;


