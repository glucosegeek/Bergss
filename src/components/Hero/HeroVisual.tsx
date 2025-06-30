import React, { useEffect, useRef } from 'react';

const HeroVisual: React.FC = () => {
  const visualRef = useRef<HTMLDivElement>(null);

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

    if (visualRef.current) {
      observer.observe(visualRef.current);
    }

    return () => {
      if (visualRef.current) {
        observer.unobserve(visualRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={visualRef}
      className="relative max-w-lg mx-auto opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out"
    >
      {/* Main dashboard frame */}
      <div className="relative bg-gradient-to-br from-indigo-900/90 to-purple-900/90 rounded-xl shadow-2xl p-4 backdrop-blur-sm border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-16 bg-white/10 rounded"></div>
            <div className="h-2.5 w-10 bg-white/10 rounded"></div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="bg-indigo-950/50 rounded-lg p-4 mb-4 border border-indigo-800/30">
          <div className="flex justify-between items-center mb-3">
            <div className="h-3 w-32 bg-indigo-400/30 rounded"></div>
            <div className="h-3 w-16 bg-purple-400/30 rounded"></div>
          </div>
          
          {/* AI Conversation */}
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-xs font-medium text-white">AI</div>
              <div className="bg-indigo-800/30 rounded-lg p-3 text-sm text-blue-100 max-w-[80%]">
                Cześć! Jestem Twoim asystentem AI. W czym mogę Ci dzisiaj pomóc?
              </div>
            </div>
            
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-blue-600/20 rounded-lg p-3 text-sm text-blue-100 max-w-[80%]">
                Interesują mnie usługi generowania leadów.
              </div>
              <div className="w-7 h-7 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-medium text-white">U</div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-xs font-medium text-white">AI</div>
              <div className="bg-indigo-800/30 rounded-lg p-3 text-sm text-blue-100 max-w-[80%]">
                Świetnie! Nasz AI może generować wykwalifikowane leady 24/7 i prowadzić ich aż do momentu, gdy będą gotowi rozmawiać ze sprzedażą. Czy chciałbyś poznać nasze wskaźniki skuteczności?
              </div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-indigo-800/20 rounded-lg p-3">
              <div className="h-2 w-16 bg-indigo-400/30 rounded mb-2"></div>
              <div className="h-4 w-12 bg-indigo-400/40 rounded"></div>
            </div>
            <div className="bg-purple-800/20 rounded-lg p-3">
              <div className="h-2 w-16 bg-purple-400/30 rounded mb-2"></div>
              <div className="h-4 w-12 bg-purple-400/40 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom tabs */}
        <div className="flex justify-between">
          <div className="h-2 w-16 bg-white/10 rounded"></div>
          <div className="h-2 w-16 bg-white/10 rounded"></div>
          <div className="h-2 w-16 bg-indigo-400/40 rounded"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-indigo-600/20 rounded-full blur-2xl"></div>
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-indigo-600/20 rounded-full blur-2xl"></div>
    </div>
  );
};

export default HeroVisual;