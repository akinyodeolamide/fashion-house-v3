'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import cms from '@/app/lib/cms'
import { generateGeneralWhatsAppLink } from '@/app/lib/whatsapp'

type Slide = {
  image: string
  alt: string
  side: 'left' | 'right'
}

const slides: Slide[] = [
  {
    image: '/images/hero-agbada.jpg',
    alt: 'Agbada',
    side: 'right',
  },
  {
    image: '/images/hero-kaftan.jpg',
    alt: 'Kaftan',
    side: 'left',
  },
  {
    image: '/images/hero-english.jpg',
    alt: 'English Wear',
    side: 'right',
  },
  {
    image: '/images/hero-streetwear.jpg',
    alt: 'Streetwear',
    side: 'left',
  },
]

type Settings = {
  heroHeadline?: string
  heroSubheading?: string
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [settings, setSettings] = useState<Settings>({})

  useEffect(() => {
    // Safely read CMS settings inside useEffect to avoid SSR/build-time errors
    try {
      const s = cms.settings.get()
      setSettings(s || {})
    } catch (e) {
      setSettings({})
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const headline =
    settings.heroHeadline ||
    'Premium Bespoke Fashion Crafted for Every Occasion'

  const subheading =
    settings.heroSubheading ||
    'From traditional Agbada to contemporary streetwear, every outfit is tailored with exceptional craftsmanship, precision and elegance.'

  return (
    <section className="relative overflow-hidden h-screen min-h-[760px]">
      {/* =========================
            SLIDES
      ========================== */}
      {slides.map((slide, index) => {
        const active = index === currentSlide

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              active ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* =========================
                 MOBILE IMAGE
            ========================== */}
            <div className="absolute inset-0 lg:hidden">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-[7000ms] ${
                  active ? 'scale-105' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* =========================
                DESKTOP IMAGE
            ========================== */}
            <div className="hidden lg:grid absolute inset-0 grid-cols-2">
              {slide.side === 'left' ? (
                <>
                  <div className="relative overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="50vw"
                      className={`object-contain object-left transition-transform duration-[7000ms] ${
                        active ? 'scale-105' : 'scale-100'
                      }`}
                    />
                  </div>
                  <div className="bg-[#0f1110]" />
                </>
              ) : (
                <>
                  <div className="bg-[#0f1110]" />
                  <div className="relative overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="50vw"
                      className={`object-contain object-right transition-transform duration-[7000ms] ${
                        active ? 'scale-105' : 'scale-100'
                      }`}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )
      })}

      {/* =========================
            CONTENT STARTS HERE
      ========================== */}
      <div className="relative z-20 h-full">
        {/* =========================
              MOBILE CONTENT
        ========================== */}
        <div className="flex lg:hidden items-center justify-center h-full px-6">
          <div className="max-w-xl text-center">
            <p className="text-accent uppercase tracking-[0.35em] text-xs mb-5 animate-fadeIn">
              Premium Nigerian Fashion House
            </p>

            <h1 className="font-serif text-white text-5xl leading-tight mb-6">
              {headline}
            </h1>

            <p className="text-white/80 text-lg leading-8 mb-10">
              {subheading}
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="/collections"
                className="bg-accent text-primary py-4 px-8 rounded-sm font-medium transition-all duration-300 hover:scale-[1.03]"
              >
                Explore Collections
              </Link>

              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/25 bg-white/10 backdrop-blur-md text-white py-4 px-8 rounded-sm flex justify-center items-center gap-3 hover:bg-white/20 transition-all duration-300"
              >
                <FaWhatsapp size={22} />
                Chat with the Designer
              </a>
            </div>
          </div>
        </div>

        {/* =========================
              DESKTOP CONTENT
        ========================== */}
        <div className="hidden lg:flex h-full items-center">
          <div className="max-w-7xl mx-auto w-full px-14 xl:px-24">
            {slides[currentSlide].side === 'right' ? (
              <div className="grid grid-cols-2 items-center">
                {/* TEXT */}
                <div className="pr-16">
                  <p className="text-accent uppercase tracking-[0.35em] text-sm mb-6">
                    Premium Nigerian Fashion House
                  </p>

                  <h1 className="font-serif text-white text-6xl xl:text-7xl leading-[1.08] mb-8">
                    {headline}
                  </h1>

                  <p className="text-white/70 text-xl leading-9 max-w-xl mb-12">
                    {subheading}
                  </p>

                  <div className="flex gap-5">
                    <Link
                      href="/collections"
                      className="bg-accent text-primary px-9 py-4 rounded-sm font-medium hover:scale-105 transition-all duration-300"
                    >
                      Explore Collections
                    </Link>

                    <a
                      href={generateGeneralWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/20 bg-white/10 backdrop-blur-md px-9 py-4 rounded-sm text-white flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaWhatsapp />
                      Chat with the Designer
                    </a>
                  </div>
                </div>

                {/* EMPTY COLUMN */}
                <div />
              </div>
            ) : (
              <div className="grid grid-cols-2 items-center">
                {/* EMPTY COLUMN */}
                <div />

                {/* TEXT */}
                <div className="pl-16">
                  <p className="text-accent uppercase tracking-[0.35em] text-sm mb-6">
                    Premium Nigerian Fashion House
                  </p>

                  <h1 className="font-serif text-white text-6xl xl:text-7xl leading-[1.08] mb-8">
                    {headline}
                  </h1>

                  <p className="text-white/70 text-xl leading-9 max-w-xl mb-12">
                    {subheading}
                  </p>

                  <div className="flex gap-5">
                    <Link
                      href="/collections"
                      className="bg-accent text-primary px-9 py-4 rounded-sm font-medium hover:scale-105 transition-all duration-300"
                    >
                      Explore Collections
                    </Link>

                    <a
                      href={generateGeneralWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/20 bg-white/10 backdrop-blur-md px-9 py-4 rounded-sm text-white flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaWhatsapp />
                      Chat with the Designer
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
