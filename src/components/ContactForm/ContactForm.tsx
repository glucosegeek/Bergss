import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
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

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="kontakt-section" className="relative py-12 sm:py-16 md:py-20 lg:py-24 gradient-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="container-responsive">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-responsive-3xl sm:text-responsive-4xl font-bold mb-4 sm:mb-6 gradient-text-primary"
            >
              Skontaktuj się z Nami
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-responsive-lg text-brand-light px-4 sm:px-0"
            >
              Gotowy na transformację procesu sprzedaży? Porozmawiajmy o Twoich potrzebach.
            </motion.p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 sm:space-y-6 glass rounded-xl spacing-responsive-lg border border-slate-700/50 card-mobile"
          >
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent-green/20 border border-accent-green/50 rounded-lg p-3 sm:p-4"
              >
                <p className="text-accent-green text-responsive-sm">Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 sm:p-4"
              >
                <p className="text-red-200 text-responsive-sm">Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.</p>
              </motion.div>
            )}

            <motion.div variants={fieldVariants} className="form-grid-mobile">
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
                className="form-input-mobile bg-slate-800/50 border-slate-700/50 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-white placeholder-slate-400 focus-visible-mobile"
                placeholder="Twoje imię i nazwisko"
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="form-grid-mobile">
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
                className="form-input-mobile bg-slate-800/50 border-slate-700/50 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-white placeholder-slate-400 focus-visible-mobile"
                placeholder="twoj@email.com"
              />
            </motion.div>

            <motion.div variants={fieldVariants} className="form-grid-mobile">
              <label htmlFor="service" className="block text-responsive-sm sm:text-responsive-base font-medium text-brand-light mb-2">
                Jaką usługą jesteś zainteresowany?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-input-mobile bg-slate-800/50 border-slate-700/50 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-white focus-visible-mobile"
              >
                <option value="" className="bg-slate-800">Wybierz usługę</option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-slate-800">
                    {service}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div variants={fieldVariants} className="form-grid-mobile">
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
                className="form-input-mobile form-textarea-mobile bg-slate-800/50 border-slate-700/50 focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-white placeholder-slate-400 resize-none focus-visible-mobile"
                placeholder="Opowiedz nam o swoich potrzebach..."
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={fieldVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-touch btn-primary form-button-mobile flex items-center justify-center gap-2 group focus-visible-mobile"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 loading-spinner"></div>
                  Wysyłanie...
                </>
              ) : (
                <>
                  Wyślij Wiadomość
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;