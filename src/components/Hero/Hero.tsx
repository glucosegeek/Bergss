import React from 'react';
import { Bot, Phone, BarChart, Users } from 'lucide-react';
import HeroHeadline from './HeroHeadline';
import HeroSubheadline from './HeroSubheadline';
import HeroVisual from './HeroVisual';
import HeroCTA from './HeroCTA';
import FloatingNotification from './FloatingNotification';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center w-full safe-area-top">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-secondary z-0">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Floating notifications - Hidden on mobile and tablet */}
      <div className="desktop-only">
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
          icon={<BarChart size={10} />}
          text="Ponad 25% transakcji zainicjowane dzięki AI"
          position="left-[45%] top-[32%]"
          delay={0}
        />
        <FloatingNotification 
          icon={<Users size={20} />}
          text="Liczba wiadomości do BOK zmniejszona o 70%"
          position="left-[45%] top-[40%]"
          delay={0}
        />
      </div>

      {/* Content container */}
      <div className="container-responsive relative z-10 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left column: Text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <HeroHeadline />
            <HeroSubheadline />
            <HeroCTA />
          </div>
          
          {/* Right column: Visual */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;