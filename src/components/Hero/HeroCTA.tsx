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
          className="btn-touch group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-responsive-base sm:text-responsive-lg font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full rounded-lg opacity-0 bg-gradient-to-r from-indigo-600 to-purple-700 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center justify-center">
            <span className="mobile-only text-sm">Umów Konsultację</span>
            <span className="tablet-only desktop-only">Umów Bezpłatną Konsultację</span>
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
        
        <div className="flex items-center gap-2 text-blue-200/80 text-responsive-sm">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
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