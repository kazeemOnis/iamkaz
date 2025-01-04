'use client';

import React from 'react';
import { ChevronUp } from '../Icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className='scroll-top'
        aria-label="Scroll to top"
      >
        <ChevronUp />
      </button>
    )
  );
};

export default ScrollToTop;
