import React from 'react';
import PageLayout from '../components/ui/PageLayout';

const AboutUs = () => {
  return (
    <PageLayout>
      <div className="container-responsive py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-responsive-4xl sm:text-responsive-5xl font-bold text-brand-white mb-6 gradient-text-primary">
              O Nas
            </h1>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="glass rounded-xl spacing-responsive-lg border border-slate-700/50">
            <div className="prose prose-invert max-w-none">
              <p className="text-responsive-lg text-brand-light leading-relaxed mb-6">
                Nasz zespół tworzą eksperci w zakresie AI oraz automatyzacji. 
Doświadczenie w programowaniu pomaga nam lepiej zrozumieć działanie sztucznej inteligencji, a w tym agentów AI. Dzięki temu jesteśmy w stanie projektować i wdrażać systemy dla naszych klientów, które mają realne przełożenie na ich oszczędności czasu oraz pieniędzy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h2 className="text-responsive-xl font-semibold text-brand-white">Nasza Misja</h2>
                  <p className="text-brand-light">
                    Naszą misją jest uwalnianie przedsiębiorców od rutyny dzięki automatyzacji i sztucznej inteligencji, aby mogli w pełni skupić się na rozwoju, innowacjach i tym, co naprawdę kochają w swoim biznesie.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-responsive-xl font-semibold text-brand-white">Nasza Wizja</h2>
                  <p className="text-brand-light">
                    Przyszłość, w której każda firma ma dostęp do inteligentnych asystentów AI, 
                    które pracują 24/7 na rzecz rozwoju biznesu i satysfakcji klientów.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-700/50 text-center">
                <p className="text-brand-light">
                  Zapraszamy do kontaktu i poznania naszych rozwiązań AI dla Twojego biznesu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;