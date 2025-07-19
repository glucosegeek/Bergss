import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTopLink from './ScrollToTopLink';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { 
      path: '/', 
      label: 'Strona główna',
      ariaLabel: 'Przejdź do strony głównej'
    },
    // TEMPORARILY HIDDEN: Demo navigation link - uncomment to restore
    // { 
    //   path: '/demo', 
    //   label: 'Demo',
    //   ariaLabel: 'Przejdź do strony demo'
    // },
    { 
      path: '/uslugi', 
      label: 'Usługi',
      ariaLabel: 'Przejdź do strony z usługami'
    },
    { 
      path: '/kontakt', 
      label: 'Kontakt',
      ariaLabel: 'Przejdź do strony kontaktowej'
    },
    { 
      path: '/o-nas', 
      label: 'O nas',
      ariaLabel: 'Przejdź do strony o nas'
    }
  ];

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[1000] w-full"
      style={{ zIndex: 1000 }}
    >
      <nav
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg shadow-slate-900/20' 
            : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/30'
        }`}
        style={{ 
          height: window.innerWidth >= 768 ? '70px' : '60px'
        }}
        role="navigation"
        aria-label="Główna nawigacja"
      >
        <div className="container-responsive h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Brand - Left side */}
            <div className="flex items-center">
              <ScrollToTopLink 
                to="/" 
                className="flex items-center gap-3 group hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-1"
                aria-label="Bergss - Przejdź do strony głównej"
              >
                <motion.img
                  src="/logo.png"
                  alt="Bergss - Rozwiązania AI"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-8 w-auto sm:h-10 md:h-12 object-contain group-hover:drop-shadow-lg transition-all duration-300"
                />
              </ScrollToTopLink>
            </div>

            {/* Desktop Navigation - Right side */}
            <div className="hidden md:flex items-center">
              <ul className="flex items-center space-x-1" role="menubar">
                {navigationLinks.map((link) => (
                  <li key={link.path} role="none">
                    <motion.div
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <ScrollToTopLink
                        to={link.path}
                        aria-label={link.ariaLabel}
                        role="menuitem"
                        className={`relative px-4 py-2 text-responsive-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900 ${
                          isActiveLink(link.path)
                            ? 'text-brand-white bg-slate-800/50 font-semibold' 
                            : 'text-slate-300 hover:text-brand-white hover:bg-slate-800/30'
                        }`}
                      >
                        {link.label}
                        
                        {/* Hover underline effect */}
                        <motion.div
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-primary origin-left"
                          initial={{ scaleX: isActiveLink(link.path) ? 1 : 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Active page indicator */}
                        {isActiveLink(link.path) && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-primary"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </ScrollToTopLink>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn-touch text-brand-white hover:bg-slate-800/50 rounded-lg p-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label={isMobileMenuOpen ? 'Zamknij menu mobilne' : 'Otwórz menu mobilne'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="w-6 h-6" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="w-6 h-6" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Smooth slide-in from top */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Mobile overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mobile-nav-overlay md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
            <motion.div
              id="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="mobile-nav-menu md:hidden shadow-lg overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <div className="container-responsive py-4 safe-area-bottom">
                <ul role="none" className="space-y-2">
                  {navigationLinks.map((link, index) => (
                    <motion.li 
                      key={link.path} 
                      role="none"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: index * 0.1,
                          duration: 0.3
                        }
                      }}
                    >
                      <ScrollToTopLink
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label={link.ariaLabel}
                        role="menuitem"
                        className={`block w-full px-4 py-3 text-responsive-base font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900 ${
                          isActiveLink(link.path)
                            ? 'text-brand-white bg-slate-800/50 font-semibold' 
                            : 'text-slate-300 hover:text-brand-white hover:bg-slate-800/30'
                        }`}
                      >
                        {link.label}
                      </ScrollToTopLink>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;