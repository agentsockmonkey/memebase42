"use client"
import React, { useState } from 'react';
import {useRecoilState} from 'recoil';
import { wordState } from '../state/wordstate';
import Link from 'next/link';

export default function ChooseWord() {
    const [chosenWord, setChosenWord] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [word, setWord] =useRecoilState(wordState);

    const handleWordChange = (event) => {
        const inputWord = event.target.value.toUpperCase().replace(/[^A-Z]/g, '');
        if (inputWord.length <= 5) {
          setChosenWord(inputWord);
        }
        setErrorMessage('');
    };

    const handleWordSubmit = () => {
        if (chosenWord.length === 5) {
          setWord(chosenWord);
        } else {
          setErrorMessage('Word must contain exactly 5 letters');
        }
      };

    return (
        <main>
            <div>
                <h2>Chooose Your Word</h2>
                <input
                    type="text"
                    placeholder="Enter a 5-letter word"
                    value={chosenWord}
                    onChange={handleWordChange}
                />
                <button onClick={handleWordSubmit}>Submit</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            <div>
                <Link href="/playgame">
                    <button>Start Game</button>
                </Link>
            </div>
        </main>
    );
}