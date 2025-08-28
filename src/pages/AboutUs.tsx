import React from 'react';
import PageLayout from '../components/ui/PageLayout';

const AboutUs = () => {
  return (
    <PageLayout>
      <div className="container-responsive py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-responsive-4xl sm:text-responsive-5xl font-bold text-brand-white mb-6 gradient-text-primary">
              O Nas
            </h1>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8"></div>
          </div>
          
          {/* Hero Image Section */}
          <div className="mb-12 lg:mb-16">
            <div className="relative overflow-hidden rounded-2xl glass border border-slate-700/50">
              <div className="h-96 sm:h-[500px] lg:h-[600px] relative">
                <img
                  src="/aboutus-image.png"
                  alt="Nasz zespół ekspertów AI i automatyzacji"
                  className="w-full h-full object-contain object-center bg-slate-800/20"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    Eksperci w dziedzinie AI i automatyzacji
                  </h2>
                  <p className="text-slate-200 text-lg max-w-2xl">
                    Łączymy doświadczenie w programowaniu z głęboką wiedzą o sztucznej inteligencji
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 mb-12">
                {/* Team Description */}
                <div className="space-y-6">
                  <h2 className="text-responsive-xl font-semibold text-brand-white mb-4">
                    Nasz Zespół
                  </h2>
                  <p className="text-responsive-lg text-brand-light leading-relaxed">
                    Nasz zespół tworzą eksperci w zakresie AI oraz automatyzacji. 
                    Doświadczenie w programowaniu pomaga nam lepiej zrozumieć działanie sztucznej inteligencji, a w tym agentów AI. Dzięki temu jesteśmy w stanie projektować i wdrażać systemy dla naszych klientów, które mają realne przełożenie na ich oszczędności czasu oraz pieniędzy.
                  </p>
                </div>
              </div>
              
              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4 p-6 glass rounded-lg border border-slate-700/30">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <h2 className="text-responsive-xl font-semibold text-brand-white">Nasza Misja</h2>
                  </div>
                  <p className="text-brand-light leading-relaxed">
                    Naszą misją jest uwalnianie przedsiębiorców od rutyny dzięki automatyzacji i sztucznej inteligencji, aby mogli w pełni skupić się na rozwoju, innowacjach i tym, co naprawdę kochają w swoim biznesie.
                  </p>
                </div>
                
                <div className="space-y-4 p-6 glass rounded-lg border border-slate-700/30">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">W</span>
                    </div>
                    <h2 className="text-responsive-xl font-semibold text-brand-white">Nasza Wizja</h2>
                  </div>
                  <p className="text-brand-light leading-relaxed">
                    Wierzymy w przyszłość, gdzie sztuczna inteligencja i automatyzacja uwalniają przedsiębiorców od powtarzalnych obowiązków, dając im wolność, by budować biznes i życie na własnych zasadach.
                  </p>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-slate-700/50 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold text-brand-white mb-4">
                    Gotowy na automatyzację swojego biznesu?
                  </h3>
                  <p className="text-brand-light mb-6">
                    Zapraszamy do kontaktu. Wspólnie sprawdzimy, czy możemy Ci pomóc w osiągnięciu Twoich celów biznesowych.
                  </p>
                  <button className="inline-flex items-center px-6 py-3 rounded-lg gradient-primary text-white font-medium hover:opacity-90 transition-opacity duration-200 shadow-lg">
                    Skontaktuj się z nami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;