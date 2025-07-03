import React, { useEffect, useRef } from 'react';

const HeroHeadline: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = headlineRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <h1 
      ref={headlineRef}
      className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold leading-tight text-white mb-4 sm:mb-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <span className="inline-block mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
        A czy Ty
      </span>
      <br />
      <span className="inline-block mb-1 sm:mb-2">
        wdrożyłeś AI w
      </span>
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
       swoim biznesie?
      </span>
    </h1>
  );
};

export default HeroHeadline;