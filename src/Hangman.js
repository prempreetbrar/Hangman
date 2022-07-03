import Button from '@mui/material/Button';
import "./Hangman.css";

import img0 from "./images/0.png";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";

import {randomWord} from "./words";
import {useEffect, useState} from "react";



function Hangman({maxWrongGuesses = 7, gallowsImages = [img0, img1, img2, img3, img4, img5, img6, img7]}) {
  const [numWrongGuesses, setNumWrongGuesses] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [answer, setAnswer] = useState(randomWord());
  // we set currentProgress to undefined since it depends on the answer (will be set using useEffect)
  const [currentProgress, setCurrentProgress] = useState();

  // callbacks not used since state does not depend on previous state
  function restartGame() {
    setNumWrongGuesses(0);
    setGuessed(new Set());
    setAnswer(randomWord());
  }

  
  function generateButtons() {
    const allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    const allButtons = 
      allLetters.map(letter =>
      <Button
        // each letter is unique and can be used for the key
        key={letter}
        value={letter}
        onClick={handleGuess} 
        // if the letter has already been guessed then the corresponding button is greyed out
        disabled={guessed.has(letter)}
        variant="contained"
      >
        {letter}
      </Button>
    )
    return allButtons;
  }


  function handleGuess(event) {
    // use event.currentTarget instead of event.target because of Material UI
    const guessedLetter = event.currentTarget.value;
    const updatedGuesses = new Set(guessed);
    updatedGuesses.add(guessedLetter);
    // updatedGuesses depends on the previous set of guesses, so we use a callback
    setGuessed(() => updatedGuesses);

    if (!answer.includes(guessedLetter)) {
      setNumWrongGuesses(numWrongGuesses => numWrongGuesses + 1);
    } 
    else {
      setCurrentProgress(replaceDashes(currentProgress, guessedLetter));
    }
  }


  function replaceDashes(currentProgress, guessedLetter) {
    let newProgress = ""
    for (let i = 0; i < answer.length; i++) {
      /* if the screen currently shows a dash, but the guessedLetter goes
          in that dash, replace the dash with the guessedLetter */
      if (currentProgress[i] === "_" && answer[i] === guessedLetter) {
        newProgress += guessedLetter;
      }
      else {
        newProgress += currentProgress[i];
      }
    }
    return newProgress;
  }


  // every time the answer changes we need to change the number of dashes
  useEffect(() => 
    setCurrentProgress("_".repeat(answer.length)), 
  [answer]);

  const isGameOver = numWrongGuesses >= maxWrongGuesses;
  const isWinner = currentProgress === answer;
  // if the user wins or loses then the buttons are not shown
  let gameState = generateButtons();
  if (isWinner) gameState = "You win!";
  if (isGameOver) gameState = "You lose!";

  return (
    <div className="Hangman">
      <h1>Hangman</h1>
      <img src={gallowsImages[numWrongGuesses]} alt={`${numWrongGuesses}/${maxWrongGuesses} guesses.`}/>
      <p>Number of Incorrect Guesses: {numWrongGuesses}</p>
      <p className="Hangman-word">{!isGameOver ? currentProgress : answer}</p>
      <p>{gameState}</p>
      <Button id="restart" onClick={restartGame} variant="contained">RESTART</Button>
    </div>
  )
}

export default Hangman;
