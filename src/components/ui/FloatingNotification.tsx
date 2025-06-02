import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingNotificationProps {
  title?: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

export const FloatingNotification: React.FC<FloatingNotificationProps> = ({
  title,
  message,
  duration = 5000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the appearance slightly
    const showTimeout = setTimeout(() => setIsVisible(true), 100);

    // Auto-dismiss after duration
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 right-4 z-50 max-w-sm w-full pointer-events-auto"
          role="alert"
          aria-live="polite"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-1">
                  {title && (
                    <h3 className="text-sm font-medium text-white mb-1">
                      {title}
                    </h3>
                  )}
                  <p className="text-sm text-gray-200">
                    {message}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="ml-4 inline-flex text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg"
                  aria-label="Close notification"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div 
              className="h-1 bg-indigo-500"
              style={{
                animation: `shrink ${duration}ms linear forwards`
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};