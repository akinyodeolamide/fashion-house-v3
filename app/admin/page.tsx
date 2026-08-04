'use client'

import { FaBox, FaTags, FaNewspaper, FaEye } from 'react-icons/fa'
import cms from '@/app/lib/cms'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Products', value: cms.products.getAll().length, icon: FaBox },
    { label: 'Categories', value: cms.categories.getAll().length, icon: FaTags },
    { label: 'Posts', value: cms.posts.getAll().length, icon: FaNewspaper },
    { label: 'Featured Products', value: cms.products.getFeatured().length, icon: FaEye },
  ]

  return (
    <div>
      <h2 className="text-2xl font-serif text-text mb-8">Dashboard</h2>
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
