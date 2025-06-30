import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-3 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-blue-100/80 leading-relaxed">
          {description}
        </p>

        {/* Decorative element */}
        <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default ServiceCard;