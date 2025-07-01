import React from 'react';
import LogoCard from './LogoCard';

const LogoShowcase: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container-responsive">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-white mb-4">
            Poznaj Bergss
          </h2>
          <p className="text-responsive-base text-blue-100/80 max-w-2xl mx-auto">
            Jesteśmy liderem w dziedzinie rozwiązań AI dla biznesu, pomagając firmom w transformacji cyfrowej
          </p>
        </div>

        {/* Logo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Featured Logo Card */}
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 flex items-center justify-center">
            <LogoCard 
              variant="featured" 
              className="w-full max-w-sm"
            />
          </div>

          {/* Compact Logo Cards */}
          <LogoCard 
            variant="compact" 
            showCompanyName={false}
            className="flex items-center justify-center min-h-[120px]"
          />
          
          <LogoCard 
            variant="default" 
            className="flex items-center justify-center"
          />

          {/* Additional Cards for demonstration */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/logo.png" 
                    alt="Bergss Logo"
                    className="w-[100px] h-auto object-contain"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-responsive-lg font-bold text-white mb-2">
                    Dlaczego Bergss?
                  </h3>
                  <p className="text-responsive-sm text-blue-100/80 leading-relaxed">
                    Łączymy najnowocześniejszą technologię AI z głębokim zrozumieniem potrzeb biznesowych, 
                    dostarczając rozwiązania, które rzeczywiście zwiększają efektywność i przychody.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Usage Guidelines */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl p-6 sm:p-8 border border-indigo-500/20">
            <h3 className="text-responsive-lg font-bold text-white mb-4 text-center">
              Nasze Wartości
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="text-responsive-base font-semibold text-indigo-200 mb-2">Innowacyjność</h4>
                <p className="text-responsive-sm text-blue-100/70">
                  Wykorzystujemy najnowsze technologie AI
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="text-responsive-base font-semibold text-indigo-200 mb-2">Precyzja</h4>
                <p className="text-responsive-sm text-blue-100/70">
                  Dostarczamy dokładne i skuteczne rozwiązania
                </p>
              </div>
              <div>
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="text-responsive-base font-semibold text-indigo-200 mb-2">Partnerstwo</h4>
                <p className="text-responsive-sm text-blue-100/70">
                  Budujemy długotrwałe relacje z klientami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;