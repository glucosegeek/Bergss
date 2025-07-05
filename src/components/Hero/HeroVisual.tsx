import React from 'react';

const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      {/* Main dashboard frame */}
      <div className="relative glass rounded-xl shadow-brand p-3 sm:p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-green"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-12 sm:h-2.5 sm:w-16 bg-slate-600/50 rounded"></div>
            <div className="h-2 w-8 sm:h-2.5 sm:w-10 bg-slate-600/50 rounded"></div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="bg-slate-800/50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 border border-slate-700/30">
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <div className="h-2.5 w-24 sm:h-3 sm:w-32 bg-brand-primary/30 rounded"></div>
            <div className="h-2.5 w-12 sm:h-3 sm:w-16 bg-accent-purple/30 rounded"></div>
          </div>
          
          {/* AI Conversation */}
          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center text-xs font-medium text-white">AI</div>
              <div className="bg-slate-700/30 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-brand-light max-w-[80%]">
                <span className="mobile-only">Cześć! W czym mogę pomóc?</span>
                <span className="tablet-only desktop-only">Cześć! Jestem Twoim asystentem AI. W czym mogę Ci dzisiaj pomóc?</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-accent-blue/20 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-brand-light max-w-[80%]">
                <span className="mobile-only">Pomoc z obsługą klienta?</span>
                <span className="tablet-only desktop-only">Czy możecie pomóc w zmniejszeniu czasu poświęconego na obsługę klienta?</span>
              </div>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent-blue flex-shrink-0 flex items-center justify-center text-xs font-medium text-white">U</div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center text-xs font-medium text-white">AI</div>
              <div className="bg-slate-700/30 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-brand-light max-w-[80%]">
                <span className="mobile-only">Tak! Redukcja o 70%.</span>
                <span className="tablet-only desktop-only">Oczywiście! Nasz chatbot AI może zredukować czas obsługi klienta o 70%.</span>
              </div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-slate-700/20 rounded-lg p-2 sm:p-3">
              <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-brand-primary/30 rounded mb-1 sm:mb-2"></div>
              <div className="h-3 w-8 sm:h-4 sm:w-12 bg-brand-primary/40 rounded"></div>
            </div>
            <div className="bg-slate-700/20 rounded-lg p-2 sm:p-3">
              <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-accent-purple/30 rounded mb-1 sm:mb-2"></div>
              <div className="h-3 w-8 sm:h-4 sm:w-12 bg-accent-purple/40 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom tabs */}
        <div className="flex justify-between">
          <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-slate-600/30 rounded"></div>
          <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-slate-600/30 rounded"></div>
          <div className="h-1.5 w-12 sm:h-2 sm:w-16 bg-brand-primary/60 rounded"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-brand-primary/30 to-accent-blue/20 rounded-full blur-2xl"></div>
      <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent-purple/30 to-brand-primary/20 rounded-full blur-2xl"></div>
    </div>
  );
};

export default HeroVisual;