import React, { useEffect, useRef } from 'react';

const HeroHeadline: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
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

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
  }, []);

  return (
    <h1 
      ref={headlineRef}
      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <span className="inline-block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
        A czy Ty
      </span>
      <br />
      <span className="inline-block mb-2">
        wdrożyłeś AI
      </span>
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
       u siebie w biznesie?
      </span>
    </h1>
  );
};

export default HeroHeadline;