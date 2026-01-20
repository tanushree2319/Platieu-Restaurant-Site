import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/Home/Section8-FooterLogo.png';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="container">
          <div className="row align-items-center">
            {/* Left - CTA */}
            <div className="col-lg-6">
              <h2 className="footer-cta-title">Explore Our French-Inspired Dishes</h2>
              <Link to="/menu" className="btn-view-menu text-decoration-none">
                View Menu
                <span className="arrow">→</span>
              </Link>
            </div>

            {/* Right - Links and Social */}
            <div className="col-lg-6">
              <div className="footer-links-wrapper">
                <div className="footer-links-col">
                  <Link to="/" className="footer-links-title text-decoration-none">Home</Link>
                  <Link to="/menu" className="footer-links-title text-decoration-none">Menu</Link>
                  <Link to="/our-story" className="footer-links-title text-decoration-none">Our Story</Link>
                  <Link to="/reserve" className="footer-links-title text-decoration-none">Reservation</Link>
                  <Link to="/news" className="footer-links-title text-decoration-none">News</Link>
                </div>
                <div className="footer-social-col">
                  <h4 className="footer-social-title">Connect On</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon facebook" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon instagram" title="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon twitter" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon whatsapp" title="WhatsApp">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <p className="footer-copyright">©Platieu 2025. All rights reserved.</p>
            </div>
            <div className="col-auto">
              <div className="footer-bottom-links">
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <span className="separator">•</span>
                <Link to="/terms-of-use" className="footer-link">Terms of Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="footer-logo-wrapper">
        <img src={footerLogo} alt="Platieu" className="footer-logo" />
      </div>
    </footer>
  );
}

