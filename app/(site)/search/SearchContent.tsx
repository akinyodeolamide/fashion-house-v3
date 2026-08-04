'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import SearchInput from '@/app/components/ui/SearchInput'
import PriceDisplay from '@/app/components/ui/PriceDisplay'
import WhatsAppButton from '@/app/components/ui/WhatsAppButton'
import cms from '@/app/lib/cms'
import { generateProductWhatsAppLink, getWhatsAppCTA } from '@/app/lib/whatsapp'

export default function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)

  const productResults = useMemo(() => {
    if (!query.trim()) return []
    return cms.products.search(query)
  }, [query])

  const postResults = useMemo(() => {
    if (!query.trim()) return []
    return cms.posts.search(query)
  }, [query])

  const hasResults = productResults.length > 0 || postResults.length > 0

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-text mb-8">Search</h1>

        <SearchInput
          onSearch={setQuery}
          placeholder="Search products, collections, or creations..."
          initialValue={initialQuery}
          className="max-w-2xl mb-12"
        />

        {!query.trim() && (
          <p className="text-text/50">Enter a search term to find products, collections, and latest creations.</p>
        )}

        {query.trim() && !hasResults && (
          <p className="text-text/50">No results found for &quot;{query}&quot;.</p>
        )}

        {productResults.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-serif text-text mb-6">Products ({productResults.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productResults.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/collections/${product.categorySlug}/${product.slug}/`}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary mb-4">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${product.images[0]})` }} />
                    </div>
                  </Link>
                  <h3 className="font-serif text-lg text-text">
                    <Link href={`/collections/${product.categorySlug}/${product.slug}/`}>{product.name}</Link>
                  </h3>
                  <p className="text-sm text-text/70 mb-2">{product.category}</p>
                  <PriceDisplay product={product} size="sm" />
                  <div className="mt-3">
                    <WhatsAppButton href={generateProductWhatsAppLink(product)} label={getWhatsAppCTA(product.category)} size="sm" className="w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {postResults.length > 0 && (
          <div>
            <h2 className="text-xl font-serif text-text mb-6">Latest Creations ({postResults.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postResults.map((post) => (
                <div key={post.id}>
                  <Link href={`/latest-creations/${post.slug}/`} className="flex gap-4 group">
                    <div className="w-24 h-24 flex-shrink-0 rounded-sm overflow-hidden bg-secondary">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${post.images[0]})` }} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-text group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-text/70 line-clamp-2">{post.caption}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}