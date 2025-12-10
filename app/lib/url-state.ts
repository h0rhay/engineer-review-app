export interface AssessmentState {
  name: string
  selections: Record<number, number>
}

export const encodeAssessmentState = (state: AssessmentState): URLSearchParams => {
  const params = new URLSearchParams()
  if (state.name) {
    params.set('name', state.name)
  }
  Object.entries(state.selections).forEach(([id, level]) => {
    params.set(`c${id}`, level.toString())
  })
  return params
}

export const decodeAssessmentState = (params: URLSearchParams): AssessmentState => {
  const name = params.get('name') || ''
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
  
  return { name, selections }
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

