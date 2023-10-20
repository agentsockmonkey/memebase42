"use client"
import React, { useState } from 'react';
import {wordState} from '../state/wordstate';
import {useRecoilValue} from 'recoil';

const controlWords = ['SALSA', 'PEELS', 'PILLS', 'POOLS', 'PULLS'];

const GuessList = () => {
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(0);
  const [numGuesses, setNumGuesses] = useState(0);
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
      if (currentGuess === word) {
        setWin(true);
        setScore(numGuesses + 1);
      } else {
        setGuesses([...guesses, currentGuess]);
      }
      setCurrentGuess('');
      setNumGuesses(numGuesses + 1);
    } else {
      setErrorMessage('Word must contain exactly 5 letters');
    }
  };

  const countSharedLetters = (testWord, word) => {
    const guessLetters = testWord.split('');
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

  const renderControlWords = (word) => {
    return controlWords.map((testWord) => {
      const sharedLetters = countSharedLetters(testWord, word);
      return (
        <p key={testWord}>
          {`${testWord} (${sharedLetters} shared letters)`}
        </p>
      );
    });
  };

  return (
  
    <div style={{ width: '50%', height: '100vh', boxSizing: 'border-box', float: 'right' }}>
      <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>
          Control Words:
        </h2>
        {renderControlWords(word)}
        
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>
          Guessed Words:
        </h2>
        {win && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>
              You Win!
            </h2>
            <p>Your score: {score}</p>
          </div>
        )}
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