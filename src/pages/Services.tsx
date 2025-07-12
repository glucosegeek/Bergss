import React from 'react';
import { Bot, Mail, Phone, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import ConsultationButton from '../components/ui/ConsultationButton';
import ScrollToTopLink from '../components/ui/ScrollToTopLink';

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Chatbot AI',
      subtitle: 'Inteligentna obsługa klienta 24/7',
      description: 'Zaawansowany chatbot AI, który automatyzuje rozmowy z klientami, odpowiada na pytania i poprawia doświadczenia użytkowników dzięki całodobowej, inteligentnej obsłudze.',
      features: [
        'Naturalne rozmowy z klientami',
        'Automatyczne pozyskiwanie leadów',
        'Integracja z systemami CRM',
        'Wielojęzyczne wsparcie',
        'Analityka i raportowanie',
        'Personalizowane odpowiedzi'
      ],
      benefits: [
        'Redukcja kosztów obsługi klienta o 60%',
        'Zwiększenie konwersji o 35%',
        'Dostępność 24/7 bez przerw',
        'Natychmiastowe odpowiedzi'
      ],
      price: 'Do ustalenia na spotkaniu',
      popular: true
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Agenci AI',
      subtitle: 'Inteligentni asystenci cyfrowi',
      description: 'Potrafią analizować informacje, zarządzać procesami i integrować się z Twoimi narzędziami.',
      features: [
        'Automatyzacja procesów wewnętrznych',
        'Zmniejszenie liczby błędów manualnych o 95%',
        'Nawet 3x szybsze przygotowywanie raportów, analiz i dokumentów',
        'Do 50% mniej spotkań i maili dzięki agentom, którzy koordynują i przekazują informacje między działami',
        'Automatyzacja nawet 60–90% rutynowych zadań administracyjnych i back-office'
      ],
      benefits: [
        'Zwiększenie umówionych spotkań z potencjalnymi klientami',
        'Redukcja kosztów call center',
        'Konsystentna jakość rozmów',
        'Skalowalność bez granic'
      ],
      price: 'Do ustalenia na spotkaniu',
      popular: true
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Strona Internetowa',
      subtitle: 'Nowoczesne strony zoptymalizowane pod konwersję',
      description: 'Tworzymy nowoczesne strony internetowe zoptymalizowane pod konwersję, z responsywnym designem i płynnym doświadczeniem użytkownika.',
      features: [
        'Responsywny design',
        'Optymalizacja SEO',
        'Szybkie ładowanie',
        'Integracja z AI',
        'Analityka konwersji',
        'Technologia Shopify',
        'Wsparcie techniczne'
      ],
      benefits: [
        'Zwiększenie konwersji',
        'Lepsze pozycje w Google',
        'Profesjonalny wizerunek',
        'Mobilna optymalizacja'
      ],
      price: 'Do ustalenia na spotkaniu',
      popular: true
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Konsultacja',
      description: 'Bezpłatna analiza Twoich potrzeb i celów biznesowych'
    },
    {
      step: '02',
      title: 'Strategia',
      description: 'Opracowanie dedykowanej strategii wdrożenia AI'
    },
    {
      step: '03',
      title: 'Wdrożenie',
      description: 'Profesjonalne wdrożenie i konfiguracja rozwiązań'
    },
    {
      step: '04',
      title: 'Optymalizacja',
      description: 'Ciągłe monitorowanie i optymalizacja wyników'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
        
        <div className="container-responsive relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6 sm:mb-8">
              <Bot className="w-5 h-5 text-accent-blue" />
              <span className="text-brand-light font-medium text-responsive-sm">Rozwiązania AI</span>
            </div>
            
            <h1 className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold mb-4 sm:mb-6 gradient-text-primary">
              Nasze Usługi
            </h1>
            
            <p className="text-responsive-lg text-brand-light max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 mb-8 sm:mb-12">
              Kompleksowe rozwiązania AI, które zrewolucjonizują Twój proces sprzedaży i obsługi klienta. 
              Wybierz usługi dopasowane do potrzeb Twojego biznesu.
            </p>

            <ConsultationButton />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-105 ${
                  service.popular 
                    ? 'border-brand-primary/50 shadow-brand' 
                    : 'border-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="gradient-primary px-4 py-1 rounded-full">
                      <span className="text-white text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Najpopularniejsze
                      </span>
                    </div>
                  </div>
                )}

                <div className="spacing-responsive-lg">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="gradient-primary rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-responsive-xl font-bold text-brand-white mb-2 group-hover:gradient-text-primary transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-responsive-sm text-accent-blue">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-responsive-sm text-brand-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-responsive-base font-semibold text-brand-white mb-3">
                      Funkcje:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                          <span className="text-responsive-xs text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-responsive-base font-semibold text-brand-white mb-3">
                      Korzyści:
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-responsive-xs text-slate-400">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="border-t border-slate-700/50 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-responsive-lg font-bold gradient-text-primary">
                        {service.price}
                      </div>
                    </div>
                    <ConsultationButton className="w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-brand-white mb-4">
              Proces Wdrożenia
            </h2>
            <p className="text-responsive-base text-brand-light max-w-2xl mx-auto">
              Sprawdzony proces, który gwarantuje sukces Twojego projektu AI
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative glass rounded-xl spacing-responsive-md border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-center"
              >
                <div className="gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-responsive-sm">{step.step}</span>
                </div>
                <h3 className="text-responsive-base font-semibold text-brand-white mb-3 group-hover:gradient-text-primary transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-responsive-sm text-brand-light leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 gradient-primary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-brand-primary/20 to-accent-purple/20 rounded-xl spacing-responsive-lg border border-brand-primary/30 max-w-4xl mx-auto text-center">
            <h3 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-brand-white mb-4">
              Gotowy na Transformację?
            </h3>
            <p className="text-responsive-base text-brand-light mb-8 max-w-2xl mx-auto">
              Nie czekaj dłużej! Umów bezpłatną konsultację i dowiedz się, jak nasze rozwiązania AI 
              mogą zrewolucjonizować Twój biznes już dziś.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ConsultationButton />
              <ScrollToTopLink 
                to="/demo"
                className="btn-touch btn-secondary flex items-center gap-2 text-brand-white px-6 py-3 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <span>Zobacz Demo</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </ScrollToTopLink>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;