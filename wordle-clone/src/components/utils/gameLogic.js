
export const words = ["REACT", "CRANE", "APPLE", "HOUSE", "MOUSE"];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const isValidWord = (guess, words) => {
  return guess.length === 5 && words.includes(guess);
};

export const getFeedback = (guess, correctWord) => {
  return guess.split("").map((letter, index) => {
    if (letter === correctWord[index]) {
      return "green"; // Correct letter and position
    } else if (correctWord.includes(letter)) {
      return "yellow"; // Correct letter, wrong position
    } else {
      return "gray"; // Incorrect letter
    }
  });
};