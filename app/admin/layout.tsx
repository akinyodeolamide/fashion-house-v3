'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/app/components/admin/AdminSidebar'
import AdminHeader from '@/app/components/admin/AdminHeader'
import LoadingSpinner from '@/app/components/ui/LoadingSpinner'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const auth = localStorage.getItem('admin_auth')
    if (auth !== 'perry-chase') {
      router.replace('/admin/login/')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  // Don't render anything until after browser mount (prevents SSR crash)
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <LoadingSpinner />
      </div>
    )
  }

  if (!isAuthenticated) return null

  return (
    <div className="min-h-screen bg-secondary flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <AdminHeader />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  )
}