import { Competency, createStage } from './types'

export const dataDriven: Competency = {
  id: 6,
  name: 'Data-Driven Development',
  color: 'from-indigo-500 to-blue-500',
  gradient: 'bg-gradient-to-br from-indigo-500 to-blue-500',
  stages: [
    createStage(0, 'Initial', 'Begins to look at basic metrics such as response times or error counts with guidance. Relies on assumptions more than data but starts learning how data supports decision-making.',
      ['Checks the "errors" tab in the dashboard when asked', 'Wonders "is this slow?" but doesn\'t measure it'],
      ['Is just starting to look at the numbers'],
      'You are becoming aware of the importance of data.'
    ),
    createStage(1, 'Developing', 'Uses simple metrics such as error rates or API usage to validate work and guide small improvements. Incorporates logging and dashboards into their workflow with support.',
      ['Adds a log statement to count how many times a button is clicked', 'Checks the dashboard after a deployment'],
      ['Uses data to check if their code works as expected'],
      'You use data to validate your own changes.'
    ),
    createStage(2, 'Defined', 'Independently uses data dashboards and metrics to assess the impact of their work. Starts to question assumptions and introduces data points into discussions around product and platform improvements.',
      ['Creates a dashboard to track a new feature\'s adoption', 'Points out that a feature is rarely used based on analytics'],
      ['Uses data to make arguments and verify impact'],
      'You rely on evidence rather than just intuition.'
    ),
    createStage(3, 'Established', 'Confidently reflects on data in their domain regarding product and platform performance to help influence the direction of their area.',
      ['Proposes a performance optimisation because p99 latency is high', 'A/B tests a new UI component'],
      ['Uses data to drive technical and product decisions'],
      'You use data to guide the direction of your work.'
    ),
    createStage(4, 'Managed', 'Guides teams in making data-informed decisions, embedding data practices into workflows and reviews.',
      ['Ensures every feature spec has success metrics defined', 'Reviews team KPIs during retro'],
      ['Builds a team culture that values data'],
      'You ensure the team measures what matters.'
    ),
    createStage(5, 'Optimised', 'Drives an organisation-wide culture of data-informed engineering, ensuring strategic decisions are consistently supported by evidence.',
      ['Establishes standard engineering metrics (DORA) across the org', 'Democratises access to data for all engineers'],
      ['Makes data the common language for the organization'],
      'You transform the organization into a data-driven powerhouse.'
    ),
  ],
}
