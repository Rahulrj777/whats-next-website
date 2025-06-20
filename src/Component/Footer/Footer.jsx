import logo from '../../assets/logo.png';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Whats Next Logo" className="logo-img" />
        </div>

        <div className="footer-section">
          <h2 className="footer-title">RESOURCES</h2>
          <ul className="footer-list">
            <li>Documentation</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">SUPPORT</h2>
          <ul className="footer-list">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">CONTACT US</h2>
          <p className="footer-list">
            XXX XXXX, Floor 4 San Francisco, CA
          </p>
          <p className="footer-list">contact@company.com</p>
        </div>
      </div>

      <br className='footer-br'/>

      <div className="footer-bottom">
        © Vishnu Ads and Ventures 2024. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
