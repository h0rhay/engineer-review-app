import type { AssessmentState, Role } from './url-state'
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

const roleToStage = (role: Role | ''): number => {
  const mapping: Record<Role, number> = {
    'IP': 0,              // Initial
    'E1': 1,              // Developing
    'E2': 2,              // Defined
    'Senior': 3,          // Established
    'Lead': 4,            // Managed
    'Principal/Architect': 5, // Optimised
  }
  return role ? mapping[role] : 2 // Default to E2 if no role selected
}

const calculateRelativeScore = (selectedStage: number, roleStage: number): number => {
  const diff = selectedStage - roleStage
  if (diff <= -2) return 1      // Seriously underperforming
  if (diff === -1) return 2      // Previous level
  if (diff === 0) return 3       // Meeting level
  if (diff === 1) return 4       // Next level up
  return 5                       // Really want promotion (diff >= 2)
}

const getMaturityLevel = (average: number): string => {
  // Average is now in range 1-5 (relative scores)
  if (average < 2) return 'Underperforming'
  if (average < 3) return 'Below Level'
  if (average < 4) return 'Meeting Level'
  if (average < 5) return 'Above Level'
  return 'Promotion Ready'
}

export const calculateResults = (state: AssessmentState): AssessmentResults => {
  const roleStage = roleToStage(state.role)
  
  const competencyScores: CompetencyScore[] = COMPETENCIES.map((competency) => {
    const selectedStage = state.selections[competency.id]
    // Only calculate score if stage has been selected, otherwise default to role stage (score 3)
    const stageToUse = selectedStage !== undefined ? selectedStage : roleStage
    // Calculate relative score based on selected stage vs role stage
    const relativeScore = calculateRelativeScore(stageToUse, roleStage)
    return {
      id: competency.id,
      name: competency.name,
      level: relativeScore,
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

