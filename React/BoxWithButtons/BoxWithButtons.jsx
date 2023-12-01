// BoxWithButtons.jsx

import React, { useState } from 'react';
import './BoxWithButtons.css';

const BoxWithButtons = () => {
  const [boxColor, setBoxColor] = useState('');

  const handleButtonClick = (color) => {
    setBoxColor(color);
  };

  const colors = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta'
  ];

  return (
    <div className="container">
      <div className="box" style={{ backgroundColor: boxColor }}></div>
      <div className="button-container">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(color)}
            className="button"
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoxWithButtons;
