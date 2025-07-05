import React from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ScrollToTopLink from './ScrollToTopLink';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHomePage = location.pathname === '/';
  
  const navigationLinks = [
    { path: '/uslugi', label: 'Usługi' },
    { path: '/demo', label: 'Demo' },
    { path: '/kontakt', label: 'Kontakt' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container-responsive">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo/Home Button */}
          <ScrollToTopLink 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group hover:scale-105 transition-all duration-300"
            aria-label="Bergss - Strona główna"
          >
            <div className="gradient-primary rounded-lg p-2 sm:p-2.5 group-hover:shadow-lg group-hover:shadow-brand transition-all duration-300">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-responsive-lg sm:text-responsive-xl font-bold text-brand-white group-hover:gradient-text-primary transition-all duration-300">
                Bergss
              </span>
              <span className="text-xs text-slate-400 hidden sm:block">Rozwiązania AI</span>
            </div>
          </ScrollToTopLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <ScrollToTopLink
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-responsive-sm font-medium transition-all duration-300 hover:bg-slate-800/50 hover:text-brand-white ${
                  location.pathname === link.path 
                    ? 'text-brand-white bg-slate-800/50' 
                    : 'text-slate-300'
                }`}
              >
                {link.label}
              </ScrollToTopLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden btn-touch text-brand-white hover:bg-slate-800/50 rounded-lg p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-700/50 py-4">
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <ScrollToTopLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-responsive-base font-medium transition-all duration-300 hover:bg-slate-800/50 hover:text-brand-white ${
                    location.pathname === link.path 
                      ? 'text-brand-white bg-slate-800/50' 
                      : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </ScrollToTopLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;