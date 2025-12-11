import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import type { Stage } from '~/lib/competencies'
import { Sparkles, CheckCircle2, Lightbulb, RefreshCw } from 'lucide-react'

interface StageExplanationProps {
  stage: Stage
  competencyName: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const StageExplanation = ({ stage, competencyName, open, onOpenChange }: StageExplanationProps) => {
  const [activeTab, setActiveTab] = useState<'explanation' | 'examples' | 'rephrasing'>('explanation')
  const [understood, setUnderstood] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 mb-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-full blur-md opacity-50 animate-pulse" />
              <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-full p-2">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                {competencyName} - {stage.name}
              </DialogTitle>
              <DialogDescription className="text-white mt-1">
                I'm here to help! What would you like to know? 💡
              </DialogDescription>
            </div>
          </motion.div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Tabs */}
          <div className="flex gap-2 border-b border-border pb-2 overflow-x-auto">
            <motion.button
              onClick={() => setActiveTab('explanation')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-lg whitespace-nowrap ${
                activeTab === 'explanation'
                  ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-primary text-foreground shadow-lg'
                  : 'text-white hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Lightbulb className="h-4 w-4" />
              Help me understand this
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('examples')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-lg whitespace-nowrap ${
                activeTab === 'examples'
                  ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-primary text-foreground shadow-lg'
                  : 'text-white hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              Show me an example
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('rephrasing')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all rounded-lg whitespace-nowrap ${
                activeTab === 'rephrasing'
                  ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-primary text-foreground shadow-lg'
                  : 'text-white hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <RefreshCw className="h-4 w-4" />
              Rephrase this for me
            </motion.button>
          </div>

          {/* Content */}
          <div className="min-h-[200px]">
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

          {/* Understanding check */}
          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium mb-1">Do you understand this statement?</p>
                <p className="text-xs text-white">
                  {understood ? 'Great! You can proceed with your assessment.' : 'Select an option below'}
                </p>
              </div>
              <div className="flex gap-2">
                {!understood ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setUnderstood(true)
                        setTimeout(() => onOpenChange(false), 1000)
                      }}
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

