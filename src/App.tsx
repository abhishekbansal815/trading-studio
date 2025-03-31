import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateStrategy from './pages/CreateStrategy';
import SimulatorPage from './pages/Simulator';
import FAQ from './pages/FAQ';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-strategy" element={<CreateStrategy />} />
        <Route path="/simulator" element={<SimulatorPage />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Additional routes can be added as the project grows */}
      </Routes>
    </Router>
  );
};

export default App;
