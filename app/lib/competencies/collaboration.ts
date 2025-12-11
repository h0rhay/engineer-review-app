import { Competency, createStage } from './types'

export const collaboration: Competency = {
  id: 3,
  name: 'Collaboration and Teamwork',
  color: 'from-green-500 to-emerald-500',
  gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
  stages: [
    createStage(0, 'Initial', 'Communicates primarily within their team; uses tools like Jira and Slack to seek help.',
      ['Asks clarifying questions on tickets', 'Updates status in daily standups'],
      ['Talks to teammates and uses basic tools to get work done'],
      'You are learning how to work effectively within the team.'
    ),
    createStage(1, 'Developing', 'Actively engages in discussions during sprint ceremonies; seeks peer feedback constructively.',
      ['Participates in sprint planning poker', 'Asks for feedback on PRs to learn'],
      ['Speaks up in meetings and wants to improve based on feedback'],
      'You are an active participant in team rituals.'
    ),
    createStage(2, 'Defined', 'Collaborates across teams using shared platforms (e.g., Outline for documentation) to document decisions and foster alignment.',
      ['Writes a tech spec that other teams review', 'Coordinates with design on a new feature'],
      ['Works well with others and documents decisions clearly'],
      'You collaborate effectively beyond just your immediate peers.'
    ),
    createStage(3, 'Established', 'Resolves inter-team conflicts and promotes knowledge sharing through guilds or engineering forums.',
      ['Mediates a disagreement about API design between frontend and backend', 'Presents a brown-bag lunch topic'],
      ['Helps teams get along and shares knowledge widely'],
      'You are a bridge builder and knowledge sharer.'
    ),
    createStage(4, 'Managed', 'Drives cross-functional collaboration, building alignment on strategic objectives and cultivating open communication.',
      ['Organises a cross-departmental hackathon', 'Aligns engineering, product, and design on a quarterly roadmap'],
      ['Brings different groups together to achieve big goals'],
      'You foster a culture of collaboration across the business.'
    ),
    createStage(5, 'Optimised', 'Shapes organisation-wide collaboration strategies, uniting multiple departments or disciplines on key engineering efforts.',
      ['Implements a new "Squad" model for the entire engineering org', 'Creates a company-wide mentorship program'],
      ['Defines how the whole company works together'],
      'You architect the organizational collaboration structure.'
    ),
  ],
}
