import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import countryFlag from '../assets/Home/FranceFlag.jpg';

export default function ReserveSection2() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+33',
    phoneNumber: '',
    reservationDate: '',
    reservationTime: '',
    numberOfGuests: '',
    specialRequest: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    // Redirect to thank you page after successful submission
    navigate('/thank-you');
  };

  return (
    <section className="reserve-form-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <div className="reservation-form-wrapper">
              <h2 className="reservation-form-title mb-4">Reservation Form Fields</h2>
              <form className="reservation-form" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="form-group mb-4">
                  <label htmlFor="fullName" className="form-label">Full name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group mb-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="We'll send your confirmation here"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="form-group mb-4">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                  <div className="phone-input-group">
                    <div className="country-code-selector">
                      <img src={countryFlag} alt="Country Flag" className="country-flag-icon" />
                      <select
                        name="phoneCode"
                        className="country-code-select"
                        value={formData.phoneCode}
                        onChange={handleChange}
                      >
                        <option value="+1">+1</option>
                        <option value="+33">+33</option>
                        <option value="+44">+44</option>
                        <option value="+49">+49</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control phone-input"
                      placeholder="So we can reach you if needed"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Reservation Date */}
                <div className="form-group mb-4">
                  <label htmlFor="reservationDate" className="form-label">Reservation Date</label>
                  <div className="input-with-icon date-input-wrapper">
                    <input
                      type="date"
                      id="reservationDate"
                      name="reservationDate"
                      className="form-control"
                      placeholder="Select the date of your visit"
                      value={formData.reservationDate}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-icon date-icon">📅</span>
                  </div>
                </div>

                {/* Reservation Time */}
                <div className="form-group mb-4">
                  <label htmlFor="reservationTime" className="form-label">Reservation Time</label>
                  <div className="input-with-icon time-input-wrapper">
                    <input
                      type="time"
                      id="reservationTime"
                      name="reservationTime"
                      className="form-control"
                      placeholder="Choose your preferred time"
                      value={formData.reservationTime}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-icon time-icon">🕐</span>
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="form-group mb-4">
                  <label htmlFor="numberOfGuests" className="form-label">Number of Guests</label>
                  <input
                    type="number"
                    id="numberOfGuests"
                    name="numberOfGuests"
                    className="form-control"
                    placeholder="Let us know how many are dining"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                </div>

                {/* Special Request */}
                <div className="form-group mb-4">
                  <label htmlFor="specialRequest" className="form-label">Special Request</label>
                  <textarea
                    id="specialRequest"
                    name="specialRequest"
                    className="form-control"
                    rows="4"
                    placeholder="Input text here"
                    value={formData.specialRequest}
                    onChange={handleChange}
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="form-group mb-4">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      className="form-check-input"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="agreeToTerms" className="form-check-label">
                      By checking the box you agree to our <Link to="/terms-of-use" className="terms-link">Terms of Service</Link> and <Link to="/privacy-policy" className="terms-link">Privacy Policy</Link>.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-reserve-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

