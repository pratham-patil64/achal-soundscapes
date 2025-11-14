import React from 'react';
import './AnimatedBackground.css'; // Import the new CSS file

const AnimatedBackground = () => {
  return (
    // This div uses the '.area' class from your CSS
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default AnimatedBackground;