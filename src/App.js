import { useMemo, useState } from "react";
import "./App.css";

const startWidth = 50;
const startHight = 150;

export default function App() {
  const [personHeight, setPersonHeight] = useState(startHight);
  const [personWeight, setPersonWeight] = useState(startWidth);

  const handleHeightChange = (event) => {
    setPersonHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setPersonWeight(event.target.value);
  };

  const calculateBMI = () => {
    const calculatedHeight = personHeight / 100;
    return (personWeight / (calculatedHeight * calculatedHeight)).toFixed(1);
  };

  const bmiOutput = useMemo(calculateBMI, [personWeight, personHeight]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {personWeight} kg</p>
        <input
          className="input-slider"
          onChange={handleWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p className="slider-output">Height: {personHeight} cm</p>
        <input
          className="input-slider"
          onChange={handleHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{bmiOutput}</p>
      </div>
    </main>
  );
}
