import SectionHeader from '@/app/components/ui/SectionHeader'
import AnimatedArticle from '@/app/components/ui/AnimatedArticle'
import cms from '@/app/lib/cms'
import { generateSiteMetadata } from '@/app/lib/seo'
import { FaCalendar } from 'react-icons/fa'
import Link from 'next/link'

export const metadata = generateSiteMetadata(
  'Latest Creations',
  'Behind the scenes, new releases, and glimpses into our creative process at Òwe Bespoke.'
)

export default function LatestCreationsPage() {
  const posts = cms.posts.getAll()

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Latest Creations"
          subtitle="Behind the scenes, new releases, and glimpses into our creative process"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {posts.map((post, index) => (
            <AnimatedArticle
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/latest-creations/${post.slug}/`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.images[0]})` }}
                  />
                </div>
              </Link>
              <div className="flex items-center gap-2 text-text/50 text-sm mb-2">
                <FaCalendar size={12} />
                <time>{new Date(post.date).toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
              <h3 className="font-serif text-xl text-text group-hover:text-primary transition-colors mb-2">
                <Link href={`/latest-creations/${post.slug}/`}>{post.title}</Link>
              </h3>
              <p className="text-text/70 text-sm line-clamp-3">{post.caption}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-secondary text-text/60 text-xs rounded-sm">#{tag}</span>
                ))}
              </div>
            </AnimatedArticle>
          ))}
        </div>
      </div>
    </div>
  )
}