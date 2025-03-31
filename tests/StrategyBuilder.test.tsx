/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StrategyBuilder from '../src/components/StrategyBuilder/StrategyBuilder';

describe('StrategyBuilder Component', () => {
  // Provide dummy functions for props since our component expects them.
  const dummySetBuy = jest.fn();
  const dummySetSell = jest.fn();

  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(
      <StrategyBuilder
        setBuyCriteria={dummySetBuy}
        setSellCriteria={dummySetSell}
      />,
    );
  });

  test('renders header and criteria sections', () => {
    expect(screen.getByText(/Strategy Builder/i)).toBeInTheDocument();
    expect(screen.getByText(/Buy Criteria/i)).toBeInTheDocument();
    expect(screen.getByText(/Sell Criteria/i)).toBeInTheDocument();
  });

  test('toggles buy criteria checkbox', () => {
    const checkbox = screen.getByLabelText(/N-DAY Moving Avg. > Last Open/i);
    fireEvent.click(checkbox);
    // We expect our dummy function to be called via the useEffect in the component.
    expect(dummySetBuy).toHaveBeenCalled();
  });

  test('calls save strategy button and triggers alert', () => {
    const button = screen.getByRole('button', { name: /save strategy/i });
    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith('Strategy saved!');
    // expect(screen.getByText(/Strategy saved!/i)).toBeInTheDocument(); // alert will not show in DOM; instead, you may check console output or mock alert.
  });
});
