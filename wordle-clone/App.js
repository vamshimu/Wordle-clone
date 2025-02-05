import React, { useState, useEffect } from "react";
import "./App.css";
import Keyboard from "./Keyboard";

const WORD_LIST = ["apple", "grape", "mango", "peach", "plums"];
const getRandomWord = () => WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];

const App = () => {
  const [targetWord, setTargetWord] = useState(getRandomWord);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    if (guesses.includes(targetWord)) {
      setGameStatus("won");
    } else if (guesses.length >= 6) {
      setGameStatus("lost");
    }
  }, [guesses, targetWord]);

  const handleGuess = () => {
    if (currentGuess.length !== 5 || guesses.includes(currentGuess)) return;
    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  const getFeedback = (guess) => {
    return guess.split("").map((letter, index) => {
      if (letter === targetWord[index]) return "bg-green";
      if (targetWord.includes(letter)) return "bg-yellow";
      return "bg-gray";
    });
  };

  const handleRestart = () => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");
  };

  const handleKeyPress = (key) => {
    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key.toLowerCase());
    }
  };

  const handleBackspace = () => {
    setCurrentGuess((prev) => prev.slice(0, -1));
  };

  return (
    <div className="wordle-container">
      <h1 className="text-2xl font-bold">Wordle Clone</h1>
      <div className="grid">
        {Array.from({ length: 6 }).map((_, row) => (
          <div key={row} className="row">
            {(guesses[row] || "".padEnd(5, " ")).split("").map((letter, col) => (
              <div key={col} className={`cell ${guesses[row] ? getFeedback(guesses[row])[col] : ""}`}>
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameStatus === "playing" && (
        <div className="input-container">
          <input
            type="text"
            value={currentGuess}
            maxLength={5}
            onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
            className="text-black p-2 border rounded"
          />
          <button onClick={handleGuess} disabled={currentGuess.length !== 5}>
            Submit
          </button>
        </div>
      )}
      {gameStatus !== "playing" && (
        <div className="mt-4">
          <p className="text-xl font-bold">
            {gameStatus === "won" ? "You Win! 🎉" : `Game Over! Word was: ${targetWord}`}
          </p>
          <button onClick={handleRestart} className="mt-2 p-2 bg-green-500 rounded">
            New Game
          </button>
        </div>
      )}
      <Keyboard onKeyPress={handleKeyPress} onEnter={handleGuess} onBackspace={handleBackspace} />
    </div>
  );
};

export default App;
