// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiMessage = '';
    if (bmiValue < 18.5) {
      bmiMessage = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiMessage = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiMessage = 'Overweight';
    } else {
      bmiMessage = 'Obesity';
    }
    setMessage(bmiMessage);
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>Weight (kg): </label>
        <input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label>Height (cm): </label>
        <input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h2>Your BMI is: {bmi}</h2>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
