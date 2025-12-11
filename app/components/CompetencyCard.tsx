import { useRef } from 'react'
import { Card, CardContent } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { CompetencyModal } from './CompetencyModal'
import type { Competency } from '~/lib/competencies'
import { CheckCircle2 } from 'lucide-react'

interface CompetencyCardProps {
  competency: Competency
  selectedStage: number | undefined
  onStageSelect: (competencyId: number, stageLevel: number) => void
  isExpanded: boolean
  onToggleExpand: () => void
}

export const CompetencyCard = ({
  competency,
  selectedStage,
  onStageSelect,
  isExpanded,
  onToggleExpand,
}: CompetencyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isComplete = selectedStage !== undefined
  const transitionName = `competency-${competency.id}`

  const handleClick = async () => {
    if (!document.startViewTransition) {
      onToggleExpand()
      return
    }

    // Set the thumbnail's view-transition-name to match the modal
    if (cardRef.current) {
      cardRef.current.style.viewTransitionName = transitionName
    }

    // Start the view transition
    const transition = document.startViewTransition(() => {
      // Clear the thumbnail's view-transition-name inside the transition callback
      if (cardRef.current) {
        cardRef.current.style.viewTransitionName = ''
      }
      // Update the DOM (show modal)
      onToggleExpand()
    })

    await transition.finished
  }

  return (
    <>
      {!isExpanded && (
        <Card
          ref={cardRef}
          className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${competency.gradient} bg-opacity-10 border-border`}
          onClick={handleClick}
        >
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-full ${competency.gradient} flex items-center justify-center text-white font-bold text-lg`}
              >
                {competency.id}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{competency.name}</h3>
                {isComplete && (
                  <Badge variant="default" className="mt-1 gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Complete
                  </Badge>
                )}
              </div>
            </div>
            {selectedStage !== undefined && (
              <Badge variant="secondary" className="text-xs">
                {competency.stages[selectedStage]?.name}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
      )}

      <CompetencyModal
        competency={competency}
        selectedStage={selectedStage}
        onStageSelect={onStageSelect}
        open={isExpanded}
        onOpenChange={async (open) => {
          if (!open) {
            if (!document.startViewTransition) {
              onToggleExpand()
              return
            }
            
            // For closing, we need to reverse the process
            const transition = document.startViewTransition(() => {
              onToggleExpand()
            })
            
            await transition.finished
            
            // After closing, ensure card can be clicked again
            if (cardRef.current) {
              cardRef.current.style.viewTransitionName = ''
            }
          }
        }}
      />
    </>
  )
}

