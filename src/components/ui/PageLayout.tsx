import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen gradient-secondary relative ${className}`}>
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <main className="relative z-10 pt-16 sm:pt-20">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;