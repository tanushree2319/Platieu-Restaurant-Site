import React from 'react';
import { useParams, Link } from 'react-router-dom';
import detailsBg from '../assets/NewsDetails/Background.png';
import newsDetailsImg1 from '../assets/NewsDetails/NewsDetailsImg1.png';
import newsDetailsImg2 from '../assets/NewsDetails/NewsDetailsImg2.png';
import newsDetailsImg3 from '../assets/NewsDetails/NewsDetailsImg3.png';
import May8 from '../assets/News/May8.png';
import May2 from '../assets/News/May2.png';
import April28 from '../assets/News/April28.png';
import footerLogo from '../assets/Home/Section8-FooterLogo.png';

export default function NewsDetails() {
  const { id } = useParams();

  const contentBlocks = [
    {
      id: 1,
      time: '6 AM: A Quier Yet Busy Start',
      description: 'While the city is still asleep, our kitchen is already coming to life. Chef Dion, our head chef, begins his day with an inspection of the ingredients – ensuring everything is fresh and ready to be prepared. The prep team starts chopping, weighing, and meticulously preparing mise en place for sauces and broths.',
      quote: '"We believe that a disciplined morning yields honest flavors," says Chef Dion as he prepares the chicken stock that has been a staple of this restaurant since day one.',
      image: newsDetailsImg1,
      imagePosition: 'right'
    },
    {
      id: 2,
      time: '10 AM – Briefing, Taste Tests, and Experiments',
      description: 'Once all the ingredients are ready, the team gathers to taste and evaluate the menu for the day. There\'s also a session for experimentation – our young chef, Alya, tries to blend traditional spices with modern plating techniques.',
      quote: '"Chef Dion always encourages us to boldly play with flavors – but to respect the ingredients," says Alya while stirring the coconut-salt sauce that will top the latest fusion dish.',
      image: newsDetailsImg2,
      imagePosition: 'left'
    },
    {
      id: 3,
      time: '12 PM – Time for Service to Begin',
      description: 'As lunchtime arrives, the kitchen transforms into a battlefield. The sounds of stoves, grills, and incoming orders echo in harmony. But everything operates like a symphony. Each chef knows their position. Coordination is swift, accurate, and panic-free.',
      quote: 'Amid the hustle, plating remains an art. Every detail – from the placement of basil leaves to the lines of sauce on the plate – is arranged with love.',
      image: newsDetailsImg3,
      imagePosition: 'right'
    },
    {
      id: 4,
      time: 'Serving More Than Just Food',
      description: 'At the restaurant, each chef brings their passion, experience, and love for cooking into the kitchen. They are flavor artists working without the spotlight, yet making a significant impact on each guest\'s experience.\n\nNow, as you enjoy our dishes, you know – there are stories, dedication, and an incredible team behind every serving.',
      quote: null,
      image: null,
      imagePosition: null
    }
  ];

  const latestArticles = [
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
      <section className="newsdetails-hero-section">
        <div className="newsdetails-hero-bg" style={{ backgroundImage: `url(${detailsBg})` }} />
        <div className="newsdetails-hero-overlay" />
        <div className="newsdetails-hero-content">
          <p className="newsdetails-publish">Published May 2, 2025</p>
          <h1 className="newsdetails-title">A Day in Our Kitchen: Meet the Chefs Behind the Magic</h1>
          <p className="newsdetails-desc">Many people come to the restaurant to enjoy the flavors. But, few know the amazing individuals behind each dish served. Dive into a day in our kitchen and get to know the chefs who create flavor magic every day.</p>
        </div>
      </section>

      <section className="newsdetails-section2">
        <div className="newsdetails-container">
          {contentBlocks.map((block) => (
            <div key={block.id} className="newsdetails-block">
              <h2 className="newsdetails-block-time">{block.time}</h2>
              <p className="newsdetails-block-desc">{block.description}</p>
              
              {block.quote && (
                <blockquote className="newsdetails-quote">
                  {block.quote}
                </blockquote>
              )}
              
              {block.image && (
                <div className={`newsdetails-block-image-wrapper ${block.imagePosition}`}>
                  <img src={block.image} alt={block.time} className="newsdetails-block-image" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="newsdetails-section3">
        <div className="newsdetails-section3-wrapper">
          <div className="newsdetails-section3-header">
            <h2 className="newsdetails-section3-title">Latest from Our Blog</h2>
            <p className="newsdetails-section3-desc">Temukan cerita di balik dapur kami, tips kulinler, dan inspirasi rasa yang kami tuangkan ke dalam setiap sajian</p>
            <Link to="/news" className="newsdetails-view-all-btn">View All</Link>
          </div>

          <div className="newsdetails-section3-grid">
            {latestArticles.map((article) => (
              <Link key={article.id} to={`/news/${article.id}`} className="newsdetails-section3-card">
                <div className="newsdetails-section3-image-wrapper">
                  <img src={article.image} alt={article.title} className="newsdetails-section3-image" />
                </div>
                <div className="newsdetails-section3-content">
                  <p className="newsdetails-section3-date">{article.date}</p>
                  <h3 className="newsdetails-section3-article-title">{article.title}</h3>
                  <p className="newsdetails-section3-article-desc">{article.description}</p>
                </div>
              </Link>
            ))}
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
