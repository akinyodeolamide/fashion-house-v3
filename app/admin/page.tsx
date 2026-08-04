'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/cms/')
  }, [router])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <p className="text-text/60">Redirecting to CMS...</p>
    </div>
  )
}