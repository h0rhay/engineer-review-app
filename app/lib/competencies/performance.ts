import { Competency, createStage } from './types'

export const performance: Competency = {
  id: 11,
  name: 'Performance',
  color: 'from-emerald-500 to-green-500',
  gradient: 'bg-gradient-to-br from-emerald-500 to-green-500',
  stages: [
    createStage(0, 'Initial', 'Addresses performance bottlenecks reactively, often after external reporting (e.g., user complaints).',
      ['Fixes a slow query after a user complains', 'Restarts a service when it runs out of memory'],
      ['Fixes performance issues when they break things'],
      'You react to performance problems.'
    ),
    createStage(1, 'Developing', 'Identifies and resolves simple performance issues using profiling tools & metrics.',
      ['Uses React DevTools to find unnecessary re-renders', 'Adds an index to a SQL query to speed it up'],
      ['Can find and fix basic performance issues'],
      'You proactively fix small performance issues.'
    ),
    createStage(2, 'Defined', 'Proactively seeks out and optimises performance within their domain, not only using metrics such as latency, throughput, or page load times but also applying coding and design patterns that improve efficiency.',
      ['Optimises image loading (lazy loading, webp)', 'Caches expensive API calls'],
      ['Builds things that are fast by default'],
      'You care about performance and build it in.'
    ),
    createStage(3, 'Established', 'Designs systems and components with performance in mind from the outset, applying patterns that prevent issues before they arise.',
      ['Designs a pagination strategy for a large dataset', 'Implements a CDN strategy for static assets'],
      ['Architects for performance from day one'],
      'You ensure systems are designed to be performant.'
    ),
    createStage(4, 'Managed', 'Guides teams in adopting performance-conscious practices across domains, ensuring performance considerations are embedded in design and development processes.',
      ['Sets performance budgets for the application', 'Reviews architecture designs for performance risks'],
      ['Ensures the whole team builds performant software'],
      'You lead the performance culture for the team.'
    ),
    createStage(5, 'Optimised', 'Shapes organisation-wide performance strategy by defining standards, benchmarks, and expectations for efficiency and responsiveness.',
      ['Defines SLIs and SLOs for all services', 'Leads a company-wide initiative to improve Core Web Vitals'],
      ['Sets the performance standard for the organization'],
      'You ensure the company builds world-class, high-performance software.'
    ),
  ],
}
