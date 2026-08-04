'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Category } from '@/app/types'

interface CollectionCardProps {
  category: Category
  index?: number
}

export default function CollectionCard({ category, index = 0 }: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/collections/${category.slug}/`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${category.image})` }}
          />
          <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/50 transition-colors duration-500" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{category.name}</h3>
              <span className="text-white/70 text-sm">{category.productCount} Designs</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-text/70 text-sm line-clamp-2">{category.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
