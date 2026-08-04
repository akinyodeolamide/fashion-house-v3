import { Suspense } from 'react'
import SearchContent from './SearchContent'

export const metadata = {
  title: 'Search | Òwe Bespoke',
  description: 'Search products, collections, and latest creations.',
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif text-text mb-8">Search</h1>
          <div className="max-w-2xl mb-12 h-12 bg-secondary rounded-sm animate-pulse" />
          <p className="text-text/50">Loading search...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}