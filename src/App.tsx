import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WhatWeDo />
              <WhoIsThisFor />
              <FAQ />
              <FinalCTA />
              <ContactForm />
              <Footer />
              <SmartConsultationButton />
            </>
          } />
          <Route path="/o-nas" element={
            <>
              <AboutUs />
              <Footer />
            </>
          } />
          <Route path="/uslugi" element={
            <>
              <Services />
              <Footer />
            </>
          } />
          <Route path="/kontakt" element={
            <Contact />
          } />
          <Route path="/demo" element={
            <>
              <Demo />
              <Footer />
            </>
          } />
          <Route path="/regulamin" element={
            <>
              <Terms />
              <Footer />
            </>
          } />
          <Route path="/polityka-prywatnosci" element={
            <>
              <Privacy />
              <Footer />
            </>
          } />
          <Route path="/polityka-cookies" element={
            <>
              <Cookies />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;