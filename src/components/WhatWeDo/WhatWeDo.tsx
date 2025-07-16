import React from 'react';
import { Bot, Mail, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Chatbot AI",
      description: "Automatyzuje rozmowy. Odpowiada na pytania i poprawia doświadczenia klientów dzięki całodobowej, inteligentnej obsłudze."
    },
    {
      icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Agent AI",
      description: "To inteligenty asystent cyfrowy, który automatyzuje rutynowe zadania oraz podejmuje decyzje na podstawie danych."
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Strona Internetowa",
      description: "Tworzymy nowoczesne strony internetowe zoptymalizowane pod konwersję, z responsywnym designem i płynnym doświadczeniem użytkownika."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="rozwiazania-ai" className="relative py-12 sm:py-16 md:py-20 lg:py-24 gradient-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="container-responsive">
        {/* Centered header section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-responsive-3xl sm:text-responsive-4xl font-bold mb-4 sm:mb-6 gradient-text-primary"
          >
            Rozwiązania Oparte na AI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-responsive-lg text-brand-light max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
          </motion.p>
        </motion.div>
        
        {/* Responsive services grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="flex justify-center h-full"
            >
              <div className="w-full max-w-sm lg:max-w-none h-full">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;