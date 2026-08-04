import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '@/app/components/ui/SectionHeader'
import WhatsAppButton from '@/app/components/ui/WhatsAppButton'
import SocialLinks from '@/app/components/ui/SocialLinks'
import cms from '@/app/lib/cms'
import { generateGeneralWhatsAppLink } from '@/app/lib/whatsapp'
import { generateSiteMetadata } from '@/app/lib/seo'

export const metadata = generateSiteMetadata(
  'Contact',
  'Get in touch with Òwe Bespoke. Visit our Lagos atelier or connect via WhatsApp, phone, or email.'
)

export default function ContactPage() {
  const settings = cms.settings.get()
  const whatsappLink = generateGeneralWhatsAppLink()

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="Begin your bespoke journey. Visit our atelier or reach out through any channel."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text mb-1">Visit Our Atelier</h3>
                <p className="text-text/70 text-sm">{settings.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(settings.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-primary hover:text-accent transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text mb-1">Phone</h3>
                <a href={`tel:${settings.phone}`} className="text-text/70 text-sm hover:text-primary transition-colors">{settings.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text mb-1">WhatsApp</h3>
                <p className="text-text/70 text-sm mb-3">Chat directly with the designer</p>
                <WhatsAppButton href={whatsappLink} label="Start WhatsApp Chat" size="sm" />
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text mb-1">Email</h3>
                <a href={`mailto:${settings.email}`} className="text-text/70 text-sm hover:text-primary transition-colors">{settings.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center flex-shrink-0">
                <FaClock className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text mb-1">Business Hours</h3>
                <p className="text-text/70 text-sm">{settings.businessHours}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-secondary">
              <h3 className="font-medium text-text mb-4">Follow Us</h3>
              <SocialLinks settings={settings} iconSize={22} />
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-sm overflow-hidden bg-secondary">
            <iframe
              src={settings.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Studio Location"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
