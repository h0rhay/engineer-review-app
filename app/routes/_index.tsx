import { useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'

export const Route = createFileRoute('/_index')({
  component: Index,
})

const ROLES = ['IP', 'E1', 'E2', 'Senior', 'Lead', 'Principal/Architect'] as const
type Role = typeof ROLES[number]

function Index() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState<Role | ''>('')

  const handleStart = () => {
    if ((firstName.trim() || lastName.trim()) && role) {
      navigate({
        to: '/assessment',
        search: { 
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          role: role,
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
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Current Role
                </label>
                <RadioGroup value={role} onValueChange={(value) => setRole(value as Role)}>
                  <div className="grid grid-cols-2 gap-3">
                    {ROLES.map((roleOption) => (
                      <div
                        key={roleOption}
                        className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                          role === roleOption
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <RadioGroupItem
                          value={roleOption}
                          id={`role-${roleOption}`}
                          className="flex-shrink-0"
                        />
                        <label
                          htmlFor={`role-${roleOption}`}
                          className="flex-1 cursor-pointer text-sm text-white"
                        >
                          {roleOption}
                        </label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Button
              onClick={handleStart}
              disabled={(!firstName.trim() && !lastName.trim()) || !role}
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

