// src/App.jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [decrementMode, setDecrementMode] = useState(false);

  const handleIncrement = () => {
    if (count >= 1000) {
      return;
    }
    let incrementValue = 1;
    if (count >= 100) {
      incrementValue = 100;
    } else if (count >= 10) {
      incrementValue = 10;
    }
    setCount(count + incrementValue);
  };

  const handleDecrement = () => {
    let decrementValue = 1;
    if (count >= 100) {
      decrementValue = 100;
    } else if (count >= 10) {
      decrementValue = 10;
    }
    setCount(count - decrementValue);
  };

  useEffect(() => {
    alert('Welcome to the page!');
  }, []);

  useEffect(() => {
    if (count === 10 || count === 100 || count === 1000) {
      alert(`Count has reached ${count}`);
    }
  }, [count]);

  useEffect(() => {
    if (count === 10 || count === 100 || count === 1000) {
      document.body.style.backgroundColor = 'lightblue';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement} disabled={count >= 1000}>
        Increment
      </button>
      {count >= 1000 && (
        <button onClick={() => setDecrementMode(true)}>
          Switch to Decrement
        </button>
      )}
      {decrementMode && (
        <button onClick={handleDecrement}>
          Decrement
        </button>
      )}
    </div>
  );
};

export default App;
