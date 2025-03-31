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
    setIsMenuOpen(false); // Close the mobile menu after clicking
  };

  // Use this for direct navigation when React Router isn't working
  const handleDirectNavigation = (path) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };

  // Close menu on navigation
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`} ref={navbarRef}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Our Deli Logo" className="logo-image" />
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={closeMenu}>About Us</Link>
        </li>
        <li className="nav-item">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleExternalLink('https://www.clover.com/online-ordering/the-deli-of-springfield-springfield');
            }}
            className="menu-link"
          >
            Menu
          </a>
        </li>
        <li className="nav-item catering-item">
          {/* Direct anchor tag instead of Link component for troubleshooting */}
          <a 
            href="/catering" 
            onClick={(e) => {
              e.preventDefault();
              handleDirectNavigation('/admin');
            }}
            className="catering-link"
          >
            Catering & Events
          </a>
        </li>
        <li className="nav-item">
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