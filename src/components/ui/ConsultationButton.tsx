import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BookCallForm from '../BookCallForm/BookCallForm';

interface ConsultationButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'outline';
}

const ConsultationButton: React.FC<ConsultationButtonProps> = ({ 
  className = '', 
  children,
  variant = 'default'
}) => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const baseClasses = "btn-touch group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-responsive-base sm:text-responsive-lg font-semibold transition-all duration-300 hover:scale-105";
  
  const variantClasses = variant === 'outline' 
    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
    : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50";

  const hoverOverlayClasses = variant === 'outline' 
    ? ""
    : "absolute inset-0 flex items-center justify-center w-full h-full rounded-lg opacity-0 bg-gradient-to-r from-indigo-600 to-purple-700 group-hover:opacity-100 transition-opacity duration-300";

  return (
    <>
      <button 
        onClick={() => setIsBookCallOpen(true)}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {variant === 'default' && (
          <span className={hoverOverlayClasses}></span>
        )}
        <span className="relative flex items-center justify-center">
          {children || (
            <>
              <span className="mobile-only text-sm">Umów Konsultację</span>
              <span className="tablet-only desktop-only">Umów Bezpłatną Konsultację</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </span>
      </button>

      <BookCallForm 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default ConsultationButton;