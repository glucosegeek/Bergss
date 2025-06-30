import React from 'react';
import { Bot, Phone, BarChart, Users } from 'lucide-react';
import HeroHeadline from './HeroHeadline';
import HeroSubheadline from './HeroSubheadline';
import HeroVisual from './HeroVisual';
import HeroCTA from './HeroCTA';
import FloatingNotification from './FloatingNotification';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center w-full px-4 py-12 md:py-16 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')]"></div>
      </div>

      {/* Floating notifications - Hidden on mobile */}
      <div className="hidden md:block">
        <FloatingNotification 
          icon={<Bot size={20} />}
          text="Nowi klienci pozyskani za pośrednictwem czatu AI"
          position="left-[45%] top-[60%]"
          delay={0}
        />
        <FloatingNotification 
          icon={<Phone size={20} />}
          text="Oszczędzone 30% kosztów obsługi klienta."
          position="left-[45%] top-[50%]"
          delay={0}
        />
        <FloatingNotification 
          icon={<BarChart size={20} />}
          text="Ponad 25% transakcji zainicjowane przez AI"
          position="left-[45%] top-[32%]"
          delay={0}
        />
        <FloatingNotification 
          icon={<Users size={20} />}
          text="Liczba wiadomości do BOK zmniejszona o 70%"
          position="left-[45%] top-[41%]"
          delay={0}
        />
      </div>

      {/* Content container */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left column: Text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <HeroHeadline />
            <HeroSubheadline />
            <HeroCTA />
          </div>
          
          {/* Right column: Visual */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;