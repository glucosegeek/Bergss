import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BookCallForm from '../BookCallForm/BookCallForm';

const HeroCTA: React.FC = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-auto px-4 sm:px-0">
        <button 
          onClick={() => setIsBookCallOpen(true)}
          className="btn-touch btn-primary group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-responsive-base sm:text-responsive-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          <span className="relative flex items-center justify-center">
            <span className="mobile-only text-sm">Umów Konsultację</span>
            <span className="tablet-only desktop-only">Umów Bezpłatną Konsultację</span>
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-white" />
          </span>
        </button>
        
        <div className="flex items-center gap-2 text-slate-300 text-responsive-sm">
          <span className="w-1.5 h-1.5 bg-accent-green rounded-full"></span>
          <span className="mobile-only">Bezpłatnie</span>
          <span className="tablet-only desktop-only">Bez karty kredytowej</span>
        </div>
      </div>

      <BookCallForm 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default HeroCTA;