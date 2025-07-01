import React from 'react';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 ${className}`}>
      <Header />
      <main className="pt-16 sm:pt-20">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;