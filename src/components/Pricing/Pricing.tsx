import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

interface PricingPlan {
  name: string;
  price: string; // e.g., "$0/month", "$29/month", etc.
  subtitle: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0/month',
    subtitle: 'Perfect for getting started',
    features: ['Basic analytics', 'Up to 5 projects', 'Community support'],
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29/month',
    subtitle: 'For growing businesses',
    features: [
      'Advanced analytics',
      'Up to 20 projects',
      'Priority support',
      'Custom domains',
    ],
    buttonText: 'Start Free Trial',
    isPopular: true,
  },
  {
    name: 'Business',
    price: '$99/month',
    subtitle: 'For larger teams',
    features: [
      'Enterprise analytics',
      'Unlimited projects',
      '24/7 phone support',
      'Custom integrations',
      'SLA guarantee',
    ],
    buttonText: 'Contact Sales',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: 'For organizations',
    features: [
      'Custom solutions',
      'Dedicated support team',
      'Custom contracts',
      'On-premise options',
      'Advanced security',
    ],
    buttonText: 'Talk to Sales',
  },
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleCardClick = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="pricing-container">
      <div className="pricing-section-wrapper">
        <h2 className="pricing-header">Simple, transparent pricing</h2>
        <p className="pricing-subheader">
          Choose the perfect plan for your needs
        </p>
        <div className="pricing-cards">
          {plans.map((plan) => {
            // Extract price number and "/month" separately
            const [priceValue, pricePeriod] = plan.price.split('/');
            const isSelected = selectedPlan === plan.name;
            return (
              <div
                key={plan.name}
                data-testid={`pricing-card-${plan.name}`} // Added test id here
                className={`pricing-card ${isSelected ? 'selected' : ''} ${
                  plan.isPopular ? 'popular' : ''
                }`}
                onClick={() => handleCardClick(plan.name)}
              >
                {/* {isSelected && <div className="popular-tag">Selected</div>} */}
                {plan.isPopular && (
                  <div className="popular-tag">Most Popular</div>
                )}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-price">
                  <span className="price-value">{priceValue}</span>
                  {pricePeriod && (
                    <span className="price-period">/{pricePeriod}</span>
                  )}
                </p>
                <p className="plan-subtitle">{plan.subtitle}</p>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="tick">&#10003;</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`plan-button ${
                    isSelected
                      ? 'plain-button-selected'
                      : 'plain-button-unselected'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan.name);
                  }}
                >
                  {isSelected ? (
                    <span className="selected-btn">{plan.buttonText}</span>
                  ) : (
                    <span className="unselected-btn">{plan.buttonText}</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
        <div className="pricing-footer">
          <p>
            Have questions?{' '}
            <Link to="/faq" className="faq-link">
              Check our FAQ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
