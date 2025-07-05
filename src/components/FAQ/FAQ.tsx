import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Jak działa nasz chatbot AI?",
      answer: "Nasz chatbot AI wykorzystuje zaawansowane przetwarzanie języka naturalnego do prowadzenia rozmów z odwiedzającymi Twoją stronę 24/7. Uczy się na podstawie rozmów, obsługuje zapytania, kwalifikuje leady i może nawet umawiać spotkania. AI dostosowuje się do tonu i bazy wiedzy Twojej firmy, zapewniając spójne i dokładne odpowiedzi."
    },
    {
      question: "Czy proces wdrożenia jest skomplikowany?",
      answer: "Absolutnie nie! Zajmujemy się całym procesem wdrożenia. Nasz zespół konfiguruje AI, szkoli ją na danych Twojej firmy i integruje z istniejącymi systemami. Większość klientów jest gotowa do działania w ciągu 48 godzin, z ciągłym wsparciem i optymalizacją ze strony naszego zespołu technicznego."
    },
    {
      question: "Czy można to zintegrować z moim obecnym CRM?",
      answer: "Tak! Nasze rozwiązania AI integrują się bezproblemowo z popularnymi platformami CRM, takimi jak Salesforce, HubSpot, Pipedrive i inne. Oferujemy również niestandardowe integracje API dla specjalistycznych systemów. Wszystkie dane o leadach, rozmowach i działaniach są automatycznie synchronizowane z Twoim CRM."
    },
    {
      question: "Z jakimi branżami współpracujecie?",
      answer: "Nasze rozwiązania AI są wszechstronne i zostały skutecznie wdrożone w różnych branżach, w tym SaaS, nieruchomości, usługi finansowe, opieka zdrowotna, edukacja i usługi profesjonalne. Dostosowujemy wiedzę i podejście AI do specyficznych wymagań Twojej branży."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-responsive-3xl sm:text-responsive-4xl font-bold mb-4 sm:mb-6 gradient-text-primary"
          >
            Często Zadawane Pytania
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-responsive-lg text-brand-light max-w-2xl mx-auto px-4 sm:px-0"
          >
            Poznaj odpowiedzi na najczęstsze pytania o nasze rozwiązania AI dla sprzedaży
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;