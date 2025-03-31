/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Simulator from '../src/components/Simulator/Simulator';

describe('Simulator Component', () => {
  const buyCriteria = { movingAvg: true, topGainers: false, lastClose: true };
  const sellCriteria = { targetProfit: true, stopLoss: false };

  beforeEach(() => {
    render(<Simulator buyCriteria={buyCriteria} sellCriteria={sellCriteria} />);
  });

  test('renders Simulator heading', () => {
    expect(screen.getByText(/Trading Strategy Simulator/i)).toBeInTheDocument();
  });

  test('displays selected criteria', () => {
    expect(screen.getByText(/movingAvg/i)).toBeInTheDocument();
    expect(screen.getByText(/lastClose/i)).toBeInTheDocument();
    expect(screen.getByText(/targetProfit/i)).toBeInTheDocument();
  });

  test('runs simulation and displays result', () => {
    const button = screen.getByRole('button', { name: /run simulation/i });
    fireEvent.click(button);
    // Since simulation result is generated randomly, we check that the results section changes.
    expect(screen.getByText(/Simulated Profit\/Loss/i)).toBeInTheDocument();
  });
});
