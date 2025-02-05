const Grid = ({ guesses, feedback }) => {
    return (
      <div className="grid">
        {guesses.map((guess, row) => (
          <div key={row} className="row">
            {guess.split("").map((letter, col) => (
              <div key={col} className={`cell ${feedback[row][col]}`}>
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };