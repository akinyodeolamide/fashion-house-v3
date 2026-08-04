import { Metadata } from 'next'
import { SiteSettings } from '@/app/types'
import cms from './cms'

export function generateSiteMetadata(
  pageTitle: string,
  pageDescription: string,
  image?: string
): Metadata {
  const settings: SiteSettings = cms.settings.get()

  return {
    title: `${pageTitle} | ${settings.brandName}`,
    description: pageDescription || settings.seoDescription,
    keywords: ['bespoke fashion', 'Nigerian fashion', 'luxury tailoring', 'agbada', 'kaftan', 'senator wear', 'custom outfits'],
    authors: [{ name: settings.brandName }],
    openGraph: {
      title: `${pageTitle} | ${settings.brandName}`,
      description: pageDescription || settings.seoDescription,
      type: 'website',
      locale: 'en_NG',
      siteName: settings.brandName,
      images: image ? [{ url: image, width: 1200, height: 630, alt: pageTitle }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} | ${settings.brandName}`,
      description: pageDescription || settings.seoDescription,
      images: image ? [image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: '/',
    },
  }
}

export function generateJsonLd(type: 'Organization' | 'LocalBusiness' | 'Product', data: Record<string, unknown>) {
  const settings = cms.settings.get()

  const base = {
    '@context': 'https://schema.org',
    '@type': type,
    name: settings.brandName,
    description: settings.description,
    url: 'https://your-domain.com',
    telephone: settings.phone,
    email: settings.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: settings.address,
      addressCountry: 'NG',
    },
    sameAs: [
      settings.instagram,
      settings.facebook,
      settings.tiktok,
    ].filter(Boolean),
  }

  return { ...base, ...data }
}
