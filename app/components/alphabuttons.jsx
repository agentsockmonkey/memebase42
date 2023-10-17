"use client"
import React, { useState } from 'react';

const Buttons = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);

  const handleLetterClick = (letter) => {
    if (selectedLetters.includes(letter)) {
      setSelectedLetters(selectedLetters.filter((item) => item !== letter));
    } else {
      setSelectedLetters([...selectedLetters, letter]);
    }
  };

  const containerStyle = {
    width: '50%', // Set the width to 50% of the viewport width
    height: '100vh', // Set the height to the viewport height to prevent scrolling
    boxSizing: 'border-box',
    float: 'left',
    overflow: 'auto', // Add overflow:auto to enable scrolling within the container
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Arrange buttons in two columns
    gap: '10px', // Add a gap between buttons
    padding: '16px', // Add padding to the container
  };

  const buttonStyle = {
    width: '30px', // Set the width for the small white squares
    height: '30px', // Set the height for the small white squares
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red', // Change the background color for selected buttons
  };

  return (
    <div style={containerStyle}>
      {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
        <button
          key={letter}
          style={selectedLetters.includes(letter) ? selectedButtonStyle : buttonStyle}
          onClick={() => handleLetterClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
