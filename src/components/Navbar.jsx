import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('light');
      setTheme('light');
      localStorage.setItem('bmd-theme', 'light');
    } else {
      root.classList.remove('light');
      setTheme('dark');
      localStorage.setItem('bmd-theme', 'dark');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('bmd-theme');
    const root = document.documentElement;
    if (savedTheme === 'dark') {
      root.classList.remove('light');
      setTheme('dark');
    } else {
      root.classList.add('light');
      setTheme('light');
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="navbar-logo" id="nav-logo">
          <Cpu className="logo-icon" size={28} />
          <span className="logo-text">BMD <span className="logo-text-accent">Global</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-desktop-menu">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link-item">{link.name}</a>
              </li>
            ))}
          </ul>
          
          <button 
            type="button" 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            id="theme-toggle"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#contact" className="btn btn-primary btn-sm nav-cta-btn" id="nav-cta-btn">
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="navbar-mobile-actions">
          <button 
            type="button" 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            id="theme-toggle-mobile"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            type="button" 
            className="mobile-menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`navbar-mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-nav-link-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-cta-li">
            <a 
              href="#contact" 
              className="btn btn-primary w-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
