import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isActive = (paths) => {
    const current = location.pathname;
    if (Array.isArray(paths)) {
      return paths.some(p => current === p || current === `${p}.html`);
    }
    return current === paths || current === `${paths}.html`;
  };

  const isServicesActive = [
    '/services', '/service', '/abatherapy', '/speech', '/language',
    '/oralfeeding', '/stutering', '/specialedu', '/occupation'
  ].some(p => location.pathname === p || location.pathname === `${p}.html`);

  const navLinks = (
    <ul className="navigation">
      <li className={isActive(['/', '/index.html']) ? 'current' : ''}>
        <Link to="/">Home</Link>
      </li>
      <li className={isActive(['/about', '/about.html']) ? 'current' : ''}>
        <Link to="/about">About Us</Link>
      </li>
      <li className={`dropdown ${isServicesActive ? 'current' : ''}`}>
        <Link to="/services">Services</Link>
        <ul>
          <li className={isActive(['/abatherapy', '/abatherapy.html']) ? 'current' : ''}>
            <Link to="/abatherapy">ABA Therapy</Link>
          </li>
          <li className={isActive(['/speech', '/speech.html']) ? 'current' : ''}>
            <Link to="/speech">Speech Therapy</Link>
          </li>
          <li className={isActive(['/language', '/language.html']) ? 'current' : ''}>
            <Link to="/language">Language &#038; Communication Therapy</Link>
          </li>
          <li className={isActive(['/oralfeeding', '/oralfeeding.html']) ? 'current' : ''}>
            <Link to="/oralfeeding">Speech Clarity and Oral Feeding Therapy</Link>
          </li>
          <li className={isActive(['/stutering', '/stutering.html']) ? 'current' : ''}>
            <Link to="/stutering">Stuttering Stammering Therapy</Link>
          </li>
          <li className={isActive(['/specialedu', '/specialedu.html']) ? 'current' : ''}>
            <Link to="/specialedu">Special Education Therapy</Link>
          </li>
          <li className={isActive(['/occupation', '/occupation.html']) ? 'current' : ''}>
            <Link to="/occupation">Occupational Therapy</Link>
          </li>
        </ul>
      </li>
      <li className={isActive(['/gallery', '/gallery.html']) ? 'current' : ''}>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li className={isActive(['/contact', '/contact.html']) ? 'current' : ''}>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );

  return (
    <>
      <header className={`main-header header-style-five ${isSticky ? 'fixed-header' : ''}`}>
        {/* Header Upper */}
        <div className="header-upper style-five">
          <div className="auto-container">
            <div className="wrapper-box">
              <div className="logo-column">
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="/nimg/logo3.png?v=9"
                        alt="EchoStar"
                        title="EchoStar"
                        style={{ height: '6.5rem', maxWidth: '340px', width: 'auto', objectFit: 'contain' }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right-column">
                <div className="option-wrapper">
                  <div className="nav-outer">
                    {/* Main Menu */}
                    <nav className="main-menu navbar-expand-xl navbar-dark">
                      <div className="collapse navbar-collapse show">
                        {navLinks}
                      </div>
                    </nav>
                    {/* Main Menu End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Upper */}

        {/* Sticky Header */}
        <div className={`sticky-header style-five ${isSticky ? 'animated slideInDown' : ''}`} style={{ display: isSticky ? 'block' : 'none' }}>
          <div className="auto-container">
            <div className="wrapper-box">
              <div className="logo-column">
                <div className="logo-box">
                  <div className="logo">
                    <Link to="/">
                      <img
                        src="/nimg/logo3.png?v=9"
                        style={{ height: '4.8rem', maxWidth: '250px', width: 'auto', objectFit: 'contain' }}
                        alt="EchoStar"
                        title="EchoStar"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <div className="nav-outer">
                  <div className="nav-inner">
                    <nav className="main-menu navbar-expand-xl navbar-dark">
                      <div className="collapse navbar-collapse show">
                        {navLinks}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu style-five">
          <div className="menu-box">
            <div className="logo">
              <Link to="/">
                <img
                  src="/nimg/logo3.png?v=9"
                  alt="EchoStar"
                  style={{ height: '4.5rem', maxWidth: '230px', width: 'auto', objectFit: 'contain' }}
                />
              </Link>
            </div>
            {/* Main Menu */}
            <nav className="main-menu navbar-expand-xl navbar-dark">
              <div className="navbar-header">
                {/* Toggle Button */}
                <button
                  type="button"
                  className="navbar-toggle"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation"
                >
                  <span className="flaticon-menu"></span>
                </button>
              </div>

              <div
                className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}
                id="navbarSupportedContent"
                style={{ display: mobileMenuOpen ? 'block' : 'none' }}
              >
                <ul className="navigation">
                  <li className={isActive(['/', '/index.html']) ? 'current' : ''}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={isActive(['/about', '/about.html']) ? 'current' : ''}>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className={`dropdown ${isServicesActive ? 'current' : ''}`}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Link to="/services">Services</Link>
                      <div
                        className="dropdown-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileServicesOpen(!mobileServicesOpen);
                        }}
                        style={{ cursor: 'pointer', padding: '10px 15px' }}
                      >
                        <span className={`fa ${mobileServicesOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></span>
                      </div>
                    </div>
                    <ul style={{ display: mobileServicesOpen ? 'block' : 'none' }}>
                      <li className={isActive(['/abatherapy', '/abatherapy.html']) ? 'current' : ''}>
                        <Link to="/abatherapy">ABA Therapy</Link>
                      </li>
                      <li className={isActive(['/speech', '/speech.html']) ? 'current' : ''}>
                        <Link to="/speech">Speech Therapy</Link>
                      </li>
                      <li className={isActive(['/language', '/language.html']) ? 'current' : ''}>
                        <Link to="/language">Language &#038; Communication Therapy</Link>
                      </li>
                      <li className={isActive(['/oralfeeding', '/oralfeeding.html']) ? 'current' : ''}>
                        <Link to="/oralfeeding">Speech Clarity and Oral Feeding Therapy</Link>
                      </li>
                      <li className={isActive(['/stutering', '/stutering.html']) ? 'current' : ''}>
                        <Link to="/stutering">Stuttering Stammering Therapy</Link>
                      </li>
                      <li className={isActive(['/specialedu', '/specialedu.html']) ? 'current' : ''}>
                        <Link to="/specialedu">Special Education Therapy</Link>
                      </li>
                      <li className={isActive(['/occupation', '/occupation.html']) ? 'current' : ''}>
                        <Link to="/occupation">Occupational Therapy</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={isActive(['/gallery', '/gallery.html']) ? 'current' : ''}>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className={isActive(['/contact', '/contact.html']) ? 'current' : ''}>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
