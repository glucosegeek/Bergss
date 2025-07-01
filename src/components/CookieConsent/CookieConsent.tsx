import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, BarChart3, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
}

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      essential: true,
      analytics: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
    
    // Enable analytics if accepted
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleEssentialOnly = () => {
    const consentData = {
      essential: true,
      analytics: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      essential: true, // Essential cookies cannot be rejected
      analytics: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      essential: true, // Always true
      analytics: preferences.analytics,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);

    // Update analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-950/95 to-purple-950/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl">
            {!showDetails ? (
              // Simple consent view
              <div className="spacing-responsive-lg">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-responsive-lg sm:text-responsive-xl font-bold text-white mb-2 sm:mb-3">
                      Szanujemy Twoją prywatność
                    </h3>
                    <p className="text-responsive-sm sm:text-responsive-base text-blue-100/80 leading-relaxed mb-3 sm:mb-4">
                      Chcemy być transparentni w kwestii wykorzystania plików cookies na tej stronie. 
                      Wybierz swoje preferencje dotyczące cookies:
                    </p>
                    
                    {/* Cookie types info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-4 h-4 text-green-400" />
                          <span className="text-responsive-sm font-semibold text-green-300">
                            Niezbędne Cookies (Wymagane)
                          </span>
                        </div>
                        <p className="text-responsive-xs sm:text-responsive-sm text-blue-100/70">
                          Te pliki cookies są niezbędne do podstawowego funkcjonowania strony i nie mogą być wyłączone.
                        </p>
                      </div>
                      
                      <div className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-4 h-4 text-blue-400" />
                          <span className="text-responsive-sm font-semibold text-blue-300">
                            Cookies Analityczne (Opcjonalne)
                          </span>
                        </div>
                        <p className="text-responsive-xs sm:text-responsive-sm text-blue-100/70">
                          Pomagają nam ulepszać stronę poprzez zbieranie anonimowych danych o użytkowaniu.
                        </p>
                      </div>
                    </div>

                    <p className="text-responsive-xs sm:text-responsive-sm text-blue-100/60 mb-4 sm:mb-6">
                      Kontynuując korzystanie z tej strony, zgadzasz się na wykorzystanie cookies zgodnie z naszą{' '}
                      <Link 
                        to="/polityka-prywatnosci" 
                        className="text-indigo-300 hover:text-indigo-200 underline transition-colors duration-200"
                      >
                        Polityką Prywatności
                      </Link>
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setIsVisible(false)}
                    className="btn-touch text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-lg flex-shrink-0"
                    aria-label="Zamknij banner cookies"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={handleAcceptAll}
                    className="btn-touch flex-1 px-4 sm:px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-responsive-sm sm:text-responsive-base font-semibold text-white shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                  >
                    Akceptuj Wszystkie
                  </button>
                  
                  <button
                    onClick={handleEssentialOnly}
                    className="btn-touch flex-1 px-4 sm:px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-responsive-sm sm:text-responsive-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
                  >
                    Tylko Niezbędne
                  </button>
                  
                  <button
                    onClick={handleRejectAll}
                    className="btn-touch flex-1 px-4 sm:px-6 py-3 bg-gray-600/20 border border-gray-500/30 rounded-lg text-responsive-sm sm:text-responsive-base font-semibold text-gray-300 hover:bg-gray-600/30 transition-all duration-300"
                  >
                    Odrzuć Opcjonalne
                  </button>
                  
                  <button
                    onClick={() => setShowDetails(true)}
                    className="btn-touch px-4 sm:px-6 py-3 bg-transparent border border-indigo-400/50 rounded-lg text-responsive-sm sm:text-responsive-base font-semibold text-indigo-300 hover:bg-indigo-500/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="hidden sm:inline">Ustawienia</span>
                  </button>
                </div>
              </div>
            ) : (
              // Detailed preferences view
              <div className="spacing-responsive-lg">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-2 sm:p-3">
                      <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-responsive-lg sm:text-responsive-xl font-bold text-white">
                      Ustawienia Cookies
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="btn-touch text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  {/* Essential Cookies */}
                  <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-400" />
                        <h4 className="text-responsive-base sm:text-responsive-lg font-semibold text-white">
                          Niezbędne Cookies
                        </h4>
                      </div>
                      <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-responsive-xs font-medium">
                        Zawsze aktywne
                      </div>
                    </div>
                    <p className="text-responsive-sm text-blue-100/80 leading-relaxed">
                      Te pliki cookies są niezbędne do podstawowego funkcjonowania strony internetowej. 
                      Obejmują funkcje takie jak nawigacja, dostęp do bezpiecznych obszarów strony i podstawowe funkcjonalności. 
                      Strona nie może funkcjonować prawidłowo bez tych cookies.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-blue-400" />
                        <h4 className="text-responsive-base sm:text-responsive-lg font-semibold text-white">
                          Cookies Analityczne
                        </h4>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                      </label>
                    </div>
                    <p className="text-responsive-sm text-blue-100/80 leading-relaxed">
                      Te cookies pomagają nam zrozumieć, jak odwiedzający korzystają ze strony, 
                      zbierając i raportując informacje anonimowo. Nie są gromadzone żadne dane osobowe. 
                      Pomagają nam ulepszać funkcjonalność i zawartość strony.
                    </p>
                  </div>
                </div>

                {/* Action buttons for detailed view */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={handleSavePreferences}
                    className="btn-touch flex-1 px-4 sm:px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-responsive-sm sm:text-responsive-base font-semibold text-white shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                  >
                    Zapisz Preferencje
                  </button>
                  
                  <button
                    onClick={() => setShowDetails(false)}
                    className="btn-touch px-4 sm:px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-responsive-sm sm:text-responsive-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
                  >
                    Powrót
                  </button>
                  
                  <Link
                    to="/polityka-prywatnosci"
                    className="btn-touch px-4 sm:px-6 py-3 bg-transparent border border-indigo-400/50 rounded-lg text-responsive-sm sm:text-responsive-base font-semibold text-indigo-300 hover:bg-indigo-500/20 transition-all duration-300 text-center"
                  >
                    Polityka Prywatności
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;