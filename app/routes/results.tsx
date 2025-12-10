import React from 'react'
import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useEffect } from 'react'
import { ResultsDashboard } from '~/components/ResultsDashboard'
import { Button } from '~/components/ui/button'
import { decodeAssessmentState } from '~/lib/url-state'
import { calculateResults } from '~/lib/scoring'
import { generatePDF } from '~/lib/pdf-generator'
import { Download, Share2 } from 'lucide-react'

export const Route = createFileRoute('/results')({
  component: Results,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      name: (search.name as string) || '',
    }
  },
})

function Results() {
  const search = useSearch({ from: '/results' })
  
  // Decode state from URL
  useEffect(() => {
    const params = new URLSearchParams()
    Object.entries(search).forEach(([key, value]) => {
      if (value) params.set(key, String(value))
    })
  }, [search])

  const params = new URLSearchParams()
  Object.entries(search).forEach(([key, value]) => {
    if (value) params.set(key, String(value))
  })
  const state = decodeAssessmentState(params)
  const results = calculateResults(state)

  const handleExportPDF = () => {
    generatePDF(results, state.name)
  }

  const handleShare = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    alert('Link copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {/* Decorative gradient shapes */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-serif text-foreground mb-2">
              Assessment Results
            </h1>
            <p className="text-white">
              {state.name ? `${state.name}'s competency assessment` : 'Your competency assessment'}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleShare} className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Link
            </Button>
            <Button onClick={handleExportPDF} className="gap-2 bg-gradient-to-r from-primary to-accent">
              <Download className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Results Dashboard */}
        <ResultsDashboard results={results} name={state.name} />
      </div>
    </div>
  )
}

