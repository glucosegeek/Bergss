import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import ContactForm from '../components/ContactForm/ContactForm';
import ConsultationButton from '../components/ui/ConsultationButton';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'kontakt@bergss.pl',
      href: 'mailto:kontakt@bergss.pl',
      description: 'Odpowiadamy w ciągu 24 godzin'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      value: '+48 530 639 369',
      href: 'tel:+48530639369',
      description: 'Pon-Pt: 9:00-17:00'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adres',
      value: 'ul. Żurawia 6/12, lok. 766',
      href: '#',
      description: '00-503 Warszawa'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Godziny pracy',
      value: 'Poniedziałek - Piątek',
      href: '#',
      description: '9:00 - 17:00'
    }
  ];

  const faqs = [
    {
      question: 'Jak szybko otrzymam odpowiedź?',
      answer: 'Odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze.'
    },
    {
      question: 'Czy oferujecie bezpłatną konsultację?',
      answer: 'Tak! Pierwsza konsultacja jest zawsze bezpłatna i trwa około 30 minut.'
    },
    {
      question: 'W jakich godzinach mogę zadzwonić?',
      answer: 'Jesteśmy dostępni telefonicznie od poniedziałku do piątku w godzinach 9:00-17:00.'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')] opacity-10"></div>
        
        <div className="container-responsive relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-6 sm:mb-8">
              <MessageSquare className="w-5 h-5 text-accent-blue" />
              <span className="text-brand-light font-medium text-responsive-sm">Skontaktuj się z nami</span>
            </div>
            
            <h1 className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold mb-4 sm:mb-6 gradient-text-primary">
              Kontakt
            </h1>
            
            <p className="text-responsive-lg text-brand-light max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 mb-8 sm:mb-12">
              Gotowy na transformację procesu sprzedaży? Porozmawiajmy o Twoich potrzebach i znajdźmy najlepsze rozwiązanie AI dla Twojego biznesu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ConsultationButton />
              <a 
                href="tel:+48530639369"
                className="btn-touch btn-secondary flex items-center gap-2 text-brand-white px-6 py-3 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Zadzwoń teraz</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-brand-white mb-4">
              Sposoby Kontaktu
            </h2>
            <p className="text-responsive-base text-brand-light">
              Wybierz najwygodniejszy dla Ciebie sposób komunikacji
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group glass rounded-xl spacing-responsive-md border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105 block"
              >
                <div className="text-center">
                  <div className="gradient-primary rounded-lg p-3 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-responsive-base font-semibold text-brand-white mb-2 group-hover:gradient-text-primary transition-all duration-300">
                    {method.title}
                  </h3>
                  <p className="text-responsive-sm text-brand-light mb-1">
                    {method.value}
                  </p>
                  <p className="text-responsive-xs text-slate-400">
                    {method.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-responsive">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-responsive-2xl sm:text-responsive-3xl font-bold text-brand-white mb-4">
                Często Zadawane Pytania
              </h2>
              <p className="text-responsive-base text-brand-light">
                Znajdź odpowiedzi na najczęstsze pytania dotyczące kontaktu
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="glass rounded-xl spacing-responsive-md border border-slate-700/50"
                >
                  <h3 className="text-responsive-base font-semibold text-brand-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-responsive-sm text-brand-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer - New footer section specifically for kontakt page */}
      <footer className="bg-brand-dark/90 border-t border-slate-700/50 mt-8 sm:mt-12">
        <div className="container-responsive py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-responsive-lg font-semibold text-brand-white mb-3 sm:mb-4">Bergss</h3>
              <p className="text-responsive-sm text-brand-light mb-3 sm:mb-4">
                Transformujemy biznesy dzięki najnowocześniejszej technologii AI.
              </p>
              <div className="space-y-2">
                <p className="text-responsive-xs text-slate-400">
                  NIP: 5213641211
                </p>
                <p className="text-responsive-xs text-slate-400">
                  ul. Żurawia 6/12, lok. 766<br />
                  00-503 Warszawa
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-responsive-base font-semibold text-brand-white mb-3 sm:mb-4">Kontakt</h4>
              <div className="space-y-2">
                <a
                  href="mailto:kontakt@bergss.pl"
                  className="flex items-center gap-2 text-brand-light hover:text-brand-white transition-colors text-responsive-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>kontakt@bergss.pl</span>
                </a>
                <a
                  href="tel:+48530639369"
                  className="flex items-center gap-2 text-brand-light hover:text-brand-white transition-colors text-responsive-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+48 530 639 369</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-responsive-base font-semibold text-brand-white mb-3 sm:mb-4">Godziny pracy</h4>
              <div className="space-y-1 text-responsive-sm text-brand-light">
                <p>Poniedziałek - Piątek</p>
                <p>9:00 - 17:00</p>
                <p className="text-responsive-xs text-slate-400 mt-2">
                  Weekendy: tylko pilne sprawy
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 sm:pt-8 border-t border-slate-700/50 text-center">
            <p className="text-slate-400 text-responsive-xs">
              © {new Date().getFullYear()} Bergss. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Contact;