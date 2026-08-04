'use client'

import { useState, FormEvent } from 'react'
import { FaSearch } from 'react-icons/fa'
import { cn } from '@/app/lib/utils'

interface SearchInputProps {
  onSearch: (query: string) => void
  placeholder?: string
  className?: string
  initialValue?: string
}

export default function SearchInput({ onSearch, placeholder = 'Search...', className, initialValue = '' }: SearchInputProps) {
  const [query, setQuery] = useState(initialValue)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className={cn('relative', className)}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 bg-white border border-secondary rounded-sm text-text placeholder:text-text/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
      />
      <button
        type="submit"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-text/40 hover:text-primary transition-colors"
      >
        <FaSearch />
      </button>
    </form>
  )
}
