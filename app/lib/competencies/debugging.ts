import { Competency, createStage } from './types'

export const debugging: Competency = {
  id: 4,
  name: 'Debugging and Problem Solving',
  color: 'from-orange-500 to-red-500',
  gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
  stages: [
    createStage(0, 'Initial', 'Struggles with debugging; relies on basic tools but can debug simple problems with support.',
      ['Uses console.log for everything', 'Needs help interpreting stack traces'],
      ['Can fix simple things but needs help finding the root cause'],
      'You are learning the basics of how to find and fix bugs.'
    ),
    createStage(1, 'Developing', 'Resolves straightforward issues independently, uses observability tools like Grafana for metrics analysis and debugging larger issues with more significant support.',
      ['Uses browser devtools breakpoints', 'Checks logs in Datadog/Grafana to find error IDs'],
      ['Can find and fix standard bugs on their own'],
      'You are becoming self-sufficient in troubleshooting.'
    ),
    createStage(2, 'Defined', 'Confidently debugs medium-complexity issues within their domain, applying structured approaches to identify root causes.',
      ['Uses binary search method to find a regression', 'Reproduces a race condition locally'],
      ['Has a systematic way to find and fix harder bugs'],
      'You are a reliable debugger for your team\'s domain.'
    ),
    createStage(3, 'Established', 'Independently resolves complex issues that span multiple services or systems. Anticipates common problem areas, introduces preventative approaches.',
      ['Debugs a latency issue across three different microservices', 'Implements circuit breakers to prevent cascading failures'],
      ['Can solve hard problems that cross system boundaries'],
      'You are the go-to person for complex, distributed issues.'
    ),
    createStage(4, 'Managed', 'Guides others in diagnosing and resolving complex problems, ensuring consistent use of effective debugging practices across teams.',
      ['Runs a post-mortem for a major outage', 'Creates a playbook for debugging production incidents'],
      ['Teaches others how to be better problem solvers'],
      'You lead the team in resolving and learning from incidents.'
    ),
    createStage(5, 'Optimised', 'Shapes organisation-wide expectations for debugging and problem solving. Mentors leaders and senior engineers in applying structured, repeatable approaches.',
      ['Defines the incident response protocol for the company', 'Implements an observability strategy that reduces MTTD globally'],
      ['Sets the standard for how the company handles problems'],
      'You create a culture of resilience and effective problem solving.'
    ),
  ],
}
