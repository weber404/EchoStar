'use strict';

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper to add 'current' class to active nav items
  const isCurrent = (path: string) => pathname === path ? 'current' : '';

  return (
    <header className={`main-header header-style-five ${isSticky ? 'fixed-header' : ''}`}>
      {/* Header Upper */}
      <div className="header-upper style-five">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="logo-column">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <img src="/nimg/echostar-logo.png?v=4" alt="EchoStar Logo" style={{ height: '10rem' }} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="right-column">
              <div className="option-wrapper">
                <div className="nav-outer">
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-xl navbar-dark">
                    <div className="collapse navbar-collapse">
                      <ul className="navigation">
                        <li className={isCurrent('/')}><Link href="/">Home</Link></li>
                        <li className={isCurrent('/about')}><Link href="/about">About Us</Link></li>
                        <li className="dropdown">
                          <a href="#">Services</a>
                          <ul>
                            <li><Link href="/services/abatherapy">ABA Therapy</Link></li>
                            <li><Link href="/services/speech">Speech Therapy</Link></li>
                            <li><Link href="/services/language">Language &amp; Communication Therapy</Link></li>
                            <li><Link href="/services/oralfeeding">Speech Clarity and Oral Feeding Therapy</Link></li>
                            <li><Link href="/services/stutering">Stuttering Stammering Therapy</Link></li>
                            <li><Link href="/services/specialedu">Special Education Therapy</Link></li>
                            <li><Link href="/services/occupation">Occupational Therapy</Link></li>
                          </ul>
                        </li>
                        <li className={isCurrent('/gallery')}><Link href="/gallery">Gallery</Link></li>
                        <li className={isCurrent('/contact')}><Link href="/contact">Contact Us</Link></li>
                      </ul>
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
                  <Link href="/">
                    <img src="/nimg/echostar-logo.png?v=4" style={{ height: '8rem' }} alt="EchoStar Logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-column">
              <div className="nav-outer">
                <div className="nav-inner">
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-xl navbar-dark">
                    <div className="collapse navbar-collapse">
                      <ul className="navigation">
                        <li className={isCurrent('/')}><Link href="/">Home</Link></li>
                        <li className={isCurrent('/about')}><Link href="/about">About Us</Link></li>
                        <li className="dropdown">
                          <a href="#">Services</a>
                          <ul>
                            <li><Link href="/services/abatherapy">ABA Therapy</Link></li>
                            <li><Link href="/services/speech">Speech Therapy</Link></li>
                            <li><Link href="/services/language">Language &amp; Communication Therapy</Link></li>
                            <li><Link href="/services/oralfeeding">Speech Clarity and Oral Feeding Therapy</Link></li>
                            <li><Link href="/services/stutering">Stuttering Stammering Therapy</Link></li>
                            <li><Link href="/services/specialedu">Special Education Therapy</Link></li>
                            <li><Link href="/services/occupation">Occupational Therapy</Link></li>
                          </ul>
                        </li>
                        <li className={isCurrent('/gallery')}><Link href="/gallery">Gallery</Link></li>
                        <li className={isCurrent('/contact')}><Link href="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                  </nav>
                  {/* Main Menu End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Header */}

      {/* Mobile Menu */}
      <div className={`mobile-menu style-five ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="menu-box">
          <div className="logo">
            <Link href="/" onClick={closeMobileMenu}>
              <img src="/nimg/echostar-logo.png?v=4" alt="EchoStar Logo" style={{ height: '7rem' }} />
            </Link>
          </div>
          {/* Toggle Button in Header */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close navigation" : "Toggle Navigation"}>
              <span className={isMobileMenuOpen ? "flaticon-close" : "flaticon-menu"}></span>
            </button>
          </div>
          
          {/* Mobile Navigation Links */}
          <nav className="main-menu navbar-expand-xl navbar-dark">
            <div className="collapse navbar-collapse" style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
              <ul className="navigation">
                <li className={isCurrent('/')} onClick={closeMobileMenu}><Link href="/">Home</Link></li>
                <li className={isCurrent('/about')} onClick={closeMobileMenu}><Link href="/about">About Us</Link></li>
                <li className="dropdown">
                  <a href="#">Services</a>
                  <ul>
                    <li onClick={closeMobileMenu}><Link href="/services/abatherapy">ABA Therapy</Link></li>
                    <li onClick={closeMobileMenu}><Link href="/services/speech">Speech Therapy</Link></li>
                    <li onClick={closeMobileMenu}><Link href="/services/language">Language &amp; Communication Therapy</Link></li>
                    <li onClick={closeMobileMenu}><Link href="/services/oralfeeding">Speech Clarity and Oral Feeding Therapy</Link></li>
                    <li onClick={closeMobileMenu}><Link href="/services/stutering">Stuttering Stammering Therapy</Link></li>
                    <li onClick={closeMobileMenu}><Link href="/services/specialedu">Special Education Therapy</Link></li>
                    <li onClick={closeMobileMenu}><Link href="/services/occupation">Occupational Therapy</Link></li>
                  </ul>
                </li>
                <li className={isCurrent('/gallery')} onClick={closeMobileMenu}><Link href="/gallery">Gallery</Link></li>
                <li className={isCurrent('/contact')} onClick={closeMobileMenu}><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* End Mobile Menu */}

      {/* Toggle trigger overlay for mobile menu layout */}
      <div className="nav-overlay" onClick={closeMobileMenu}>
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
    </header>
  );
}
