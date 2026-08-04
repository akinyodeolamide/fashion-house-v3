'use client'

import { motion } from 'framer-motion'
import { FaShare, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'
import { Product } from '@/app/types'
import PriceDisplay from '@/app/components/ui/PriceDisplay'
import WhatsAppButton from '@/app/components/ui/WhatsAppButton'
import { generateProductWhatsAppLink, getWhatsAppCTA } from '@/app/lib/whatsapp'
import ProductGallery from './ProductGallery'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const whatsappLink = generateProductWhatsAppLink(product)
  const ctaLabel = getWhatsAppCTA(product.category)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.shortDescription,
          url: window.location.href,
        })
      } catch {
        // User cancelled
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text/50 mb-8">
          <Link href="/collections/" className="hover:text-primary transition-colors">Collections</Link>
          <span>/</span>
          <Link href={`/collections/${product.categorySlug}/`} className="hover:text-primary transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-text">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductGallery product={product} />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm text-text/50 tracking-wide uppercase">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-serif text-text mt-2">{product.name}</h1>
            </div>

            <PriceDisplay product={product} size="lg" />

            <div className="prose prose-sm max-w-none">
              <p className="text-text/80 leading-relaxed">{product.description}</p>
            </div>

            <div className="pt-6 border-t border-secondary">
              <WhatsAppButton
                href={whatsappLink}
                label={ctaLabel}
                size="lg"
                className="w-full md:w-auto"
              />
              <p className="mt-3 text-sm text-text/50">
                Clicking will open WhatsApp to chat with the designer about this piece.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-text/60 hover:text-primary transition-colors text-sm"
              >
                <FaShare size={14} />
                Share Design
              </button>
            </div>

            <div className="pt-6 border-t border-secondary space-y-3 text-sm text-text/60">
              <p><span className="font-medium text-text">Category:</span> {product.category}</p>
              <p><span className="font-medium text-text">Craftsmanship:</span> Hand-tailored to order</p>
              <p><span className="font-medium text-text">Delivery:</span> 2-4 weeks depending on complexity</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <Link 
            href={`/collections/${product.categorySlug}/`}
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <FaArrowLeft size={14} />
            Back to {product.category}
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
