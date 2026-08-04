'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/app/components/admin/AdminSidebar'
import AdminHeader from '@/app/components/admin/AdminHeader'
import LoadingSpinner from '@/app/components/ui/LoadingSpinner'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('admin_token')
      if (!token) {
        router.push('/admin/login/')
      } else {
        setIsAuthenticated(true)
      }
      setIsLoading(false)
    }
    checkAuth()
  }, [router])

  if (isLoading) {
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
