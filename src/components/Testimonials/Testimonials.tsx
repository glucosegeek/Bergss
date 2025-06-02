import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Star } from 'lucide-react';
import { LogoCarousel } from '../ui/logo-carousel';
import { allLogos } from '../ui/company-logos';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Chatbot AI przekształcił nasz proces kwalifikacji leadów. Obserwujemy lepszą jakość rozmów i wyższe współczynniki konwersji niż kiedykolwiek wcześniej.",
      author: "Sarah Chen",
      role: "Dyrektor ds. Sprzedaży",
      company: "TechFlow Solutions"
    },
    {
      quote: "Ich agenci AI zrewolucjonizowali nasz outreach. Potroiliśmy liczbę umówionych prezentacji, jednocześnie znacząco zmniejszając obciążenie naszego zespołu sprzedaży.",
      author: "Michael Rodriguez",
      role: "Dyrektor ds. Rozwoju",
      company: "Scale Dynamics"
    },
    {
      quote: "Wdrożenie ich systemu generowania leadów AI było przełomem. Nasz pipeline jest stale wypełniony wykwalifikowanymi prospektami.",
      author: "Emily Watson",
      role: "Dyrektor ds. Przychodów",
      company: "Innovate AI"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950/90 to-purple-950/90">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
            Zaufali Nam
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>

        <div className="mt-20">
          <LogoCarousel columnCount={6} logos={allLogos} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;