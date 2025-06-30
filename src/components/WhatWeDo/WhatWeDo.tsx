import React from 'react';
import { Bot, Mail, Phone, Globe } from 'lucide-react';
import ServiceCard from './ServiceCard';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Chatbot AI",
      description: "Automatyzuje rozmowy. Odpowiada na pytania i poprawia doświadczenia klientów dzięki całodobowej, inteligentnej obsłudze."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Automatyczny Outreach AI",
      description: "Wysyła spersonalizowane cold maile i wiadomości na dużą skalę, utrzymując naturalną komunikację z potencjalnymi klientami."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Rozmowy Telefoniczne AI",
      description: "Boty głosowe wykonujące połączenia sprzedażowe lub wsparcia dla Twojej firmy 24/7, prowadzące naturalne i efektywne rozmowy."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Strona Internetowa",
      description: "Tworzymy nowoczesne strony internetowe zoptymalizowane pod konwersję, z responsywnym designem i płynnym doświadczeniem użytkownika."
    }
  ];

  return (
    <section id="rozwiazania-ai" className="py-24 bg-gradient-to-br from-indigo-950/80 to-purple-950/80">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Centered header section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
            Rozwiązania Oparte na AI
          </h2>
          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Przekształć swój proces sprzedaży dzięki naszym najnowocześniejszym narzędziom AI, które pracują całodobowo, aby rozwijać Twój biznes
          </p>
        </div>
        
        {/* Centered services grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
            {services.map((service, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-sm">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;