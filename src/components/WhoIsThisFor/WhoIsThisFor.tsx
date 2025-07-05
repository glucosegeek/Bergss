import React from 'react';
import { CheckCircle2, Building2, Rocket, LineChart, Users, Store, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

const WhoIsThisFor: React.FC = () => {
  const clientTypes = [
    {
      icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Agencje marketingowe"
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Startupy i software house'y"
    },
    {
      icon: <LineChart className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Zespoły sprzedaży B2B i SaaS"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Freelancerzy i konsultanci"
    },
    {
      icon: <Store className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Sklepy E-commerce"
    },
    {
      icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />,
      type: "Restauracje/Salony piękności/Gabinety lekarskie"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 gradient-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="container-responsive">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-responsive-3xl sm:text-responsive-4xl font-bold mb-4 sm:mb-6 gradient-text-primary"
          >
            Dla Kogo Jest To Rozwiązanie?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-responsive-lg text-brand-light px-4 sm:px-0"
          >
            Nasze rozwiązania AI są przeznaczone dla firm gotowych na skalowanie działań sprzedażowych
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid-responsive-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {clientTypes.map((client, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative glass rounded-xl spacing-responsive-md border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-accent-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-start gap-3 sm:gap-4">
                <motion.div 
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.2 }}
                  className="gradient-primary rounded-lg p-1.5 sm:p-2 flex-shrink-0"
                >
                  {client.icon}
                </motion.div>
                
                <div className="flex-grow min-w-0">
                  <div className="flex items-start gap-2 mb-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green flex-shrink-0 mt-0.5" />
                    </motion.div>
                    <h3 className="text-responsive-base sm:text-responsive-xl font-semibold text-brand-white group-hover:gradient-text-primary transition-colors duration-300">
                      {client.type}
                    </h3>
                  </div>
                  <p className="text-responsive-sm sm:text-responsive-base text-brand-light leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>

              <motion.div 
                className="absolute -bottom-2 -right-2 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-primary/5 to-accent-purple/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;