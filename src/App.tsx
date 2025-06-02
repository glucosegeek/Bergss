import React, { lazy, Suspense } from 'react';
import Hero from './components/Hero/Hero';
import { FloatingNotification } from './components/ui/FloatingNotification';

// Lazy load non-critical components
const WhatWeDo = lazy(() => import('./components/WhatWeDo/WhatWeDo'));
const Stats = lazy(() => import('./components/Stats/Stats'));
const WhoIsThisFor = lazy(() => import('./components/WhoIsThisFor/WhoIsThisFor'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const FinalCTA = lazy(() => import('./components/FinalCTA/FinalCTA'));
const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <FloatingNotification
        title="Witaj!"
        message="Odkryj, jak AI może zrewolucjonizować Twoją sprzedaż. Napisz do nas i omówiomy razem jak możemy Ci pomóc."
        duration={7000}
      />
      <Hero />
      <Suspense fallback={null}>
        <WhatWeDo />
        <Stats />
        <WhoIsThisFor />
        <FAQ />
        <Blog />
        <Testimonials />
        <FinalCTA />
        <ContactForm />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;