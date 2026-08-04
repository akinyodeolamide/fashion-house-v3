'use client'

import { FaBell, FaUser } from 'react-icons/fa'

export default function AdminHeader() {
  return (
    <header className="h-16 bg-white border-b border-secondary flex items-center justify-between px-8">
      <h1 className="text-lg font-medium text-text">Admin Panel</h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-text/60 hover:text-primary transition-colors">
          <FaBell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
        </button>
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <FaUser className="text-white text-sm" />
        </div>
      </div>
    </header>
  )
}
