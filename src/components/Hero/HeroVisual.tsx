import React from 'react';
import { motion } from 'framer-motion';

const HeroVisual: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
    >
      {/* Main dashboard frame */}
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative glass rounded-xl shadow-brand p-3 sm:p-4"
      >
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="flex items-center justify-between mb-3 sm:mb-4"
        >
          <div className="flex space-x-1.5">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"
            ></motion.div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"
            ></motion.div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-green"
            ></motion.div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              animate={{ width: ["48px", "64px", "48px"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-2 sm:h-2.5 bg-slate-600/50 rounded"
            ></motion.div>
            <div className="h-2 w-8 sm:h-2.5 sm:w-10 bg-slate-600/50 rounded"></div>
          </div>
        </motion.div>

        {/* Dashboard content */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-slate-800/50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border border-slate-700/30"
        >
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2.5 w-24 sm:h-3 sm:w-32 bg-brand-primary/30 rounded"
            ></motion.div>
            <div className="h-2.5 w-12 sm:h-3 sm:w-16 bg-accent-purple/30 rounded"></div>
          </div>
          
          {/* AI Conversation */}
          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-start gap-2"
            >
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center text-xs font-medium text-white"
              >
                AI
              </motion.div>
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.4 }}
                className="bg-slate-700/30 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-brand-light max-w-[80%]"
              >
                <span className="mobile-only">Cześć! W czym mogę pomóc?</span>
                <span className="tablet-only desktop-only">Cześć! Jestem Twoim asystentem AI. W czym mogę Ci dzisiaj pomóc?</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex items-start gap-2 justify-end"
            >
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.8 }}
                className="bg-accent-blue/20 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-brand-light max-w-[80%]"
              >
                <span className="mobile-only">Pomoc z obsługą klienta?</span>
                <span className="tablet-only desktop-only">Czy możecie pomóc w zmniejszeniu czasu poświęconego na obsługę klienta?</span>
              </motion.div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent-blue flex-shrink-0 flex items-center justify-center text-xs font-medium text-white">U</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              className="flex items-start gap-2"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center text-xs font-medium text-white">AI</div>
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.2 }}
                className="bg-slate-700/30 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-brand-light max-w-[80%]"
              >
                <span className="mobile-only">Tak! Redukcja o 70%.</span>
                <span className="tablet-only desktop-only">Oczywiście! Nasz chatbot AI może zredukować czas obsługi klienta o 70%.</span>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="grid grid-cols-2 gap-2 sm:gap-3"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/20 rounded-lg p-2 sm:p-3"
            >
              <motion.div 
                animate={{ width: ["48px", "64px", "48px"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-1.5 sm:h-2 bg-brand-primary/30 rounded mb-1 sm:mb-2"
              ></motion.div>
              <div className="h-3 w-8 sm:h-4 sm:w-12 bg-brand-primary/40 rounded"></div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700/20 rounded-lg p-2 sm:p-3"
            >
              <motion.div 
                animate={{ width: ["48px", "64px", "48px"] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="h-1.5 sm:h-2 bg-accent-purple/30 rounded mb-1 sm:mb-2"
              ></motion.div>
              <div className="h-3 w-8 sm:h-4 sm:w-12 bg-accent-purple/40 rounded"></div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Bottom tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.6 }}
          className="flex justify-between"
        >
          <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-slate-600/30 rounded"></div>
          <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-slate-600/30 rounded"></div>
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 w-12 sm:h-2 sm:w-16 bg-brand-primary/60 rounded"
          ></motion.div>
        </motion.div>
      </motion.div>

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