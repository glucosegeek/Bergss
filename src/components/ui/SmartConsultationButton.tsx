import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookCallForm from '../BookCallForm/BookCallForm';

const SmartConsultationButton: React.FC = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Track scroll position and hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section'); // First section is hero
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight * 0.1; // Add small buffer
        
        const pastHero = scrollPosition > heroBottom;
        setHasScrolledPastHero(pastHero);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Track hero button hover state
  useEffect(() => {
    const heroButton = document.querySelector('[data-hero-consultation-button]');
    
    if (heroButton) {
      const handleMouseEnter = () => setIsHeroHovered(true);
      const handleMouseLeave = () => setIsHeroHovered(false);

      heroButton.addEventListener('mouseenter', handleMouseEnter);
      heroButton.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        heroButton.removeEventListener('mouseenter', handleMouseEnter);
        heroButton.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // Determine button visibility based on rules
  useEffect(() => {
    if (hasScrolledPastHero) {
      // Rule 4 & 5: After scrolling past hero, button appears and remains fixed
      setShouldShowButton(true);
    } else if (isHeroHovered) {
      // Rule 2: Becomes visible when hovering over hero button
      setShouldShowButton(true);
    } else {
      // Rule 1 & 3: Initially hidden, remains hidden until scrolled past hero
      setShouldShowButton(false);
    }
  }, [isHeroHovered, hasScrolledPastHero]);

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {shouldShowButton && (
          <motion.div
            ref={buttonRef}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed-button-safe fixed z-50"
            style={{
              bottom: 'calc(1.5rem + env(safe-area-inset-bottom))',
              left: 'calc(1.5rem + env(safe-area-inset-left))'
            }}
          >
            <motion.button
              onClick={() => setIsBookCallOpen(true)}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
              className="group relative btn-touch flex items-center gap-3 gradient-primary text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-brand hover:shadow-brand-lg transition-all duration-300 backdrop-blur-sm border border-white/20 overflow-hidden"
              aria-label="Umów bezpłatną konsultację"
            >
              {/* Background Pulse Effect */}
              <motion.div
                variants={pulseVariants}
                animate="pulse"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/50 to-accent-purple/50"
              />

              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative bg-white/20 rounded-full p-2 sm:p-2.5"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>

              {/* Text Content */}
              <div className="relative flex items-center gap-2">
                <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
                  <span className="hidden xs:inline">Umów Bezpłatną Konsultację</span>
                  <span className="xs:hidden">Konsultacja</span>
                </span>
                
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="hidden sm:block"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/30 to-accent-purple/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Shimmer Effect */}
              <motion.div
                animate={{
                  x: ['-100%', '100%'],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
              />
            </motion.button>

            {/* Mobile Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              whileHover={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                transition: { duration: 0.2 }
              }}
              className="sm:hidden absolute left-full ml-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            >
              <div className="bg-slate-800/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-slate-700/50 shadow-lg">
                Bezpłatna konsultacja
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-800/95" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book Call Form Modal */}
      <BookCallForm 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default SmartConsultationButton;