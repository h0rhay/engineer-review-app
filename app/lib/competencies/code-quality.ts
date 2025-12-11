import { Competency, createStage } from './types'

export const codeQuality: Competency = {
  id: 1,
  name: 'Code Quality and Standards',
  color: 'from-blue-500 to-cyan-500',
  gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  stages: [
    createStage(0, 'Initial', 'Writes code to solve immediate tasks with significant guidance, adhering minimally to standards.', 
      ['Needs help understanding what "clean code" means', 'Requires code review feedback on every PR'],
      ['Needs a lot of help writing code that meets basic standards'],
      'At this stage, you need substantial help writing code.'
    ),
    createStage(1, 'Developing', 'Writes clean code adhering to team conventions (e.g., naming, linting in JavaScript and Python); resolves simple bugs independently.',
      ['Uses Prettier and ESLint without being reminded', 'Fixes simple logic errors without pairing'],
      ['Writes decent code that follows the rules and can fix small bugs alone'],
      'You are starting to work independently and follow the team rules.'
    ),
    createStage(2, 'Defined', 'Delivers maintainable, high-quality code by using sound development practices tailored to the context and complexity of the problem.',
      ['Consistently writes tests for new features', 'Code is easy for others to read and understand'],
      ['Writes good code that is easy to maintain and test'],
      'You are a solid contributor who writes high-quality code.'
    ),
    createStage(3, 'Established', 'Proactively refactors code to improve scalability, modularity, and performance; drives adoption of advanced practices.',
      ['Refactors a legacy module to improve performance', 'Suggests and implements a new pattern to reduce code duplication'],
      ['Improves the codebase without being asked and helps others write better code'],
      'You are actively making the codebase better.'
    ),
    createStage(4, 'Managed', 'Drives adoption of advanced coding standards, ensuring thorough peer reviews and consistency across the team/department.',
      ['Creates a new linting rule to prevent common bugs', 'Runs workshops on advanced TypeScript patterns'],
      ['Sets the standard for code quality and helps the whole team improve'],
      'You are a leader in code quality for the team.'
    ),
    createStage(5, 'Optimised', 'Innovates in coding practices, introducing frameworks/methodologies that improve organisational consistency and efficiency at scale.',
      ['Introduces a new testing framework that saves the company 20% on CI costs', 'Standardises API design across multiple teams'],
      ['Changes how the whole company writes code for the better'],
      'You transform how the organization approaches software development.'
    ),
  ],
}
