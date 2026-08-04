'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { cn } from '@/app/lib/utils'

interface WhatsAppButtonProps {
  href: string
  label?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function WhatsAppButton({ href, label = 'Chat on WhatsApp', className, size = 'md' }: WhatsAppButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-sm',
        'bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors duration-300',
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <FaWhatsapp className="text-lg" />
      {label}
    </motion.a>
  )
}
