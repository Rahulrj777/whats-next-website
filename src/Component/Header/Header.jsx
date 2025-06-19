import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <div className="navlink desktop-only">
          <span>Home</span>
          <span>Features</span>
          <span>Pricing</span>
          <span>Contact</span>
        </div>

        <div className="btn desktop-only">
          <span>GET DEMO</span>
          <span>BUY NOW</span>
        </div>

        <div className="burger-menu mobile-only" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <div className={`side-drawer ${menuOpen ? 'open' : ''}`}>
          <div className="drawer-logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <div className="drawer-links">
            <span onClick={closeMenu}>Home</span>
            <span onClick={closeMenu}>Features</span>
            <span onClick={closeMenu}>Pricing</span>
            <span onClick={closeMenu}>Contact</span>
          </div>
          <div className="drawer-buttons">
            <span>GET DEMO</span>
            <span>BUY NOW</span>
          </div>
        </div>

        {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}
      </div>
    </>
  );
};

export default Header;
