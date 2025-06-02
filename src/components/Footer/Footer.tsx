import React from 'react';
import { Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950/80 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">AI Sales Solutions</h3>
            <p className="text-blue-100/80 mb-4">
              Transformujemy procesy sprzedaży dzięki najnowocześniejszej technologii AI.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-blue-100/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-blue-100/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" 
                className="text-blue-100/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a href="mailto:kontakt@aisales.com" 
                className="flex items-center gap-2 text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg">
                <Mail className="w-4 h-4" />
                <span>kontakt@aisales.com</span>
              </a>
              <a href="tel:+48123456789" 
                className="flex items-center gap-2 text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg">
                <Phone className="w-4 h-4" />
                <span>+48 123 456 789</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              {['O Nas', 'Usługi', 'Referencje', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="block text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Informacje Prawne</h3>
            <ul className="space-y-2">
              {[
                { text: 'Regulamin', href: '/regulamin' },
                { text: 'Polityka Prywatności', href: '/prywatnosc' },
                { text: 'Polityka Cookies', href: '/cookies' }
              ].map((item) => (
                <li key={item.text}>
                  <a href={item.href} 
                    className="block text-blue-100/80 hover:text-white transition-colors p-2 -ml-2 hover:bg-white/10 rounded-lg">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-blue-100/60 text-sm">
            © {new Date().getFullYear()} AI Sales Solutions. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;