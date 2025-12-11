import { Competency, createStage } from './types'

export const systemDesign: Competency = {
  id: 2,
  name: 'System Design and Architecture',
  color: 'from-purple-500 to-pink-500',
  gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
  stages: [
    createStage(0, 'Initial', 'Understands core concepts of system communication and integration, with guidance.',
      ['Needs explanation on how the frontend talks to the backend', 'Can draw a simple box diagram with help'],
      ['Is learning how different parts of the system fit together'],
      'You are just starting to understand the bigger picture.'
    ),
    createStage(1, 'Developing', 'Contributes to the design of straightforward components, recognising how they depend on and interact with other parts of the system.',
      ['Adds a new API endpoint following existing patterns', 'Understands why we use a specific database for a feature'],
      ['Can build small parts of the system and knows how they connect'],
      'You can design simple features within the existing architecture.'
    ),
    createStage(2, 'Defined', 'Designs and implements system modules with increasing autonomy, applying sound design practices and collaborating on broader architectural decisions',
      ['Designs the schema for a new feature', 'Chooses the right caching strategy for a component'],
      ['Designs solid modules and helps make decisions about the system'],
      'You are capable of designing meaningful parts of the system.'
    ),
    createStage(3, 'Established', 'Independently designs and implements system modules of moderate complexity, ensuring they are robust, maintainable, and well-integrated within the wider system.',
      ['Designs a microservice to handle payment processing', 'Architects a real-time notification system'],
      ['Designs complex parts of the system that work well and last'],
      'You can handle complex system design tasks independently.'
    ),
    createStage(4, 'Managed', 'Leads the design and delivery of complex system components, ensuring alignment with broader technical direction.',
      ['Leads the migration from a monolith to microservices', 'Approves architectural designs for major features'],
      ['Guides the team in building the right things the right way'],
      'You provide architectural leadership for the team.'
    ),
    createStage(5, 'Optimised', 'Shapes the architecture of systems across squads by designing foundational modules and guiding others to deliver scalable, maintainable solutions.',
      ['Defines the event-driven architecture strategy for the company', 'Standardises how all services communicate'],
      ['Sets the architectural vision for the entire organization'],
      'You define the technical foundation for the company.'
    ),
  ],
}
