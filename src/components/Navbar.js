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

  // Handler for external links
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    if (isMenuOpen) {
      toggleMenu(); // Close the mobile menu after clicking
    }
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`} ref={navbarRef}>
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
        <li>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleExternalLink('https://www.clover.com/online-ordering/the-deli-of-springfield-springfield');
            }}
          >
            Menu
          </a>
        </li>
        <li><Link to="/admin" onClick={toggleMenu}>Catering & Events</Link></li>
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