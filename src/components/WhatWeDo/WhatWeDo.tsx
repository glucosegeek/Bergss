import React from 'react';
import { Bot, Mail, Phone, Globe } from 'lucide-react';
import ServiceCard from './ServiceCard';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Chatbot AI",
      description: "Automatyzuje rozmowy. Odpowiada na pytania i poprawia doświadczenia klientów dzięki całodobowej, inteligentnej obsłudze."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Automatyczny Outreach AI",
      description: "Wysyła spersonalizowane cold maile i wiadomości na dużą skalę, utrzymując naturalną komunikację z potencjalnymi klientami."
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Rozmowy Telefoniczne AI",
      description: "Boty głosowe wykonujące połączenia sprzedażowe lub wsparcia dla Twojej firmy 24/7, prowadzące naturalne i efektywne rozmowy."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Strona Internetowa",
      description: "Tworzymy nowoczesne strony internetowe zoptymalizowane pod konwersję, z responsywnym designem i płynnym doświadczeniem użytkownika."
    }
  ];

  return (
    <section className="
      /* Base section styling with responsive padding */
      py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28
      bg-gradient-to-br from-indigo-950/80 to-purple-950/80
      
      /* Ensure proper overflow handling */
      overflow-hidden
      
      /* Smooth transitions for responsive changes */
      transition-all duration-300 ease-in-out
    ">
      <div className="
        /* Responsive container with proper margins */
        container mx-auto 
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
        
        /* Maximum width constraints for ultra-wide screens */
        max-w-7xl
      ">
        {/* Header Section with Responsive Typography */}
        <div className="
          text-center 
          mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20
          
          /* Responsive spacing adjustments */
          space-y-4 sm:space-y-5 md:space-y-6
        ">
          <h2 className="
            /* Responsive font sizes with smooth scaling */
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            font-bold 
            
            /* Responsive line height for better readability */
            leading-tight sm:leading-tight md:leading-tight lg:leading-tight
            
            /* Gradient text with fallback */
            text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-200 to-indigo-300
            
            /* Responsive margins */
            mb-3 sm:mb-4 md:mb-5 lg:mb-6
            
            /* Ensure text doesn't break awkwardly */
            hyphens-auto
          ">
            Rozwiązania Oparte na AI
          </h2>
          
          <p className="
            /* Responsive font sizes for description */
            text-base sm:text-lg md:text-xl lg:text-2xl
            text-blue-100/80 
            
            /* Responsive max width to maintain readability */
            max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl
            mx-auto
            
            /* Responsive line height */
            leading-relaxed sm:leading-relaxed md:leading-loose
            
            /* Responsive padding for mobile */
            px-2 sm:px-0
          ">
            Przekształć swój proces sprzedaży dzięki naszym najnowocześniejszym narzędziom AI, które pracują całodobowo, aby rozwijać Twój biznes
          </p>
        </div>
        
        {/* Services Grid with Advanced Responsive Layout */}
        <div className="
          /* Mobile-first grid approach */
          grid
          
          /* Mobile: Single column with full width cards */
          grid-cols-1
          gap-4 sm:gap-5
          
          /* Small tablets: 2 columns */
          sm:grid-cols-2 sm:gap-6
          
          /* Medium tablets: 2 columns with larger gaps */
          md:grid-cols-2 md:gap-7
          
          /* Large tablets/small desktop: 4 columns */
          lg:grid-cols-4 lg:gap-6
          
          /* Desktop: 4 columns with optimal spacing */
          xl:grid-cols-4 xl:gap-8
          
          /* Ultra-wide: Maintain 4 columns with larger gaps */
          2xl:gap-10
          
          /* Ensure grid items are properly aligned */
          items-stretch
          
          /* Center the grid container */
          justify-items-center
          
          /* Responsive width constraints */
          w-full
          max-w-none sm:max-w-none md:max-w-none lg:max-w-7xl
          mx-auto
        ">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                /* Ensure cards take full width of grid cell */
                w-full
                
                /* Maximum width constraints for better proportions */
                max-w-sm sm:max-w-none
                
                /* Responsive height to maintain consistency */
                min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[340px]
                
                /* Smooth transitions for hover effects */
                transition-all duration-300 ease-in-out
                
                /* Ensure proper stacking context */
                relative
                
                /* Responsive transform on hover for desktop only */
                hover:scale-105 lg:hover:scale-105
                hover:z-10
              "
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS for additional responsive fine-tuning */}
      <style jsx>{`
        /* Ensure smooth font scaling on very small devices */
        @media (max-width: 320px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Optimize for tablet landscape orientation */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        
        /* Ensure proper spacing on ultra-wide screens */
        @media (min-width: 1920px) {
          .container {
            max-width: 1600px;
          }
        }
        
        /* High DPI display optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .text-transparent {
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
        
        /* Accessibility: Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
        
        /* Dark mode support (if needed in future) */
        @media (prefers-color-scheme: dark) {
          .bg-gradient-to-br {
            background: linear-gradient(to bottom right, 
              rgba(67, 56, 202, 0.8), 
              rgba(124, 58, 237, 0.8)
            );
          }
        }
        
        /* Print styles for better document printing */
        @media print {
          .bg-gradient-to-br {
            background: white !important;
            color: black !important;
          }
          
          .text-transparent {
            color: black !important;
            background: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;