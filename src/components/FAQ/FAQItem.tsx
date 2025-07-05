import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-touch w-full py-4 sm:py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-dark rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-responsive-base sm:text-responsive-lg font-semibold text-brand-white group-hover:gradient-text-primary transition-all duration-300 pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-accent-blue transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mb-4 sm:mb-6' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;