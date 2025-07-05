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
    { 
      path: '/o-nas', 
      label: 'O nas',
      ariaLabel: 'Przejdź do strony o nas'
    },
    { 
      path: '/uslugi', 
      label: 'Oferta',
      ariaLabel: 'Przejdź do strony z ofertą'
    },
    { 
      path: '/kontakt', 
      label: 'Kontakt',
      ariaLabel: 'Przejdź do strony kontaktowej'
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

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[1000] w-full"
      style={{ zIndex: 1000 }}
    >
      <nav
        className={`bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg border-b border-gray-200' 
            : 'shadow-md'
        }`}
        style={{ 
          height: window.innerWidth >= 768 ? '70px' : '60px'
        }}
        role="navigation"
        aria-label="Główna nawigacja"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Brand - Left side with 20px margin */}
            <div style={{ marginLeft: '20px' }}>
              <ScrollToTopLink 
                to="/" 
                className="flex items-center gap-3 group hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                aria-label="Bergss - Przejdź do strony głównej"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2 group-hover:shadow-lg transition-all duration-300"
                >
                  <Bot className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex flex-col">
                  <span 
                    className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                    style={{ 
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      maxHeight: '50px',
                      fontSize: '1.25rem',
                      fontWeight: 600
                    }}
                  >
                    Bergss
                  </span>
                </div>
              </ScrollToTopLink>
            </div>

            {/* Desktop Navigation - Right side with 40px margin */}
            <div className="hidden md:flex items-center" style={{ marginRight: '40px' }}>
              <ul className="flex items-center space-x-8" role="menubar">
                {navigationLinks.map((link, index) => (
                  <li key={link.path} role="none">
                    <ScrollToTopLink
                      to={link.path}
                      aria-label={link.ariaLabel}
                      role="menuitem"
                      className={`relative px-3 py-2 text-base font-medium transition-all duration-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md ${
                        isActiveLink(link.path)
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      style={{
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontSize: '16px',
                        fontWeight: isActiveLink(link.path) ? 600 : 500,
                        marginRight: index < navigationLinks.length - 1 ? '30px' : '0'
                      }}
                    >
                      {link.label}
                      
                      {/* Hover underline effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                        initial={{ scaleX: isActiveLink(link.path) ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          transformOrigin: 'left center'
                        }}
                      />
                      
                      {/* Active page indicator */}
                      {isActiveLink(link.path) && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button - Top right with 20px margin */}
            <div className="md:hidden" style={{ marginRight: '20px' }}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={isMobileMenuOpen ? 'Zamknij menu mobilne' : 'Otwórz menu mobilne'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                style={{
                  minHeight: '44px',
                  minWidth: '44px'
                }}
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
            <motion.div
              id="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <div className="px-4 py-4 space-y-2">
                <ul role="none" className="space-y-2">
                  {navigationLinks.map((link) => (
                    <li key={link.path} role="none">
                      <ScrollToTopLink
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label={link.ariaLabel}
                        role="menuitem"
                        className={`block w-full px-4 py-3 text-left text-base font-medium rounded-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                          isActiveLink(link.path)
                            ? 'text-blue-600 bg-blue-50 font-semibold' 
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                        style={{
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          fontSize: '16px',
                          fontWeight: isActiveLink(link.path) ? 600 : 500,
                          minHeight: '44px'
                        }}
                      >
                        {link.label}
                      </ScrollToTopLink>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;