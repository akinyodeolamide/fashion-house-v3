import { formatPrice } from '@/app/lib/utils'
import { Product } from '@/app/types'

interface PriceDisplayProps {
  product: Product
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function PriceDisplay({ product, className = '', size = 'md' }: PriceDisplayProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl md:text-3xl',
  }

  return (
    <span className={`font-medium text-primary ${sizeClasses[size]} ${className}`}>
      {formatPrice(product.price, product.showPrice, product.startingFrom)}
    </span>
  )
}
