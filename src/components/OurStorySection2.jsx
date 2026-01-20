import React from 'react';
import Section2Image1 from '../assets/AboutUs/Section2Image1.png';
import Section2Image2 from '../assets/AboutUs/Section2Image2.png';
import '../styles/_ourstory.scss';

const OurStorySection2 = () => (
  <section className="ourstory-section2">
    <div className="container">
      <div className="row g-4 align-items-start">
        <div className="col-lg-4">
          <h2 className="section2-title">A Culinary Journey Rooted in Tradition</h2>
        </div>
        <div className="col-lg-8">
          <p className="section2-description">
            Founded in the heart of France, Platieu is more than just a restaurant—it’s a celebration of flavors,
            culture, and the joy of gathering. Our mission is simple: to bring soulful dining experiences that
            blend local ingredients with refined techniques, served with warmth and care.
          </p>
          <p className="section2-description mb-0">
            From humble beginnings to a thriving culinary destination, our story continues to evolve with each
            plate we serve and every guest we welcome.
          </p>
        </div>
      </div>

      <div className="row g-3 section2-stats-row">
        <div className="col-12">
          <div className="section2-stats d-flex flex-wrap justify-content-center align-items-center">
            <div className="section2-stat text-center">
              <div className="stat2-value">10+ years</div>
              <div className="stat2-label">of Culinary Excellence</div>
            </div>
            <div className="section2-divider d-none d-sm-block" />
            <div className="section2-stat text-center">
              <div className="stat2-value">5 awards</div>
              <div className="stat2-label">Winning Chefs</div>
            </div>
            <div className="section2-divider d-none d-sm-block" />
            <div className="section2-stat text-center">
              <div className="stat2-value">4.9/5</div>
              <div className="stat2-label">Customer Rating on Average</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={Section2Image1}
            alt="Culinary Craft"
            className="section2-image-main"
          />
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <img
            src={Section2Image2}
            alt="Kitchen Team"
            className="section2-image-side"
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection2;

