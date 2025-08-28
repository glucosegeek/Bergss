// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/ui/Navigation'; // ONLY import Navigation, not Header
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

// Direct imports instead of lazy loading
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import WhoIsThisFor from './components/WhoIsThisFor/WhoIsThisFor';
import FAQ from './components/FAQ/FAQ';
import FinalCTA from './components/FinalCTA/FinalCTA';
import ContactForm from './components/ContactForm/ContactForm';

// Direct imports for pages
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import SmartConsultationButton from './components/ui/SmartConsultationButton';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="bg-slate-900 min-h-screen">
        {/* SINGLE NAVIGATION COMPONENT - No duplication */}
        <Navigation />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={
            <div className="pt-[70px]"> {/* Fixed padding to match navbar height */}
              <Hero />
              <WhatWeDo />
              <WhoIsThisFor />
              <FAQ />
              {/* TEMPORARILY HIDDEN: Final CTA section */}
              {/* <FinalCTA /> */}
              <ContactForm />
              <Footer />
              <SmartConsultationButton />
            </div>
          } />
          
          <Route path="/o-nas" element={
            <div className="pt-[70px]">
              <AboutUs />
              <Footer />
            </div>
          } />
          
          <Route path="/uslugi" element={
            <div className="pt-[70px]">
              <Services />
              <Footer />
            </div>
          } />
          
          <Route path="/kontakt" element={
            <div className="pt-[70px]">
              <Contact />
            </div>
          } />
          
          {/* TEMPORARILY HIDDEN: Demo route - uncomment to restore */}
          {/* <Route path="/demo" element={
            <div className="pt-[70px]">
              <Demo />
              <Footer />
            </div>
          } /> */}
          
          <Route path="/regulamin" element={
            <div className="pt-[70px]">
              <Terms />
              <Footer />
            </div>
          } />
          
          <Route path="/polityka-prywatnosci" element={
            <div className="pt-[70px]">
              <Privacy />
              <Footer />
            </div>
          } />
          
          <Route path="/polityka-cookies" element={
            <div className="pt-[70px]">
              <Cookies />
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;