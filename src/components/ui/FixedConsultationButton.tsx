import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BookCallForm from '../BookCallForm/BookCallForm';

const FixedConsultationButton: React.FC = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Fixed Button */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 left-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          onClick={() => setIsBookCallOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative btn-touch flex items-center gap-3 gradient-primary text-white px-4 py-3 rounded-full shadow-brand hover:shadow-brand-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
          aria-label="Umów bezpłatną konsultację"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/20 rounded-full p-2"
          >
            <Calendar className="w-5 h-5 text-white" />
          </motion.div>

          {/* Text - Hidden on mobile, visible on larger screens */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isHovered ? 'auto' : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="hidden sm:block overflow-hidden whitespace-nowrap"
          >
            <span className="text-sm font-semibold">
              Umów Konsultację
            </span>
          </motion.div>

          {/* Arrow Icon */}
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
            className="hidden sm:block"
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </motion.div>

          {/* Pulse Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full gradient-primary"
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/50 to-accent-purple/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.button>

        {/* Mobile Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -10
          }}
          transition={{ duration: 0.3 }}
          className="sm:hidden absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-slate-800/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-slate-700/50"
        >
          Umów Konsultację
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-800/90" />
        </motion.div>
      </motion.div>

      {/* Book Call Form Modal */}
      <BookCallForm 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default FixedConsultationButton;