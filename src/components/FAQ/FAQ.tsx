import React from 'react';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Jak działa nasz chatbot AI?",
      answer: "Nasz chatbot AI wykorzystuje zaawansowane przetwarzanie języka naturalnego do prowadzenia rozmów z odwiedzającymi Twoją stronę 24/7. Uczy się na podstawie rozmów, obsługuje zapytania, kwalifikuje leady i może nawet umawiać spotkania. AI dostosowuje się do tonu i bazy wiedzy Twojej firmy, zapewniając spójne i dokładne odpowiedzi."
    },
    {
      question: "Czy proces wdrożenia jest skomplikowany?",
      answer: "Absolutnie nie! Nasz zespół konfiguruje AI, szkoli ją na danych Twojej firmy i integruje z istniejącymi systemami. Czas na wdrożenie jest ustalany indywidualnie z każdym klientem."
    },
    {
      question: "Czy można to zintegrować z moim obecnym CRM?",
      answer: "Tak! Nasze rozwiązania AI integrują się bezproblemowo z popularnymi platformami CRM. Oferujemy również niestandardowe integracje API dla specjalistycznych systemów. Wszystkie dane o leadach, rozmowach i działaniach są automatycznie synchronizowane z Twoim CRM."
    },
    {
      question: "Z jakimi branżami współpracujecie?",
      answer: "Nasze rozwiązania AI są wszechstronne, w tym SaaS, nieruchomości, usługi finansowe, opieka zdrowotna, gastronomia, edukacja i usługi profesjonalne. Dostosowujemy wiedzę i podejście AI do specyficznych wymagań Twojej branży."
    },
    {
      question: "Jak mierzycie sukces?",
      answer: "Zapewniamy kompleksową analitykę śledzącą kluczowe wskaźniki, takie jak wskaźniki generowania leadów, jakość rozmów, czasy odpowiedzi i współczynniki konwersji. Otrzymasz dostęp do panelu w czasie rzeczywistym pokazującego ROI, metryki wydajności i obszary do optymalizacji. Przeprowadzamy również regularne sesje przeglądowe, aby upewnić się, że otrzymujesz maksymalną wartość."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950/90 to-purple-950/90">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
            Często Zadawane Pytania
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Poznaj odpowiedzi na najczęstsze pytania o nasze rozwiązania AI dla sprzedaży
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;