import { Product } from '@/app/types'
import cms from './cms'

export function getWhatsAppCTA(category: string): string {
  const ctas: Record<string, string> = {
    'Streetwear': 'Order via WhatsApp',
    'Native Wear': 'Request This Outfit',
    'English Wear': 'Message the Designer',
    'Agbada': 'Request This Outfit',
    'Kaftan': 'Request This Outfit',
    'Senator Wear': 'Request This Outfit',
  }
  return ctas[category] || 'Chat with the Designer'
}

export function generateProductWhatsAppLink(product: Product): string {
  const settings = cms.settings.get()
  const phone = settings.whatsapp.replace(/\+/g, '').replace(/\s/g, '')
  const cta = getWhatsAppCTA(product.category)

  let message = `Hello.\n\nI'm interested in the ${product.name}`

  if (product.showPrice && !product.startingFrom) {
    message += ` (₦${product.price.toLocaleString()})`
  }

  message += `.\n\nCategory: ${product.category}\n\nI'd like to know more about it.`

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function generateGeneralWhatsAppLink(message?: string): string {
  const settings = cms.settings.get()
  const phone = settings.whatsapp.replace(/\+/g, '').replace(/\s/g, '')
  const defaultMessage = message || `Hello.\n\nI'm interested in your bespoke fashion services. I'd like to know more.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`
}
