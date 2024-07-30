import React, { useState, useEffect } from 'react';

const Game = () => {
  const [targetColor, setTargetColor] = useState(generateRandomColor());
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTargetColor(generateRandomColor());
  }, []);

  function generateRandomColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return randomColor;
  }

  const checkGuess = () => {
    const [targetRed, targetGreen, targetBlue] = targetColor.match(/\d+/g).map(Number);
    const buffer = 12;

    const isClose = (color, target) => {
      return color >= target - buffer && color <= target + buffer;
    };

    const newFunction = () => {
      console.log("this is a function");
    }

    if (isClose(red, targetRed) && isClose(green, targetGreen) && isClose(blue, targetBlue)) {
      setMessage('Correct! You guessed the color.');
    } else {
      setMessage('Incorrect! Try again.');
    }
  };

  const resetGame = () => {
    setTargetColor(generateRandomColor());
    setRed(0);
    setGreen(0);
    setBlue(0);
    setMessage('');
  };

  return (
    <div>
      <div style={{ backgroundColor: targetColor, width: '150px', height: '150px', margin: '20px auto' }}></div>
      <div style={{ marginBottom: '20px' }}>Target Color</div>
      <div>
        <label>
          Red:
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setRed(parseInt(e.target.value))}
          />
          {red}
        </label>
      </div>
      <div>
        <label>
          Green:
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setGreen(parseInt(e.target.value))}
          />
          {green}
        </label>
      </div>
      <div>
        <label>
          Blue:
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setBlue(parseInt(e.target.value))}
          />
          {blue}
        </label>
      </div>
      <button onClick={checkGuess}>Submit Guess</button>
      <button onClick={resetGame}>Reset Game</button>
      {message && <p>{message}</p>}
      <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: '150px', height: '150px', margin: '20px auto' }}></div>
      <div style={{ marginTop: '10px' }}>Your Guess</div>
    </div>
  );
};

export default Game;
