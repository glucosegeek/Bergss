import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'Chatbot AI',
    'Automatyczny Outreach AI',
    'Rozmowy Telefoniczne AI',
    'Strona Internetowa'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt-section" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-indigo-950/90 to-purple-950/90">
      <div className="container-responsive">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-300">
              Skontaktuj się z Nami
            </h2>
            <p className="text-responsive-lg text-blue-100/80 px-4 sm:px-0">
              Gotowy na transformację procesu sprzedaży? Porozmawiajmy o Twoich potrzebach.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 bg-white/5 backdrop-blur-sm rounded-xl spacing-responsive-lg border border-white/10"
          >
            <div>
              <label htmlFor="name" className="block text-responsive-sm sm:text-responsive-base font-medium text-blue-100 mb-2">
                Imię i Nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                placeholder="Twoje imię i nazwisko"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-responsive-sm sm:text-responsive-base font-medium text-blue-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                placeholder="twoj@email.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-responsive-sm sm:text-responsive-base font-medium text-blue-100 mb-2">
                Jaką usługą jesteś zainteresowany?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
              >
                <option value="" className="bg-indigo-950">Wybierz usługę</option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-indigo-950">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-responsive-sm sm:text-responsive-base font-medium text-blue-100 mb-2">
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50 resize-none min-h-[100px]"
                placeholder="Opowiedz nam o swoich potrzebach..."
              />
            </div>

            <button
              type="submit"
              className="btn-touch w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-responsive-base sm:text-responsive-lg font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Wyślij Wiadomość
              <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;