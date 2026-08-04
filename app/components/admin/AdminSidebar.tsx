'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaTachometerAlt, FaBox, FaTags, FaNewspaper, FaCog, FaSignOutAlt } from 'react-icons/fa'
import { cn } from '@/app/lib/utils'

const navItems = [
  { label: 'Dashboard', href: '/admin/', icon: FaTachometerAlt },
  { label: 'Products', href: '/admin/products/', icon: FaBox },
  { label: 'Categories', href: '/admin/categories/', icon: FaTags },
  { label: 'Posts', href: '/admin/posts/', icon: FaNewspaper },
  { label: 'Settings', href: '/admin/settings/', icon: FaCog },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    window.location.href = '/admin/login/'
  }

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-primary text-white z-50 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <span className="text-xl font-serif">Òwe Admin</span>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-sm transition-colors',
              pathname === item.href ? 'bg-accent text-primary' : 'text-white/70 hover:bg-white/10 hover:text-white'
            )}
          >
            <item.icon size={16} />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white transition-colors w-full"
        >
          <FaSignOutAlt size={16} />
          Logout
        </button>
      </div>
    </aside>
  )
}
