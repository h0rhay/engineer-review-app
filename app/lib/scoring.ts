import type { AssessmentState } from './url-state'
import { COMPETENCIES } from './competencies'

export interface CompetencyScore {
  id: number
  name: string
  level: number
}

export interface AssessmentResults {
  competencyScores: CompetencyScore[]
  averageStage: number
  overallMaturity: string
  strongestAreas: CompetencyScore[]
  weakestAreas: CompetencyScore[]
}

const getMaturityLevel = (average: number): string => {
  // Average is now in range 1-6 (since we add 1 to each level)
  if (average < 2) return 'Initial'
  if (average < 3) return 'Developing'
  if (average < 4) return 'Defined'
  if (average < 5) return 'Established'
  if (average < 6) return 'Managed'
  return 'Optimised'
}

export const calculateResults = (state: AssessmentState): AssessmentResults => {
  const competencyScores: CompetencyScore[] = COMPETENCIES.map((competency) => {
    const storedLevel = state.selections[competency.id] ?? 0
    // Add 1 to stored level so Initial (0) becomes 1, Developing (1) becomes 2, etc.
    return {
      id: competency.id,
      name: competency.name,
      level: storedLevel + 1,
    }
  })

  const totalLevel = competencyScores.reduce((sum, score) => sum + score.level, 0)
  const averageStage = competencyScores.length > 0 ? totalLevel / competencyScores.length : 0

  const sortedByLevel = [...competencyScores].sort((a, b) => b.level - a.level)
  const strongestAreas = sortedByLevel.slice(0, 3)
  const weakestAreas = sortedByLevel.slice(-3).reverse()

  return {
    competencyScores,
    averageStage,
    overallMaturity: getMaturityLevel(averageStage),
    strongestAreas,
    weakestAreas,
  }
}

