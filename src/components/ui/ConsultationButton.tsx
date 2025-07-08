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
    ? "btn-secondary text-brand-white border border-slate-700/50 hover:border-slate-600/50"
    : "btn-primary text-white";

  return (
    <>
      <button 
        onClick={() => setIsBookCallOpen(true)}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        <span className="relative flex items-center justify-center">
          {children || (
            <>
              <span className="mobile-only text-sm">Umów Bezpłatną Konsultację</span>
              <span className="tablet-only desktop-only">Umów Bezpłatną Konsultację</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-white" />
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