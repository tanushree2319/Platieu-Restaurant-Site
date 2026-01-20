import React from 'react';
import { Link } from 'react-router-dom';
import ourStoryBg from '../assets/AboutUs/Background.png';
import OurStorySection2 from '../components/OurStorySection2';
import OurStorySection3 from '../components/OurStorySection3';
import OurStorySection4 from '../components/OurStorySection4';
import Footer from '../components/Footer';

export default function OurStory() {
  return (
    <>
      <section className="ourstory-hero-section">
        <div className="ourstory-hero-bg" style={{ backgroundImage: `url(${ourStoryBg})` }} />
        <div className="ourstory-hero-overlay" />
        <div className="ourstory-hero-content">
          <span className="ourstory-ornament" aria-hidden="true" />
          <h1 className="ourstory-hero-title">Where Passion Meets the Plate</h1>
          <p className="ourstory-hero-sub">At Platieu, every dish begins with a story – crafted from heart, heritage, and honest ingredients.</p>
        </div>
      </section>
      <OurStorySection2 />
      <OurStorySection3 />
      <OurStorySection4 />
      <Footer />
    </>
  );
}
