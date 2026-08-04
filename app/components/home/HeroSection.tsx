'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Button from '@/app/components/ui/Button'
import WhatsAppButton from '@/app/components/ui/WhatsAppButton'
import cms from '@/app/lib/cms'
import { generateGeneralWhatsAppLink } from '@/app/lib/whatsapp'

export default function HeroSection() {
  const settings = cms.settings.get()
  const [currentImage, setCurrentImage] = useState(0)
  const images = settings.heroImages

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [images.length])

  const whatsappLink = generateGeneralWhatsAppLink()

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          />
          <div className="absolute inset-0 bg-primary/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6">
            Premium Nigerian Fashion House
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-tight mb-6">
            {settings.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {settings.heroSubheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/collections/" variant="secondary" size="lg">
              Explore Collections
            </Button>
            <WhatsAppButton href={whatsappLink} label="Chat with the Designer" size="lg" />
          </div>
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage ? 'bg-accent w-8' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown className="text-white/50" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
