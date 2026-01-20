import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import type { AssessmentResults } from '~/lib/scoring'
import { COMPETENCIES } from '~/lib/competencies'

interface ResultsDashboardProps {
  results: AssessmentResults
  name: string
}

const COLORS = [
  '#3b82f6', // blue
  '#a855f7', // purple
  '#10b981', // green
  '#f59e0b', // orange
  '#ef4444', // red
  '#fbbf24', // yellow
  '#06b6d4', // cyan
  '#14b8a6', // teal
  '#f43f5e', // rose
  '#8b5cf6', // violet
  '#22c55e', // emerald
]

const getScoreLabel = (score: number): string => {
  const labels: Record<number, string> = {
    1: 'Underperforming',
    2: 'Below Level',
    3: 'Meeting Level',
    4: 'Above Level',
    5: 'Promotion Ready',
  }
  return labels[score] || `Score ${score}`
}

export const ResultsDashboard = ({ results, name: _name }: ResultsDashboardProps) => {
  const radarData = results.competencyScores.map(score => ({
    competency: COMPETENCIES.find(c => c.id === score.id)?.name || `Competency ${score.id}`,
    level: score.level,
    fullMark: 5,
  }))

  const barData = results.competencyScores.map(score => ({
    name: COMPETENCIES.find(c => c.id === score.id)?.name || `C${score.id}`,
    level: score.level,
  }))

  const stageDistribution = [1, 2, 3, 4, 5].map(score => {
    return {
      name: getScoreLabel(score),
      value: results.competencyScores.filter(s => s.level === score).length,
    }
  }).filter(item => item.value > 0)

  return (
    <div className="space-y-6">
      {/* Row 1: Average Stage & Stage Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-lg">Average Stage</CardTitle>
            <CardDescription>Overall competency level</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {results.averageStage.toFixed(1)}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-lg">Stage Distribution</CardTitle>
            <CardDescription>Distribution across maturity levels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={stageDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stageDistribution.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: Strongest Areas & Areas for Growth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-lg">Strongest Areas</CardTitle>
            <CardDescription>Top 3 competencies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {results.strongestAreas.map((area, idx) => (
                <div key={area.id} className="flex items-center justify-between text-sm">
                  <span className="text-white">{idx + 1}. {area.name}</span>
                  <Badge variant="default">{area.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle className="text-lg">Areas for Growth</CardTitle>
            <CardDescription>Opportunities to develop</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {results.weakestAreas.map((area, idx) => (
                <div key={area.id} className="flex items-center justify-between text-sm">
                  <span className="text-white">{idx + 1}. {area.name}</span>
                  <Badge variant="outline">{area.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle>Competency Radar</CardTitle>
            <CardDescription>All competencies overview</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis
                  dataKey="competency"
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 5]}
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                />
                <Radar
                  name="Level"
                  dataKey="level"
                  stroke="#fbbf24"
                  fill="#fbbf24"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle>Competency Levels</CardTitle>
            <CardDescription>Detailed breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                />
                <YAxis
                  domain={[0, 5]}
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="level" fill="#fbbf24" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
