import React from 'react';
import HeroHeadline from './HeroHeadline';
import HeroSubheadline from './HeroSubheadline';
import HeroVisual from './HeroVisual';
import HeroCTA from './HeroCTA';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-secondary z-0">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Content container */}
      <div className="container-responsive relative z-10 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          {/* Left column: Text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1">
            <HeroHeadline />
            <HeroSubheadline />
            <HeroCTA />
          </div>
          
          {/* Right column: Visual */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;