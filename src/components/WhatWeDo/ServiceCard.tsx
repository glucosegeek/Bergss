import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative glass-dark rounded-xl spacing-responsive-md border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full">
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-accent-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col">
        <div className="gradient-primary rounded-lg p-2 sm:p-3 inline-block mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        <h3 className="text-responsive-lg sm:text-responsive-xl font-semibold text-brand-white mb-2 sm:mb-3 group-hover:gradient-text-primary transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed flex-grow">
          {description}
        </p>

        {/* Decorative element */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-primary/5 to-accent-purple/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default ServiceCard;