import React from 'react';
import PageLayout from '../components/ui/PageLayout';
import { FileText, Scale, Shield } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Postanowienia ogólne',
      content: [
        'Niniejszy regulamin określa zasady korzystania z usług świadczonych przez Bergss.',
        'Korzystanie z naszych usług oznacza akceptację wszystkich postanowień regulaminu.',
        'Zastrzegamy sobie prawo do zmiany regulaminu z zachowaniem 14-dniowego okresu wypowiedzenia.'
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Prawa i obowiązki',
      content: [
        'Klient ma prawo do otrzymania usług zgodnie z zawartą umową.',
        'Klient zobowiązuje się do terminowego regulowania należności.',
        'Bergss zobowiązuje się do świadczenia usług z najwyższą starannością.',
        'Obie strony zobowiązują się do zachowania poufności informacji biznesowych.'
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Ochrona danych',
      content: [
        'Przetwarzamy dane osobowe zgodnie z RODO i polskim prawem.',
        'Dane są wykorzystywane wyłącznie w celu realizacji umowy.',
        'Klient ma prawo dostępu, sprostowania i usunięcia swoich danych.',
        'Szczegóły w naszej Polityce Prywatności.'
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="container-responsive py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6">
              <Scale className="w-5 h-5 text-accent-blue" />
              <span className="text-brand-light font-medium text-responsive-sm">Regulamin Usług</span>
            </div>
            
            <h1 className="text-responsive-4xl sm:text-responsive-5xl font-bold text-brand-white mb-6 gradient-text-primary">
              Regulamin
            </h1>
            
            <p className="text-responsive-lg text-brand-light max-w-3xl mx-auto leading-relaxed">
              Regulamin określa zasady korzystania z usług AI Sales Solutions oraz prawa i obowiązki użytkowników.
            </p>
          </div>

          {/* Introduction */}
          <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50 mb-8">
            <h2 className="text-responsive-2xl font-bold text-brand-white mb-4">
              Wprowadzenie
            </h2>
            <p className="text-brand-light leading-relaxed mb-4">
              Niniejszy regulamin określa zasady współpracy między firmą Bergss a jej klientami. 
              Dokument ten reguluje prawa i obowiązki obu stron oraz procedury związane ze świadczeniem usług AI.
            </p>
            <p className="text-brand-light leading-relaxed">
              Przed rozpoczęciem współpracy prosimy o uważne zapoznanie się z wszystkimi postanowieniami.
            </p>
          </div>

          {/* Main Sections */}
          <div className="space-y-6 mb-8">
            {sections.map((section, index) => (
              <div key={index} className="glass rounded-xl spacing-responsive-lg border border-slate-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="gradient-primary rounded-lg p-3">
                    {section.icon}
                  </div>
                  <h2 className="text-responsive-xl font-bold text-brand-white">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-brand-light leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50">
              <h3 className="text-responsive-lg font-bold text-brand-white mb-4">
                Warunki płatności
              </h3>
              <ul className="space-y-2 text-brand-light">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2"></div>
                  <span className="text-responsive-sm">Płatność w terminie 14 dni od wystawienia faktury</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2"></div>
                  <span className="text-responsive-sm">Możliwość płatności przelewem lub kartą</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2"></div>
                  <span className="text-responsive-sm">Odsetki za zwłokę zgodnie z przepisami</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50">
              <h3 className="text-responsive-lg font-bold text-brand-white mb-4">
                Rozwiązanie umowy
              </h3>
              <ul className="space-y-2 text-brand-light">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2"></div>
                  <span className="text-responsive-sm">Wypowiedzenie z 30-dniowym okresem</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2"></div>
                  <span className="text-responsive-sm">Możliwość rozwiązania za porozumieniem stron</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2"></div>
                  <span className="text-responsive-sm">Rozliczenie należności do dnia rozwiązania</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-brand-primary/20 to-accent-purple/20 rounded-xl spacing-responsive-lg border border-brand-primary/30 text-center">
            <h2 className="text-responsive-lg font-bold text-brand-white mb-4">
              Pytania dotyczące regulaminu?
            </h2>
            <p className="text-brand-light mb-6">
              Skontaktuj się z nami, jeśli masz pytania dotyczące warunków współpracy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kontakt@bergss.pl"
                className="btn-touch btn-primary px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Wyślij email
              </a>
              <a 
                href="tel:+48530639369"
                className="btn-touch btn-secondary px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Zadzwoń
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;