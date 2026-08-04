import SectionHeader from '@/app/components/ui/SectionHeader'
import CollectionCard from '@/app/components/collections/CollectionCard'
import cms from '@/app/lib/cms'
import { generateSiteMetadata } from '@/app/lib/seo'

export const metadata = generateSiteMetadata(
  'Collections',
  'Explore our curated collections — Agbada, Kaftan, Senator Wear, Native Wear, English Wear & Streetwear.'
)

export default function CollectionsPage() {
  const categories = cms.categories.getAll()

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Collections"
          subtitle="Each collection represents a distinct expression of Nigerian fashion heritage"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {categories.map((category, index) => (
            <CollectionCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
