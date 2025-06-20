import { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        <div className="navlink desktop-only">
          <Link to="home"><span>Home</span></Link>
          <Link to="features"><span>Features</span></Link>
          <Link to="pricing"><span>Pricing</span></Link>
          <Link to="contact"><span>Contact</span></Link>
        </div>

        <div className="btn desktop-only">
          <span>GET DEMO</span>
          <span>BUY NOW</span>
        </div>

        <div className="burger-menu mobile-only" onClick={openMenu}>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <div className={`side-drawer ${menuOpen ? 'open' : ''}`}>
          <div className="drawer-logo">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <div className="drawer-links">
            <Link to="home" onClick={closeMenu}><span>Home</span></Link>
            <Link to="features" onClick={closeMenu}><span>Features</span></Link>
            <Link to="pricing" onClick={closeMenu}><span>Pricing</span></Link>
            <Link to="contact" onClick={closeMenu}><span>Contact</span></Link>
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
