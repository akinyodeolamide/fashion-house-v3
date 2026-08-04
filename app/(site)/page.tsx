import HeroSection from '@/app/components/home/HeroSection'
import TrustStats from '@/app/components/home/TrustStats'
import FeaturedCollections from '@/app/components/home/FeaturedCollections'
import FeaturedDesigns from '@/app/components/home/FeaturedDesigns'
import ArchivePreview from '@/app/components/home/ArchivePreview'
import AboutPreview from '@/app/components/home/AboutPreview'
import TestimonialsSection from '@/app/components/home/TestimonialsSection'
import LatestCreationsPreview from '@/app/components/home/LatestCreationsPreview'
import { generateSiteMetadata } from '@/app/lib/seo'

export const metadata = generateSiteMetadata(
  'Premium Bespoke Fashion',
  'Premium Nigerian fashion house crafting bespoke Agbada, Kaftan, Senator Wear, English Wear & Streetwear. No checkout — connect via WhatsApp.'
)

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <FeaturedCollections />
      <FeaturedDesigns />
      <ArchivePreview />
      <AboutPreview />
      <TestimonialsSection />
      <LatestCreationsPreview />
    </>
  )
}
