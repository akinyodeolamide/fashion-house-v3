'use client'

import { useState } from 'react'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import cms from '@/app/lib/cms'
import { Category } from '@/app/types'

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>(cms.categories.getAll())

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter((c) => c.id !== id))
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif text-text">Categories</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition-colors">
          <FaPlus size={14} />
          Add Category
        </button>
      </div>

      <div className="bg-white rounded-sm border border-secondary overflow-hidden">
        <table className="w-full">
          <thead className="bg-secondary/50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Slug</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Products</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-text/70">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t border-secondary">
                <td className="px-6 py-4 text-sm text-text">{category.name}</td>
                <td className="px-6 py-4 text-sm text-text/70">{category.slug}</td>
                <td className="px-6 py-4 text-sm text-text/70">{category.productCount}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-text/60 hover:text-primary transition-colors">
                      <FaEdit size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
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
