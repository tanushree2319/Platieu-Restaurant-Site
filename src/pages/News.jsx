import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newsBg from '../assets/News/BackgroundImage.png';
import April17 from '../assets/News/April17.png';
import April18 from '../assets/News/April18.png';
import April22 from '../assets/News/April22.png';
import April28 from '../assets/News/April28.png';
import May2 from '../assets/News/May2.png';
import May8 from '../assets/News/May8.png';
import May10 from '../assets/News/May10.png';
import May11 from '../assets/News/May11.png';
import May12 from '../assets/News/May12.png';
import footerLogo from '../assets/Home/Section8-FooterLogo.png';

export default function News() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const newsArticles = [
    {
      id: 1,
      date: 'April 22, 2025',
      title: 'Hosting Events at the Restaurant: What You Need to Know',
      description: 'From intimate dinners to corporate gatherings, the Restaurant offers exclusive space and services for',
      image: April22
    },
    {
      id: 2,
      date: 'April 17, 2025',
      title: 'How We Support Local Farmers and Ingredients',
      description: 'We take pride in using local ingredients as part of our commitment to sustainability and quality. Learn how',
      image: April17
    },
    {
      id: 3,
      date: 'April 18, 2025',
      title: 'Tips for Choosing the Right Dinner Menu at the Restaurant',
      description: 'Confused about what to order when visiting the Restaurant? This article will help you choose the best',
      image: April18
    },
    {
      id: 4,
      date: 'May 10, 2025',
      title: 'Behind the Dish: The Story of Our Signature Beef Wellington',
      description: 'Beef Wellington is not just a dish – it\'s a symbol of our dedication to quality and flavor. In this article,',
      image: May10
    },
    {
      id: 5,
      date: 'May 11, 2025',
      title: '5 Fresh Ingredients We Use Daily — and Why They Matter',
      description: 'We believe that food quality starts with the ingredients. Discover five fresh ingredients that we',
      image: May11
    },
    {
      id: 6,
      date: 'May 12, 2025',
      title: 'The Secret Behind Our Best-Selling Lava Cake',
      description: 'Soft on the outside, molten on the inside – our lava cake has become a visitor favorite. Discover how the',
      image: May12
    },
    {
      id: 7,
      date: 'May 8, 2025',
      title: 'Refreshing Drink Pairings for Every Meal',
      description: 'The right drink can transform your dining experience. We share recommendations for a refresh',
      image: May8
    },
    {
      id: 8,
      date: 'May 2, 2025',
      title: 'A Day in Our Kitchen: Meet the Chefs Behind the Magic',
      description: 'Meet our dedicated chefs and see the atmosphere in our kitchen as dinner service begins. Full',
      image: May2
    },
    {
      id: 9,
      date: 'April 28, 2025',
      title: 'Homemade Bread: Why We Bake It Fresh Every Morning',
      description: 'The aroma of warm bread in the morning is part of the Restaurant\'s identity. In this article, we share why',
      image: April28
    }
  ];

  return (
    <>
      <section className="news-hero-section">
        <div className="news-hero-bg" style={{ backgroundImage: `url(${newsBg})` }} />
        <div className="news-hero-overlay" />
        <div className="news-hero-content">
          <span className="news-ornament" aria-hidden="true" />
          <h1 className="news-hero-title">Stories from the Kitchen & Beyond</h1>
          <p className="news-hero-sub">Stay inspired with the latest from Platieu – from seasonal menu launches and chef spotlights to behind-the-scenes stories and culinary insights.</p>
        </div>
      </section>

      <section className="news-section2">
        <div className="news2-wrapper">
          <div className="news2-header">
            <h2 className="news2-title">Fresh Stories from the Kitchen</h2>
            <p className="news2-description">Discover the stories behind our kitchen, culinary tips and flavor inspirations that we pour into every dish. This blog is a place where we share more than just food – we share experiences.</p>
            <div className="news2-search">
              <input type="text" placeholder="Search..." className="news2-search-input" />
              <span className="news2-search-icon">🔍</span>
            </div>
          </div>

          <div className="news2-grid">
            {newsArticles.map((article) => (
              <Link key={article.id} to={`/news/${article.id}`} className="news2-card">
                <div className="news2-card-image-wrapper">
                  <img src={article.image} alt={article.title} className="news2-card-image" />
                </div>
                <div className="news2-card-content">
                  <p className="news2-card-date">{article.date}</p>
                  <h3 className="news2-card-title">{article.title}</h3>
                  <p className="news2-card-description">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="news2-load-more">
            <button className="news2-load-more-btn">Load More</button>
          </div>
        </div>
      </section>

      <section className="news-section3">
        <div className="news3-bg" />
        <div className="news3-overlay" />
        <div className="news3-content">
          <h2 className="news3-title">Discover More Stories</h2>
          <p className="news3-subtitle">There's always something cooking at Platieu. From culinary inspiration to behind-the-scenes moments, our journal is filled with fresh stories waiting to be explored.</p>
          
          <form className="news3-form" onSubmit={handleSubscribe}>
            <div className="news3-input-wrapper">
              <span className="news3-input-icon">✉</span>
              <input 
                type="email" 
                placeholder="Type your email" 
                className="news3-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="news3-button">
                Subscribe
              </button>
            </div>
            {subscribed && <p className="news3-success-message">Thank you for subscribing!</p>}
          </form>
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
