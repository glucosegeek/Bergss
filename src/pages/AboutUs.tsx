import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import LogoShowcase from '../components/ui/LogoShowcase';
import ConsultationButton from '../components/ui/ConsultationButton';

const AboutUs = () => {
  const teamValues = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innowacyjność',
      description: 'Wykorzystujemy najnowsze technologie AI do tworzenia przełomowych rozwiązań biznesowych.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precyzja',
      description: 'Każde rozwiązanie jest dokładnie dopasowane do unikalnych potrzeb naszych klientów.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Partnerstwo',
      description: 'Budujemy długotrwałe relacje, wspierając naszych klientów na każdym etapie rozwoju.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Jakość',
      description: 'Dostarczamy rozwiązania najwyższej jakości, które przynoszą mierzalne rezultaty.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Zadowolonych klientów' },
    { number: '100+', label: 'Wdrożonych projektów' },
    { number: '24/7', label: 'Wsparcie techniczne' },
    { number: '99%', label: 'Satysfakcja klientów' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')] opacity-20"></div>
        
        <div className="container-responsive relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 sm:mb-8">
              <Users className="w-5 h-5 text-indigo-300" />
              <span className="text-indigo-200 font-medium text-responsive-sm">Poznaj nasz zespół</span>
            </div>
            
            <h1 className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
              O Nas
            </h1>
            
            <p className="text-responsive-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 mb-8 sm:mb-12">
              Jesteśmy zespołem ekspertów AI, którzy pomagają firmom w transformacji cyfrowej. 
              Nasze rozwiązania łączą najnowocześniejszą technologię z głębokim zrozumieniem potrzeb biznesowych.
            </p>

            <ConsultationButton />
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      <LogoShowcase />

      {/* Mission Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold text-white mb-6 sm:mb-8">
              Nasza Misja
            </h2>
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl spacing-responsive-lg border border-white/10">
              <p className="text-responsive-lg text-blue-100/90 leading-relaxed mb-6">
                Wierzymy, że sztuczna inteligencja ma moc transformacji każdego biznesu. Nasza misja to 
                demokratyzacja dostępu do zaawansowanych technologii AI, umożliwiając firmom każdej wielkości 
                konkurowanie na najwyższym poziomie.
              </p>
              <p className="text-responsive-base text-blue-100/80 leading-relaxed">
                Nie tylko dostarczamy narzędzia - budujemy partnerstwa, które prowadzą do długoterminowego 
                sukcesu naszych klientów w erze cyfrowej transformacji.
              </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamValues.map((value, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl spacing-responsive-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl spacing-responsive-lg border border-indigo-500/30">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-white mb-4">
                Bergss w Liczbach
              </h2>
              <p className="text-responsive-base text-blue-100/80">
                Nasze osiągnięcia mówią same za siebie
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-responsive-3xl sm:text-responsive-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-responsive-sm text-blue-100/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-white mb-4">
              Gotowy na Współpracę?
            </h2>
            <p className="text-responsive-base text-blue-100/80 mb-8">
              Porozmawiajmy o tym, jak możemy pomóc Twojemu biznesowi osiągnąć nowy poziom dzięki AI
            </p>
            <ConsultationButton />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;