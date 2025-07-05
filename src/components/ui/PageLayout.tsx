import React from 'react';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen gradient-secondary ${className}`}>
      <Header />
      <main className="pt-16 sm:pt-20">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;