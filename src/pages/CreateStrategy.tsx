import React, { useState } from 'react';
import Header from '../components/Header/Header';
import StrategyBuilder from '../components/StrategyBuilder/StrategyBuilder';

const CreateStrategy: React.FC = () => {
  // Local state that will eventually hold the criteria selected by the user.
  // These states are currently not used within this page’s rendering but are passed to the StrategyBuilder.
  const [buyCriteria, setBuyCriteria] = useState<Record<string, boolean>>({});
  const [sellCriteria, setSellCriteria] = useState<Record<string, boolean>>({});

  return (
    <div>
      <Header />
      <main style={{ marginTop: '80px', padding: '1rem' }}>
        <h2>Create Your Trading Strategy</h2>
        <StrategyBuilder
          setBuyCriteria={setBuyCriteria}
          setSellCriteria={setSellCriteria}
        />
        <p>
          After building your strategy, you can simulate it using historical
          data.
        </p>
      </main>
    </div>
  );
};

export default CreateStrategy;
