import React from 'react';
import { motion } from 'framer-motion';

const HeroHeadline: React.FC = () => {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold leading-tight text-brand-white mb-4 sm:mb-6"
    >
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-block mb-1 sm:mb-2 gradient-text-primary"
      >
        AI, które oszczędza.
      </motion.span>
      <br />
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="inline-block mb-1 sm:mb-2"
      >
        Strony, które zarabiają.
      </motion.span>
      <br />
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="gradient-text-primary"
      >
        |
      </motion.span>
    </motion.h1>
  );
};

export default HeroHeadline;