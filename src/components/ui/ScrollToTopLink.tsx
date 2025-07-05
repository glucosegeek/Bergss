import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ 
  to, 
  children, 
  className = '',
  onClick,
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Call any additional onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link 
      to={to} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollToTopLink;