import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/Home/Background.png';
import yellowDesign from '../assets/Home/YellowDesign.png';
import section2Image1 from '../assets/Home/Section2-Image1.png';
import section2Image2 from '../assets/Home/Section2-Image2.png';
import decorLeft from '../assets/Home/Section3-Image1.png';
import decorRight from '../assets/Home/Section3-Image2.png';
import garlicCheeseBread from '../assets/Home/GarlicCheeseBread.png';
import stuffedMushrooms from '../assets/Home/StuffedMushrooms.png';
import bruschettaAlPomodoro from '../assets/Home/BruschettaAlPomodoro.png';
import chickenWingsBBQ from '../assets/Home/ChickenWingsBBQ.png';
import creamyPumpkinSoup from '../assets/Home/CreamyPumpkinSoup.png';
import crispyCaesarSalad from '../assets/Home/CrispyCaesarSalad.png';
import section4Img1 from '../assets/Home/Section4-Image1.png';
import section4Img2 from '../assets/Home/Section4-Image2.png';
import section4Img3 from '../assets/Home/Section4-Image3.png';
import mapImage from '../assets/Home/Section5-Map.png';
import countryFlag from '../assets/Home/section5Country.png';
import section6Image1 from '../assets/Home/Section6-Image1.png';
import section6Image2 from '../assets/Home/Section6-Image2.png';
import section7Image1 from '../assets/Home/section7-image1.png';
import section7Image2 from '../assets/Home/section7-image2.png';
import section7Image3 from '../assets/Home/section7-image3.png';
import footerLogo from '../assets/Home/Section8-FooterLogo.png';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState(0);

  const faqItems = [
    {
      question: "What are the restaurant's hours of operation?",
      answer: "We are open every day from 10:00 AM to 10:00 PM."
    },
    {
      question: "Do I need to make a reservation before coming?",
      answer: "While reservations are recommended, walk-ins are always welcome. Call ahead to secure your table during peak hours."
    },
    {
      question: "Is there a vegetarian or vegan menu available?",
      answer: "Yes, we offer a full vegetarian and vegan menu with creative plant-based dishes."
    },
    {
      question: "Does this restaurant offer delivery services?",
      answer: "We offer delivery through major platforms and direct ordering on our website."
    },
    {
      question: "Can I host a private event at the restaurant?",
      answer: "Absolutely! Contact us for private event bookings and special arrangements."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have dedicated parking for our guests and street parking is available."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="hero-content">
          <span className="hero-ornament" aria-hidden="true">
            <img src={yellowDesign} alt="Ornament" />
          </span>
          <p className="hero-eyebrow">Welcome to our restaurant</p>
          <h1 className="hero-title">A Symphony of <br /> Flavors in Every Bite</h1>
          <p className="hero-sub">Savor exquisite culinary creations prepared with fresh, local ingredients. Each dish celebrates vibrant flavors, presented in an ambiance of sophistication. Join us for an unforgettable dining experience where every bite tells a story.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn-hero btn-menu">Our Menu</Link>
            <Link to="/reserve" className="btn-hero btn-reserve">Reserve a Seat</Link>
          </div>
        </div>
      </section>

    {/* OUR COMPANY SECTION */}
      <section className="our-company-section">
        <div className="container-fluid">
          <div className="row g-0 align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 company-content">
              <h2 className="company-title">Our Company</h2>
              <div className="company-text-wrapper">
                <p className="company-description">Since its opening, the Restaurant has become a place where taste, quality, and dining experience unite in harmony. We are here with a passion for serving delicious food made from the finest fresh ingredients, combined with a touch of love and creativity from our kitchen.</p>
                <p className="company-description">We believe that food is not just a means to fill the stomach, but a part of the story, happiness, and togetherness. That's why every dish at the Restaurant is prepared with great care, to create special moments for you and your loved ones.</p>
              </div>

              {/* Stats */}
              <div className="company-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years of Culinary Excellence</div>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Winning Chefs</div>
                </div>
                <div className="stat-divider" />
                <div className="stat-item">
                  <div className="stat-number">4.9/5</div>
                  <div className="stat-label">Customer Rating on Average</div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="col-lg-6 company-images">
              <div className="images-wrapper">
                <img src={section2Image1} alt="Restaurant cooking" className="company-image img-lg" />
                <img src={section2Image2} alt="Chef preparing food" className="company-image img-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - CHEF'S FAVORITES */}
      <section className="chefs-favorites-section">
        <div className="chefs-header">
          <img src={decorLeft} alt="decoration" className="decor-left" />
          <div className="header-content">
            <h2 className="chefs-title">Chef's Favorites</h2>
            <p className="chefs-subtitle">The dishes our chef can't stop thinking about, and neither will you.</p>
          </div>
          <img src={decorRight} alt="decoration" className="decor-right" />
        </div>

        <div className="container">
          <div className="menu-grid">
            {/* LEFT COLUMN */}
            <div className="menu-column">
              {/* Item 1 */}
              <div className="menu-item">
                <img src={garlicCheeseBread} alt="Garlic Cheese Bread" className="menu-item-image" />
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">Garlic Cheese Bread</h3>
                    <span className="menu-item-price">$7</span>
                  </div>
                  <p className="menu-item-category">Appetizer</p>
                  <p className="menu-item-description">Toasted baguette with a blend of mozzarella cheese and garlic butter. Lorem ipsum dolor sit amet slur hehe wadaw mantap</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="menu-item">
                <img src={stuffedMushrooms} alt="Stuffed Mushrooms" className="menu-item-image" />
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">Stuffed Mushrooms</h3>
                    <span className="menu-item-price">$5</span>
                  </div>
                  <p className="menu-item-category">Main Course</p>
                  <p className="menu-item-description">Oven-roasted mushrooms filled with melted cheese, sautéed onions, and a hint of herbs. A perfect balance of creamy and earthy flavors.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="menu-item">
                <img src={bruschettaAlPomodoro} alt="Bruschetta al Pomodoro" className="menu-item-image" />
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">Bruschetta al Pomodoro</h3>
                    <span className="menu-item-price">$8</span>
                  </div>
                  <p className="menu-item-category">Appetizer</p>
                  <p className="menu-item-description">Freshly toasted bread topped with ripe tomatoes, garlic, olive oil, and basil leaves. A classic Italian appetizer full of vibrant taste.</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="menu-column">
              {/* Item 4 */}
              <div className="menu-item">
                <img src={chickenWingsBBQ} alt="Chicken Wings BBQ" className="menu-item-image" />
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">Chicken Wings BBQ</h3>
                    <span className="menu-item-price">$11</span>
                  </div>
                  <p className="menu-item-category">Main Course</p>
                  <p className="menu-item-description">Grilled chicken wings coated in a smoky barbecue glaze with sesame seeds. Juicy, tender, and packed with bold flavor in every bite.</p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="menu-item">
                <img src={creamyPumpkinSoup} alt="Creamy Pumpkin Soup" className="menu-item-image" />
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">Creamy Pumpkin Soup</h3>
                    <span className="menu-item-price">$9</span>
                  </div>
                  <p className="menu-item-category">Appetizer</p>
                  <p className="menu-item-description">A smooth and velvety pumpkin soup made with fresh cream, seasonal spices, and topped with crispy croutons for extra texture.</p>
                </div>
              </div>

              {/* Item 6 */}
              <div className="menu-item">
                <img src={crispyCaesarSalad} alt="Crispy Caesar Salad" className="menu-item-image" />
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">Crispy Caesar Salad</h3>
                    <span className="menu-item-price">$6</span>
                  </div>
                  <p className="menu-item-category">Appetizer</p>
                  <p className="menu-item-description">Crisp romaine lettuce tossed with garlic croutons, parmesan shavings, and our signature Caesar dressing made in-house.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="chefs-button-wrapper">
          <button className="btn-explore">Explore Our Menu</button>
        </div>
      </section>

      {/* SECTION 4 - TESTIMONIALS */}
      <section className="section4-testimonials">
        <div className="container-inner">
          <h2 className="section-title">Real Talk From Real Foodies</h2>
          <p className="section-sub">Exceptional dining experiences, shared by those who’ve tasted the difference.</p>

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

      {/* SECTION 5 - CONTACT & LOCATION */}
      <section className="section5-contact">
        <div className="container">
          <div className="row g-5">
            {/* Left - Contact Form */}
            <div className="col-lg-5">
              <div className="contact-form-wrapper">
                <h3 className="contact-title">Contact Us</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Input text here" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <div className="phone-input-wrapper">
                      <div className="country-code-display">
                        <img src={countryFlag} alt="Country Flag" className="country-flag" />
                        <span className="country-text">+1</span>
                      </div>
                      <input type="tel" placeholder="+1 234 567 890" className="form-control" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Input text here" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Input text here" className="form-control" rows="4" />
                  </div>

                  <p className="form-disclaimer">
                    By checking the box you agree to our <Link to="/terms-of-use">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
                  </p>

                  <button type="submit" className="btn-send-message">Send Message</button>
                </form>
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="col-lg-7">
              <h2 className="info-title">Craving Something Delicious?</h2>
              <p className="info-subtitle">From savory bites to sweet delights, your cravings end here.</p>

              <div className="info-grid">
                <div className="info-item">
                  <h4 className="info-item-label">Our Location</h4>
                  <p className="info-item-text">🔗 21 Rue des Lilas 75001 Paris, France</p>
                </div>
                <div className="info-item">
                  <h4 className="info-item-label">Phone Number</h4>
                  <p className="info-item-text">📞 +33 612 34 56 78</p>
                </div>

                <div className="info-item">
                  <h4 className="info-item-label">Email Address</h4>
                  <p className="info-item-text">💌 hello@platieu.com</p>
                </div>
                <div className="info-item">
                  <h4 className="info-item-label">Opening Hours</h4>
                  <p className="info-item-text">🕐 Monday - Friday: 12:00 PM - 5:30 PM & 7:00 PM - 10:30 PM</p>
                  <p className="info-item-text">🕐 Saturday: 7:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-wrapper">
            <img src={mapImage} alt="Restaurant location map" className="map-image" />
          </div>
        </div>
      </section>

      {/* SECTION 6 - FAQ */}
      <section className="section6-faq">
        <img src={section6Image1} alt="decoration left" className="faq-decor faq-decor-left" />
        <img src={section6Image2} alt="decoration right" className="faq-decor faq-decor-right" />

        <div className="container">
          <div className="faq-header">
            <h2 className="faq-title">What's on Your Mind?</h2>
            <p className="faq-subtitle">We've answered the questions you didn't know you had.</p>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <ul className="faq-list">
                {faqItems.map((item, index) => (
                  <li key={index} className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}>
                    <button
                      className="faq-btn"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="faq-left">
                        <h5 className="faq-question">{item.question}</h5>
                        {expandedFaq === index && (
                          <p className="faq-answer">{item.answer}</p>
                        )}
                      </div>
                      <span className="faq-toggle">{expandedFaq === index ? '\u2212' : '+'}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - BLOG / ARTICLES */}
      <section className="section7-blog">
        <div className="container">
          <div className="blog-header">
            <h2 className="blog-title">From Our Kitchen to Your Screen</h2>
            <p className="blog-subtitle">Dive into recipes, behind the scenes, and tasty tales.</p>
          </div>

          <div className="row g-4">
            {/* Article 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={section7Image1} alt="Hosting Events" className="blog-image" />
                </div>
                <div className="blog-content">
                  <p className="blog-date">April 22, 2025</p>
                  <h3 className="blog-article-title">Hosting Events at the Restaurant: What You Need to Know</h3>
                  <p className="blog-description">From intimate dinners to corporate gatherings, the Restaurant offers exclusive space and services for</p>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={section7Image2} alt="Local Farmers" className="blog-image" />
                </div>
                <div className="blog-content">
                  <p className="blog-date">April 17, 2025</p>
                  <h3 className="blog-article-title">How We Support Local Farmers and Ingredients</h3>
                  <p className="blog-description">We take pride in using local ingredients as part of our commitment to sustainability and quality. Learn how</p>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={section7Image3} alt="Dinner Menu" className="blog-image" />
                </div>
                <div className="blog-content">
                  <p className="blog-date">April 18, 2025</p>
                  <h3 className="blog-article-title">Tips for Choosing the Right Dinner Menu at the Restaurant</h3>
                  <p className="blog-description">Confused about what to order when visiting the Restaurant? This article will help you choose the best</p>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="blog-button-wrapper">
            <button className="btn-view-all">View All</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="container">
            <div className="row align-items-center">
              {/* Left - CTA */}
              <div className="col-lg-6">
                <h2 className="footer-cta-title">Explore Our French-Inspired Dishes</h2>
                <button className="btn-view-menu">
                  View Menu
                  <span className="arrow">→</span>
                </button>
              </div>

              {/* Right - Links and Social */}
              <div className="col-lg-6">
                <div className="footer-links-wrapper">
                  <div className="footer-links-col">
                    <h4 className="footer-links-title">Home</h4>
                    <h4 className="footer-links-title">Menu</h4>
                    <h4 className="footer-links-title">Out Story</h4>
                    <h4 className="footer-links-title">Reservation</h4>
                    <h4 className="footer-links-title">News</h4>
                  </div>
                  <div className="footer-social-col">
                    <h4 className="footer-social-title">Connect On</h4>
                    <div className="social-icons">
                      <a href="#" className="social-icon facebook" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="social-icon instagram" title="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className="social-icon twitter" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-icon whatsapp" title="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <p className="footer-copyright">©Platieu 2025. All rights reserved.</p>
              </div>
              <div className="col-auto">
                <div className="footer-bottom-links">
                  <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                  <span className="separator">•</span>
                  <Link to="/terms-of-use" className="footer-link">Terms of Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="footer-logo-wrapper">
          <img src={footerLogo} alt="Platieu" className="footer-logo" />
        </div>
      </footer>

    </>
  );
}
