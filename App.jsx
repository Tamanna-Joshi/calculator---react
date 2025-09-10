import { useState } from 'react';
import { evaluate } from 'mathjs';

import './index.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };


const handleCalculate = () => {
  try {
    const result = evaluate(input);
    setInput(result.toString());
  } catch {
    setInput('Error');
  }
};


  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />

      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => {
              if (btn === '=') {
                handleCalculate();
              } else {
                handleClick(btn);
              }
            }}
          >
            {btn}
          </button>
        ))}
        <button className="clear" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
