import React from 'react';
import { Users, Target, Award, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import ConsultationButton from '../components/ui/ConsultationButton';

const AboutUs = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innowacyjność',
      description: 'Wykorzystujemy najnowsze technologie AI do tworzenia przełomowych rozwiązań dla biznesu.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Skuteczność',
      description: 'Koncentrujemy się na mierzalnych rezultatach i realnym wpływie na rozwój Twojej firmy.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Partnerstwo',
      description: 'Budujemy długotrwałe relacje z klientami, wspierając ich na każdym etapie transformacji.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Jakość',
      description: 'Dostarczamy rozwiązania najwyższej jakości, które spełniają najwyższe standardy branżowe.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Zadowolonych Klientów' },
    { number: '200+', label: 'Wdrożonych Projektów' },
    { number: '95%', label: 'Wskaźnik Zadowolenia' },
    { number: '24/7', label: 'Wsparcie Techniczne' }
  ];

  const teamMembers = [
    {
      name: 'Michał Kowalski',
      role: 'CEO & Founder',
      description: 'Ekspert w dziedzinie AI z 10-letnim doświadczeniem w transformacji cyfrowej.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Anna Nowak',
      role: 'CTO',
      description: 'Specjalistka od implementacji rozwiązań AI w środowiskach enterprise.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Piotr Wiśniewski',
      role: 'Head of Sales',
      description: 'Doradca strategiczny pomagający firmom w optymalizacji procesów sprzedażowych.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')] opacity-20"></div>
        
        <div className="container-responsive relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 sm:mb-8">
              <Users className="w-5 h-5 text-indigo-300" />
              <span className="text-indigo-200 font-medium text-responsive-sm">Poznaj nasz zespół</span>
            </div>
            
            <h1 className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
              O Nas
            </h1>
            
            <p className="text-responsive-lg text-blue-100/80 leading-relaxed px-4 sm:px-0 mb-8 sm:mb-12">
              Jesteśmy zespołem pasjonatów technologii AI, którzy wierzą w moc automatyzacji do transformacji biznesów. 
              Nasze doświadczenie i innowacyjne podejście pomagają firmom osiągać niezwykłe rezultaty.
            </p>

            <ConsultationButton />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-6">
                  Nasza Misja
                </h2>
                <p className="text-responsive-base text-blue-100/80 leading-relaxed mb-6">
                  Demokratyzujemy dostęp do zaawansowanych technologii AI, umożliwiając firmom każdej wielkości 
                  korzystanie z rozwiązań, które wcześniej były dostępne tylko dla największych korporacji.
                </p>
                <div className="space-y-4">
                  {[
                    'Zwiększenie efektywności procesów sprzedażowych o 300%',
                    'Automatyzacja powtarzalnych zadań i oszczędność czasu',
                    'Personalizacja komunikacji z klientami na dużą skalę',
                    'Ciągłe wsparcie i optymalizacja rozwiązań'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-responsive-sm text-blue-100/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-responsive-2xl sm:text-responsive-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-2">
                          {achievement.number}
                        </div>
                        <div className="text-responsive-xs text-blue-100/70">
                          {achievement.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-4">
              Nasze Wartości
            </h2>
            <p className="text-responsive-base text-blue-100/80 max-w-2xl mx-auto">
              Fundamenty, na których budujemy każde rozwiązanie i relację z klientem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl spacing-responsive-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-responsive-base font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-responsive-sm text-blue-100/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-4">
              Nasz Zespół
            </h2>
            <p className="text-responsive-base text-blue-100/80 max-w-2xl mx-auto">
              Poznaj ekspertów, którzy codziennie pracują nad innowacyjnymi rozwiązaniami AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="spacing-responsive-md">
                  <h3 className="text-responsive-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-responsive-sm text-indigo-300 mb-3">
                    {member.role}
                  </p>
                  <p className="text-responsive-sm text-blue-100/80 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl spacing-responsive-lg border border-indigo-500/30 max-w-4xl mx-auto text-center">
            <h3 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-white mb-4">
              Gotowy na Współpracę?
            </h3>
            <p className="text-responsive-base text-blue-100/80 mb-8 max-w-2xl mx-auto">
              Dołącz do grona zadowolonych klientów, którzy już korzystają z naszych rozwiązań AI. 
              Umów bezpłatną konsultację i zobacz, jak możemy pomóc Twojemu biznesowi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ConsultationButton />
              <a 
                href="mailto:kontakt@bergss.pl"
                className="btn-touch flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <span>Napisz do nas</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;