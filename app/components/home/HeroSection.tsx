'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

import cms from '@/app/lib/cms'
import { generateGeneralWhatsAppLink } from '@/app/lib/whatsapp'

type Slide = {
  image: string
  alt: string
  position: 'left' | 'right'
  eyebrow: string
  title: string
  description: string
}

export default function HeroSection() {
  const settings = cms.settings.get()

  const slides: Slide[] = [
    {
      image: '/images/hero-agbada.jpg',
      alt: 'Agbada',
      position: 'right',
      eyebrow: 'Royal Heritage',
      title:
        settings.heroHeadline ||
        'Premium Bespoke Fashion Crafted for Every Occasion',
      description:
        settings.heroSubheading ||
        'Handcrafted Agbada, Kaftans, English wear and luxury streetwear tailored with precision for individuals who appreciate elegance.'
    },
    {
      image: '/images/hero-kaftan.jpg',
      alt: 'Kaftan',
      position: 'left',
      eyebrow: 'Modern Tradition',
      title:
        settings.heroHeadline ||
        'Premium Bespoke Fashion Crafted for Every Occasion',
      description:
        settings.heroSubheading ||
        'Luxury senator wears and Kaftans designed with timeless sophistication and exceptional craftsmanship.'
    },
    {
      image: '/images/hero-english.jpg',
      alt: 'English Wear',
      position: 'right',
      eyebrow: 'Executive Luxury',
      title:
        settings.heroHeadline ||
        'Premium Bespoke Fashion Crafted for Every Occasion',
      description:
        settings.heroSubheading ||
        'Sharp tailoring and premium fabrics for executives who value confidence, elegance and style.'
    },
    {
      image: '/images/hero-streetwear.jpg',
      alt: 'Streetwear',
      position: 'left',
      eyebrow: 'Contemporary Style',
      title:
        settings.heroHeadline ||
        'Premium Bespoke Fashion Crafted for Every Occasion',
      description:
        settings.heroSubheading ||
        'Luxury streetwear designed for creatives who want comfort without compromising premium quality.'
    }
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  const slide = slides[current]

  return (
    <section className="relative overflow-hidden bg-black min-h-screen">

      <AnimatePresence mode="wait">

        <motion.div
          key={slide.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >

          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            className="absolute inset-0"
          >

            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className={`object-cover ${
                slide.position === 'left'
                  ? 'object-left'
                  : 'object-right'
              }`}
            />

          </motion.div>

          <div className="absolute inset-0 bg-black/35" />

          <div
            className={`absolute inset-0 ${
              slide.position === 'right'
                ? 'bg-gradient-to-r from-black/85 via-black/55 to-transparent'
                : 'bg-gradient-to-l from-black/85 via-black/55 to-transparent'
            }`}
          />

        </motion.div>

      </AnimatePresence>

      <div className="relative z-20 mx-auto max-w-7xl min-h-screen px-6 lg:px-10">

        <div
          className={`grid min-h-screen items-center gap-12 lg:grid-cols-2 ${
            slide.position === 'right'
              ? ''
              : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
          }`}
        >

          <motion.div
            key={slide.alt}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="max-w-2xl text-center lg:text-left"
          >

            <p className="mb-5 tracking-[0.35em] uppercase text-accent text-sm">
              {slide.eyebrow}
            </p>

            <h1 className="font-serif text-white leading-tight text-5xl md:text-6xl xl:text-7xl">
              {slide.title}
            </h1>

            <p className="mt-8 text-white/80 text-lg leading-8 max-w-xl">
              {slide.description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <Link
                href="/collections"
                className="inline-flex items-center justify-center rounded-sm bg-accent px-8 py-4 font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-accent/90"
              >
                Explore Collections
              </Link>

              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-sm border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                <FaWhatsapp className="text-xl" />
                Chat with the Designer
              </a>

            </div>
            <div className="mt-16 flex items-center gap-4 justify-center lg:justify-start">

              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    current === index
                      ? 'w-10 bg-accent'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}

            </div>

          </motion.div>

          <div className="hidden lg:block" />

        </div>

      </div>

      <button
        onClick={() =>
          setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="absolute left-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-2xl text-white backdrop-blur-md transition-all duration-300 hover:bg-black/40 lg:flex"
      >
        ←
      </button>

      <button
        onClick={() =>
          setCurrent((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          )
        }
        className="absolute right-6 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 text-2xl text-white backdrop-blur-md transition-all duration-300 hover:bg-black/40 lg:flex"
      >
        →
      </button>

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10">

        <motion.div
          key={current}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: 6,
            ease: 'linear'
          }}
          className="h-full bg-accent"
        />

      </div>

      <div className="pointer-events-none absolute inset-0 border border-white/5" />

    </section>
  )
}