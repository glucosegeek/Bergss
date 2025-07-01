import React from 'react';

interface LogoCardProps {
  className?: string;
  showCompanyName?: boolean;
  variant?: 'default' | 'featured' | 'compact';
}

const LogoCard: React.FC<LogoCardProps> = ({ 
  className = '', 
  showCompanyName = true,
  variant = 'default'
}) => {
  const getCardClasses = () => {
    const baseClasses = "group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105";
    
    switch (variant) {
      case 'featured':
        return `${baseClasses} rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30`;
      case 'compact':
        return `${baseClasses} rounded-lg`;
      default:
        return `${baseClasses} rounded-lg shadow-sm hover:shadow-lg`;
    }
  };

  const getPaddingClasses = () => {
    switch (variant) {
      case 'featured':
        return 'p-6 sm:p-8';
      case 'compact':
        return 'p-3 sm:p-4';
      default:
        return 'p-4 sm:p-6';
    }
  };

  const getLogoSize = () => {
    switch (variant) {
      case 'featured':
        return 'w-[140px] sm:w-[160px]';
      case 'compact':
        return 'w-[80px] sm:w-[100px]';
      default:
        return 'w-[120px] sm:w-[140px]';
    }
  };

  return (
    <div className={`${getCardClasses()} ${className}`}>
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className={`relative ${getPaddingClasses()} text-center`}>
        {/* Logo Image */}
        <div className="flex justify-center mb-4">
          <img 
            src="/images/logo.png" 
            alt="Bergss Logo - Rozwiązania AI dla biznesu"
            className={`${getLogoSize()} h-auto object-contain group-hover:scale-110 transition-transform duration-300`}
            style={{ 
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
              maxWidth: variant === 'featured' ? '160px' : variant === 'compact' ? '100px' : '140px'
            }}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Company Information */}
        {showCompanyName && (
          <div className="space-y-2">
            <h3 className="text-responsive-lg sm:text-responsive-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
              Bergss
            </h3>
            <p className="text-responsive-sm text-blue-100/80 group-hover:text-blue-100 transition-colors duration-300">
              Rozwiązania AI dla biznesu
            </p>
            {variant === 'featured' && (
              <p className="text-responsive-xs text-blue-200/60 group-hover:text-blue-200/80 transition-colors duration-300">
                Transformujemy biznesy dzięki najnowocześniejszej technologii AI
              </p>
            )}
          </div>
        )}

        {/* Decorative elements for featured variant */}
        {variant === 'featured' && (
          <>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default LogoCard;