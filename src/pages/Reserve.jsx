import React, { useState } from 'react';
import reserveBg from '../assets/TableReservation/Background.png';
import ReserveSection2 from '../components/ReserveSection2';
import Footer from '../components/Footer';

export default function Reserve() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="reserve-hero-section">
        <div className="reserve-hero-bg" style={{ backgroundImage: `url(${reserveBg})` }} />
        <div className="reserve-hero-overlay" />
        <div className="reserve-hero-content">
          <span className="reserve-ornament" aria-hidden="true" />
          <h1 className="reserve-hero-title">Reserve Your Table at Platieu</h1>
          <p className="reserve-hero-sub">We're excited to host you! Kindly fill out the reservation form below to secure your table. To confirm your booking, a deposit of $25 is required. Please upload proof of payment at the end of the form.</p>
        </div>
      </section>

      {/* FORM SECTION */}
      <ReserveSection2 />

      {/* FOOTER */}
      <Footer />
    </>
  );
}


