import { Competency, createStage } from './types'

export const security: Competency = {
  id: 9,
  name: 'Security and Compliance',
  color: 'from-red-500 to-orange-500',
  gradient: 'bg-gradient-to-br from-red-500 to-orange-500',
  stages: [
    createStage(0, 'Initial', 'Adheres to team-provided security guidelines (e.g., avoiding hard-coded secrets, securing secrets).',
      ['Doesn\'t commit API keys to git', 'Uses the company password manager'],
      ['Follows basic security rules'],
      'You are learning the basics of secure development.'
    ),
    createStage(1, 'Developing', 'Applies foundational security practices independently in their work, such as secure coding patterns and handling data responsibly.',
      ['Sanitises user input to prevent XSS', 'Checks for IDOR vulnerabilities in their API'],
      ['Writes secure code by default'],
      'You build features that are secure against common threats.'
    ),
    createStage(2, 'Defined', 'Consistently incorporates secure coding practices into their work and raises potential risks they identify.',
      ['Flags a dependency with a known vulnerability', 'Questions storing PII in a non-compliant way'],
      ['Proactively identifies and fixes security issues'],
      'You are a guardian of security within your work.'
    ),
    createStage(3, 'Established', 'Takes ownership of security within their area, anticipating risks and ensuring vulnerabilities are addressed quickly.',
      ['Leads a threat modeling session for a new feature', 'Implements content security policy (CSP) headers'],
      ['Ensures the entire component or service is secure'],
      'You design security into the system from the start.'
    ),
    createStage(4, 'Managed', 'Guides teams in embedding security-first thinking into their workflows and reviews.',
      ['Integrates security scanning (SAST/DAST) into the CI pipeline', 'Trains the team on OWASP Top 10'],
      ['Builds a security-conscious culture in the team'],
      'You make security everyone\'s responsibility.'
    ),
    createStage(5, 'Optimised', 'Shapes the organisation\'s approach to security and compliance, ensuring teams adopt consistent practices.',
      ['Defines the company-wide encryption strategy', 'Manages the bug bounty program'],
      ['Sets the security standard for the entire organization'],
      'You ensure the organization is secure and compliant by design.'
    ),
  ],
}
