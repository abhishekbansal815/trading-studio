/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/components/Header/Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  });

  test('renders branding and navigation links', () => {
    expect(screen.getByText(/TradeStudio/i)).toBeInTheDocument();
    expect(screen.getByText(/Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Pricing/i)).toBeInTheDocument();
  });

  test('hamburger menu toggles on small screens', () => {
    // Simulate click on menu toggle
    const toggleButton = screen.getByText('☰');
    fireEvent.click(toggleButton);
    // Ensure nav-links element has the class "open"
    const navLinks = screen.getByRole('navigation');
    expect(navLinks).toHaveClass('open');
  });
});
