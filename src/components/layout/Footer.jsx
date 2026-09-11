import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="main-footer style-five" style={{ backgroundColor: '#0099ff' }}>
      <div className="auto-container">
        <div className="widget-wrapper">
          <div className="row">
            {/* About Widget */}
            <div className="col-lg-4 col-md-6 about-widget-five footer-widget">
              <img
                src="/nimg/logo-footer.png?v=9"
                style={{ height: '6.5rem', maxWidth: '320px', width: 'auto', objectFit: 'contain', marginBottom: '20px' }}
                alt="EchoStar"
              />
              <div style={{ color: 'white' }} className="text">
                The great explorer of the truth, theats masters builders off human happiness no one rejects all of dislikes, or avoids all pleasures itself, because it’s pleasures rationally encounter expounds actually our great explorer of thetruth.
              </div>
            </div>

            {/* Quick Links Widget */}
            <div className="col-lg-4 col-md-6 link-widget-three footer-widget">
              <h4 className="widget-title">quick Links</h4>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li><Link style={{ color: 'white' }} to="/">Home</Link></li>
                    <li><Link style={{ color: 'white' }} to="/about">About Us</Link></li>
                    <li><Link style={{ color: 'white' }} to="/services">Service</Link></li>
                    <li><Link style={{ color: 'white' }} to="/gallery">Gallery</Link></li>
                    <li><Link style={{ color: 'white' }} to="/contact">Contact Us</Link></li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul>
                    <li><Link style={{ color: 'white' }} to="/abatherapy">ABA Therapy</Link></li>
                    <li><Link style={{ color: 'white' }} to="/speech">Speech Therapy</Link></li>
                    <li><Link style={{ color: 'white' }} to="/language">Language Therapy</Link></li>
                    <li><Link style={{ color: 'white' }} to="/occupation">Occupational therapy</Link></li>
                    <li><Link style={{ color: 'white' }} to="/oralfeeding">Speech Clarity</Link></li>
                    <li><Link style={{ color: 'white' }} to="/specialedu">Special Education</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Address & Contact Widget */}
            <div className="col-lg-4 col-md-6 about-widget-five footer-widget">
              <h4 className="widget-title">Address</h4>
              <div style={{ color: 'white', marginBottom: '15px' }} className="text">
                <i className="fa-solid fa-location-dot"></i> Gurugram, Sohna, Faridabad, Delhi
              </div>
              <h4 className="widget-title">Contact Us</h4>
              <ul>
                <li>
                  <strong><i className="fa-solid fa-phone"></i>Phone:</strong>{' '}
                  <a style={{ color: 'white' }} href="tel:+919812506562"> +91-9812506562 </a>
                </li>
                <li>
                  <strong><i className="fa-solid fa-envelope"></i>Email:</strong>{' '}
                  <a style={{ color: 'white' }} href="mailto:echostar.india@gmail.com"> echostar.india@gmail.com </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <center>
        <div className="copy-right-text" style={{ color: 'white' }}>
          Design & Developed by <span className="theme-color-four" style={{ color: 'white' }}>Vishwas</span>
        </div>
      </center>
    </footer>
  );
}
