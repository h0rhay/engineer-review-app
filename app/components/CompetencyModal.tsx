import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import { StageExplanation } from './StageExplanation'
import { HelpButton } from './HelpButton'
import type { Competency } from '~/lib/competencies'

interface CompetencyModalProps {
  competency: Competency
  selectedStage: number | undefined
  onStageSelect: (competencyId: number, stageLevel: number) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const CompetencyModal = ({
  competency,
  selectedStage,
  onStageSelect,
  open,
  onOpenChange,
}: CompetencyModalProps) => {
  const [helpStage, setHelpStage] = useState<number | null>(null)
  const isComplete = selectedStage !== undefined

  const handleClose = () => {
    if (!document.startViewTransition) {
      onOpenChange(false)
      return
    }

    document.startViewTransition(() => {
      onOpenChange(false)
    })
  }

  const handleStageChange = (value: string) => {
    if (!document.startViewTransition) {
      onStageSelect(competency.id, parseInt(value, 10))
      return
    }

    document.startViewTransition(() => {
      onStageSelect(competency.id, parseInt(value, 10))
    })
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent
          className="max-w-5xl w-[95vw] sm:w-[90vw] max-h-[95vh] overflow-y-auto"
          style={{ 
            viewTransitionName: `competency-${competency.id}`,
          }}
        >
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 rounded-full ${competency.gradient} flex items-center justify-center text-white font-bold text-xl`}
              >
                {competency.id}
              </div>
              <div className="flex-1">
                <DialogTitle className="text-2xl text-white">{competency.name}</DialogTitle>
                {isComplete && (
                  <Badge variant="default" className="mt-2 gap-1">
                    Complete
                  </Badge>
                )}
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            <RadioGroup
              value={selectedStage?.toString()}
              onValueChange={handleStageChange}
              className="space-y-4"
            >
              {competency.stages.map((stage) => (
                <div
                  key={stage.level}
                  className={`flex items-start gap-3 p-4 rounded-lg border transition-colors ${
                    selectedStage === stage.level
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <RadioGroupItem
                    value={stage.level.toString()}
                    id={`c${competency.id}-s${stage.level}`}
                  />
                  <label
                    htmlFor={`c${competency.id}-s${stage.level}`}
                    className="flex-1 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 group/help">
                          <span className="font-semibold text-white text-base">{stage.name}</span>
                          <div className="relative">
                            <HelpButton
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                setHelpStage(stage.level)
                              }}
                            />
                          </div>
                          <span className="text-xs text-white opacity-0 group-hover/help:opacity-100 transition-opacity whitespace-nowrap">
                            Help me understand this
                          </span>
                        </div>
                        <p className="text-sm text-white leading-relaxed">{stage.description}</p>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </RadioGroup>

            <Button
              onClick={handleClose}
              className={`w-full transition-all duration-300 ${
                selectedStage !== undefined
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_hsl(var(--primary))]'
                  : ''
              }`}
              variant={selectedStage !== undefined ? 'default' : 'outline'}
            >
              {selectedStage !== undefined ? 'Confirm Selection' : 'Close'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {helpStage !== null && (
        <StageExplanation
          stage={competency.stages[helpStage]}
          competencyName={competency.name}
          gradientColors={competency.color}
          open={helpStage !== null}
          onOpenChange={(open) => !open && setHelpStage(null)}
        />
      )}
    </>
  )
}

