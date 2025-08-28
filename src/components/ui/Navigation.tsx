// src/components/ui/Navigation.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg' 
            : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/30'
        }`}
        role="navigation"
        aria-label="Główna nawigacja"
      >
        <div className="container-responsive">
          <div className="flex items-center justify-between py-3 sm:py-4">
            
            {/* Logo - Left side */}
            <ScrollToTopLink 
              to="/" 
              className="flex items-center group hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg p-1"
              aria-label="Bergss - Przejdź do strony głównej"
            >
              <img
                src="/logo.png"
                alt="Bergss - Rozwiązania AI"
                className="h-10 w-auto sm:h-12 md:h-14 object-contain group-hover:drop-shadow-lg transition-all duration-300"
              />
            </ScrollToTopLink>

            {/* Desktop Navigation - Right side */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((link) => (
                <ScrollToTopLink
                  key={link.path}
                  to={link.path}
                  aria-label={link.ariaLabel}
                  className={`relative px-4 py-2 text-responsive-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900 hover:scale-105 ${
                    isActiveLink(link.path)
                      ? 'text-brand-white bg-slate-800/50 font-semibold' 
                      : 'text-slate-300 hover:text-brand-white hover:bg-slate-800/30'
                  }`}
                >
                  {link.label}
                  
                  {/* Active indicator */}
                  {isActiveLink(link.path) && (
                    <motion.div
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-primary"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </ScrollToTopLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden btn-touch text-brand-white hover:bg-slate-800/50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-slate-900"
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

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-slate-700/50 py-4 overflow-hidden"
              >
                <nav className="flex flex-col gap-2">
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;