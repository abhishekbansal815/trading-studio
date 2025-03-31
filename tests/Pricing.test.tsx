/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pricing from '../src/components/Pricing/Pricing';

describe('Pricing Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Pricing />
      </MemoryRouter>,
    );
  });

  test('renders pricing header and subheader', () => {
    expect(
      screen.getByText(/Simple, transparent pricing/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Choose the perfect plan for your needs/i),
    ).toBeInTheDocument();
  });

  test('renders all pricing cards', () => {
    // Get headings for each plan card by their test IDs.
    const freeCard = screen.getByTestId('pricing-card-Free');
    const proCard = screen.getByTestId('pricing-card-Pro');
    const businessCard = screen.getByTestId('pricing-card-Business');
    const enterpriseCard = screen.getByTestId('pricing-card-Enterprise');
    expect(freeCard).toBeInTheDocument();
    expect(proCard).toBeInTheDocument();
    expect(businessCard).toBeInTheDocument();
    expect(enterpriseCard).toBeInTheDocument();
  });

  test('selecting a pricing card highlights it', () => {
    const freeCard = screen.getByTestId('pricing-card-Free');
    fireEvent.click(freeCard);
    expect(freeCard).toHaveClass('selected');
  });

  test('FAQ link navigates correctly', () => {
    const faqLink = screen.getByText(/Check our FAQ/i);
    expect(faqLink).toBeInTheDocument();
    // Further navigation testing would be done with a router in an integration test.
  });
});
