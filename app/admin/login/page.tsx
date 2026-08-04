'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'admin@owebespoke.com' && password === 'admin123') {
      localStorage.setItem('admin_token', 'demo-token')
      router.push('/admin/')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-full max-w-md p-8 bg-white rounded-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif text-primary">Òwe Bespoke</h1>
          <p className="text-text/60 text-sm mt-1">Admin Panel</p>
        </div>

        {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-text mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-secondary rounded-sm focus:outline-none focus:border-accent"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-text mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-secondary rounded-sm focus:outline-none focus:border-accent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-xs text-text/40 text-center">
          Protected area. Authorized personnel only.
        </p>
      </div>
    </div>
  )
}
