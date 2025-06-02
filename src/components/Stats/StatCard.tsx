import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, gradient }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* Hover effect */}
      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center text-center">
        <div className={`bg-gradient-to-r ${gradient} rounded-lg p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        
        <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300">
          {value}
        </div>
        
        <p className="text-blue-100/80 text-sm leading-relaxed">
          {label}
        </p>

        {/* Decorative element */}
        <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default StatCard;