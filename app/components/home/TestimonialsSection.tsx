'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import SectionHeader from '@/app/components/ui/SectionHeader'
import TestimonialCard from '@/app/components/ui/TestimonialCard'
import cms from '@/app/lib/cms'

export default function TestimonialsSection() {
  const testimonials = cms.testimonials.getAll()
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Client Stories"
          subtitle="Hear from the discerning gentlemen who have experienced the Òwe Bespoke difference"
        />

        <div className="relative mt-16">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, idx) => (
                  <TestimonialCard 
                    key={testimonial.id} 
                    testimonial={testimonial} 
                    index={idx}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {testimonials.length > 3 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center border border-primary/20 rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="Next testimonials"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
