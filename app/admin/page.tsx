'use client'

import { useEffect } from 'react'
import { FaBox, FaTags, FaNewspaper, FaEye, FaDownload } from 'react-icons/fa'
import cms, { initCMSData } from '@/app/lib/cms'

export default function AdminDashboard() {
  useEffect(() => {
    initCMSData()
  }, [])

  const stats = [
    { label: 'Total Products', value: cms.products.getAll().length, icon: FaBox },
    { label: 'Categories', value: cms.categories.getAll().length, icon: FaTags },
    { label: 'Posts', value: cms.posts.getAll().length, icon: FaNewspaper },
    { label: 'Featured Products', value: cms.products.getFeatured().length, icon: FaEye },
  ]

  const handleExport = () => {
    const data = {
      products: cms.products.getAll(),
      categories: cms.categories.getAll(),
      posts: cms.posts.getAll(),
      testimonials: cms.testimonials.getAll(),
      archive: cms.archive.getAll(),
      settings: cms.settings.get(),
      stats: cms.stats.getAll(),
    }

    Object.entries(data).forEach(([key, value]) => {
      const blob = new Blob([JSON.stringify({ [key]: value }, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${key}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif text-text">Dashboard</h2>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded-sm hover:bg-accent/90 transition-colors"
        >
          <FaDownload size={14} />
          Export All Data
        </button>
      </div>

      <p className="text-sm text-text/60 mb-6">
        Changes you make in the admin panel are saved to your browser. Click &quot;Export All Data&quot; to download updated JSON files, then upload them to your GitHub repo to make them permanent.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-sm border border-secondary">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="text-primary" size={24} />
              <span className="text-3xl font-serif text-text">{stat.value}</span>
            </div>
            <p className="text-sm text-text/60">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-sm border border-secondary">
          <h3 className="font-medium text-text mb-4">Recent Products</h3>
          <div className="space-y-3">
            {cms.products.getAll().slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center justify-between py-2 border-b border-secondary last:border-0">
                <span className="text-sm text-text">{product.name}</span>
                <span className="text-xs text-text/50">{product.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-sm border border-secondary">
          <h3 className="font-medium text-text mb-4">Recent Posts</h3>
          <div className="space-y-3">
            {cms.posts.getAll().slice(0, 5).map((post) => (
              <div key={post.id} className="flex items-center justify-between py-2 border-b border-secondary last:border-0">
                <span className="text-sm text-text">{post.title}</span>
                <span className="text-xs text-text/50">{new Date(post.date).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}