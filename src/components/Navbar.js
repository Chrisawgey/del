import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar({ isDarkMode, toggleDarkMode }) {
  const { t, i18n } = useTranslation();
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

  // Close menu on navigation
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Language switcher
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`} ref={navbarRef}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Our Deli Logo" className="logo-image" />
        </Link>
      </div>

      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={closeMenu}>{t('nav.home')}</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={closeMenu}>{t('nav.about')}</Link>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleExternalLink('https://www.seamless.com/menu/the-deli-of-springfield-234-morris-avenue-springfield/7678704');
            }}
            className="menu-link"
          >
            {t('nav.menu')}
          </a>
        </li>
        <li className="nav-item">
          <Link to="/catering" onClick={closeMenu}>{t('nav.catering')}</Link>
        </li>
        <li className="nav-item language-switcher">
          <button
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <span className="lang-divider">|</span>
          <button
            className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
            onClick={() => changeLanguage('es')}
          >
            ES
          </button>
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