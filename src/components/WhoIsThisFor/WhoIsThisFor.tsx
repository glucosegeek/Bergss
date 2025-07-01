import React from 'react';
import { CheckCircle2, Building2, Rocket, LineChart, Users, Store, Utensils } from 'lucide-react';

const WhoIsThisFor: React.FC = () => {
  const clientTypes = [
    {
      icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Agencje marketingowe",
      description: "Skaluj usługi dla klientów dzięki automatyzacji opartej na AI"
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Startupy i software house'y",
      description: "Przyspiesz wzrost bez powiększania zespołu sprzedaży"
    },
    {
      icon: <LineChart className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Zespoły sprzedaży B2B i SaaS",
      description: "Kwalifikuj leady i umawiaj demo przez całą dobę"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Freelancerzy i konsultanci",
      description: "Zautomatyzuj generowanie leadów i skup się na pracy z klientami"
    },
    {
      icon: <Store className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Sklepy E-commerce",
      description: "Zadbaj o całodobową komunikację między Tobą a klientem"
    },
    {
      icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Restauracje/Salony piękności/Gabinety lekarskie",
      description: "Zautomatyzuj rezerwacje i wizyt"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-950/50 to-purple-950/50">
      <div className="container-responsive">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
            Dla Kogo Jest To Rozwiązanie?
          </h2>
          <p className="text-responsive-lg text-blue-100/80 px-4 sm:px-0">
            Nasze rozwiązania AI są przeznaczone dla firm gotowych na skalowanie działań sprzedażowych
          </p>
        </div>

        <div className="grid-responsive-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {clientTypes.map((client, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl spacing-responsive-md border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-start gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-1.5 sm:p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {client.icon}
                </div>
                
                <div className="flex-grow min-w-0">
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-responsive-base sm:text-responsive-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-colors duration-300">
                      {client.type}
                    </h3>
                  </div>
                  <p className="text-responsive-sm sm:text-responsive-base text-blue-100/80 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;