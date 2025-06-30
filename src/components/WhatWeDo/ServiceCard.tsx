import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="
      /* Base card styling with responsive design */
      group relative 
      
      /* Responsive background and backdrop blur */
      bg-gradient-to-br from-indigo-900/50 to-purple-900/50 
      backdrop-blur-sm 
      
      /* Responsive border radius */
      rounded-lg sm:rounded-xl md:rounded-2xl
      
      /* Responsive padding */
      p-4 sm:p-5 md:p-6 lg:p-7
      
      /* Responsive borders */
      border border-white/10 
      hover:border-white/20 
      
      /* Smooth transitions */
      transition-all duration-300 ease-in-out
      
      /* Full height to match parent container */
      h-full
      
      /* Flexbox for content distribution */
      flex flex-col
      
      /* Responsive shadow effects */
      shadow-lg sm:shadow-xl
      hover:shadow-2xl
      
      /* Responsive transform effects */
      transform-gpu
      hover:translate-y-[-2px] sm:hover:translate-y-[-4px]
      
      /* Ensure proper stacking */
      relative z-0
      hover:z-10
    ">
      {/* Hover effect overlay */}
      <div className="
        absolute inset-0 
        bg-gradient-to-br from-indigo-600/10 to-purple-600/10 
        rounded-lg sm:rounded-xl md:rounded-2xl
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300
        pointer-events-none
      "></div>
      
      {/* Content container */}
      <div className="
        relative z-10
        flex flex-col
        h-full
        
        /* Responsive spacing */
        space-y-3 sm:space-y-4 md:space-y-5
      ">
        {/* Icon container with responsive sizing */}
        <div className="
          /* Responsive icon background */
          bg-gradient-to-br from-indigo-500 to-purple-600 
          
          /* Responsive border radius */
          rounded-lg sm:rounded-xl
          
          /* Responsive padding */
          p-2 sm:p-3 md:p-4
          
          /* Inline block for proper sizing */
          inline-block
          w-fit
          
          /* Responsive transform on hover */
          group-hover:scale-105 sm:group-hover:scale-110
          transition-transform duration-300
          
          /* Responsive shadow */
          shadow-md group-hover:shadow-lg
        ">
          <div className="
            text-white
            
            /* Responsive icon sizing */
            [&>svg]:w-6 [&>svg]:h-6
            sm:[&>svg]:w-7 sm:[&>svg]:h-7
            md:[&>svg]:w-8 md:[&>svg]:h-8
            lg:[&>svg]:w-9 lg:[&>svg]:h-9
          ">
            {icon}
          </div>
        </div>
        
        {/* Title with responsive typography */}
        <h3 className="
          /* Responsive font sizes */
          text-lg sm:text-xl md:text-2xl lg:text-3xl
          
          /* Font weight and spacing */
          font-semibold 
          
          /* Responsive line height */
          leading-tight sm:leading-tight md:leading-snug
          
          /* Color transitions */
          text-white 
          group-hover:text-transparent 
          group-hover:bg-clip-text 
          group-hover:bg-gradient-to-r 
          group-hover:from-blue-300 
          group-hover:to-purple-300 
          
          /* Smooth transitions */
          transition-all duration-300
          
          /* Responsive margins */
          mb-2 sm:mb-3 md:mb-4
          
          /* Prevent text overflow */
          break-words
          hyphens-auto
        ">
          {title}
        </h3>
        
        {/* Description with responsive typography */}
        <p className="
          /* Responsive font sizes */
          text-sm sm:text-base md:text-lg
          
          /* Color and opacity */
          text-blue-100/80 
          
          /* Responsive line height for readability */
          leading-relaxed sm:leading-relaxed md:leading-loose
          
          /* Flex grow to fill remaining space */
          flex-grow
          
          /* Responsive margins */
          mb-0
          
          /* Text rendering optimization */
          text-rendering-optimizeLegibility
          
          /* Prevent orphaned words on mobile */
          orphans-2
          widows-2
        ">
          {description}
        </p>

        {/* Decorative element with responsive sizing */}
        <div className="
          absolute 
          -bottom-1 sm:-bottom-2 
          -right-1 sm:-right-2 
          
          /* Responsive sizing */
          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
          
          /* Gradient background */
          bg-gradient-to-br from-indigo-500/5 to-purple-500/5 
          
          /* Responsive border radius */
          rounded-full 
          
          /* Blur effect */
          blur-xl sm:blur-2xl
          
          /* Opacity transitions */
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300
          
          /* Ensure it doesn't interfere with content */
          pointer-events-none
          z-0
        "></div>
      </div>
      
      {/* Custom CSS for additional responsive fine-tuning */}
      <style jsx>{`
        /* Ensure proper text rendering on high DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .group h3 {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
        
        /* Optimize for very small screens */
        @media (max-width: 320px) {
          .group {
            padding: 1rem;
          }
          
          .group h3 {
            font-size: 1rem;
            line-height: 1.3;
          }
          
          .group p {
            font-size: 0.875rem;
            line-height: 1.4;
          }
        }
        
        /* Tablet landscape optimizations */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .group {
            min-height: 280px;
          }
        }
        
        /* Accessibility: Focus states for keyboard navigation */
        .group:focus-within {
          outline: 2px solid rgba(99, 102, 241, 0.5);
          outline-offset: 2px;
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .group,
          .group > div,
          .group h3,
          .group p {
            transition: none !important;
            transform: none !important;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .group {
            border: 2px solid white;
            background: rgba(0, 0, 0, 0.8);
          }
          
          .group h3,
          .group p {
            color: white;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;