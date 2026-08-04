'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Button from '@/app/components/ui/Button'
import cms from '@/app/lib/cms'

export default function AboutPreview() {
  const settings = cms.settings.get()

  return (
    <section className="py-20 md:py-28 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-4 mb-6 leading-tight">
              Crafting Heritage, <br />Redefining Elegance
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                For over fifteen years, Òwe Bespoke has been at the forefront of Nigerian luxury fashion, 
                blending time-honored tailoring traditions with contemporary design sensibilities.
              </p>
              <p>
                Every piece that leaves our atelier is a testament to meticulous craftsmanship, 
                premium materials, and an unwavering commitment to excellence. We don&apos;t just create 
                clothing — we create statements of identity, culture, and refined taste.
              </p>
              <p>
                From the vibrant streets of Lagos to grand celebrations across Nigeria and beyond, 
                our bespoke pieces have adorned discerning gentlemen who understand that true luxury 
                lies in the details.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/about/" variant="secondary">
                Discover Our Story
              </Button>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors"
              >
                Get in Touch <FaArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/about-workshop.jpg)' }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 md:p-8 rounded-sm max-w-xs">
              <p className="text-3xl md:text-4xl font-serif font-medium">15+</p>
              <p className="text-sm mt-1">Years of Master Craftsmanship</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
