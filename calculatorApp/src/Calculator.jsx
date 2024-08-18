// Calculator.jsx
import { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [calc, setCalc] = useState({
    current: "0",
    total: null,
    operator: null,
    isInitial: true,
  });

  const handleButtonClick = (value) => {
    let newValue = calc.isInitial ? value : calc.current + value;

    // Prevent multiple leading zeros
    if (newValue.startsWith("0") && !newValue.includes(".")) {
      newValue = "0";
    }

    setCalc({ ...calc, current: newValue, isInitial: false });
  };

  const handleOperatorClick = (operator) => {
    if (operator === "C") {
      setCalc({ current: "0", total: null, operator: null, isInitial: true });
      return;
    }

    if (operator === "=") {
      if (calc.operator && calc.total != null) {
        const total = doCalculation(calc.total, calc.current, calc.operator);
        setCalc({
          current: total.toString(),
          total: total,
          operator: null,
          isInitial: true,
        });
      }
      return;
    }

    // Handle chaining operations
    if (calc.total === null) {
      setCalc({
        total: parseFloat(calc.current),
        operator,
        current: "0",
        isInitial: true,
      });
    } else if (calc.operator) {
      const total = doCalculation(calc.total, calc.current, calc.operator);
      setCalc({
        total,
        operator,
        current: "0",
        isInitial: true,
      });
    } else {
      setCalc({
        total: parseFloat(calc.current),
        operator,
        current: "0",
        isInitial: true,
      });
    }
  };

  const doCalculation = (total, current, operator) => {
    const totalNum = parseFloat(total);
    const currentNum = parseFloat(current);

    switch (operator) {
      case "+":
        return totalNum + currentNum;
      case "-":
        return totalNum - currentNum;
      case "*":
        return totalNum * currentNum;
      case "/":
        return totalNum / currentNum;
      default:
        return currentNum;
    }
  };

  const handleDecimalClick = () => {
    if (!calc.current.includes(".")) {
      setCalc({
        ...calc,
        current: calc.current + ".",
        isInitial: false,
      });
    }
  };

  return (
    <div className="calculator-container">
      <div className="results">{calc.current}</div>
      <div className="container">
        <Button label="7" onClick={() => handleButtonClick("7")} />
        <Button label="8" onClick={() => handleButtonClick("8")} />
        <Button label="9" onClick={() => handleButtonClick("9")} />
        <Button
          label="/"
          onClick={() => handleOperatorClick("/")}
          className="calculator-operator"
        />
        <Button label="4" onClick={() => handleButtonClick("4")} />
        <Button label="5" onClick={() => handleButtonClick("5")} />
        <Button label="6" onClick={() => handleButtonClick("6")} />
        <Button
          label="*"
          onClick={() => handleOperatorClick("*")}
          className="calculator-operator"
        />
        <Button label="1" onClick={() => handleButtonClick("1")} />
        <Button label="2" onClick={() => handleButtonClick("2")} />
        <Button label="3" onClick={() => handleButtonClick("3")} />
        <Button
          label="-"
          onClick={() => handleOperatorClick("-")}
          className="calculator-operator"
        />
        <Button label="0" onClick={() => handleButtonClick("0")} />
        <Button
          label="."
          onClick={() => handleDecimalClick()}
          className="calculator-operator"
        />
        <Button
          label="="
          onClick={() => handleOperatorClick("=")}
          className="calculator-operator"
        />
        <Button
          label="+"
          onClick={() => handleOperatorClick("+")}
          className="calculator-operator"
        />
        <Button
          label="C"
          onClick={() => handleOperatorClick("C")}
          className="calculator-operator"
        />
      </div>
    </div>
  );
};

export default Calculator;
