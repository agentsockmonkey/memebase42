"use client"
import React, { useState } from 'react';
import {useRecoilState} from 'recoil';
import { wordState } from '../state/wordstate';

export default function WordSelector () {
  const [chosenWord, setChosenWord] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleWordChange = (event) => {
    const inputWord = event.target.value.toUpperCase().replace(/[^A-Z]/g, '');
    if (inputWord.length <= 5) {
      setChosenWord(inputWord);
    }
  };

  const handleWordSubmit = () => {
    if (chosenWord.length === 5) {
      
    } else {
      setErrorMessage('Word must contain exactly 5 letters');
    }
  };

  return (
      <div>
        <h2>Word Selector</h2>
        <input
          type="text"
          placeholder="Enter a 5-letter word"
          value={chosenWord}
          onChange={handleWordChange}
        />
        <button onClick={handleWordSubmit}>Submit</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
  );
};

