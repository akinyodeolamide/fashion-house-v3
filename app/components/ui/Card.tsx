'use client'

import { motion } from 'framer-motion'
import { cn } from '@/app/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      className={cn(
        'bg-white rounded-sm overflow-hidden border border-secondary/50',
        hover && 'hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  )
}
