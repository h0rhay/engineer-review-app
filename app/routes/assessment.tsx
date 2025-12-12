import { useState, useEffect } from 'react'
import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { CompetencyCard } from '~/components/CompetencyCard'
import { ProgressIndicator } from '~/components/ProgressIndicator'
import { Button } from '~/components/ui/button'
import { COMPETENCIES } from '~/lib/competencies'
import { decodeAssessmentState, getCompletionCount, isAssessmentComplete, getFullName } from '~/lib/url-state'
import { HelpButton } from '~/components/HelpButton'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'

type AssessmentSearchParams = {
  firstName?: string
  lastName?: string
  c1?: string
  c2?: string
  c3?: string
  c4?: string
  c5?: string
  c6?: string
  c7?: string
  c8?: string
  c9?: string
  c10?: string
  c11?: string
}

type ResultsSearchParams = {
  firstName?: string
  lastName?: string
  c1?: string
  c2?: string
  c3?: string
  c4?: string
  c5?: string
  c6?: string
  c7?: string
  c8?: string
  c9?: string
  c10?: string
  c11?: string
}

export const Route = createFileRoute('/assessment')({
  component: Assessment,
  validateSearch: (search: Record<string, unknown>) => {
    const params = new URLSearchParams()
    if (search.firstName) params.set('firstName', String(search.firstName))
    if (search.lastName) params.set('lastName', String(search.lastName))
    for (let i = 1; i <= 11; i++) {
      const key = `c${i}` as keyof typeof search
      if (search[key]) params.set(`c${i}`, String(search[key]))
    }
    return {
      firstName: (search.firstName as string) || '',
      lastName: (search.lastName as string) || '',
      ...Object.fromEntries(params.entries()),
    }
  },
})

function Assessment() {
  const navigate = useNavigate()
  const search = useSearch({ from: '/assessment' })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [selections, setSelections] = useState<Record<number, number>>({})

  // Decode state from URL search params
  useEffect(() => {
    const params = new URLSearchParams()
    Object.entries(search).forEach(([key, value]) => {
      if (value) params.set(key, String(value))
    })
    const state = decodeAssessmentState(params)
    setSelections(state.selections)
  }, [search])

  const completionCount = getCompletionCount(selections)
  const isComplete = isAssessmentComplete(selections)
  const state = decodeAssessmentState(new URLSearchParams(Object.entries(search).map(([k, v]) => [k, String(v)])))

  const handleStageSelect = (competencyId: number, stageLevel: number) => {
    const newSelections = { ...selections, [competencyId]: stageLevel }
    
    navigate({
      to: '/assessment',
      search: (): AssessmentSearchParams => {
        const newSearch: AssessmentSearchParams = {}
        if (state.firstName) newSearch.firstName = state.firstName
        if (state.lastName) newSearch.lastName = state.lastName
        Object.entries(newSelections).forEach(([id, level]) => {
          const key = `c${id}` as keyof AssessmentSearchParams
          newSearch[key] = level.toString()
        })
        return newSearch
      },
      replace: true,
    })
    setSelections(newSelections)
  }

  const handleViewResults = () => {
    const resultsSearch: ResultsSearchParams = {}
    if (state.firstName) resultsSearch.firstName = state.firstName
    if (state.lastName) resultsSearch.lastName = state.lastName
    Object.entries(selections).forEach(([id, level]) => {
      const key = `c${id}` as keyof ResultsSearchParams
      resultsSearch[key] = level.toString()
    })
    navigate({
      to: '/results',
      search: resultsSearch,
    })
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {/* Decorative gradient shapes */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif text-foreground mb-2">
              Engineering Assessment
            </h1>
            <p className="text-white">
              {getFullName(state) ? `Welcome, ${getFullName(state)}` : 'Evaluate your competencies'}
            </p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <HelpButton size="md" onClick={(e) => e.preventDefault()} />
                <span className="text-sm text-white hidden md:inline">
                  Click the <span className="text-primary font-semibold">✨ help buttons</span> on any stage!
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-card border-border">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Help me understand...
                </h4>
                <p className="text-sm text-white">
                  Click the colorful, pulsing help buttons next to any stage description to:
                </p>
                <ul className="text-sm text-white space-y-1 list-disc list-inside">
                  <li><strong>Get a better explanation</strong> of what it means</li>
                  <li><strong>See real-world examples</strong> in action</li>
                  <li><strong>Rephrase the statement</strong> for clarity</li>
                </ul>
                <p className="text-xs text-primary mt-2 font-medium">
                  💡 Tip: Use this whenever you're unsure!
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Progress */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
          <ProgressIndicator completed={completionCount} total={11} />
        </div>

        {/* Competency Cards Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-300 ${
            expandedCard !== null ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ 
            viewTransitionName: expandedCard !== null ? 'grid-fade' : 'none',
          }}
        >
          {COMPETENCIES.map((competency) => (
            <CompetencyCard
              key={competency.id}
              competency={competency}
              selectedStage={selections[competency.id]}
              onStageSelect={handleStageSelect}
              isExpanded={expandedCard === competency.id}
              onToggleExpand={() => {
                if (!document.startViewTransition) {
                  setExpandedCard(expandedCard === competency.id ? null : competency.id)
                  return
                }
                document.startViewTransition(() => {
                  setExpandedCard(expandedCard === competency.id ? null : competency.id)
                })
              }}
            />
          ))}
        </div>

        {/* Results Button */}
        {isComplete && (
          <div className="sticky bottom-4 flex justify-center">
            <Button
              onClick={handleViewResults}
              size="lg"
              className="text-black bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg"
            >
              View Results
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

