import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, showPrice: boolean, startingFrom: boolean): string {
  if (!showPrice) return 'Price on request'
  const prefix = startingFrom ? 'Starting from ' : ''
  return `${prefix}₦${price.toLocaleString()}`
}

export function generateWhatsAppLink(phone: string, productName: string, category: string): string {
  const message = encodeURIComponent(
    `Hello.\n\nI'm interested in the ${productName} (${category}).\n\nI'd like to know more about it.`
  )
  return `https://wa.me/${phone.replace(/\+/g, '').replace(/\s/g, '')}?text=${message}`
}

export function generateSEOMeta(title: string, description: string, image?: string) {
  return {
    title: `${title} | Premium Bespoke Fashion`,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
    },
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
