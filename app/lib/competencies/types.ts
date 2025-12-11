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
export const createStage = (
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
