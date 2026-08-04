import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Òwe Bespoke | Premium Nigerian Fashion House',
  description: 'Discover bespoke Nigerian fashion. Custom Agbada, Kaftan, Senator Wear, English Wear & Streetwear. Crafted with precision in Lagos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
