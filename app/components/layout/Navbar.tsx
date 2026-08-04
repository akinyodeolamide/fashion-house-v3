'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { cn } from '@/app/lib/utils'
import MobileMenu from './MobileMenu'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Collections', href: '/collections/' },
  { label: 'Archive', href: '/archive/' },
  { label: 'Creations', href: '/latest-creations/' },
  { label: 'Contact', href: '/contact/' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className={cn(
                'text-2xl md:text-3xl font-serif font-medium tracking-tight transition-colors duration-300',
                isScrolled ? 'text-primary' : 'text-white'
              )}>
                Òwe
              </span>
              <span className={cn(
                'ml-2 text-xs tracking-[0.3em] uppercase transition-colors duration-300',
                isScrolled ? 'text-text/60' : 'text-white/70'
              )}>
                Bespoke
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm tracking-wide uppercase transition-colors duration-300 relative group',
                    isScrolled
                      ? 'text-text/70 hover:text-primary'
                      : 'text-white/80 hover:text-white',
                    pathname === item.href && (isScrolled ? 'text-primary' : 'text-white')
                  )}
                >
                  {item.label}
                  <span className={cn(
                    'absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300',
                    isScrolled ? 'bg-primary' : 'bg-white',
                    pathname === item.href && 'w-full'
                  )} />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'md:hidden p-2 transition-colors',
                isScrolled ? 'text-primary' : 'text-white'
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu navItems={navItems} onClose={() => setIsMobileMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
