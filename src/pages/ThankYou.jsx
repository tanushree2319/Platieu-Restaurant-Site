import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ThankYou() {
  return (
    <>
      <section className="thankyou-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div className="thankyou-card">
                {/* Success Icon */}
                <div className="thankyou-icon-wrapper">
                  <div className="thankyou-success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h1 className="thankyou-title">Thank You for Your Reservation</h1>

                {/* Message */}
                <p className="thankyou-message">
                  Your table has been successfully requested. We've received your reservation details and deposit proof. A confirmation email will be sent to you shortly.
                </p>

                {/* Detail Transaction */}
                <div className="thankyou-transaction">
                  <h2 className="transaction-title">Detail Transaction</h2>
                  <div className="transaction-details">
                    <div className="transaction-row">
                      <span className="transaction-label">Transaction ID</span>
                      <span className="transaction-value">00100102092024</span>
                    </div>
                    <div className="transaction-row">
                      <span className="transaction-label">Date</span>
                      <span className="transaction-value">01.05 Am • 2 Jun 2025</span>
                    </div>
                    <div className="transaction-row">
                      <span className="transaction-label">Type Services</span>
                      <span className="transaction-value">Dine-In</span>
                    </div>
                    <div className="transaction-row">
                      <span className="transaction-label">Total</span>
                      <span className="transaction-value transaction-total">$44.22</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="thankyou-buttons">
                  <button className="btn btn-download-receipt">
                    Download Receipt
                  </button>
                  <Link to="/menu" className="btn btn-explore-menu">
                    Explore Our Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


