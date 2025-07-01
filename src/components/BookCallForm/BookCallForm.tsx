import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';

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
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const subjects = [
    'Chatbot AI',
    'Automatyczny Outreach AI',
    'Rozmowy Telefoniczne AI',
    'Strona Internetowa',
    'Other - Custom Solution'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = (data: FormData): string | null => {
    if (!data.firstName.trim()) return 'Imię jest wymagane';
    if (!data.lastName.trim()) return 'Nazwisko jest wymagane';
    if (!data.email.trim()) return 'Email jest wymagany';
    if (!data.company.trim()) return 'Nazwa firmy jest wymagana';
    if (!data.subject.trim()) return 'Temat konsultacji jest wymagany';
    if (!data.description.trim()) return 'Opis potrzeb jest wymagany';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) return 'Podaj prawidłowy adres email';
    
    return null;
  };

  const saveToSupabase = async (data: FormData) => {
    try {
      // Validate form data before submission
      const validationError = validateForm(data);
      if (validationError) {
        throw new Error(validationError);
      }

      // Prepare data for database insertion
      const insertData = {
        first_name: data.firstName.trim(),
        last_name: data.lastName.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim() || null,
        company: data.company.trim(),
        subject: data.subject,
        description: data.description.trim(),
        timezone: data.timezone,
        status: 'pending' as const
      };

      console.log('Attempting to save to Supabase:', insertData);

      // Insert without select - this works with RLS allowing INSERT but not SELECT for anonymous users
      const { error } = await supabase
        .from('consultation_requests')
        .insert([insertData]);

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        
        // Provide user-friendly error messages
        if (error.code === '42501') {
          throw new Error('Błąd uprawnień bazy danych. Skontaktuj się z administratorem.');
        } else if (error.code === '23505') {
          throw new Error('Ten email został już użyty. Sprawdź swoją skrzynkę odbiorczą.');
        } else {
          throw new Error(`Błąd bazy danych: ${error.message}`);
        }
      }

      console.log('Successfully saved to Supabase');
      // Return success indicator since we can't return the actual data
      return { success: true };
    } catch (error) {
      console.error('Error in saveToSupabase:', error);
      throw error;
    }
  };

  const generateCalendlyLink = (data: FormData): string => {
    const baseUrl = 'https://calendly.com/konsultacje-bergss';
    const fullName = `${data.firstName} ${data.lastName}`;
    
    // Use encodeURIComponent for URL parameters
    const encodedName = encodeURIComponent(fullName);
    const encodedEmail = encodeURIComponent(data.email);
    
    return `${baseUrl}?name=${encodedName}&email=${encodedEmail}`;
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

      console.log('Webhook sent successfully');
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
      // Validate form before submission
      const validationError = validateForm(formData);
      if (validationError) {
        throw new Error(validationError);
      }

      // Save to Supabase database (primary storage)
      const result = await saveToSupabase(formData);
      console.log('Data saved successfully:', result);
      
      // Send webhook to Make.com (secondary notification)
      try {
        await sendWebhook(formData);
        console.log('Webhook sent successfully');
      } catch (webhookError) {
        // Don't fail the entire submission if webhook fails
        console.warn('Webhook failed, but data was saved to database:', webhookError);
      }
      
      // Generate Calendly link with prefilled data
      const calendlyLink = generateCalendlyLink(formData);
      console.log('Generated Calendly link:', calendlyLink);
      
      // Close the modal first
      onClose();
      
      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        description: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      
      // Redirect to Calendly after a short delay to ensure modal closes smoothly
      setTimeout(() => {
        window.open(calendlyLink, '_blank');
      }, 300);

    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Wystąpił nieoczekiwany błąd';
      setSubmitError(errorMessage);
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
        className="modal-responsive bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="modal-content-responsive bg-gradient-to-br from-indigo-950/95 to-purple-950/95 backdrop-blur-lg border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between spacing-responsive-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-2">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-responsive-lg sm:text-responsive-2xl font-bold text-white">
                  <span className="mobile-only">Umów Konsultację</span>
                  <span className="tablet-only desktop-only">Umów Bezpłatną Konsultację</span>
                </h2>
                <p className="text-blue-100/80 text-responsive-sm sm:text-responsive-base">Porozmawiajmy o Twoich potrzebach AI</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="btn-touch text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Form */}
          <div className="spacing-responsive-md">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Error Message */}
              {submitError && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 sm:p-4">
                  <p className="text-red-300 text-responsive-sm">{submitError}</p>
                </div>
              )}

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-responsive-sm font-medium text-blue-100 mb-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Imię *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                    placeholder="Twoje imię"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-responsive-sm font-medium text-blue-100 mb-2">
                    Nazwisko *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                    placeholder="Twoje nazwisko"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="email" className="block text-responsive-sm font-medium text-blue-100 mb-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Email *
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
                  <label htmlFor="phone" className="block text-responsive-sm font-medium text-blue-100 mb-2">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-responsive-sm font-medium text-blue-100 mb-2">
                  Firma/Organizacja *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50"
                  placeholder="Nazwa Twojej firmy"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-responsive-sm font-medium text-blue-100 mb-2">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                  Temat konsultacji *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                >
                  <option value="" className="bg-indigo-950">Wybierz temat</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-indigo-950">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-responsive-sm font-medium text-blue-100 mb-2">
                  Opis potrzeb *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="form-input-mobile bg-white/10 border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-white/50 resize-none min-h-[100px]"
                  placeholder="Opisz swoje potrzeby, cele biznesowe i jak możemy Ci pomóc..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-touch w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-responsive-base sm:text-responsive-lg font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span className="mobile-only">Zapisywanie...</span>
                    <span className="tablet-only desktop-only">Zapisywanie i przekierowanie...</span>
                  </>
                ) : (
                  <>
                    <span className="mobile-only">Umów Konsultację</span>
                    <span className="tablet-only desktop-only">Umów Konsultację</span>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </button>

              <p className="text-responsive-xs text-blue-100/60 text-center">
                * Pola wymagane. Po wysłaniu formularza zostaniesz przekierowany do Calendly, aby wybrać termin spotkania.
              </p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookCallForm;