import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import ScrollToTop from './components/layout/ScrollToTop';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import GalleryPage from './pages/Gallery/GalleryPage';
import ServicesPage from './pages/Services/ServicesPage';

import AbaTherapyPage from './pages/service-details/AbaTherapyPage';
import SpeechTherapyPage from './pages/service-details/SpeechTherapyPage';
import LanguageTherapyPage from './pages/service-details/LanguageTherapyPage';
import OralFeedingPage from './pages/service-details/OralFeedingPage';
import StutteringPage from './pages/service-details/StutteringPage';
import SpecialEducationPage from './pages/service-details/SpecialEducationPage';
import OccupationalTherapyPage from './pages/service-details/OccupationalTherapyPage';

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="page-wrapper">
      <ScrollToTopOnRoute />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/about.html" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact.html" element={<ContactPage />} />

          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery.html" element={<GalleryPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/services.html" element={<ServicesPage />} />
          <Route path="/service.html" element={<ServicesPage />} />

          <Route path="/abatherapy" element={<AbaTherapyPage />} />
          <Route path="/abatherapy.html" element={<AbaTherapyPage />} />

          <Route path="/speech" element={<SpeechTherapyPage />} />
          <Route path="/speech.html" element={<SpeechTherapyPage />} />

          <Route path="/language" element={<LanguageTherapyPage />} />
          <Route path="/language.html" element={<LanguageTherapyPage />} />

          <Route path="/oralfeeding" element={<OralFeedingPage />} />
          <Route path="/oralfeeding.html" element={<OralFeedingPage />} />

          <Route path="/stutering" element={<StutteringPage />} />
          <Route path="/stutering.html" element={<StutteringPage />} />

          <Route path="/specialedu" element={<SpecialEducationPage />} />
          <Route path="/specialedu.html" element={<SpecialEducationPage />} />

          <Route path="/occupation" element={<OccupationalTherapyPage />} />
          <Route path="/occupation.html" element={<OccupationalTherapyPage />} />

          {/* Catch-all */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
