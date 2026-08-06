import { Product, Category, Post, Testimonial, ArchiveItem, SiteSettings, TrustStat } from '@/app/types'
import defaultProducts from '@/app/data/products.json'
import defaultCategories from '@/app/data/categories.json'
import defaultPosts from '@/app/data/posts.json'
import defaultTestimonials from '@/app/data/testimonials.json'
import defaultArchive from '@/app/data/archive.json'
import defaultSettings from '@/app/data/settings.json'
import defaultStats from '@/app/data/stats.json'

// Only use localStorage in admin panel. Public site always reads fresh JSON.
function isAdmin(): boolean {
  if (typeof window === 'undefined') return false
  return window.location.pathname.startsWith('/admin')
}

function getStoredData<T>(key: string, fallback: T): T {
  if (!isAdmin()) return fallback
  try {
    const stored = localStorage.getItem(`cms_${key}`)
    if (stored) return JSON.parse(stored)
  } catch {
    // ignore parse errors
  }
  return fallback
}

function setStoredData<T>(key: string, data: T): void {
  if (!isAdmin()) return
  localStorage.setItem(`cms_${key}`, JSON.stringify(data))
}

export function initCMSData(): void {
  if (!isAdmin()) return
  const keys = ['products', 'categories', 'posts', 'testimonials', 'archive', 'settings', 'stats']
  keys.forEach((key) => {
    if (!localStorage.getItem(`cms_${key}`)) {
      const defaults: Record<string, unknown> = {
        products: defaultProducts,
        categories: defaultCategories,
        posts: defaultPosts,
        testimonials: defaultTestimonials,
        archive: defaultArchive,
        settings: defaultSettings,
        stats: defaultStats,
      }
      localStorage.setItem(`cms_${key}`, JSON.stringify(defaults[key]))
    }
  })
}

export const cms = {
  products: {
    getAll: (): Product[] =>
      (getStoredData('products', defaultProducts).products || []).map((p: any) => ({
        ...p,
        images: p.images ?? [],
        videos: p.videos ?? [],
      })),
    setAll: (products: Product[]) => setStoredData('products', { products }),
    getById: (id: string): Product | undefined =>
      cms.products.getAll().find((p: Product) => p.id === id),
    getBySlug: (slug: string): Product | undefined =>
      cms.products.getAll().find((p: Product) => p.slug === slug),
    getByCategory: (categorySlug: string): Product[] =>
      cms.products.getAll().filter((p: Product) => p.categorySlug === categorySlug),
    getFeatured: (): Product[] =>
      cms.products.getAll().filter((p: Product) => p.featured),
    search: (query: string): Product[] => {
      const q = query.toLowerCase()
      return cms.products.getAll().filter((p: Product) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    },
  },

  categories: {
    getAll: (): Category[] =>
      (getStoredData('categories', defaultCategories).categories || []).map((c: any) => ({
        ...c,
        image: c.image || '',
      })),
    setAll: (categories: Category[]) => setStoredData('categories', { categories }),
    getBySlug: (slug: string): Category | undefined =>
      cms.categories.getAll().find((c: Category) => c.slug === slug),
  },

  posts: {
    getAll: (): Post[] =>
      (getStoredData('posts', defaultPosts).posts || []).map((p: any) => ({
        ...p,
        images: p.images ?? [],
        videos: p.videos ?? [],
        tags: p.tags ?? [],
      })),
    setAll: (posts: Post[]) => setStoredData('posts', { posts }),
    getFeatured: (): Post[] => cms.posts.getAll().filter((p: Post) => p.featured).slice(0, 4),
    getById: (id: string): Post | undefined =>
      cms.posts.getAll().find((p: Post) => p.id === id),
    search: (query: string): Post[] => {
      const q = query.toLowerCase()
      return cms.posts.getAll().filter((p: Post) =>
        p.title.toLowerCase().includes(q) ||
        p.caption.toLowerCase().includes(q) ||
        p.tags.some((t: string) => t.toLowerCase().includes(q))
      )
    },
  },

  testimonials: {
    getAll: (): Testimonial[] =>
      (getStoredData('testimonials', defaultTestimonials).testimonials || []).map((t: any) => ({
        ...t,
        image: t.image || '',
      })),
    setAll: (testimonials: Testimonial[]) => setStoredData('testimonials', { testimonials }),
  },

  archive: {
    getAll: (): ArchiveItem[] =>
      ((getStoredData('archive', defaultArchive).archive as ArchiveItem[]) || []).map((a: any) => ({
        ...a,
        images: a.images ?? [],
        tags: a.tags ?? [],
      })),
    setAll: (archive: ArchiveItem[]) => setStoredData('archive', { archive }),
    getByCategory: (category: string): ArchiveItem[] =>
      cms.archive.getAll().filter((a: ArchiveItem) => a.category === category),
    getFeatured: (): ArchiveItem[] => cms.archive.getAll().slice(0, 6),
  },

  settings: {
    get: (): SiteSettings => getStoredData('settings', defaultSettings).settings || ({} as SiteSettings),
    set: (settings: SiteSettings) => setStoredData('settings', { settings }),
  },

  stats: {
    getAll: (): TrustStat[] => (getStoredData('stats', defaultStats).stats || []),
    setAll: (stats: TrustStat[]) => setStoredData('stats', { stats }),
  },
}

export default cms