import React from 'react';
import menuBg from '../assets/Menu/background.js';
import MenuSection2 from '../components/MenuSection2';
import MenuSection3 from '../components/MenuSection3';
import MenuSection4 from '../components/MenuSection4';

export default function Menu() {
  return (
    <>
      <section className="menu-hero-section">
        <div className="menu-hero-bg" style={{ backgroundImage: `url(${menuBg})` }} />
        <div className="menu-hero-overlay" />
        <div className="menu-hero-content">
          <span className="menu-ornament" aria-hidden="true" />
          <h1 className="menu-hero-title">Discover Our Curated Culinary Selection</h1>
          <p className="menu-hero-sub">From timeless classics to signature creations, our menu is a celebration of fresh ingredients and refined craftsmanship.</p>
        </div>
      </section>
      <MenuSection2 />
      <MenuSection3 />
      <MenuSection4 />
    </>
  );
}
