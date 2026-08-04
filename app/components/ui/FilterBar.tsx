'use client'

import { cn } from '@/app/lib/utils'

interface FilterBarProps {
  options: { value: string; label: string }[]
  activeFilter: string
  onFilterChange: (filter: string) => void
  allLabel?: string
}

export default function FilterBar({ options, activeFilter, onFilterChange, allLabel = 'All' }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      <button
        onClick={() => onFilterChange('all')}
        className={cn(
          'px-4 py-2 text-sm font-medium tracking-wide rounded-sm transition-all duration-300',
          activeFilter === 'all'
            ? 'bg-primary text-white'
            : 'bg-secondary text-text/70 hover:bg-primary/10 hover:text-primary'
        )}
      >
        {allLabel}
      </button>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onFilterChange(option.value)}
          className={cn(
            'px-4 py-2 text-sm font-medium tracking-wide rounded-sm transition-all duration-300',
            activeFilter === option.value
              ? 'bg-primary text-white'
              : 'bg-secondary text-text/70 hover:bg-primary/10 hover:text-primary'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
