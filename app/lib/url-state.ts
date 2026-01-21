export type Role = 'IP' | 'E1' | 'E2' | 'Senior' | 'Lead' | 'Principal/Architect'

export interface AssessmentState {
  firstName: string
  lastName: string
  role: Role | ''
  selections: Record<number, number>
}

export const getFullName = (state: AssessmentState): string => {
  const parts = [state.firstName, state.lastName].filter(Boolean)
  return parts.length > 0 ? parts.join(' ') : ''
}

export const encodeAssessmentState = (state: AssessmentState): URLSearchParams => {
  const params = new URLSearchParams()
  if (state.firstName) {
    params.set('firstName', state.firstName)
  }
  if (state.lastName) {
    params.set('lastName', state.lastName)
  }
  if (state.role) {
    params.set('role', state.role)
  }
  Object.entries(state.selections).forEach(([id, level]) => {
    params.set(`c${id}`, level.toString())
  })
  return params
}

const VALID_ROLES: Role[] = ['IP', 'E1', 'E2', 'Senior', 'Lead', 'Principal/Architect']

export const decodeAssessmentState = (params: URLSearchParams): AssessmentState => {
  const firstName = params.get('firstName') || ''
  const lastName = params.get('lastName') || ''
  const roleParam = params.get('role') || ''
  const role: Role | '' = VALID_ROLES.includes(roleParam as Role) ? (roleParam as Role) : ''
  const selections: Record<number, number> = {}
  
  for (let i = 1; i <= 11; i++) {
    const value = params.get(`c${i}`)
    if (value !== null) {
      const level = parseInt(value, 10)
      if (!isNaN(level) && level >= 0 && level <= 5) {
        selections[i] = level
      }
    }
  }
  
  return { firstName, lastName, role, selections }
}

export const updateSelectionInUrl = (
  competencyId: number,
  stageLevel: number,
  currentState: AssessmentState
): AssessmentState => {
  return {
    ...currentState,
    selections: {
      ...currentState.selections,
      [competencyId]: stageLevel,
    },
  }
}

export const getCompletionCount = (selections: Record<number, number>): number => {
  return Object.keys(selections).length
}

export const isAssessmentComplete = (selections: Record<number, number>): boolean => {
  return getCompletionCount(selections) === 11
}

