import React, { useEffect } from 'react';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="policy-hero-section">
        <div className="container">
          <div className="policy-hero-content">
            <h1 className="policy-title">Privacy Policy</h1>
            <p className="policy-intro">
              At Platieu, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and make reservations with us.
            </p>
            <p className="policy-update">Update • Effective Date: 30 May 2025 • 10.45 PM</p>
          </div>
        </div>
      </section>

      <section className="policy-content-section">
        <div className="container">
          <div className="policy-content-wrapper">
            
            {/* Section 1 */}
            <div className="policy-section">
              <h2 className="policy-section-title">1. Information We Collect</h2>
              
              <div className="policy-subsection">
                <h3 className="policy-subsection-title">a. Personal Information</h3>
                <ul className="policy-list">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Reservation information (date, time, party size)</li>
                  <li>Payment confirmation (upload of transfer receipt or deposit proof)</li>
                </ul>
              </div>

              <div className="policy-subsection">
                <h3 className="policy-subsection-title">b. Non-Personal Information</h3>
                <ul className="policy-list">
                  <li>Browser type and version</li>
                  <li>IP address</li>
                  <li>Device type</li>
                  <li>Referral URLs and on-site interactions (pages visited, clicks, etc.)</li>
                  <li>Date and time of access</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="policy-section">
              <h2 className="policy-section-title">2. How We Use Your Information</h2>
              <ul className="policy-list">
                <li>Confirm and manage your table reservations</li>
                <li>Process required deposits</li>
                <li>Respond to customer support inquiries</li>
                <li>Improve website functionality and user experience</li>
                <li>Send marketing emails (only if you opt-in)</li>
                <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="policy-section">
              <h2 className="policy-section-title">3. Data Sharing and Disclosure</h2>
              <p className="policy-text">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
              </p>
              <ul className="policy-list">
                <li>Payment service providers</li>
                <li>IT and hosting partners</li>
                <li>Legal authorities</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="policy-section">
              <h2 className="policy-section-title">4. Data Storage and Security</h2>
              <p className="policy-text">
                We implement various security measures to protect your personal information, including:
              </p>
              <ul className="policy-list">
                <li>Encrypted storage for sensitive data</li>
                <li>Secure HTTPS protocol</li>
                <li>Limited access to your data</li>
              </ul>
              <p className="policy-text">
                However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="policy-section">
              <h2 className="policy-section-title">5. Your Rights</h2>
              <p className="policy-text">
                You have the right to:
              </p>
              <ul className="policy-list">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="policy-text">
                To exercise these rights, please contact us at: <a href="mailto:privacy@platieu.com" className="policy-link">privacy@platieu.com</a>
              </p>
            </div>

            {/* Section 6 */}
            <div className="policy-section">
              <h2 className="policy-section-title">6. Cookies</h2>
              <p className="policy-text">
                We use cookies to:
              </p>
              <ul className="policy-list">
                <li>Remember user preferences</li>
                <li>Analyze traffic and site performance</li>
                <li>Improve service delivery</li>
              </ul>
              <p className="policy-text">
                You can disable cookies in your browser settings, but this may affect your experience on our website.
              </p>
            </div>

            {/* Section 7 */}
            <div className="policy-section">
              <h2 className="policy-section-title">7. Third-Party Links</h2>
              <p className="policy-text">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Section 8 */}
            <div className="policy-section">
              <h2 className="policy-section-title">8. Policy Updates</h2>
              <p className="policy-text">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* Contact Us */}
            <div className="policy-contact">
              <h3 className="policy-contact-title">Contact Us</h3>
              <p className="policy-contact-text">
                <strong>Platieu Customer Support</strong><br />
                Email: <a href="mailto:contact@platieu.com" className="policy-link">contact@platieu.com</a><br />
                Phone: <a href="tel:+33123456789" className="policy-link">+33 1 23 45 67 89</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


