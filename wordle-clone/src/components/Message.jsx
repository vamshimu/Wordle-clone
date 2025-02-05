const Message = ({ hasWon, hasLost, correctWord }) => {
    if (hasWon) return <div>Congratulations! You guessed the word.</div>;
    if (hasLost) return <div>Game over! The word was {correctWord}.</div>;
    return null;
  };