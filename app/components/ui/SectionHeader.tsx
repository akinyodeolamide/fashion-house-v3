'use client'

import { motion } from 'framer-motion'
import { cn } from '@/app/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  light?: boolean
}

export default function SectionHeader({ title, subtitle, centered = true, className, light = false }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight',
          light ? 'text-white' : 'text-text'
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={cn(
            'mt-4 text-base md:text-lg max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-text/70'
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          'h-px w-24 mt-6',
          centered && 'mx-auto',
          light ? 'bg-accent' : 'bg-accent'
        )}
      />
    </div>
  )
}
