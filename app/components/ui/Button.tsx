'use client'

import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  external?: boolean
  icon?: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  external = false,
  icon,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20',
    secondary: 'bg-accent text-primary hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  const content = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
