import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookCallFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  description: string;
  preferredTime: string;
  timezone: string;
}

const BookCallForm: React.FC<BookCallFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    description: '',
    preferredTime: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const subjects = [
    'Chatbot AI Implementation',
    'Lead Generation AI',
    'Automated Outreach AI',
    'AI Phone Calls',
    'Website Development',
    'Complete AI Sales Solution',
    'Other - Custom Solution'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendWebhook = async (data: FormData) => {
    const webhookUrl = 'https://hook.eu2.make.com/bsk9vd5wwnos0sciwhr331yrpecqmf7n';
    
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      subject: data.subject,
      description: data.description,
      preferredTime: data.preferredTime || null,
      timezone: data.timezone,
      submittedAt: new Date().toISOString(),
      source: 'AI Sales Solutions - Book Call Form'
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Webhook error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Send webhook to Make.com
      await sendWebhook(formData);
      
      console.log('Form submitted successfully:', formData);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          description: '',
          preferredTime: '',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        });
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-br from-indigo-950/95 to-purple-950/95 backdrop-blur-lg rounded-xl border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-2">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Umów Bezpłatną Konsultację</h2>
                <p className="text-blue-100/80">Porozmawiajmy o Twoich potrzebach AI</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <div className="p-6">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dziękujemy!</h3>
                <p className="text-blue-100/80">
                  Twoja prośba o konsultację została wysłana. Skontaktujemy się z Tobą w ciągu 24 godzin.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-300 text-sm">{submitError}</p>
                  </div>
                )}

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-blue-100 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Imię *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="Twoje imię"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-blue-100 mb-2">
                      Nazwisko *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="Twoje nazwisko"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="twoj@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-2">
                    Firma/Organizacja
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                    placeholder="Nazwa Twojej firmy"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Temat konsultacji *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                  >
                    <option value="" className="bg-indigo-950">Wybierz temat</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject} className="bg-indigo-950">
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-blue-100 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Preferowany czas
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                  >
                    <option value="" className="bg-indigo-950">Wybierz preferowany czas</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-indigo-950">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-blue-100 mb-2">
                    Opis potrzeb *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50 resize-none"
                    placeholder="Opisz swoje potrzeby, cele biznesowe i jak możemy Ci pomóc..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-lg font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      Umów Konsultację
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-blue-100/60 text-center">
                  * Pola wymagane. Skontaktujemy się z Tobą w ciągu 24 godzin.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookCallForm;