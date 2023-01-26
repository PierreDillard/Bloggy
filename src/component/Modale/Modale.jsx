
import React, { useState } from 'react';
import "./Modale.css";

export default function Modale({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    setIsButtonVisible(false)
  }

  const handleClose = () => {
    setIsOpen(false);
    setIsButtonVisible(true);
  }

  return (
    <>
    { isButtonVisible && (
      <button onClick={handleOpen}>Open </button>
      )}
      {isOpen && (
        <div className='modale'>
          <div className='modale-content'>
            <span className='modale-close' onClick={handleClose}>&times;</span>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
