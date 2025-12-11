import { Competency, createStage } from './types'

export const technicalDocumentation: Competency = {
  id: 7,
  name: 'Technical Documentation',
  color: 'from-teal-500 to-cyan-500',
  gradient: 'bg-gradient-to-br from-teal-500 to-cyan-500',
  stages: [
    createStage(0, 'Initial', 'Produces minimal documentation',
      ['Writes a commit message', 'Updates the README with a new command'],
      ['Writes down the bare minimum'],
      'You are starting to document your work.'
    ),
    createStage(1, 'Developing', 'Writes documentation for their software components, using the appropriate written medium for clarity.',
      ['Adds JSDoc/comments to complex functions', 'Updates the "Getting Started" guide'],
      ['Documents their own code so others can use it'],
      'You explain your code through writing.'
    ),
    createStage(2, 'Defined', 'Consistently documents systems using diagrams (e.g., sequence diagrams, flowcharts) for onboarding and support.',
      ['Draws a sequence diagram for a payment flow', 'Creates a runbook for a common alert'],
      ['Uses visuals and structured docs to explain systems'],
      'You create documentation that explains "how" and "why".'
    ),
    createStage(3, 'Established', 'Leads documentation efforts for projects within their domain, ensuring clarity and consistency across written and diagrammatic outputs.',
      ['Writes a comprehensive RFC for a new architecture', 'Maintains the API documentation portal'],
      ['Ensures the project documentation is complete and up to date'],
      'You are a steward of knowledge for your domain.'
    ),
    createStage(4, 'Managed', 'Guides documentation practices across teams, setting expectations for clarity, accessibility, and completeness.',
      ['Creates templates for RFCs and Tech Specs', 'Reviews documentation as part of the PR process'],
      ['Sets the standard for how the team shares knowledge'],
      'You build a culture of documentation within the team.'
    ),
    createStage(5, 'Optimised', 'Shapes organisation-wide documentation strategy, embedding it as a core engineering practice.',
      ['Implements a "Docs as Code" strategy for the company', 'Creates a central knowledge base architecture'],
      ['Ensures knowledge is captured and accessible to everyone'],
      'You make documentation a competitive advantage for the org.'
    ),
  ],
}
