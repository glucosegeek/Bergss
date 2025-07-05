import React, { useEffect, useRef } from 'react';

interface FloatingNotificationProps {
  icon: React.ReactNode;
  text: string;
  position: string;
  delay: number;
}

const FloatingNotification: React.FC<FloatingNotificationProps> = ({ 
  icon, 
  text, 
  position,
  delay 
}) => {
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = notificationRef.current;
    if (!element) return;

    // Initial setup - hide notification
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';

    // Animate in after delay
    const timeoutId = setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      
      // Set up floating animation
      let startTime = Date.now();
      let direction = 1;
      const animateFloat = () => {
        const elapsed = Date.now() - startTime;
        const position = Math.sin(elapsed / 1000) * 5; // 5px amplitude, 2-second cycle
        
        if (element) {
          element.style.transform = `translateY(${position}px)`;
        }
        
        animationFrameId = requestAnimationFrame(animateFloat);
      };
      
      let animationFrameId = requestAnimationFrame(animateFloat);
      
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div 
      ref={notificationRef}
      className={`absolute ${position} z-10 transition-all duration-1000 ease-out`}
    >
      <div className="glass border border-slate-700/50 rounded-lg shadow-brand p-3 flex items-center gap-2 max-w-[200px]">
        <div className="bg-brand-primary rounded-full p-1.5 text-white">
          {icon}
        </div>
        <p className="text-xs text-brand-light font-medium">{text}</p>
      </div>
    </div>
  );
};

export default FloatingNotification;