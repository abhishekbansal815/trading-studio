import React from 'react';
import Header from '../components/Header/Header';

const FAQ: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: '80px', padding: '1rem' }}>
        <h2>Frequently Asked Questions</h2>
        <div>
          <h3>What is TradePro?</h3>
          <p>
            TradePro is a platform for building, simulating, and analyzing
            trading strategies.
          </p>
          <h3>How do I create a strategy?</h3>
          <p>
            Navigate to the Create Strategy page and use the Strategy Builder
            tool to define your criteria.
          </p>
          <h3>How does simulation work?</h3>
          <p>
            Simulation uses historical market data to backtest your strategy,
            providing performance metrics such as profit/loss, win rates, and
            maximum drawdowns.
          </p>
          {/* Add more FAQs as needed */}
        </div>
      </main>
    </div>
  );
};

export default FAQ;
