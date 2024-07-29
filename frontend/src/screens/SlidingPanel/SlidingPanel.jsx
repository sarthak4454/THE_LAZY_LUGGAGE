// SlidingPanel.js
import React, { useEffect } from 'react';
import './SlidingPanel.css';

const SlidingPanel = ({ isOpen, togglePanel }) => {
  // Prevent background scrolling when the panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="backdrop" onClick={togglePanel} />}
      <div className={`sliding-panel ${isOpen ? 'active' : ''}`}>
        <button onClick={togglePanel} className="close-button">Close</button>
        <h2>Shopping Cart</h2>
        <p>Your cart items go here.</p>
        {/* Add your cart items and logic here */}
      </div>
    </>
  );
};

export default SlidingPanel;
