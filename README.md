# Engineer Assessment Tool

A modern, interactive web application for evaluating engineering competencies across 11 key areas. Built with TanStack Router, React, TailwindCSS, and shadcn/ui components.

## Features

- **Card-Based Assessment Gallery**: Beautiful, gradient-styled competency cards with interactive stage selection
- **Interactive Help System**: Conversational help dialogs with explanations, examples, and rephrasing options
- **URL-Based State Persistence**: All assessment progress is saved in the URL, enabling bookmarking and sharing
- **Results Dashboard**: Comprehensive visualizations including radar charts, bar charts, and pie charts
- **PDF Export**: Generate and download assessment results as PDF reports
- **Dark Mode Design**: Elegant dark theme with ghost-style UI elements and white text throughout
- **Responsive Design**: Mobile-first approach with touch-friendly interactions

## Tech Stack

- **Framework**: TanStack Router (React Router v7) with Vite
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **Styling**: TailwindCSS with custom dark theme
- **Charts**: Recharts for data visualization
- **PDF Generation**: jsPDF
- **Animations**: Framer Motion
- **TypeScript**: Full type safety throughout

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
pnpm build
pnpm preview
```

## Project Structure

```
engineer-review-app/
├── app/
│   ├── routes/          # TanStack Router routes
│   │   ├── _index.tsx   # Landing page
│   │   ├── assessment.tsx # Main assessment gallery
│   │   └── results.tsx   # Results dashboard
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── CompetencyCard.tsx
│   │   ├── StageExplanation.tsx
│   │   ├── HelpButton.tsx
│   │   └── ResultsDashboard.tsx
│   ├── lib/             # Utilities and data
│   │   ├── competencies.ts
│   │   ├── url-state.ts
│   │   ├── scoring.ts
│   │   └── pdf-generator.ts
│   └── styles/          # Global styles
└── vite.config.ts       # Vite configuration
```

## Usage

1. **Start Assessment**: Enter your name on the landing page
2. **Select Competencies**: Click on competency cards to expand and select your level (0-5)
3. **Get Help**: Click the help icons next to any stage description for detailed explanations
4. **View Results**: Once all 11 competencies are completed, view your results dashboard
5. **Export**: Download your results as a PDF or share the URL

## Competencies Assessed

1. Code Quality and Standards
2. System Design and Architecture
3. Collaboration and Teamwork
4. Debugging and Problem Solving
5. Testing and Automation
6. Data-Driven Development
7. Technical Documentation
8. Continuous Improvement
9. Security and Compliance
10. Impact and Leadership
11. Performance

Each competency has 6 stages: Initial, Developing, Defined, Established, Managed, and Optimised.

## Design System

- **Dark Mode First**: Black backgrounds with white text
- **Ghost Style UI**: Transparent backgrounds with colored borders
- **Gradient Competencies**: Each competency card features a unique gradient
- **Conversational Help**: Friendly, interactive help system with "Help me understand this" prompts

## License

Private project - All rights reserved

