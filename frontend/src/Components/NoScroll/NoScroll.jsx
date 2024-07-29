// NoScroll.js
import React, { useEffect } from 'react';
import './NoScroll.css';

const NoScroll = () => {
  useEffect(() => {
    // Add 'noscroll' class to body to prevent horizontal scrolling
    document.body.classList.add('noscroll');

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('noscroll');
    };
  }, []);

  return null;
};

export default NoScroll;
