import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Simulator from '../components/Simulator/Simulator';

const SimulatorPage: React.FC = () => {
  // For demonstration purposes, we use dummy criteria.
  // In a full application, these would be shared or lifted from CreateStrategy.
  const [buyCriteria] = useState<Record<string, boolean>>({
    movingAvg: true,
    topGainers: false,
    lastClose: true,
  });
  const [sellCriteria] = useState<Record<string, boolean>>({
    targetProfit: true,
    stopLoss: false,
  });

  return (
    <div>
      <Header />
      <main style={{ marginTop: '80px', padding: '1rem' }}>
        <h2>Trading Strategy Simulator</h2>
        <Simulator buyCriteria={buyCriteria} sellCriteria={sellCriteria} />
      </main>
    </div>
  );
};

export default SimulatorPage;
