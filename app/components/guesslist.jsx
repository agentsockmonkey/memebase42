"use client"
import React, { useState } from 'react';
import {wordState} from '../state/wordstate';
import {useRecoilState, useRecoilValue} from 'recoil';

const GuessList = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const word = useRecoilValue(wordState);

  const handleGuessChange = (event) => {
    const inputGuess = event.target.value.toUpperCase().replace(/[^A-Z]/g, '');
    if (inputGuess.length <= 5) {
      setCurrentGuess(inputGuess);
      if (errorMessage) {
        setErrorMessage('');
      }
    }
  };

  const handleGuessSubmit = () => {
    if (currentGuess.length === 5) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess('');
    } else {
      setErrorMessage('Word must contain exactly 5 letters');
    }
  };

  const countSharedLetters = (guess, word) => {
    const guessLetters = guess.split('');
    const wordLetters = word.split('');
    let count = 0;
  
    guessLetters.forEach((letter) => {
      const index = wordLetters.indexOf(letter);
      if (index !== -1) {
        count++;
        wordLetters.splice(index, 1);
      }
    });
  
    return count;
  };

  return (
    <div style={{ width: '50%', height: '100vh', boxSizing: 'border-box', float: 'right' }}>
      <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>
          Guessed Words:
        </h2>
        <input
          type="text"
          style={{
            width: '100%',
            padding: '8px',
            backgroundColor: 'white',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            outline: 'none',
          }}
          placeholder="Enter a 5-letter word"
          value={currentGuess}
          onChange={handleGuessChange}
        />
        <button
          style={{
            width: '100%',
            marginTop: '8px',
            padding: '8px',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            outline: 'none',
          }}
          onClick={handleGuessSubmit}
        >
          Submit
        </button>
        {errorMessage && <p style={{ color: 'red', marginTop: '8px' }}>{errorMessage}</p>}
        <ol style={{ paddingLeft: '20px', marginTop: '8px' }}>
          {guesses.map((guess, index) => (
            <li key={index} style={{ marginBottom: '4px' }}>
              {`${index + 1}: ${guess} (${countSharedLetters(guess, word)} shared letters)`}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default GuessList;