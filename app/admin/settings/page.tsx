'use client'

import { useState } from 'react'
import cms from '@/app/lib/cms'
import { SiteSettings } from '@/app/types'

export default function AdminSettings() {
  const [settings, setSettings] = useState<SiteSettings>(cms.settings.get())

  const handleChange = (field: keyof SiteSettings, value: string) => {
    setSettings({ ...settings, [field]: value })
  }

  const handleSave = () => {
    alert('Settings saved! (In production, this persists to your CMS)')
  }

  const fields: { key: keyof SiteSettings; label: string; type: string }[] = [
    { key: 'brandName', label: 'Brand Name', type: 'text' },
    { key: 'tagline', label: 'Tagline', type: 'text' },
    { key: 'phone', label: 'Phone', type: 'text' },
    { key: 'whatsapp', label: 'WhatsApp', type: 'text' },
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'address', label: 'Address', type: 'text' },
    { key: 'businessHours', label: 'Business Hours', type: 'text' },
    { key: 'instagram', label: 'Instagram URL', type: 'url' },
    { key: 'facebook', label: 'Facebook URL', type: 'url' },
    { key: 'tiktok', label: 'TikTok URL', type: 'url' },
    { key: 'heroHeadline', label: 'Hero Headline', type: 'text' },
    { key: 'seoTitle', label: 'SEO Title', type: 'text' },
    { key: 'seoDescription', label: 'SEO Description', type: 'text' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-serif text-text mb-8">Site Settings</h2>

      <div className="bg-white p-8 rounded-sm border border-secondary max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.key} className={field.key === 'heroHeadline' || field.key === 'seoDescription' ? 'md:col-span-2' : ''}>
              <label className="block text-sm text-text mb-1">{field.label}</label>
              <input
                type={field.type}
                value={settings[field.key] || ''}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="w-full px-4 py-3 border border-secondary rounded-sm focus:outline-none focus:border-accent text-sm"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-secondary">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
