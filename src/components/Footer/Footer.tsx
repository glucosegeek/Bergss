import React from 'react';
import { Linkedin, Instagram, Twitter, Mail, Phone, Play } from 'lucide-react';
import ScrollToTopLink from '../ui/ScrollToTopLink';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, url: 'https://linkedin.com/company/aisales', label: 'LinkedIn' },
    { icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />, url: 'https://instagram.com/aisales', label: 'Instagram' },
    { icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />, url: 'https://twitter.com/aisales', label: 'Twitter' }
  ];

  const quickLinks = [
    { text: 'O Nas', path: '/o-nas' },
    { 
      text: 'Usługi', 
      path: '/uslugi'
    }
  ];

  const demoLinks = [
    { 
      text: 'Demo', 
      path: '/demo',
      icon: <Play className="w-3 h-3 sm:w-4 sm:h-4" />
    }
  ];

  const legalLinks = [
    { text: 'Polityka Prywatności', path: '/polityka-prywatnosci' }
  ];

  const handleContactClick = () => {
    const contactSection = document.getElementById('kontakt-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark/80 border-t border-slate-700/50">
      <div className="container-responsive py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <ScrollToTopLink to="/" className="inline-block">
              <h3 className="text-responsive-lg sm:text-responsive-xl font-semibold text-brand-white mb-3 sm:mb-4 underline">Bergss</h3>
            </ScrollToTopLink>
            <p className="text-responsive-sm sm:text-responsive-base text-brand-light mb-3 sm:mb-4">
              Transformujemy biznesy dzięki najnowocześniejszej technologii AI.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-brand-light hover:text-brand-white transition-colors p-2 hover:bg-slate-800/50 rounded-full btn-touch"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <ScrollToTopLink to="/kontakt" className="inline-block">
              <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-brand-white mb-3 sm:mb-4 underline p-0.5">Kontakt</h3>
            </ScrollToTopLink>
              <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:kontakt@bergss.pl"
                className="flex items-center gap-2 text-brand-light hover:text-brand-white transition-colors p-2 -ml-2 hover:bg-slate-800/50 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>kontakt@bergss.pl</span>
              </a>
              <a
                href="tel:+48530639369"
                className="flex items-center gap-2 text-brand-light hover:text-brand-white transition-colors p-2 -ml-2 hover:bg-slate-800/50 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+48 530 639 369</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-brand-white mb-3 sm:mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <ScrollToTopLink
                    to={link.path}
                    className="block text-brand-light hover:text-brand-white transition-colors p-2 -ml-2 hover:bg-slate-800/50 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base"
                  >
                    {link.text}
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-brand-white mb-3 sm:mb-4">Demo</h3>
            <ul className="space-y-2">
              {demoLinks.map((link) => (
                <li key={link.text}>
                  <ScrollToTopLink
                    to={link.path}
                    className="flex items-center gap-2 text-brand-light hover:text-brand-white transition-all duration-300 p-2 -ml-2 hover:bg-slate-800/50 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base group hover:scale-105"
                  >
                    <div className="gradient-primary rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <span className="group-hover:gradient-text-primary transition-all duration-300">
                      {link.text}
                    </span>
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-brand-white mb-3 sm:mb-4">Informacje Prawne</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.text}>
                  <ScrollToTopLink
                    to={link.path}
                    className="block text-brand-light hover:text-brand-white transition-colors p-2 -ml-2 hover:bg-slate-800/50 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base"
                  >
                    {link.text}
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-700/50">
          <p className="text-center text-slate-400 text-responsive-xs sm:text-responsive-sm">
            © {new Date().getFullYear()} Bergss. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;