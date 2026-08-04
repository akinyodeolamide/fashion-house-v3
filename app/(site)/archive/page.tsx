'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/app/components/ui/SectionHeader'
import FilterBar from '@/app/components/ui/FilterBar'
import Lightbox from '@/app/components/ui/Lightbox'
import cms from '@/app/lib/cms'

const filterOptions = [
  { value: 'before-after', label: 'Before & After' },
  { value: 'client-outfit', label: 'Client Outfits' },
  { value: 'fashion-shoot', label: 'Fashion Shoots' },
  { value: 'video', label: 'Videos' },
  { value: 'process', label: 'Process' },
]

export default function ArchivePage() {
  const items = cms.archive.getAll()
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return items
    return items.filter((item) => item.category === activeFilter)
  }, [activeFilter, items])

  const allImages = filtered.flatMap((item) => item.images)

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Fashion Archive"
          subtitle="A visual chronicle of craftsmanship, transformation, and style"
        />

        <div className="mt-12 mb-8">
          <FilterBar options={filterOptions} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => {
                const imgIndex = filtered.slice(0, index).reduce((acc, cur) => acc + cur.images.length, 0)
                setLightboxIndex(imgIndex)
                setLightboxOpen(true)
              }}
            >
              <div className="relative aspect-square overflow-hidden rounded-sm bg-secondary">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent text-xs uppercase tracking-wide">{item.category.replace('-', ' ')}</span>
                  <h3 className="text-white font-serif text-lg">{item.title}</h3>
                </div>
                {item.video && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-primary text-xs">▶</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text/50">No items found in this category.</div>
        )}

        <Lightbox
          images={allImages}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          startIndex={lightboxIndex}
        />
      </div>
    </div>
  )
}
