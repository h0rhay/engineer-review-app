import { Competency, createStage } from './types'

export const testing: Competency = {
  id: 5,
  name: 'Testing and Automation',
  color: 'from-yellow-500 to-amber-500',
  gradient: 'bg-gradient-to-br from-yellow-500 to-amber-500',
  stages: [
    createStage(0, 'Initial', 'Performs manual checks; writes simple unit, e2e, and integration tests.',
      ['Manually clicks through the app to verify changes', 'Writes a basic Jest test for a utility function'],
      ['Checks their work manually and writes basic tests'],
      'You are getting started with automated testing.'
    ),
    createStage(1, 'Developing', 'Writes and updates unit, e2e, and integration tests with little support. Starts to introduce other QA practices such as logging and metrics.',
      ['Adds a Cypress test for a new user flow', 'Mocks an API response in a unit test'],
      ['Writes tests for their own features consistently'],
      'You ensure your own code is covered by tests.'
    ),
    createStage(2, 'Defined', 'Confidently writes automated tests across their domain and employs TDD or BDD practices where suitable.',
      ['Writes the test before the implementation (TDD)', 'Refactors a component knowing tests will catch regressions'],
      ['Uses testing as a design tool, not just for verification'],
      'You treat testing as a core part of the development process.'
    ),
    createStage(3, 'Established', 'Designs and maintains testing approaches that ensure reliability at scale, introducing patterns such as test-driven development where appropriate.',
      ['Sets up a visual regression testing pipeline', 'Optimises the CI build to run tests in parallel'],
      ['Makes sure the test suite is fast, reliable, and useful'],
      'You improve the testing infrastructure and patterns.'
    ),
    createStage(4, 'Managed', 'Guides teams in building consistent testing strategies, ensuring quality is built into workflows.',
      ['Defines the testing pyramid strategy for the team', 'Enforces code coverage thresholds in CI'],
      ['Ensures the whole team writes high-quality tests'],
      'You lead the quality strategy for the team.'
    ),
    createStage(5, 'Optimised', 'Shapes the organisation\'s approach to testing and automation, ensuring teams have the confidence and capability to deliver quality quickly.',
      ['Implements contract testing across all services', 'Automates the release process based on test confidence'],
      ['Builds a culture where shipping to production is stress-free'],
      'You define the quality engineering strategy for the organization.'
    ),
  ],
}
