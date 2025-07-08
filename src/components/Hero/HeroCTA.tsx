import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BookCallForm from '../BookCallForm/BookCallForm';

const HeroCTA: React.FC = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-auto px-4 sm:px-0"
      >
        <motion.button 
          onClick={() => setIsBookCallOpen(true)}
          data-hero-consultation-button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-touch btn-primary group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-responsive-base sm:text-responsive-lg font-semibold transition-all duration-300"
        >
          <span className="relative flex items-center justify-center">
            <span className="mobile-only text-sm">Umów Bezpłatną Konsultację</span>
            <span className="tablet-only desktop-only">Umów Bezpłatną Konsultację</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.div>
          </span>
        </motion.button>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="flex items-center gap-2 text-slate-300 text-responsive-sm"
        >
        </motion.div>
      </motion.div>

      <BookCallForm 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default HeroCTA;