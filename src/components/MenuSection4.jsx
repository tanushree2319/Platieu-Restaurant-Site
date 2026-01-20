import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/Home/Section8-FooterLogo.png';

export default function MenuSection4() {
  return (
    <>
      {/* SECTION 4 - FOOTER (copied from Home) */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="container">
            <div className="row align-items-center">
              {/* Left - CTA */}
              <div className="col-lg-6">
                <h2 className="footer-cta-title">Explore Our French-Inspired Dishes</h2>
                <button className="btn-view-menu">
                  View Menu
                  <span className="arrow">→</span>
                </button>
              </div>

              {/* Right - Links and Social */}
              <div className="col-lg-6">
                <div className="footer-links-wrapper">
                  <div className="footer-links-col">
                    <h4 className="footer-links-title">Home</h4>
                    <h4 className="footer-links-title">Menu</h4>
                    <h4 className="footer-links-title">Out Story</h4>
                    <h4 className="footer-links-title">Reservation</h4>
                    <h4 className="footer-links-title">News</h4>
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
    </>
  );
}
