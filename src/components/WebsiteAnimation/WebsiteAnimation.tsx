import React, { useState, useEffect } from 'react';
import { Globe, Monitor, Palette, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WebsiteAnimation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const steps = [
    'wireframe',
    'navigation',
    'hero',
    'content',
    'interactive',
    'final'
  ];

  useEffect(() => {
    // Initial loading state
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const stepDurations = [500, 500, 700, 800, 500, 500]; // Duration for each step in ms
    let totalDelay = 0;

    const timers = steps.map((_, index) => {
      const timer = setTimeout(() => {
        setCurrentStep(index);
      }, totalDelay);
      
      totalDelay += stepDurations[index];
      return timer;
    });

    // Reset animation after completion
    const resetTimer = setTimeout(() => {
      setCurrentStep(0);
    }, totalDelay + 1000); // Add 1s pause before restart

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(resetTimer);
    };
  }, [isLoading, currentStep]);

  if (isLoading) {
    return (
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-t-xl border border-slate-700/50 p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-brand-white font-semibold text-sm">Demo budowy strony</h3>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                <span className="text-xs text-slate-400">Ładowanie...</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-96 bg-slate-900/50 backdrop-blur-sm border-x border-slate-700/50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 loading-spinner"></div>
            <span className="text-slate-400 text-sm">Przygotowywanie demo...</span>
          </div>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-b-xl border border-slate-700/50 p-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
            <span>Demonstracja AI budującego stronę internetową</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-t-xl border border-slate-700/50 p-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
            <Globe className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-brand-white font-semibold text-sm">Demo budowy strony</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              <span className="text-xs text-slate-400">AI w akcji</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Website Building Container */}
      <div className="h-96 bg-slate-900/50 backdrop-blur-sm border-x border-slate-700/50 p-4 overflow-hidden relative">
        {/* Browser Frame */}
        <div className="w-full h-full bg-slate-800/30 rounded-lg border border-slate-600/30 overflow-hidden">
          {/* Browser Header */}
          <div className="h-8 bg-slate-700/50 border-b border-slate-600/30 flex items-center px-3 gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-500/60 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500/60 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500/60 rounded-full"></div>
            </div>
            <div className="flex-1 bg-slate-600/30 rounded px-2 py-0.5">
              <span className="text-xs text-slate-400">www.twoja-strona.pl</span>
            </div>
          </div>

          {/* Website Content Area */}
          <div className="h-full bg-slate-50 relative overflow-hidden">
            {/* Step 1: Wireframe */}
            <AnimatePresence>
              {currentStep >= 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentStep >= 1 ? 0.3 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 p-2"
                >
                  {/* Wireframe boxes */}
                  <div className="w-full h-6 border-2 border-dashed border-slate-400 mb-2"></div>
                  <div className="w-full h-16 border-2 border-dashed border-slate-400 mb-2"></div>
                  <div className="flex gap-2 mb-2">
                    <div className="flex-1 h-12 border-2 border-dashed border-slate-400"></div>
                    <div className="flex-1 h-12 border-2 border-dashed border-slate-400"></div>
                  </div>
                  <div className="w-full h-8 border-2 border-dashed border-slate-400"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 2: Navigation */}
            <AnimatePresence>
              {currentStep >= 1 && (
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 right-0 h-8 bg-brand-primary flex items-center px-2 gap-4"
                >
                  <div className="text-white text-xs font-bold">Logo</div>
                  <div className="flex gap-3 text-xs text-white/80">
                    <span>Strona główna</span>
                    <span>O nas</span>
                    <span>Usługi</span>
                    <span>Kontakt</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 3: Hero Section */}
            <AnimatePresence>
              {currentStep >= 2 && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute top-8 left-0 right-0 h-20 bg-gradient-to-r from-brand-primary/20 to-accent-purple/20 flex items-center px-3"
                >
                  <div className="flex-1">
                    <div className="w-24 h-3 bg-slate-700 rounded mb-1"></div>
                    <div className="w-16 h-2 bg-slate-500 rounded mb-2"></div>
                    <div className="w-12 h-4 bg-brand-primary rounded"></div>
                  </div>
                  <div className="w-16 h-12 bg-slate-300 rounded"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 4: Content Blocks */}
            <AnimatePresence>
              {currentStep >= 3 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0 }}
                    className="absolute top-28 left-2 right-2 h-12 bg-white border border-slate-200 rounded p-2"
                  >
                    <div className="w-20 h-2 bg-slate-600 rounded mb-1"></div>
                    <div className="w-full h-1 bg-slate-300 rounded mb-1"></div>
                    <div className="w-3/4 h-1 bg-slate-300 rounded"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-42 left-2 right-2 h-12 bg-white border border-slate-200 rounded p-2"
                  >
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-accent-blue/30 rounded"></div>
                      <div className="flex-1">
                        <div className="w-16 h-1 bg-slate-600 rounded mb-1"></div>
                        <div className="w-full h-1 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Step 5: Interactive Elements */}
            <AnimatePresence>
              {currentStep >= 4 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-4 left-2 right-2"
                >
                  <div className="flex gap-2">
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          '0 0 0 0 rgba(26, 115, 232, 0)',
                          '0 0 0 4px rgba(26, 115, 232, 0.3)',
                          '0 0 0 0 rgba(26, 115, 232, 0)'
                        ]
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="flex-1 h-6 bg-brand-primary rounded flex items-center justify-center"
                    >
                      <span className="text-white text-xs">Przycisk CTA</span>
                    </motion.div>
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          '0 0 0 0 rgba(168, 85, 247, 0)',
                          '0 0 0 4px rgba(168, 85, 247, 0.3)',
                          '0 0 0 0 rgba(168, 85, 247, 0)'
                        ]
                      }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                      className="w-16 h-6 bg-accent-purple rounded flex items-center justify-center"
                    >
                      <span className="text-white text-xs">Menu</span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step 6: Final Polish */}
            <AnimatePresence>
              {currentStep >= 5 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-primary/5 to-accent-purple/5"
                >
                  {/* Subtle animations and polish effects */}
                  <motion.div
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-8 right-2 w-2 h-2 bg-accent-green rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3],
                      x: [0, 5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-8 left-2 w-1 h-1 bg-accent-blue rounded-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="absolute bottom-1 right-1 flex gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                    index <= currentStep ? 'bg-brand-primary' : 'bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Building Process Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-2 right-2 bg-slate-800/80 backdrop-blur-sm rounded px-2 py-1"
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-3 h-3 text-accent-blue" />
            </motion.div>
            <span className="text-xs text-brand-light">
              {currentStep < 5 ? 'Budowanie...' : 'Gotowe!'}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800/50 backdrop-blur-sm rounded-b-xl border border-slate-700/50 p-4"
      >
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
          <span>Demonstracja AI budującego stronę internetową w czasie rzeczywistym</span>
        </div>
      </motion.div>
    </div>
  );
};

export default WebsiteAnimation;