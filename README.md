````markdown
# TradeStudio Trading Platform

![License](https://img.shields.io/badge/license-MIT-blue)

## Overview

TradeStudio is an online platform for building, simulating, and analyzing trading strategies. Built with React + TypeScript, it demonstrates core trading platform functionalities while emphasizing code quality and user experience.

## Implemented Workflows

1. **Strategy Builder**

   - Create nested AND/OR rules for Scanner/Buy/Sell steps
   - Visual rule configuration interface
   - Save/load strategy functionality

2. **Simulation Dashboard**
   - Basic progress tracking
   - Performance metrics display (returns, win rate)
   - Historical order visualization

## Project Setup

### Prerequisites

- Node.js (v18+)
- npm (v9+)

### Installation

```bash
git clone https://github.com/abhishekbansal815/trading-studio.git
cd trading-studio
npm install
npm run dev
```
````

## Project Structure

```
trading-studio/
├── public/              # Static assets and index.html (includes Normalize.css for cross-browser consistency)
├── src/
│   ├── assets/          # Images, icons, fonts
│   ├── components/      # Reusable UI components
│   │   ├── Header/      # Header component and styles
│   │   ├── Pricing/     # Pricing component and styles
│   │   ├── Simulator/   # Simulator component and styles
│   │   └── StrategyBuilder/  # Strategy Builder component and styles
│   ├── pages/           # Page components (Home, CreateStrategy, Simulator, FAQ)
│   ├── index.css        # Global CSS (includes Normalize.css)
│   ├── App.tsx          # Main application component with routing
│   └── main.tsx         # Entry point
├── tests/               # Test files for components and pages
├── jest.config.mjs      # Jest configuration (using ES module syntax)
├── tsconfig.json        # TypeScript configuration (single tsconfig for the project)
└── package.json
```

## Features & Design

### Key Functionalities

- **No-Code Rule Builder**: Drag-and-drop interface for strategy creation
- **Mock Simulation Engine**: Demo historical backtesting
- **Responsive Pricing Page**: Optimized for mobile/desktop

### UI/UX Highlights

- **Professional Color Scheme**: Navy (#1A365D), Gold (#D4AF37)
- **Consistent Styling**: Normalize.css integration
- **Responsive Patterns**:
  - Pricing page: Flexbox + media queries
  - Strategy Builder: Desktop-first design

## Assumptions

- Backend APIs mocked using local JSON data
- Simulation results show static demo data
- Mobile responsiveness limited to Pricing page (time constraints)
- Authentication not implemented

## Future Scope

- Real market data integration (Alpha Vantage API)
- Advanced simulation algorithms (TA-Lib integration)
- CI/CD pipeline (GitHub Actions)
- Global state management (Redux Toolkit)

## Technologies Used

- React 18 + TypeScript 5
- Vite 4
- Jest 29 + Testing Library
- React Router 6
- Normalize.css 8

## Running the Application

```bash
npm run dev
```

Access at: `http://localhost:5173`

## Running Tests

```bash
npm test
```

## Demo

[Strategy Builder](/screenshots/strategy-builder.png) |
[Simulation Dashboard](/screenshots/simulation.png)

## Contact

**Abhishek Bansal**  
📞 +91 7888757406  
📧 abhishekbansal503@gmail.com

## License

This project is licensed under the [MIT License](LICENSE).

```

```
