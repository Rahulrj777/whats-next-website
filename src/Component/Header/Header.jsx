import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
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
          <Link to="home" smooth={true} duration={500}><span>Home</span></Link>
          <Link to="features" smooth={true} duration={500}><span>Features</span></Link>
          <Link to="pricing" smooth={true} duration={500}><span>Pricing</span></Link>
          <Link to="contact" smooth={true} duration={500}><span>Contact</span></Link>
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
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}><span>Home</span></Link>
            <Link to="features" smooth={true} duration={500} onClick={closeMenu}><span>Features</span></Link>
            <Link to="pricing" smooth={true} duration={500} onClick={closeMenu}><span>Pricing</span></Link>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}><span>Contact</span></Link>
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
