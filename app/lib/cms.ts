import { Product, Category, Post, Testimonial, ArchiveItem, SiteSettings, TrustStat } from '@/app/types'
import productsData from '@/app/data/products.json'
import categoriesData from '@/app/data/categories.json'
import postsData from '@/app/data/posts.json'
import testimonialsData from '@/app/data/testimonials.json'
import archiveData from '@/app/data/archive.json'
import settingsData from '@/app/data/settings.json'
import statsData from '@/app/data/stats.json'

// Type-safe data access layer
// In production, this would connect to Decap CMS, Sanity, or a headless CMS

export const cms = {
  products: {
    getAll: (): Product[] => productsData.products,
    getById: (id: string): Product | undefined => 
      productsData.products.find(p => p.id === id),
    getBySlug: (slug: string): Product | undefined =>
      productsData.products.find(p => p.slug === slug),
    getByCategory: (categorySlug: string): Product[] =>
      productsData.products.filter(p => p.categorySlug === categorySlug),
    getFeatured: (): Product[] =>
      productsData.products.filter(p => p.featured),
    search: (query: string): Product[] => {
      const q = query.toLowerCase()
      return productsData.products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    },
  },

  categories: {
    getAll: (): Category[] => categoriesData.categories,
    getBySlug: (slug: string): Category | undefined =>
      categoriesData.categories.find(c => c.slug === slug),
  },

  posts: {
    getAll: (): Post[] => postsData.posts,
    getFeatured: (): Post[] => postsData.posts.filter(p => p.featured).slice(0, 4),
    getById: (id: string): Post | undefined =>
      postsData.posts.find(p => p.id === id),
    search: (query: string): Post[] => {
      const q = query.toLowerCase()
      return postsData.posts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.caption.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      )
    },
  },

  testimonials: {
    getAll: (): Testimonial[] => testimonialsData.testimonials,
  },

  archive: {
    getAll: (): ArchiveItem[] => archiveData.archive,
    getByCategory: (category: string): ArchiveItem[] =>
      archiveData.archive.filter(a => a.category === category),
    getFeatured: (): ArchiveItem[] => archiveData.archive.slice(0, 6),
  },

  settings: {
    get: (): SiteSettings => settingsData.settings,
  },

  stats: {
    getAll: (): TrustStat[] => statsData.stats,
  },
}

export default cms
