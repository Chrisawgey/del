import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Our Deli Logo" className="logo-image" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/admin" onClick={toggleMenu}>Admin</Link></li>
        <li>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
