import { notFound } from 'next/navigation'
import SectionHeader from '@/app/components/ui/SectionHeader'
import CollectionGrid from '@/app/components/collections/CollectionGrid'
import cms from '@/app/lib/cms'
import { generateSiteMetadata } from '@/app/lib/seo'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return cms.categories.getAll().map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props) {
  const category = cms.categories.getBySlug(params.slug)
  if (!category) return { title: 'Not Found' }
  return generateSiteMetadata(category.name, category.description, category.image)
}

export default function CategoryPage({ params }: Props) {
  const category = cms.categories.getBySlug(params.slug)
  if (!category) return notFound()

  const products = cms.products.getByCategory(params.slug)

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={category.name} subtitle={category.description} />
        <CollectionGrid products={products} />
      </div>
    </div>
  )
}
