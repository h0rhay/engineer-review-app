import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import type { Stage } from '~/lib/competencies'
import { Sparkles, CheckCircle2, Lightbulb, RefreshCw } from 'lucide-react'

interface StageExplanationProps {
  stage: Stage
  competencyName: string
  gradientColors: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const StageExplanation = ({ stage, competencyName, gradientColors, open, onOpenChange }: StageExplanationProps) => {
  const [activeTab, setActiveTab] = useState<'explanation' | 'examples' | 'rephrasing'>('explanation')
  const [understood, setUnderstood] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full sm:w-[90vw] bg-card border-border">
        <DialogHeader>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2"
          >
            <div className="relative flex-shrink-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} rounded-full blur-md opacity-50 animate-pulse`} />
              <div className={`relative bg-gradient-to-br ${gradientColors} rounded-full p-2`}>
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <DialogTitle className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent break-words`}>
                {competencyName} - {stage.name}
              </DialogTitle>
              <DialogDescription className="text-white mt-1 break-words">
                I'm here to help! What would you like to know? 💡
              </DialogDescription>
            </div>
          </motion.div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Desktop Tabs - hidden on mobile */}
          <div className="hidden md:block">
            <div className="flex flex-wrap gap-2 border-b border-border pb-2">
              <motion.button
                onClick={() => setActiveTab('explanation')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all rounded-lg whitespace-nowrap border-2 flex-shrink-0 ${
                  activeTab === 'explanation'
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-primary text-foreground shadow-lg'
                    : 'border-transparent text-white hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4" />
                Help me understand this
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('examples')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all rounded-lg whitespace-nowrap border-2 flex-shrink-0 ${
                  activeTab === 'examples'
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-primary text-foreground shadow-lg'
                    : 'border-transparent text-white hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                Show me an example
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('rephrasing')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all rounded-lg whitespace-nowrap border-2 flex-shrink-0 ${
                  activeTab === 'rephrasing'
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-primary text-foreground shadow-lg'
                    : 'border-transparent text-white hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
                Rephrase this for me
              </motion.button>
            </div>

            {/* Desktop Content */}
            <div className="min-h-[200px] mt-4">
              {activeTab === 'explanation' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Here's what this means:</h4>
                    <p className="text-white leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                  {stage.breakdown && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Let's break it down further:</h4>
                      <p className="text-sm text-white leading-relaxed">
                        {stage.breakdown}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'examples' && (
                <div className="space-y-3">
                  <h4 className="font-semibold mb-3">Here are some real-world examples:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    {stage.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-white">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'rephrasing' && (
                <div className="space-y-3">
                  <h4 className="font-semibold mb-3">Here's another way to say it:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    {stage.rephrasing.map((rephrase, idx) => (
                      <li key={idx} className="text-sm text-white">
                        {rephrase}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Accordion - shown on mobile only */}
          <Accordion type="single" collapsible className="md:hidden space-y-3">
            <AccordionItem
              value="explanation"
              className="border-2 border-border/60 rounded-lg px-4 bg-muted/20 shadow-sm data-[state=open]:border-yellow-500/30 data-[state=open]:bg-yellow-500/5 transition-all"
            >
              <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-yellow-400" />
                  </div>
                  <span className="text-left">Help me understand this</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2 pb-4 border-t border-border/40">
                  <div>
                    <h4 className="font-semibold mb-2">Here's what this means:</h4>
                    <p className="text-white leading-relaxed text-sm">
                      {stage.description}
                    </p>
                  </div>
                  {stage.breakdown && (
                    <div className="bg-muted/50 rounded-lg p-4 border border-border/40">
                      <h4 className="font-semibold mb-2 text-sm">Let's break it down further:</h4>
                      <p className="text-xs text-white leading-relaxed">
                        {stage.breakdown}
                      </p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="examples"
              className="border-2 border-border/60 rounded-lg px-4 bg-muted/20 shadow-sm data-[state=open]:border-orange-500/30 data-[state=open]:bg-orange-500/5 transition-all"
            >
              <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-orange-400" />
                  </div>
                  <span className="text-left">Show me an example</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2 pb-4 border-t border-border/40">
                  <h4 className="font-semibold mb-3 text-sm">Here are some real-world examples:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    {stage.examples.map((example, idx) => (
                      <li key={idx} className="text-xs text-white">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="rephrasing"
              className="border-2 border-border/60 rounded-lg px-4 bg-muted/20 shadow-sm data-[state=open]:border-pink-500/30 data-[state=open]:bg-pink-500/5 transition-all"
            >
              <AccordionTrigger className="text-sm font-medium hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 text-pink-400" />
                  </div>
                  <span className="text-left">Rephrase this for me</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2 pb-4 border-t border-border/40">
                  <h4 className="font-semibold mb-3 text-sm">Here's another way to say it:</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    {stage.rephrasing.map((rephrase, idx) => (
                      <li key={idx} className="text-xs text-white">
                        {rephrase}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Understanding check */}
          <div className="border-t border-border pt-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium mb-1 break-words">Do you understand this statement?</p>
                <p className="text-xs text-white break-words">
                  {understood ? 'Great! You can proceed with your assessment.' : 'Select an option below'}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {!understood ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setUnderstood(true)
                        setTimeout(() => onOpenChange(false), 1000)
                      }}
                      className="flex-1 sm:flex-initial"
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Yes, I understand
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        if (activeTab === 'explanation') setActiveTab('examples')
                        else if (activeTab === 'examples') setActiveTab('rephrasing')
                        else setActiveTab('explanation')
                      }}
                      className="flex-1 sm:flex-initial"
                    >
                      I'm still not sure
                    </Button>
                  </>
                ) : (
                  <Badge variant="default" className="gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Understood
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

