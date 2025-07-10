import React from 'react';
import { motion } from 'framer-motion';

const HeroSubheadline: React.FC = () => {
  return (
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="text-responsive-lg sm:text-responsive-xl text-brand-light mb-6 sm:mb-8 max-w-xl leading-relaxed px-4 sm:px-0 hero-subheadline-mobile"
    >
      Automatyzuj kontakt, buduj zaufanie i skaluj swój biznes z rozwiązaniami AI.
    </motion.p>
  );
};

export default HeroSubheadline;