// src/components/NavBar.jsx
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Import your CSS file for styling
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="MyApp Logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
