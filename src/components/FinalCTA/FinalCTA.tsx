import React, { useState } from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookCallForm from '../BookCallForm/BookCallForm';

const FinalCTA: React.FC = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="relative container-responsive text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
            <span className="text-yellow-100 font-medium text-responsive-sm sm:text-responsive-base">Zacznij skalować już dziś</span>
          </div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl md:text-responsive-5xl lg:text-responsive-6xl font-bold text-white mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0">
            Gotowy na Transformację Biznesu z AI?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <button 
              onClick={() => setIsBookCallOpen(true)}
              className="btn-touch group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg text-responsive-base sm:text-responsive-lg font-semibold text-indigo-600 shadow-lg shadow-black/25 hover:shadow-black/40 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full rounded-lg opacity-0 bg-white/90 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <span className="mobile-only">Umów Konsultację</span>
                <span className="tablet-only desktop-only">Umów Bezpłatną Konsultację</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <Link 
              to="/demo" 
              className="group relative btn-touch flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
            >
              {/* Animated Play Button */}
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                {/* Pulse animation */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 animate-ping group-hover:opacity-50"></div>
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col items-start">
                <span className="text-white font-semibold text-responsive-sm sm:text-responsive-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <span className="mobile-only">Demo (2 min)</span>
                  <span className="tablet-only desktop-only">Zobacz Demo (2 min)</span>
                </span>
                <span className="text-blue-200/70 text-xs sm:text-sm group-hover:text-blue-100/80 transition-colors duration-300">
                  Rozwiązania AI w akcji
                </span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
            </Link>
          </div>

          <p className="mt-6 sm:mt-8 text-blue-100/80 text-responsive-sm">
            • Bergss.pl •
          </p>
        </div>
      </section>

      <BookCallForm 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default FinalCTA;