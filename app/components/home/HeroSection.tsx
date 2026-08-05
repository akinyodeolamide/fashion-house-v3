'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import cms from '@/app/lib/cms'
import { generateGeneralWhatsAppLink } from '@/app/lib/whatsapp'

export default function HeroSection() {
  const settings = cms.settings.get()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
  {
    image: '/images/hero-agbada.jpg',
    alt: 'Agbada',
    position: 'right'
  },
  {
    image: '/images/hero-kaftan.jpg',
    alt: 'Kaftan',
    position: 'left'
  },
  {
    image: '/images/hero-english.jpg',
    alt: 'English Wear',
    position: 'right'
  },
  {
    image: '/images/hero-streetwear.jpg',
    alt: 'Streetwear',
    position: 'left'
  },
]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.alt}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
  className={`absolute inset-0 bg-cover ${
    slide.position === 'left'
      ? 'bg-[30%_center]'
      : 'bg-[70%_center]'
  }`}
  style={{ backgroundImage: `url(${slide.image})` }} />
        </div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
          Premium Nigerian Fashion House
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
          {settings.heroHeadline || 'Premium Bespoke Fashion Crafted for Every Occasion'}
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {settings.heroSubheading || 'From traditional Agbada to contemporary streetwear, every piece is meticulously tailored to reflect your unique style and stature.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/collections/"
            className="px-8 py-4 bg-accent text-primary font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Explore Collections
          </Link>
          <a
            href={generateGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 text-white font-medium rounded-sm hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            <FaWhatsapp />
            Chat with the Designer
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-accent' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  )
}