import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bot, Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
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
      label: 'Home', 
      icon: <Home className="w-4 h-4" />,
      ariaLabel: 'Navigate to home page'
    },
    { 
      path: '/o-nas', 
      label: 'About', 
      icon: <User className="w-4 h-4" />,
      ariaLabel: 'Navigate to about page'
    },
    { 
      path: '/uslugi', 
      label: 'Services', 
      icon: <Briefcase className="w-4 h-4" />,
      ariaLabel: 'Navigate to services page'
    },
    { 
      path: '/kontakt', 
      label: 'Contact', 
      icon: <Mail className="w-4 h-4" />,
      ariaLabel: 'Navigate to contact page'
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
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/95 backdrop-blur-lg border-b border-slate-700/50 shadow-lg' 
          : 'bg-brand-dark/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo/Brand */}
          <ScrollToTopLink 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark rounded-lg"
            aria-label="Bergss - Navigate to home page"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="gradient-primary rounded-lg p-2 sm:p-2.5 group-hover:shadow-lg group-hover:shadow-brand transition-all duration-300"
            >
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-responsive-lg sm:text-responsive-xl font-bold text-brand-white group-hover:gradient-text-primary transition-all duration-300">
                Bergss
              </span>
              <span className="text-xs text-slate-400 hidden sm:block">
                Rozwiązania AI
              </span>
            </div>
          </ScrollToTopLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <ScrollToTopLink
                key={link.path}
                to={link.path}
                aria-label={link.ariaLabel}
                className={`group relative px-4 py-2 rounded-lg text-responsive-sm font-medium transition-all duration-300 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark ${
                  isActiveLink(link.path)
                    ? 'text-brand-white bg-slate-800/50' 
                    : 'text-slate-300 hover:text-brand-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.icon}
                  {link.label}
                </span>
                
                {/* Active indicator */}
                {isActiveLink(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-accent-purple/20 rounded-lg border border-brand-primary/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-accent-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </ScrollToTopLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden btn-touch text-brand-white hover:bg-slate-800/50 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark transition-colors duration-300"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
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
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Mobile Menu */}
              <motion.div
                id="mobile-menu"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-lg border-b border-slate-700/50 shadow-xl z-50"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="container-responsive py-4">
                  <nav className="flex flex-col gap-2" role="none">
                    {navigationLinks.map((link) => (
                      <motion.div
                        key={link.path}
                        variants={mobileMenuItemVariants}
                      >
                        <ScrollToTopLink
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          aria-label={link.ariaLabel}
                          role="menuitem"
                          className={`group flex items-center gap-3 px-4 py-3 rounded-lg text-responsive-base font-medium transition-all duration-300 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark ${
                            isActiveLink(link.path)
                              ? 'text-brand-white bg-slate-800/50 border border-brand-primary/30' 
                              : 'text-slate-300 hover:text-brand-white'
                          }`}
                        >
                          <div className={`p-2 rounded-lg transition-all duration-300 ${
                            isActiveLink(link.path)
                              ? 'gradient-primary text-white'
                              : 'bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50 group-hover:text-slate-300'
                          }`}>
                            {link.icon}
                          </div>
                          <span className="flex-1">{link.label}</span>
                          
                          {/* Active indicator */}
                          {isActiveLink(link.path) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-brand-primary rounded-full"
                            />
                          )}
                        </ScrollToTopLink>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Mobile Menu Footer */}
                  <motion.div
                    variants={mobileMenuItemVariants}
                    className="mt-6 pt-4 border-t border-slate-700/50 text-center"
                  >
                    <p className="text-xs text-slate-400">
                      © 2024 Bergss - Rozwiązania AI
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;