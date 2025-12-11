import { Competency, createStage } from './types'

export const impact: Competency = {
  id: 10,
  name: 'Impact and Leadership',
  color: 'from-violet-500 to-purple-500',
  gradient: 'bg-gradient-to-br from-violet-500 to-purple-500',
  stages: [
    createStage(0, 'Initial', 'Focuses on delivering tasks assigned by others, often lacking context of broader goals.',
      ['Completes tickets as described', 'Focuses on "my tasks"'],
      ['Does what is asked of them'],
      'You are a reliable individual contributor.'
    ),
    createStage(1, 'Developing', 'Aligns work with team priorities, contributing to sprint goals and maintaining velocity.',
      ['Prioritises work based on the sprint goal', 'Helps a teammate unblock so the sprint succeeds'],
      ['Understands how their work fits into the team\'s goals'],
      'You contribute to the team\'s success.'
    ),
    createStage(2, 'Defined', 'Independently delivers impactful work aligned with business objectives, mentoring junior team members.',
      ['Delivers a key feature that increases conversion', 'Onboards a new hire and helps them ship their first PR'],
      ['Delivers value to the business and helps others do the same'],
      'You drive impact for the business and the team.'
    ),
    createStage(3, 'Established', 'Drives impactful technical initiatives, aligning team efforts with strategic priorities.',
      ['Leads a project that reduces churn', 'Convinces product to prioritise technical debt that was slowing velocity'],
      ['Aligns technical work with business value'],
      'You enable the team to deliver higher value.'
    ),
    createStage(4, 'Managed', 'Leads transformational initiatives, influencing strategy and driving innovation; effectively manages direct reports\' development and alignment with objectives.',
      ['Pivots the team\'s technical strategy to support a new business vertical', 'Grows a senior engineer into a lead role'],
      ['Multiplies their impact through leadership and strategy'],
      'You drive the success of the team and its people.'
    ),
    createStage(5, 'Optimised', 'Operates as a top-level influencer, shaping multi-department or company-wide strategy, recognised for aligning large-scale engineering with business objectives.',
      ['Defines the engineering vision for the next 3 years', 'Aligns the entire engineering org with the company mission'],
      ['Shapes the future of the company through technology'],
      'You are a strategic leader for the entire organization.'
    ),
  ],
}
