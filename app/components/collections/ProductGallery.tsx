'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'
import { Product } from '@/app/types'
import Lightbox from '@/app/components/ui/Lightbox'

interface ProductGalleryProps {
  product: Product
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const allMedia = [...product.images, ...product.videos]
  const hasMultiple = allMedia.length > 1

  const next = () => setCurrentIndex((prev) => (prev + 1) % allMedia.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length)

  const isVideo = currentIndex >= product.images.length

  return (
    <div className="space-y-4">
      {/* Main Display */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {isVideo ? (
              <video
                src={allMedia[currentIndex]}
                className="w-full h-full object-cover"
                controls
                playsInline
              />
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${allMedia[currentIndex]})` }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <FaChevronLeft size={14} className="text-primary" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <FaChevronRight size={14} className="text-primary" />
            </button>
          </>
        )}

        {/* Expand */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="View fullscreen"
        >
          <FaExpand size={14} className="text-primary" />
        </button>

        {/* Counter */}
        {hasMultiple && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/90 rounded-full text-sm text-primary">
            {currentIndex + 1} / {allMedia.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {hasMultiple && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {allMedia.map((media, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                index === currentIndex ? 'border-accent' : 'border-transparent'
              }`}
            >
              {index >= product.images.length ? (
                <div className="w-full h-full bg-primary flex items-center justify-center">
                  <span className="text-white text-xs">Video</span>
                </div>
              ) : (
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${media})` }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      <Lightbox
        images={product.images}
        videos={product.videos}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        startIndex={currentIndex}
      />
    </div>
  )
}
