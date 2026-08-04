'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeader from '@/app/components/ui/SectionHeader'
import PriceDisplay from '@/app/components/ui/PriceDisplay'
import WhatsAppButton from '@/app/components/ui/WhatsAppButton'
import cms from '@/app/lib/cms'
import { generateProductWhatsAppLink, getWhatsAppCTA } from '@/app/lib/whatsapp'

export default function FeaturedDesigns() {
  const products = cms.products.getFeatured().slice(0, 4)

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Designs"
          subtitle="Handpicked pieces that showcase the finest of our craftsmanship"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/collections/${product.categorySlug}/${product.slug}/`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-white mb-4">
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
                <p className="text-xs text-text/50 tracking-wide uppercase">{product.category}</p>
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/collections/"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Collections <FaArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
