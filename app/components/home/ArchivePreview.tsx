'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Button from '@/app/components/ui/Button'
import cms from '@/app/lib/cms'

export default function ArchivePreview() {
  const items = cms.archive.getFeatured()

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Fashion Archive"
          subtitle="A visual journey through our craftsmanship, from raw fabric to finished masterpieces"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-16">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative aspect-square overflow-hidden rounded-sm group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.images[0]})` }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500" />

              <div className="absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div>
                  <span className="text-accent text-xs tracking-wide uppercase">{item.category.replace('-', ' ')}</span>
                  <h3 className="text-white font-serif text-lg mt-1">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/archive/" variant="outline">
            View Fashion Archive
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
