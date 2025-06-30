import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import { FloatingNotification } from './components/ui/FloatingNotification';

// Lazy load components
const WhatWeDo = lazy(() => import('./components/WhatWeDo/WhatWeDo'));
const WhoIsThisFor = lazy(() => import('./components/WhoIsThisFor/WhoIsThisFor'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA/FinalCTA'));
const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// Lazy load pages
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Cookies = lazy(() => import('./pages/Cookies'));

function App() {
  return (
    <Router>
      <div className="bg-indigo-950 min-h-screen">
        <FloatingNotification
          title="Witaj!"
          message="Odkryj, jak AI może zrewolucjonizować Twoją sprzedaż. Napisz do nas i omówimy razem jak możemy Ci pomóc."
          duration={7000}
        />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Suspense fallback={null}>
                <WhatWeDo />
                <WhoIsThisFor />
                <FAQ />
                <FinalCTA />
                <ContactForm />
                <Footer />
              </Suspense>
            </>
          } />
          <Route path="/o-nas" element={
            <Suspense fallback={null}>
              <AboutUs />
              <Footer />
            </Suspense>
          } />
          <Route path="/uslugi" element={
            <Suspense fallback={null}>
              <Services />
              <Footer />
            </Suspense>
          } />
          <Route path="/kontakt" element={
            <Suspense fallback={null}>
              <Contact />
              <Footer />
            </Suspense>
          } />
          <Route path="/regulamin" element={
            <Suspense fallback={null}>
              <Terms />
              <Footer />
            </Suspense>
          } />
          <Route path="/polityka-prywatnosci" element={
            <Suspense fallback={null}>
              <Privacy />
              <Footer />
            </Suspense>
          } />
          <Route path="/polityka-cookies" element={
            <Suspense fallback={null}>
              <Cookies />
              <Footer />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;