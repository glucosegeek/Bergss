import React from 'react';
import PageLayout from '../components/ui/PageLayout';
import { Cookie, Shield, Settings } from 'lucide-react';

const Cookies = () => {
  const cookieTypes = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Niezbędne pliki cookies',
      description: 'Te pliki cookies są konieczne do prawidłowego funkcjonowania strony internetowej i nie można ich wyłączyć.',
      examples: ['Sesje użytkownika', 'Preferencje językowe', 'Zabezpieczenia']
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Funkcjonalne pliki cookies',
      description: 'Umożliwiają zapamiętywanie wyborów użytkownika i personalizację doświadczenia.',
      examples: ['Preferencje wyświetlania', 'Zapamiętane formularze', 'Ustawienia użytkownika']
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: 'Analityczne pliki cookies',
      description: 'Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony internetowej.',
      examples: ['Google Analytics', 'Statystyki odwiedzin', 'Analiza zachowań']
    }
  ];

  return (
    <PageLayout>
      <div className="container-responsive py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
              <Cookie className="w-5 h-5 text-accent-blue" />
              <span className="text-brand-light font-medium text-responsive-sm">Polityka Cookies</span>
            </div>
            
            <h1 className="text-responsive-4xl sm:text-responsive-5xl font-bold text-brand-white mb-6 gradient-text-primary">
              Polityka Cookies
            </h1>
            
            <p className="text-responsive-lg text-brand-light max-w-3xl mx-auto leading-relaxed">
              Dowiedz się więcej o tym, jak wykorzystujemy pliki cookies i inne technologie śledzenia na naszej stronie.
            </p>
          </div>

          {/* Introduction */}
          <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50 mb-8">
            <h2 className="text-responsive-2xl font-bold text-brand-white mb-4">
              Czym są pliki cookies?
            </h2>
            <p className="text-brand-light leading-relaxed mb-4">
              Pliki cookies to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu podczas odwiedzania stron internetowych. 
              Pomagają nam zapewnić lepsze doświadczenie użytkownika i analizować ruch na stronie.
            </p>
            <p className="text-brand-light leading-relaxed">
              Używamy plików cookies zgodnie z obowiązującymi przepisami prawa, w tym RODO i ustawą o świadczeniu usług drogą elektroniczną.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="space-y-6 mb-8">
            <h2 className="text-responsive-2xl font-bold text-brand-white text-center mb-8">
              Rodzaje plików cookies
            </h2>
            
            {cookieTypes.map((type, index) => (
              <div key={index} className="glass rounded-xl spacing-responsive-lg border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="gradient-primary rounded-lg p-3">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-responsive-lg font-semibold text-brand-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-brand-light leading-relaxed mb-4">
                      {type.description}
                    </p>
                    <div>
                      <h4 className="text-responsive-base font-medium text-accent-blue mb-2">Przykłady:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center gap-2 text-responsive-sm text-slate-400">
                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Management */}
          <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50 mb-8">
            <h2 className="text-responsive-2xl font-bold text-brand-white mb-4">
              Zarządzanie plikami cookies
            </h2>
            <div className="space-y-4 text-brand-light">
              <p className="leading-relaxed">
                Możesz kontrolować i zarządzać plikami cookies na kilka sposobów:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Ustawienia przeglądarki:</strong> Większość przeglądarek pozwala na blokowanie lub usuwanie plików cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Tryb prywatny:</strong> Korzystanie z trybu incognito/prywatnego ogranicza zapisywanie cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Narzędzia zewnętrzne:</strong> Możesz używać dodatków do przeglądarki blokujących śledzenie</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-brand-primary/20 to-accent-purple/20 rounded-xl spacing-responsive-lg border border-brand-primary/30 text-center">
            <h2 className="text-responsive-lg font-bold text-brand-white mb-4">
              Masz pytania dotyczące cookies?
            </h2>
            <p className="text-brand-light mb-6">
              Skontaktuj się z nami, jeśli masz pytania dotyczące naszej polityki cookies
            </p>
            <a 
              href="mailto:kontakt@bergss.pl"
              className="btn-touch btn-primary px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cookies;