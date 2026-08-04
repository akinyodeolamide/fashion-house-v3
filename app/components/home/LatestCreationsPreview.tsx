'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCalendar } from 'react-icons/fa'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Button from '@/app/components/ui/Button'
import cms from '@/app/lib/cms'

export default function LatestCreationsPreview() {
  const posts = cms.posts.getFeatured()

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Latest Creations"
          subtitle="Behind the scenes, new releases, and glimpses into our creative process"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/latest-creations/${post.slug}/`}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-secondary mb-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.images[0]})` }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                </div>
              </Link>

              <div className="flex items-center gap-2 text-text/50 text-sm mb-2">
                <FaCalendar size={12} />
                <time>{new Date(post.date).toLocaleDateString('en-NG', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>

              <h3 className="font-serif text-xl text-text group-hover:text-primary transition-colors mb-2">
                <Link href={`/latest-creations/${post.slug}/`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-text/70 text-sm line-clamp-2 mb-3">{post.caption}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-secondary text-text/60 text-xs rounded-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/latest-creations/" variant="outline">
            View All Creations
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
