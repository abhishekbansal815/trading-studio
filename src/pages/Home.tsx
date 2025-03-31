import React from 'react';
import Header from '../components/Header/Header';
import Pricing from '../components/Pricing/Pricing';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      {/* Add top margin to offset the fixed header */}
      <main style={{ marginTop: '80px', padding: '1rem' }}>
        <h2>Welcome to TradeStudio</h2>
        <p>
          Your ultimate platform for building and simulating trading strategies.
        </p>
        <Pricing />
      </main>
    </div>
  );
};

export default Home;
