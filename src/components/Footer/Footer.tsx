import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';

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
      path: '/',
      scrollTo: 'rozwiazania-ai'
    }
  ];

  const legalLinks = [
    { text: 'Regulamin', path: '/regulamin' },
    { text: 'Polityka Prywatności', path: '/polityka-prywatnosci' },
    { text: 'Polityka Cookies', path: '/polityka-cookies' }
  ];

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('kontakt-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-indigo-950/80 border-t border-white/10">
      <div className="container-responsive py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <h3 className="text-responsive-lg sm:text-responsive-xl font-semibold text-white mb-3 sm:mb-4">Bergss</h3>
            </Link>
            <p className="text-responsive-sm sm:text-responsive-base text-blue-100/80 mb-3 sm:mb-4">
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
                  className="text-blue-100/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full btn-touch"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-white mb-3 sm:mb-4">Kontakt</h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:kontakt@bergss.pl"
                className="flex items-center gap-2 text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>kontakt@bergss.pl</span>
              </a>
              <a
                href="tel:+48530639369"
                className="flex items-center gap-2 text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+48 530 639 369</span>
              </a>
              <button
                onClick={handleContactClick}
                className="flex items-center gap-2 text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg w-full text-left btn-touch text-responsive-sm sm:text-responsive-base"
              >
                Skontaktuj się z Nami
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-white mb-3 sm:mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  {link.scrollTo ? (
                    <button
                      onClick={() => handleScrollToSection(link.scrollTo)}
                      className="block text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg w-full text-left btn-touch text-responsive-sm sm:text-responsive-base"
                    >
                      {link.text}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="block text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-white mb-3 sm:mb-4">Informacje Prawne</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.path}
                    className="block text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg btn-touch text-responsive-sm sm:text-responsive-base"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-center text-blue-100/60 text-responsive-xs sm:text-responsive-sm">
            © {new Date().getFullYear()} Bergss. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;