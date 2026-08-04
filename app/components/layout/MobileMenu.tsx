'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { NavItem } from '@/app/types'

interface MobileMenuProps {
  navItems: NavItem[]
  onClose: () => void
}

export default function MobileMenu({ navItems, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 md:hidden"
    >
      <div className="absolute inset-0 bg-primary/95 backdrop-blur-lg" onClick={onClose} />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-primary p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white"
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>

        <nav className="mt-20 flex flex-col gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="text-2xl font-serif text-white/90 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="absolute bottom-8 left-8 right-8">
          <p className="text-white/50 text-sm">Premium Bespoke Fashion</p>
          <p className="text-white/30 text-xs mt-1">Lagos, Nigeria</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
