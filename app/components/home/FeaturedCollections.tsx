'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeader from '@/app/components/ui/SectionHeader'
import cms from '@/app/lib/cms'

export default function FeaturedCollections() {
  const categories = cms.categories.getAll()

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Collections"
          subtitle="Each collection represents a distinct expression of Nigerian fashion heritage, reimagined for the modern gentleman"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/collections/${category.slug}/`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl font-serif text-white mb-2">{category.name}</h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4">{category.description}</p>
                    <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                      Explore Collection <FaArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
