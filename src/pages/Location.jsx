import React from 'react';
import locationBg from '../assets/ContactUs/Background.jpg';
import LocationSection2 from '../components/LocationSection2';
import LocationSection3 from '../components/LocationSection3';
import LocationSection4 from '../components/LocationSection4';

export default function Location() {
  return (
    <>
      {/* LOCATION HERO SECTION */}
      <section className="location-hero-section">
        <div className="location-hero-bg" style={{ backgroundImage: `url(${locationBg})` }} />
        <div className="location-hero-overlay" />
        <div className="location-hero-content">
          <span className="location-ornament" aria-hidden="true" />
          <h1 className="location-hero-title">We’d Love to Hear From You</h1>
          <p className="location-hero-sub">Whether you have a question, special request, or simply want to say hello, our team is here to help.</p>
        </div>
      </section>
      <LocationSection2 />
      <LocationSection3 />
      <LocationSection4 />
    </>
  );
}
