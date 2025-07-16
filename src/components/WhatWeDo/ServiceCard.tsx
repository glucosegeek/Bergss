import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative glass-dark rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full hover:shadow-xl hover:shadow-brand-primary/10">
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-accent-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col">
        <div className="gradient-primary rounded-lg p-3 sm:p-4 lg:p-5 inline-block mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300 w-fit">
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-brand-white mb-3 sm:mb-4 lg:mb-6 group-hover:gradient-text-primary transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base lg:text-lg text-brand-light leading-relaxed flex-grow">
          {description}
        </p>

        {/* Decorative element */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-brand-primary/5 to-accent-purple/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default ServiceCard;