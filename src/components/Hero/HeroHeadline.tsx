import React from 'react';

const HeroHeadline: React.FC = () => {
  return (
    <h1 className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold leading-tight text-brand-white mb-4 sm:mb-6">
      <span className="inline-block mb-1 sm:mb-2 gradient-text-primary">
        A czy Ty
      </span>
      <br />
      <span className="inline-block mb-1 sm:mb-2">
        wdrożyłeś AI w
      </span>
      <br />
      <span className="gradient-text-primary">
       swoim biznesie?
      </span>
    </h1>
  );
};

export default HeroHeadline;