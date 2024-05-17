// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/'].includes(event.key)) {
        setInput((prev) => prev + event.key);
      } else if (event.key === 'Enter') {
        handleCalculate();
      } else if (event.key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      } else if (event.key === 'Escape') {
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display" tabIndex="0">{input || '0'}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')} tabIndex="0">1</button>
        <button onClick={() => handleButtonClick('2')} tabIndex="0">2</button>
        <button onClick={() => handleButtonClick('3')} tabIndex="0">3</button>
        <button onClick={() => handleButtonClick('+')} tabIndex="0">+</button>
        <button onClick={() => handleButtonClick('4')} tabIndex="0">4</button>
        <button onClick={() => handleButtonClick('5')} tabIndex="0">5</button>
        <button onClick={() => handleButtonClick('6')} tabIndex="0">6</button>
        <button onClick={() => handleButtonClick('-')} tabIndex="0">-</button>
        <button onClick={() => handleButtonClick('7')} tabIndex="0">7</button>
        <button onClick={() => handleButtonClick('8')} tabIndex="0">8</button>
        <button onClick={() => handleButtonClick('9')} tabIndex="0">9</button>
        <button onClick={() => handleButtonClick('*')} tabIndex="0">*</button>
        <button onClick={() => handleButtonClick('0')} tabIndex="0">0</button>
        
        <button onClick={handleClear} tabIndex="0">C</button>
        <button onClick={handleCalculate} tabIndex="0">=</button>
        <button onClick={() => handleButtonClick('/')} tabIndex="0">/</button>
      </div>
    </div>
  );
};

export default Calculator;
