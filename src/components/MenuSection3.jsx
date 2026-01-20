import React from 'react';
import section4Img1 from '../assets/Home/Section4-Image1.png';
import section4Img2 from '../assets/Home/Section4-Image2.png';
import section4Img3 from '../assets/Home/Section4-Image3.png';

export default function MenuSection3() {
  return (
    <>
      {/* SECTION 3 - TESTIMONIALS (copied from Home) */}
      <section className="section4-testimonials">
        <div className="container-inner">
          <h2 className="section-title">Real Talk From Real Foodies</h2>
          <p className="section-sub">Exceptional dining experiences, shared by those who've tasted the difference.</p>

          <div className="testimonials-row">
            <div className="testimonial-card" style={{ backgroundImage: `url(${section4Img1})` }}>
              <div className="quote-box">
                <p className="quote-text">"An unforgettable meal — flavors were perfectly balanced and presentation was stunning. Will be back!"</p>
                <p className="quote-author">Olivia Martin</p>
                <p className="quote-role">Food Blogger</p>
              </div>
            </div>

            <div className="testimonial-card" style={{ backgroundImage: `url(${section4Img2})` }}>
              <div className="quote-box">
                <p className="quote-text">"Outstanding service and creative dishes. Every bite showcased real care and skill."</p>
                <p className="quote-author">James Carter</p>
                <p className="quote-role">Local Guide</p>
              </div>
            </div>

            <div className="testimonial-card" style={{ backgroundImage: `url(${section4Img3})` }}>
              <div className="quote-box">
                <p className="quote-text">"Cozy atmosphere and delicious menu choices. Perfect spot for dinner with friends."</p>
                <p className="quote-author">Sofia Lee</p>
                <p className="quote-role">Food Enthusiast</p>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <div className="progress-track"><div className="progress-filled" /></div>
            <div className="controls-right">
              <button className="control-btn">◀</button>
              <button className="control-btn">▶</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
