export interface Stage {
  level: number
  name: string
  description: string
  examples: string[]
  rephrasing: string[]
  breakdown?: string
}

export interface Competency {
  id: number
  name: string
  stages: Stage[]
  color: string
  gradient: string
}

export interface AssessmentResult {
  competencyId: number
  selectedStage: number
}

export const STAGES = [
  { level: 0, name: 'Initial' },
  { level: 1, name: 'Developing' },
  { level: 2, name: 'Defined' },
  { level: 3, name: 'Established' },
  { level: 4, name: 'Managed' },
  { level: 5, name: 'Optimised' },
] as const

// Simplified structure - you can expand with full data
const createStage = (
  level: number,
  name: string,
  description: string,
  examples: string[] = [],
  rephrasing: string[] = [],
  breakdown?: string
): Stage => ({
  level,
  name,
  description,
  examples: examples.length > 0 ? examples : [`Example for ${name} level ${level}`],
  rephrasing: rephrasing.length > 0 ? rephrasing : [`Alternative wording for ${name} level ${level}`],
  breakdown,
})

export const COMPETENCIES: Competency[] = [
  {
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
      createStage(1, 'Developing', 'Writes clean code adhering to team conventions (e.g., naming, linting in JavaScript and Python); resolves simple bugs independently.'),
      createStage(2, 'Defined', 'Delivers maintainable, high-quality code by using sound development practices tailored to the context and complexity of the problem.'),
      createStage(3, 'Established', 'Proactively refactors code to improve scalability, modularity, and performance; drives adoption of advanced practices.'),
      createStage(4, 'Managed', 'Drives adoption of advanced coding standards, ensuring thorough peer reviews and consistency across the team/department.'),
      createStage(5, 'Optimised', 'Innovates in coding practices, introducing frameworks/methodologies that improve organisational consistency and efficiency at scale.'),
    ],
  },
  {
    id: 2,
    name: 'System Design and Architecture',
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
    stages: [
      createStage(0, 'Initial', 'Understands core concepts of system communication and integration, with guidance.'),
      createStage(1, 'Developing', 'Contributes to the design of straightforward components, recognising how they depend on and interact with other parts of the system.'),
      createStage(2, 'Defined', 'Designs and implements system modules with increasing autonomy, applying sound design practices and collaborating on broader architectural decisions'),
      createStage(3, 'Established', 'Independently designs and implements system modules of moderate complexity, ensuring they are robust, maintainable, and well-integrated within the wider system.'),
      createStage(4, 'Managed', 'Leads the design and delivery of complex system components, ensuring alignment with broader technical direction.'),
      createStage(5, 'Optimised', 'Shapes the architecture of systems across squads by designing foundational modules and guiding others to deliver scalable, maintainable solutions.'),
    ],
  },
  {
    id: 3,
    name: 'Collaboration and Teamwork',
    color: 'from-green-500 to-emerald-500',
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-500',
    stages: [
      createStage(0, 'Initial', 'Communicates primarily within their team; uses tools like Jira and Slack to seek help.'),
      createStage(1, 'Developing', 'Actively engages in discussions during sprint ceremonies; seeks peer feedback constructively.'),
      createStage(2, 'Defined', 'Collaborates across teams using shared platforms (e.g., Outline for documentation) to document decisions and foster alignment.'),
      createStage(3, 'Established', 'Resolves inter-team conflicts and promotes knowledge sharing through guilds or engineering forums.'),
      createStage(4, 'Managed', 'Drives cross-functional collaboration, building alignment on strategic objectives and cultivating open communication.'),
      createStage(5, 'Optimised', 'Shapes organisation-wide collaboration strategies, uniting multiple departments or disciplines on key engineering efforts.'),
    ],
  },
  {
    id: 4,
    name: 'Debugging and Problem Solving',
    color: 'from-orange-500 to-red-500',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
    stages: [
      createStage(0, 'Initial', 'Struggles with debugging; relies on basic tools but can debug simple problems with support.'),
      createStage(1, 'Developing', 'Resolves straightforward issues independently, uses observability tools like Grafana for metrics analysis and debugging larger issues with more significant support.'),
      createStage(2, 'Defined', 'Confidently debugs medium-complexity issues within their domain, applying structured approaches to identify root causes.'),
      createStage(3, 'Established', 'Independently resolves complex issues that span multiple services or systems. Anticipates common problem areas, introduces preventative approaches.'),
      createStage(4, 'Managed', 'Guides others in diagnosing and resolving complex problems, ensuring consistent use of effective debugging practices across teams.'),
      createStage(5, 'Optimised', 'Shapes organisation-wide expectations for debugging and problem solving. Mentors leaders and senior engineers in applying structured, repeatable approaches.'),
    ],
  },
  {
    id: 5,
    name: 'Testing and Automation',
    color: 'from-yellow-500 to-amber-500',
    gradient: 'bg-gradient-to-br from-yellow-500 to-amber-500',
    stages: [
      createStage(0, 'Initial', 'Performs manual checks; writes simple unit, e2e, and integration tests.'),
      createStage(1, 'Developing', 'Writes and updates unit, e2e, and integration tests with little support. Starts to introduce other QA practices such as logging and metrics.'),
      createStage(2, 'Defined', 'Confidently writes automated tests across their domain and employs TDD or BDD practices where suitable.'),
      createStage(3, 'Established', 'Designs and maintains testing approaches that ensure reliability at scale, introducing patterns such as test-driven development where appropriate.'),
      createStage(4, 'Managed', 'Guides teams in building consistent testing strategies, ensuring quality is built into workflows.'),
      createStage(5, 'Optimised', 'Shapes the organisation\'s approach to testing and automation, ensuring teams have the confidence and capability to deliver quality quickly.'),
    ],
  },
  {
    id: 6,
    name: 'Data-Driven Development',
    color: 'from-indigo-500 to-blue-500',
    gradient: 'bg-gradient-to-br from-indigo-500 to-blue-500',
    stages: [
      createStage(0, 'Initial', 'Begins to look at basic metrics such as response times or error counts with guidance. Relies on assumptions more than data but starts learning how data supports decision-making.'),
      createStage(1, 'Developing', 'Uses simple metrics such as error rates or API usage to validate work and guide small improvements. Incorporates logging and dashboards into their workflow with support.'),
      createStage(2, 'Defined', 'Independently uses data dashboards and metrics to assess the impact of their work. Starts to question assumptions and introduces data points into discussions around product and platform improvements.'),
      createStage(3, 'Established', 'Confidently reflects on data in their domain regarding product and platform performance to help influence the direction of their area.'),
      createStage(4, 'Managed', 'Guides teams in making data-informed decisions, embedding data practices into workflows and reviews.'),
      createStage(5, 'Optimised', 'Drives an organisation-wide culture of data-informed engineering, ensuring strategic decisions are consistently supported by evidence.'),
    ],
  },
  {
    id: 7,
    name: 'Technical Documentation',
    color: 'from-teal-500 to-cyan-500',
    gradient: 'bg-gradient-to-br from-teal-500 to-cyan-500',
    stages: [
      createStage(0, 'Initial', 'Produces minimal documentation'),
      createStage(1, 'Developing', 'Writes documentation for their software components, using the appropriate written medium for clarity.'),
      createStage(2, 'Defined', 'Consistently documents systems using diagrams (e.g., sequence diagrams, flowcharts) for onboarding and support.'),
      createStage(3, 'Established', 'Leads documentation efforts for projects within their domain, ensuring clarity and consistency across written and diagrammatic outputs.'),
      createStage(4, 'Managed', 'Guides documentation practices across teams, setting expectations for clarity, accessibility, and completeness.'),
      createStage(5, 'Optimised', 'Shapes organisation-wide documentation strategy, embedding it as a core engineering practice.'),
    ],
  },
  {
    id: 8,
    name: 'Continuous Improvement',
    color: 'from-rose-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-rose-500 to-pink-500',
    stages: [
      createStage(0, 'Initial', 'Suggests basic improvements (e.g., fixing typos in documentation) when prompted.'),
      createStage(1, 'Developing', 'Identifies and implements small process and technical improvements (e.g., automating recurring tasks, improving on tech quality in certain areas) with little support.'),
      createStage(2, 'Defined', 'Regularly contributes to workflow and quality improvements within their team, such as refining CI/CD processes or automating manual steps.'),
      createStage(3, 'Established', 'Drives systemic improvements across their area, leading retrospective meetings and introducing practices that improve reliability, efficiency, or quality.'),
      createStage(4, 'Managed', 'Shapes continuous improvement practices across multiple teams, embedding frameworks that encourage iterative refinement and measurable impact.'),
      createStage(5, 'Optimised', 'Champions an organisation-wide culture of continuous improvement, ensuring lessons learned are shared and improvements are embedded into engineering processes.'),
    ],
  },
  {
    id: 9,
    name: 'Security and Compliance',
    color: 'from-red-500 to-orange-500',
    gradient: 'bg-gradient-to-br from-red-500 to-orange-500',
    stages: [
      createStage(0, 'Initial', 'Adheres to team-provided security guidelines (e.g., avoiding hard-coded secrets, securing secrets).'),
      createStage(1, 'Developing', 'Applies foundational security practices independently in their work, such as secure coding patterns and handling data responsibly.'),
      createStage(2, 'Defined', 'Consistently incorporates secure coding practices into their work and raises potential risks they identify.'),
      createStage(3, 'Established', 'Takes ownership of security within their area, anticipating risks and ensuring vulnerabilities are addressed quickly.'),
      createStage(4, 'Managed', 'Guides teams in embedding security-first thinking into their workflows and reviews.'),
      createStage(5, 'Optimised', 'Shapes the organisation\'s approach to security and compliance, ensuring teams adopt consistent practices.'),
    ],
  },
  {
    id: 10,
    name: 'Impact and Leadership',
    color: 'from-violet-500 to-purple-500',
    gradient: 'bg-gradient-to-br from-violet-500 to-purple-500',
    stages: [
      createStage(0, 'Initial', 'Focuses on delivering tasks assigned by others, often lacking context of broader goals.'),
      createStage(1, 'Developing', 'Aligns work with team priorities, contributing to sprint goals and maintaining velocity.'),
      createStage(2, 'Defined', 'Independently delivers impactful work aligned with business objectives, mentoring junior team members.'),
      createStage(3, 'Established', 'Drives impactful technical initiatives, aligning team efforts with strategic priorities.'),
      createStage(4, 'Managed', 'Leads transformational initiatives, influencing strategy and driving innovation; effectively manages direct reports\' development and alignment with objectives.'),
      createStage(5, 'Optimised', 'Operates as a top-level influencer, shaping multi-department or company-wide strategy, recognised for aligning large-scale engineering with business objectives.'),
    ],
  },
  {
    id: 11,
    name: 'Performance',
    color: 'from-emerald-500 to-green-500',
    gradient: 'bg-gradient-to-br from-emerald-500 to-green-500',
    stages: [
      createStage(0, 'Initial', 'Addresses performance bottlenecks reactively, often after external reporting (e.g., user complaints).'),
      createStage(1, 'Developing', 'Identifies and resolves simple performance issues using profiling tools & metrics.'),
      createStage(2, 'Defined', 'Proactively seeks out and optimises performance within their domain, not only using metrics such as latency, throughput, or page load times but also applying coding and design patterns that improve efficiency.'),
      createStage(3, 'Established', 'Designs systems and components with performance in mind from the outset, applying patterns that prevent issues before they arise.'),
      createStage(4, 'Managed', 'Guides teams in adopting performance-conscious practices across domains, ensuring performance considerations are embedded in design and development processes.'),
      createStage(5, 'Optimised', 'Shapes organisation-wide performance strategy by defining standards, benchmarks, and expectations for efficiency and responsiveness.'),
    ],
  },
]

