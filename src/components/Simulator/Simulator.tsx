import React, { useState } from 'react';
import './Simulator.css';

interface SimulatorProps {
  buyCriteria: Record<string, boolean>;
  sellCriteria: Record<string, boolean>;
}

const Simulator: React.FC<SimulatorProps> = ({ buyCriteria, sellCriteria }) => {
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  const handleRunSimulation = () => {
    // Placeholder: Simulate result based on selected criteria
    const buyCriteriaSelected = Object.keys(buyCriteria).filter(
      (key) => buyCriteria[key],
    );
    const sellCriteriaSelected = Object.keys(sellCriteria).filter(
      (key) => sellCriteria[key],
    );

    if (buyCriteriaSelected.length === 0 || sellCriteriaSelected.length === 0) {
      setSimulationResult(
        '⚠️ Please select at least one Buy and one Sell criterion.',
      );
      return;
    }

    // Dummy Trading Simulation Logic (Replace with real logic later)
    const simulatedProfit = (Math.random() * 20 - 10).toFixed(2); // Random profit/loss between -10% to +10%
    const summary = `📈 Simulated Profit/Loss: ${simulatedProfit}%`;

    setSimulationResult(summary);
  };

  return (
    <div className="simulator-container">
      <h2>Trading Strategy Simulator</h2>

      <div className="criteria-display">
        <h3>Selected Buy Criteria:</h3>
        <ul>
          {Object.keys(buyCriteria).map(
            (key) => buyCriteria[key] && <li key={key}>{key}</li>,
          )}
        </ul>

        <h3>Selected Sell Criteria:</h3>
        <ul>
          {Object.keys(sellCriteria).map(
            (key) => sellCriteria[key] && <li key={key}>{key}</li>,
          )}
        </ul>
      </div>

      <button className="run-simulation" onClick={handleRunSimulation}>
        🚀 Run Simulation
      </button>

      <div className="simulation-results">
        <h3>Simulation Results:</h3>
        {simulationResult ? (
          <p>{simulationResult}</p>
        ) : (
          <p>📊 No results yet.</p>
        )}
      </div>
    </div>
  );
};

export default Simulator;
