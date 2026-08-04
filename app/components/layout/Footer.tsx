import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import cms from '@/app/lib/cms'
import SocialLinks from '@/app/components/ui/SocialLinks'

export default function Footer() {
  const settings = cms.settings.get()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-medium mb-4">Òwe Bespoke</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              {settings.description}
            </p>
            <SocialLinks settings={settings} light iconSize={18} />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Explore</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about/' },
                { label: 'Collections', href: '/collections/' },
                { label: 'Fashion Archive', href: '/archive/' },
                { label: 'Latest Creations', href: '/latest-creations/' },
                { label: 'Contact', href: '/contact/' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Collections</h4>
            <nav className="flex flex-col gap-3">
              {cms.categories.getAll().map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/collections/${cat.slug}/`}
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-accent mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" size={14} />
                <span className="text-white/70 text-sm">{settings.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-accent flex-shrink-0" size={14} />
                <a href={`tel:${settings.phone}`} className="text-white/70 hover:text-accent transition-colors text-sm">
                  {settings.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent flex-shrink-0" size={14} />
                <a href={`mailto:${settings.email}`} className="text-white/70 hover:text-accent transition-colors text-sm">
                  {settings.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className="text-accent mt-1 flex-shrink-0" size={14} />
                <span className="text-white/70 text-sm">{settings.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Òwe Bespoke. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Crafted with precision in Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
