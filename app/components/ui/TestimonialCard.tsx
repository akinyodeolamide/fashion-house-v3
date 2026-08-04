'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Testimonial } from '@/app/types'
import Image from 'next/image'

interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-6 md:p-8 rounded-sm border border-secondary/50 h-full flex flex-col"
    >
      <FaQuoteLeft className="text-accent/30 text-3xl mb-4" />

      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={i < testimonial.rating ? 'text-accent' : 'text-secondary'}
            size={14}
          />
        ))}
      </div>

      <p className="text-text/80 leading-relaxed flex-grow mb-6">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-secondary/50">
        {testimonial.image ? (
          <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-serif font-medium text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-medium text-text">{testimonial.name}</h4>
          <p className="text-sm text-text/60">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  )
}
