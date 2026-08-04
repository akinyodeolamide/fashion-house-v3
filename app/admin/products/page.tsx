'use client'

import { useState } from 'react'
import { FaEdit, FaTrash, FaPlus, FaEye, FaEyeSlash } from 'react-icons/fa'
import cms from '@/app/lib/cms'
import { Product } from '@/app/types'

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>(cms.products.getAll())
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const handleToggleFeatured = (id: string) => {
    setProducts(products.map((p) => p.id === id ? { ...p, featured: !p.featured } : p))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif text-text">Products</h2>
        <button
          onClick={() => { setEditingProduct(null); setShowForm(!showForm) }}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition-colors"
        >
          <FaPlus size={14} />
          Add Product
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-sm border border-secondary mb-8">
          <h3 className="font-medium text-text mb-4">{editingProduct ? 'Edit Product' : 'New Product'}</h3>
          <p className="text-sm text-text/60">Form implementation would go here. In production, this connects to your CMS backend.</p>
          <button onClick={() => setShowForm(false)} className="mt-4 text-sm text-text/60 hover:text-text">Cancel</button>
        </div>
      )}

      <div className="bg-white rounded-sm border border-secondary overflow-hidden">
        <table className="w-full">
          <thead className="bg-secondary/50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Product</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Category</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Price</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Featured</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-text/70">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-secondary">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-secondary overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${product.images[0]})` }} />
                    </div>
                    <span className="text-sm text-text">{product.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-text/70">{product.category}</td>
                <td className="px-6 py-4 text-sm text-text/70">
                  {product.showPrice ? `₦${product.price.toLocaleString()}` : 'Hidden'}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleToggleFeatured(product.id)}
                    className={`p-1 rounded-sm transition-colors ${product.featured ? 'text-accent' : 'text-text/30'}`}
                  >
                    {product.featured ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => { setEditingProduct(product); setShowForm(true) }}
                      className="p-2 text-text/60 hover:text-primary transition-colors"
                    >
                      <FaEdit size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-text/60 hover:text-red-500 transition-colors"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
