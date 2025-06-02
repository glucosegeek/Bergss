import React from 'react';
import StatCard from './StatCard';
import { Target, CheckCircle, Clock, DollarSign } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Target className="w-6 h-6" />,
      value: "10x",
      label: "wyższy CTR w kampaniach",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      value: "93%",
      label: "leadów zakwalifikowanych przez AI gotowych do rozmowy",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "24/7",
      label: "działanie — bez przerw, błędów czy zwolnień",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: "40%",
      label: "niższy koszt pozyskania klienta",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Dlaczego Klienci Nam Ufają
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              gradient={stat.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;