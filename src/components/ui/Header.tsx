import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/90 backdrop-blur-lg border-b border-white/10">
      <div className="container-responsive">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo/Home Button */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group hover:scale-105 transition-all duration-300"
            aria-label="Bergss - Strona główna"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-2 sm:p-2.5 group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300">
              <img 
                src="/images/logo.png" 
                alt="Bergss Logo" 
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                style={{ maxHeight: '24px', maxWidth: '24px' }}
                onError={(e) => {
                  // Fallback to Bot icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white hidden" />
            </div>
            <div className="flex flex-col">
              <span className="text-responsive-lg sm:text-responsive-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                Bergss
              </span>
              <span className="text-xs text-blue-200/60 hidden sm:block">Rozwiązania AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-responsive-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-white ${
                  location.pathname === link.path 
                    ? 'text-white bg-white/10' 
                    : 'text-blue-200/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden btn-touch text-white hover:bg-white/10 rounded-lg p-2"
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
          <div className="lg:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-responsive-base font-medium transition-all duration-300 hover:bg-white/10 hover:text-white ${
                    location.pathname === link.path 
                      ? 'text-white bg-white/10' 
                      : 'text-blue-200/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;