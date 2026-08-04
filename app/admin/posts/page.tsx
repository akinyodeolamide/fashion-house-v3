'use client'

import { useState } from 'react'
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
import cms from '@/app/lib/cms'
import { Post } from '@/app/types'

export default function AdminPosts() {
  const [posts, setPosts] = useState<Post[]>(cms.posts.getAll())

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter((p) => p.id !== id))
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-serif text-text">Latest Creations</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition-colors">
          <FaPlus size={14} />
          New Post
        </button>
      </div>

      <div className="bg-white rounded-sm border border-secondary overflow-hidden">
        <table className="w-full">
          <thead className="bg-secondary/50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Title</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Date</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-text/70">Featured</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-text/70">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-secondary">
                <td className="px-6 py-4 text-sm text-text">{post.title}</td>
                <td className="px-6 py-4 text-sm text-text/70">{new Date(post.date).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-sm text-text/70">{post.featured ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-text/60 hover:text-primary transition-colors">
                      <FaEdit size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
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
