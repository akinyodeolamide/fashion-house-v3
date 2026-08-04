'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'perry-chase') {
      localStorage.setItem('admin_auth', 'perry-chase')
      router.push('/admin/')
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-full max-w-md p-8 bg-white rounded-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif text-primary">Perry Chase</h1>
          <p className="text-text/60 text-sm mt-1">Admin Access</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-sm text-center">
            Incorrect password
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-text mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false) }}
              className="w-full px-4 py-3 border border-secondary rounded-sm focus:outline-none focus:border-accent"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            Access Admin
          </button>
        </form>
      </div>
    </div>
  )
}
