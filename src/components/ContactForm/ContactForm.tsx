import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Chatbot AI',
    'Automatyczny Outreach AI',
    'Rozmowy Telefoniczne AI',
    'Strona Internetowa'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Split name into first and last name
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const { error } = await supabase
        .from('consultation_requests')
        .insert([{
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          company: 'Nie podano', // Default value since company is required
          subject: formData.service || 'Ogólne zapytanie',
          description: formData.message,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt-section" className="py-12 sm:py-16 md:py-20 lg:py-24 gradient-secondary">
      <div className="container-responsive">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-3xl sm:text-responsive-4xl font-bold mb-4 sm:mb-6 gradient-text-primary">
              Skontaktuj się z Nami
            </h2>
            <p className="text-responsive-lg text-brand-light px-4 sm:px-0">
              Gotowy na transformację procesu sprzedaży? Porozmawiajmy o Twoich potrzebach.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 glass rounded-xl spacing-responsive-lg border border-slate-700/50"
          >
            {submitStatus === 'success' && (
              <div className="bg-accent-green/20 border border-accent-green/50 rounded-lg p-3 sm:p-4">
                <p className="text-accent-green text-responsive-sm">Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 sm:p-4">
                <p className="text-red-200 text-responsive-sm">Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.</p>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-responsive-sm sm:text-responsive-base font-medium text-brand-light mb-2">
                Imię i Nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input-mobile bg-slate-800/50 border-slate-700/50 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-white placeholder-slate-400"
                placeholder="Twoje imię i nazwisko"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-responsive-sm sm:text-responsive-base font-medium text-brand-light mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input-mobile bg-slate-800/50 border-slate-700/50 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-white placeholder-slate-400"
                placeholder="twoj@email.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-responsive-sm sm:text-responsive-base font-medium text-brand-light mb-2">
                Jaką usługą jesteś zainteresowany?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-input-mobile bg-slate-800/50 border-slate-700/50 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-white"
              >
                <option value="" className="bg-slate-800">Wybierz usługę</option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-slate-800">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-responsive-sm sm:text-responsive-base font-medium text-brand-light mb-2">
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="form-input-mobile bg-slate-800/50 border-slate-700/50 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-white placeholder-slate-400 resize-none min-h-[100px]"
                placeholder="Opowiedz nam o swoich potrzebach..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-touch btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-responsive-base sm:text-responsive-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 loading-spinner"></div>
                  Wysyłanie...
                </>
              ) : (
                <>
                  Wyślij Wiadomość
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 text-white" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;