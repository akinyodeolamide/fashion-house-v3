import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { SiteSettings } from '@/app/types'

interface SocialLinksProps {
  settings: SiteSettings
  className?: string
  iconSize?: number
  light?: boolean
}

export default function SocialLinks({ settings, className = '', iconSize = 20, light = false }: SocialLinksProps) {
  const colorClass = light ? 'text-white/70 hover:text-accent' : 'text-text/60 hover:text-primary'

  const links = [
    { href: settings.instagram, icon: FaInstagram, label: 'Instagram' },
    { href: settings.tiktok, icon: FaTiktok, label: 'TikTok' },
    { href: settings.facebook, icon: FaFacebook, label: 'Facebook' },
    { href: `https://wa.me/${settings.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`, icon: FaWhatsapp, label: 'WhatsApp' },
  ].filter(link => link.href)

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`${colorClass} transition-colors duration-300`}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  )
}
