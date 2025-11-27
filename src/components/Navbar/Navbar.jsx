import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/acorn.svg";
import { useAuth } from "../../context/AuthContext";
import AuthModalManager from "../AuthModal/AuthModalManager";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";
import languages_text from "../../const.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const {user, logout}  = useAuth();
  const {language} = useLanguage();
  const text = languages_text[language]


  console.log(text.nav)

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
          <li><Link to="/" onClick={() => setMenuOpen(false)}>{text.nav[0]}</Link></li>
          <li><Link to="/Galerie" onClick={() => setMenuOpen(false)}>{text.nav[1]}</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>{text.nav[2]}</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{text.nav[3]}</Link></li>
          <li><Link to="/licitatie" onClick={() => setMenuOpen(false)}>{text.nav[4]}</Link></li>
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
          <li><LanguageSwitcher/></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
