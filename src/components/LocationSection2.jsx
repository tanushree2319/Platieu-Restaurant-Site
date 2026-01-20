import React from 'react';
import { Link } from 'react-router-dom';
import mapImage from '../assets/ContactUs/MapImage.png';
import countryFlag from '../assets/Home/section5Country.png';

export default function LocationSection2() {
  return (
    <section className="location-section2">
      <div className="container">
        <div className="row g-5">
          {/* Left - Contact Form */}
          <div className="col-lg-5">
            <div className="location-form-wrapper">
              <h3 className="location-contact-title">Contact Us</h3>
              <form className="location-contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Input text here" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="phone-input-wrapper">
                    <div className="country-code-display">
                      <img src={countryFlag} alt="Country Flag" className="country-flag" />
                      <span className="country-text">+1</span>
                    </div>
                    <input type="tel" placeholder="+1 234 567 890" className="form-control" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Input text here" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Input text here" className="form-control" rows="4" />
                </div>

                <p className="form-disclaimer">
                  By checking the box you agree to our <Link to="/terms-of-use">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>

                <button type="submit" className="btn-send-message">Send Message</button>
              </form>
            </div>
          </div>

          {/* Right - Location Info */}
          <div className="col-lg-7">
            <h2 className="location-info-title">Craving Something Delicious?</h2>
            <p className="location-info-subtitle">From savory bites to sweet delights, your cravings end here.</p>

            <div className="location-info-grid">
              <div className="info-item">
                <h4 className="info-item-label">Our Location</h4>
                <p className="info-item-text">📍 21 Rue des Lilas 75001 Paris, France</p>
              </div>
              <div className="info-item">
                <h4 className="info-item-label">Phone Number</h4>
                <p className="info-item-text">📞 +33 612 34 56 78</p>
              </div>
              <div className="info-item">
                <h4 className="info-item-label">Email Address</h4>
                <p className="info-item-text">📧 hello@platieu.com</p>
              </div>
              <div className="info-item">
                <h4 className="info-item-label">Opening Hours</h4>
                <p className="info-item-text">🕐 Monday - Friday: 12:00 PM - 10:30 PM</p>
                <p className="info-item-text">Saturday: 12:00 PM - 11:00 PM</p>
              </div>
            </div>

            {/* Map */}
            <div className="location-map-wrapper">
              <img src={mapImage} alt="Restaurant Location Map" className="location-map-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
