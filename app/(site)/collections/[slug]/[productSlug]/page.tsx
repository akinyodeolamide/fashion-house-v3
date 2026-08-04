import { notFound } from 'next/navigation'
import ProductDetail from '@/app/components/collections/ProductDetail'
import cms from '@/app/lib/cms'
import { generateSiteMetadata } from '@/app/lib/seo'

interface Props {
  params: { slug: string; productSlug: string }
}

export function generateStaticParams() {
  const products = cms.products.getAll()
  return products.map((p) => ({
    slug: p.categorySlug,
    productSlug: p.slug,
  }))
}

export function generateMetadata({ params }: Props) {
  const product = cms.products.getBySlug(params.productSlug)
  if (!product) return { title: 'Not Found' }
  return generateSiteMetadata(product.name, product.shortDescription, product.images[0])
}

export default function ProductPage({ params }: Props) {
  const product = cms.products.getBySlug(params.productSlug)
  if (!product) return notFound()

  return <ProductDetail product={product} />
}
