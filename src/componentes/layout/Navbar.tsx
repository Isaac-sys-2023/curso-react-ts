import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca</Link>
    </nav>
  );
};
export default NavBar;