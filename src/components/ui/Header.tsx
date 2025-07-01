import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationLinks = [
    { path: '/uslugi', label: 'Usługi' },
    { path: '/demo', label: 'Demo' },
    { path: '/kontakt', label: 'Kontakt' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/90 backdrop-blur-lg border-b border-white/10">
      <div className="container-responsive">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo/Home Button */}
          <Link 
            to="/" 
            className="flex items-center gap-3 sm:gap-4 group hover:scale-105 transition-all duration-300"
            aria-label="Bergss - Strona główna"
            style={{ padding: '20px' }}
          >
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="Bergss Logo - Rozwiązania AI dla biznesu"
                className="w-[150px] h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                style={{ 
                  maxWidth: '150px',
                  height: 'auto',
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
                }}
                loading="eager"
                decoding="async"
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
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