import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

interface NavigationButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'contact' | 'home';
  className?: string;
  ariaLabel?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ 
  to, 
  children, 
  variant = 'contact',
  className = '',
  ariaLabel
}) => {
  const baseClasses = "btn-touch inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-responsive-base";
  
  const variantClasses = variant === 'contact' 
    ? "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 hover:scale-105"
    : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105";

  const icon = variant === 'contact' 
    ? <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
    : <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />;

  return (
    <Link 
      to={to}
      className={`${baseClasses} ${variantClasses} ${className} group`}
      aria-label={ariaLabel}
    >
      {variant === 'home' && icon}
      <span className="text-center">{children}</span>
      {variant === 'contact' && icon}
    </Link>
  );
};

export default NavigationButton;