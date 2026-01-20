import React from 'react';
import Section4Image from '../assets/AboutUs/Section4Image.png';
import { Link } from 'react-router-dom';

const OurStorySection4 = () => (
  <section className="ourstory-section4-outer py-5">
    <div className="container">
      <div className="cta-card rounded-4 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center" style={{background:'#fff'}}>
        <div className="flex-fill text-section text-md-start text-center mb-4 mb-md-0">
          <h2 className="cta-title mb-3">Let’s Create Your Next <br className="d-none d-lg-block"/>Culinary Memory</h2>
          <p className="cta-desc mb-4">Have a question, a special request, or just want to say hello? <br className="d-none d-md-block"/>Our team would love to hear from you.</p>
          <Link to="/contact" className="btn cta-btn-yellow px-4 py-2 fw-semibold rounded-pill">
            Contact Us <span className="ms-1">↗</span>
          </Link>
        </div>
        <div className="flex-fill d-flex justify-content-center align-items-center">
          <img src={Section4Image} alt="Culinary Dish" className="cta-img img-fluid rounded-4" style={{maxWidth: '370px', minWidth:'210px', aspectRatio:'1/1', objectFit:'cover'}} />
        </div>
      </div>
    </div>
  </section>
);

export default OurStorySection4;


