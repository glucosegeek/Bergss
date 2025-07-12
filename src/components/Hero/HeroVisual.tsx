import React from 'react';
import { motion } from 'framer-motion';
import WebsiteAnimation from '../WebsiteAnimation/WebsiteAnimation';

const HeroVisual: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
    >
      {/* Website Animation Component */}
      <WebsiteAnimation />

      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-brand-primary/30 to-accent-blue/20 rounded-full blur-2xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent-purple/30 to-brand-primary/20 rounded-full blur-2xl"
      ></motion.div>
    </motion.div>
  );
};

export default HeroVisual;