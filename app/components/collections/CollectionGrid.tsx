'use client'

import { motion } from 'framer-motion'
import { Product } from '@/app/types'
import PriceDisplay from '@/app/components/ui/PriceDisplay'
import WhatsAppButton from '@/app/components/ui/WhatsAppButton'
import { generateProductWhatsAppLink, getWhatsAppCTA } from '@/app/lib/whatsapp'
import Link from 'next/link'

interface CollectionGridProps {
  products: Product[]
}

export default function CollectionGrid({ products }: CollectionGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-text/50 text-lg">No designs found in this collection.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="group"
        >
          <Link href={`/collections/${product.categorySlug}/${product.slug}/`}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary mb-4">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.images[0]})` }}
              />
              {product.featured && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-primary text-xs font-medium tracking-wide rounded-sm">
                  Featured
                </span>
              )}
            </div>
          </Link>

          <div className="space-y-2">
            <h3 className="font-serif text-lg text-text group-hover:text-primary transition-colors">
              <Link href={`/collections/${product.categorySlug}/${product.slug}/`}>
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-text/70 line-clamp-2">{product.shortDescription}</p>
            <PriceDisplay product={product} size="sm" />

            <div className="pt-3">
              <WhatsAppButton
                href={generateProductWhatsAppLink(product)}
                label={getWhatsAppCTA(product.category)}
                size="sm"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
