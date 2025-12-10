import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import { Button } from '~/components/ui/button'
import { StageExplanation } from './StageExplanation'
import { HelpButton } from './HelpButton'
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
  const [helpStage, setHelpStage] = useState<number | null>(null)
  const isComplete = selectedStage !== undefined

  return (
    <>
      <motion.div
        layout
        initial={false}
        animate={{
          scale: isExpanded ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <Card
          className={`cursor-pointer transition-all duration-300 ${
            isExpanded
              ? 'ring-2 ring-primary shadow-xl'
              : 'hover:shadow-lg hover:scale-105'
          } ${competency.gradient} bg-opacity-10 border-border`}
          onClick={isExpanded ? undefined : onToggleExpand}
        >
          <CardContent className="p-6">
            {!isExpanded ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full ${competency.gradient} flex items-center justify-center text-white font-bold text-lg`}>
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
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${competency.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                      {competency.id}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{competency.name}</h3>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onToggleExpand}>
                    Collapse
                  </Button>
                </div>

                <RadioGroup
                  value={selectedStage?.toString()}
                  onValueChange={(value) => {
                    onStageSelect(competency.id, parseInt(value, 10))
                  }}
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
                      <RadioGroupItem value={stage.level.toString()} id={`c${competency.id}-s${stage.level}`} />
                      <label
                        htmlFor={`c${competency.id}-s${stage.level}`}
                        className="flex-1 cursor-pointer"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 group/help">
                              <span className="font-semibold text-foreground text-base">{stage.name}</span>
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
                            <p className="text-sm text-white leading-relaxed">
                              {stage.description}
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </RadioGroup>

                <Button
                  onClick={onToggleExpand}
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
            )}
          </CardContent>
        </Card>
      </motion.div>

      {helpStage !== null && (
        <StageExplanation
          stage={competency.stages[helpStage]}
          competencyName={competency.name}
          open={helpStage !== null}
          onOpenChange={(open) => !open && setHelpStage(null)}
        />
      )}
    </>
  )
}

