import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-white mb-8">Kontakt</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;