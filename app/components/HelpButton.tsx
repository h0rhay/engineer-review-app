import React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import { cn } from '~/lib/utils'

interface HelpButtonProps {
  onClick: (e: React.MouseEvent) => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const HelpButton = ({ onClick, className, size = 'md' }: HelpButtonProps) => {
  const iconSizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'rounded-full bg-transparent',
        'flex items-center justify-center',
        'text-primary hover:text-primary/80 transition-colors',
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      type="button"
    >
      <HelpCircle className={cn(iconSizes[size])} strokeWidth={2} />
    </motion.button>
  )
}

