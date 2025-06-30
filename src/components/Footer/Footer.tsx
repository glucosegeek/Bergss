import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/company/aisales', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/aisales', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/aisales', label: 'Twitter' }
  ];

  const quickLinks = [
    { text: 'O Nas', path: '/o-nas' },
    { text: 'Usługi', path: '/uslugi' },
    { text: 'Referencje', path: '/referencje' },
    { text: 'Kontakt', path: '/kontakt' }
  ];

  const legalLinks = [
    { text: 'Regulamin', path: '/regulamin' },
    { text: 'Polityka Prywatności', path: '/polityka-prywatnosci' },
    { text: 'Polityka Cookies', path: '/polityka-cookies' }
  ];

  return (
    <footer className="bg-indigo-950/80 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <h3 className="text-xl font-semibold text-white mb-4">Bergss</h3>
            </Link>
            <p className="text-blue-100/80 mb-4">
              Transformujemy biznesy dzięki najnowocześniejszej technologii AI.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-blue-100/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a
                href="mailto:kontakt@aisales.com"
                className="flex items-center gap-2 text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg"
              >
                <Mail className="w-4 h-4" />
                <span>kontakt@bergss.pl</span>
              </a>
              <a
                href="tel:+48123456789"
                className="flex items-center gap-2 text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>+48 530 639 369</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.path}
                    className="block text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Informacje Prawne</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.path}
                    className="block text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-blue-100/60 text-sm">
            © {new Date().getFullYear()} Bergss. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;