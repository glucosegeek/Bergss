import React, { useState } from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import BookCallForm from '../BookCallForm/BookCallForm';
import ScrollToTopLink from '../ui/ScrollToTopLink';

const FinalCTA: React.FC = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>

        <div className="relative container-responsive text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-green" />
            </motion.div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-responsive-3xl sm:text-responsive-4xl md:text-responsive-5xl lg:text-responsive-6xl font-bold text-brand-white mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0"
          >
            Gotowy na Transformację Biznesu z AI?
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0"
          >
            <motion.button 
              onClick={() => setIsBookCallOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-touch group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg text-responsive-base sm:text-responsive-lg font-semibold text-brand-primary shadow-brand hover:shadow-brand-lg transition-all duration-300"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full rounded-lg opacity-0 gradient-primary group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <span className="mobile-only">Umów Konsultację</span>
                <span className="tablet-only desktop-only">Umów Bezpłatną Konsultację</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </span>
            </motion.button>

            <ScrollToTopLink 
              to="/demo" 
              className="group relative btn-touch flex items-center gap-3 sm:gap-4 btn-secondary backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/10"
            >
              {/* Animated Play Button */}
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-primary flex items-center justify-center transition-all duration-300 shadow-brand group-hover:shadow-brand-lg"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
                </motion.div>
                {/* Pulse animation */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full gradient-primary"
                ></motion.div>
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col items-start">
                <span className="text-brand-white font-semibold text-responsive-sm sm:text-responsive-base group-hover:gradient-text-primary transition-all duration-300">
                  <span className="mobile-only">Demo (2 min)</span>
                  <span className="tablet-only desktop-only">Zobacz Demo (2 min)</span>
                </span>
                <span className="text-slate-400 text-xs sm:text-sm group-hover:text-brand-light transition-colors duration-300">
                  Rozwiązania AI w akcji
                </span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/0 via-accent-purple/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:via-accent-purple/10 group-hover:to-brand-primary/10 transition-all duration-300"></div>
            </ScrollToTopLink>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 text-brand-light text-responsive-sm"
          >
            • Bergss.pl •
          </motion.p>
        </div>
      </section>

      <BookCallForm 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default FinalCTA;