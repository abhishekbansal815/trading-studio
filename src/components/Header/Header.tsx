import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  // Responsive hamburger menu logic remains here
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="branding">
          <h1>TradeStudio</h1>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/create-strategy">Create Strategy</Link>
          <Link to="/simulator">Simulator</Link>
          <Link to="/">Features</Link>
          <Link to="/">Documentation</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
          <button className="login-btn">Log In</button>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
