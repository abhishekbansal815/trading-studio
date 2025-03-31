import React, { useState, useEffect } from 'react';
import './StrategyBuilder.css';

interface StrategyBuilderProps {
  setBuyCriteria: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setSellCriteria: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}

const StrategyBuilder: React.FC<StrategyBuilderProps> = ({
  setBuyCriteria,
  setSellCriteria,
}) => {
  // Local state for Buy Criteria
  const [localBuy, setLocalBuy] = useState({
    movingAvg: false,
    topGainers: false,
    lastClose: false,
  });

  // Local state for Sell Criteria
  const [localSell, setLocalSell] = useState({
    targetProfit: false,
    stopLoss: false,
  });

  // When local state changes, update the parent's state
  useEffect(() => {
    setBuyCriteria(localBuy);
  }, [localBuy, setBuyCriteria]);

  useEffect(() => {
    setSellCriteria(localSell);
  }, [localSell, setSellCriteria]);

  // Toggle functions for each criterion
  const toggleBuyCriterion = (key: keyof typeof localBuy) => {
    setLocalBuy((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSellCriterion = (key: keyof typeof localSell) => {
    setLocalSell((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveStrategy = () => {
    console.log('Saved Strategy:', { localBuy, localSell });
    alert('Strategy saved!');
  };

  return (
    <div className="strategy-builder-container">
      <div className="strategy-builder">
        <h2>Strategy Builder</h2>
        <div className="criteria-container">
          <div className="criteria-section buy-criteria">
            <h3>Buy Criteria</h3>
            <label>
              <input
                type="checkbox"
                checked={localBuy.movingAvg}
                onChange={() => toggleBuyCriterion('movingAvg')}
              />
              N-DAY Moving Avg. &gt; Last Open
            </label>
            <label>
              <input
                type="checkbox"
                checked={localBuy.topGainers}
                onChange={() => toggleBuyCriterion('topGainers')}
              />
              Top X, N-DAY Top Gainers
            </label>
            <label>
              <input
                type="checkbox"
                checked={localBuy.lastClose}
                onChange={() => toggleBuyCriterion('lastClose')}
              />
              Last-Close &gt; N-DAY High
            </label>
          </div>
          <div className="criteria-section sell-criteria">
            <h3>Sell Criteria</h3>
            <label>
              <input
                type="checkbox"
                checked={localSell.targetProfit}
                onChange={() => toggleSellCriterion('targetProfit')}
              />
              Target Profit: X%
            </label>
            <label>
              <input
                type="checkbox"
                checked={localSell.stopLoss}
                onChange={() => toggleSellCriterion('stopLoss')}
              />
              Stop Loss: Y%
            </label>
          </div>
        </div>
        <button className="save-strategy" onClick={handleSaveStrategy}>
          💾 Save Strategy
        </button>
      </div>
    </div>
  );
};

export default StrategyBuilder;
