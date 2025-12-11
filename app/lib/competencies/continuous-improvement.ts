import { Competency, createStage } from './types'

export const continuousImprovement: Competency = {
  id: 8,
  name: 'Continuous Improvement',
  color: 'from-rose-500 to-pink-500',
  gradient: 'bg-gradient-to-br from-rose-500 to-pink-500',
  stages: [
    createStage(0, 'Initial', 'Suggests basic improvements (e.g., fixing typos in documentation) when prompted.',
      ['Fixes a typo in a variable name', 'updates an outdated comment'],
      ['Makes small fixes when they see them'],
      'You are starting to care about the details.'
    ),
    createStage(1, 'Developing', 'Identifies and implements small process and technical improvements (e.g., automating recurring tasks, improving on tech quality in certain areas) with little support.',
      ['Adds a script to automate a manual build step', 'Updates a library to a newer version'],
      ['Makes small improvements to save time or reduce errors'],
      'You actively look for ways to make things better.'
    ),
    createStage(2, 'Defined', 'Regularly contributes to workflow and quality improvements within their team, such as refining CI/CD processes or automating manual steps.',
      ['Optimises the docker build to be faster', 'Suggests a change to the code review process'],
      ['Improves how the team works and the tools they use'],
      'You consistently make the team more efficient.'
    ),
    createStage(3, 'Established', 'Drives systemic improvements across their area, leading retrospective meetings and introducing practices that improve reliability, efficiency, or quality.',
      ['Facilitates a blameless post-mortem', 'Introduces a new tool that solves a major pain point'],
      ['Leads initiatives that fix systemic issues'],
      'You drive significant positive change in your area.'
    ),
    createStage(4, 'Managed', 'Shapes continuous improvement practices across multiple teams, embedding frameworks that encourage iterative refinement and measurable impact.',
      ['Standardises the incident review process across teams', 'Coaches other leads on running effective retros'],
      ['Creates a culture where improvement is constant and structured'],
      'You enable multiple teams to get better every day.'
    ),
    createStage(5, 'Optimised', 'Champions an organisation-wide culture of continuous improvement, ensuring lessons learned are shared and improvements are embedded into engineering processes.',
      ['Creates a "Learning Organization" strategy', 'Implements a company-wide "20% time" for innovation'],
      ['Ensures the entire organization evolves and adapts'],
      'You build an organization that learns and improves automatically.'
    ),
  ],
}
