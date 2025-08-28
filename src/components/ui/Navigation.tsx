// src/components/ui/Navigation.tsx
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

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] w-full">
      <nav
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg shadow-slate-900/20' 
            : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/30'
        }`}
        style={{ height: '70px' }}
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
                <motion.div
                  className="gradient-primary rounded-lg p-2.5 group-hover:shadow-lg group-hover:shadow-brand transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Bot className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-responsive-xl font-bold text-brand-white group-hover:gradient-text-primary transition-all duration-300">
                    Bergss
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:block">
                    Rozwiązania AI
                  </span>
                </div>
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
                          animate={{ scaleX: isActiveLink(link.path) ? 1 : 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </ScrollToTopLink>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden btn-touch text-brand-white hover:bg-slate-800/50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="container-responsive py-4">
                <nav className="flex flex-col gap-2" role="menu">
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.2 }}
                    >
                      <ScrollToTopLink
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        role="menuitem"
                        aria-label={link.ariaLabel}
                        className={`block px-4 py-3 rounded-lg text-responsive-base font-medium transition-all duration-300 hover:bg-slate-800/50 hover:text-brand-white ${
                          isActiveLink(link.path)
                            ? 'text-brand-white bg-slate-800/50 font-semibold' 
                            : 'text-slate-300'
                        }`}
                      >
                        {link.label}
                      </ScrollToTopLink>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;