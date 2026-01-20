import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import OurStory from './pages/OurStory';
import Reserve from './pages/Reserve';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ThankYou from './pages/ThankYou';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}
