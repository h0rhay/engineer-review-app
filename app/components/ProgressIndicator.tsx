import { Progress } from '~/components/ui/progress'

interface ProgressIndicatorProps {
  completed: number
  total: number
}

export const ProgressIndicator = ({ completed, total }: ProgressIndicatorProps) => {
  const percentage = (completed / total) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white">
          {completed} of {total} completed
        </span>
        <span className="text-sm text-white">{Math.round(percentage)}%</span>
      </div>
      <Progress value={percentage} />
    </div>
  )
}

