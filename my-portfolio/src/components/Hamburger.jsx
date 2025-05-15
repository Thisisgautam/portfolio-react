import React, { useState } from 'react';
import './index.css'; 

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Hamburger;
