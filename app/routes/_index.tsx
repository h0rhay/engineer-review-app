import { useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export const Route = createFileRoute('/_index')({
  component: Index,
})

function Index() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleStart = () => {
    if (firstName.trim() || lastName.trim()) {
      navigate({
        to: '/assessment',
        search: { 
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        },
      })
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Decorative gradient shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl" />
        
        <Card className="relative backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl font-serif text-foreground">
              Engineer Assessment Tool
            </CardTitle>
            <CardDescription className="text-lg text-white">
              Evaluate your engineering competencies across 11 key areas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleStart()
                    }
                  }}
                  className="bg-background/50 border-border"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleStart()
                    }
                  }}
                  className="bg-background/50 border-border"
                />
              </div>
            </div>
            <Button
              onClick={handleStart}
              disabled={!firstName.trim() && !lastName.trim()}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0"
              size="lg"
            >
              Start Assessment
            </Button>
            <p className="text-xs text-center text-white">
              Your progress will be saved in the URL, so you can bookmark and return anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

