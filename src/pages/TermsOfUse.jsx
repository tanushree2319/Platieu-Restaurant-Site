import React, { useEffect } from 'react';
import Footer from '../components/Footer';

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="policy-hero-section">
        <div className="container">
          <div className="policy-hero-content">
            <h1 className="policy-title">Terms of Use</h1>
            <p className="policy-intro">
              Welcome to Platieu. These Terms of Use govern your access to and use of our website and services. By using our website and making a reservation, you agree to comply with and be bound by these terms. Please read them carefully.
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
              <h2 className="policy-section-title">1. Eligibility</h2>
              <p className="policy-text">
                By using our website and services, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms of Use. If you are making a reservation on behalf of others, you are responsible for ensuring that all members of your party meet these requirements.
              </p>
            </div>

            {/* Section 2 */}
            <div className="policy-section">
              <h2 className="policy-section-title">2. Reservation & Deposit Policy</h2>
              <p className="policy-text">
                To secure your reservation, a non-refundable deposit of $25 is required. This deposit will be applied toward your final bill. You will be required to upload proof of payment (transfer receipt or deposit confirmation) when completing your reservation form. Failure to provide payment confirmation may result in the cancellation of your reservation.
              </p>
            </div>

            {/* Section 3 */}
            <div className="policy-section">
              <h2 className="policy-section-title">3. Cancellation & Refund</h2>
              <p className="policy-text">
                Cancellations made at least 24 hours in advance of your reservation time may be eligible for a refund of the deposit, subject to our discretion. Cancellations made less than 24 hours in advance are not eligible for refunds. No-shows will forfeit the deposit. Refunds, if applicable, will be processed within 5-7 business days.
              </p>
            </div>

            {/* Section 4 */}
            <div className="policy-section">
              <h2 className="policy-section-title">4. User Conduct</h2>
              <p className="policy-text">
                You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="policy-list">
                <li>Provide false, inaccurate, or misleading information</li>
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Upload or transmit any viruses, malware, or other harmful code</li>
                <li>Post or transmit any content that is offensive, defamatory, or violates the rights of others</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="policy-section">
              <h2 className="policy-section-title">5. Intellectual Property</h2>
              <p className="policy-text">
                All content on this website, including text, graphics, logos, images, and software, is the property of Platieu or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
              </p>
            </div>

            {/* Section 6 */}
            <div className="policy-section">
              <h2 className="policy-section-title">6. Website Availability</h2>
              <p className="policy-text">
                We strive to ensure that our website is available 24/7, but we do not guarantee uninterrupted or error-free access. We reserve the right to modify, suspend, or discontinue any aspect of the website at any time without notice. We are not liable for any loss or damage resulting from website unavailability.
              </p>
            </div>

            {/* Section 7 */}
            <div className="policy-section">
              <h2 className="policy-section-title">7. Limitation of Liability</h2>
              <p className="policy-text">
                To the maximum extent permitted by law, Platieu and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or services. Our total liability for any claims shall not exceed the amount you paid for our services.
              </p>
            </div>

            {/* Section 8 */}
            <div className="policy-section">
              <h2 className="policy-section-title">8. Modifications to Terms</h2>
              <p className="policy-text">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically.
              </p>
            </div>

            {/* Section 9 */}
            <div className="policy-section">
              <h2 className="policy-section-title">9. Governing Law</h2>
              <p className="policy-text">
                These Terms of Use are governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Paris, France.
              </p>
            </div>

            {/* Contact Us */}
            <div className="policy-contact">
              <h3 className="policy-contact-title">Contact Us</h3>
              <p className="policy-contact-text">
                <strong>Platieu Legal Department</strong><br />
                Email: <a href="mailto:legal@platieu.com" className="policy-link">legal@platieu.com</a><br />
                Address: 12 Rue de Paris, 75001 Paris, France
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}


