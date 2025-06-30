import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BookCallForm from '../BookCallForm/BookCallForm';

const HeroCTA: React.FC = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <button 
          onClick={() => setIsBookCallOpen(true)}
          className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-lg font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full rounded-lg opacity-0 bg-gradient-to-r from-indigo-600 to-purple-700 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center">
            Umów Bezpłatną Konsultację
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
        
        <div className="flex items-center gap-2 text-blue-200/80">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
          <span className="text-sm">Zajeb se bota i chuj</span>
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