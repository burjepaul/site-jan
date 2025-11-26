import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/acorn.svg";
import { useAuth } from "../../context/AuthContext";
import AuthModalManager from "../AuthModal/AuthModalManager";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const {user, logout}  = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Logo className="logo" />

        {/* Hamburger menu icon (visible on mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
          <div className={menuOpen ? "bar open" : "bar"}></div>
        </div>

        {/* Navigation links */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Galerie" onClick={() => setMenuOpen(false)}>Galerie</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/licitatie" onClick={() => setMenuOpen(false)}>Licitatie</Link></li>
          <li><Link to="/FAQ" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
          <li>
            {
              user ?
                  <>
                    <p>{user.email}</p>
                    <button className="nav-button" onClick={logout}>Logout</button>
                  </>
                  :
                  <AuthModalManager/>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
