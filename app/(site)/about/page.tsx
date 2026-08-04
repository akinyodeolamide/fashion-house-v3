import SectionHeader from '@/app/components/ui/SectionHeader'
import AnimatedDiv from '@/app/components/ui/AnimatedDiv'
import cms from '@/app/lib/cms'
import { generateSiteMetadata } from '@/app/lib/seo'

export const metadata = generateSiteMetadata(
  'About Us',
  'The story behind Òwe Bespoke — fifteen years of Nigerian luxury fashion craftsmanship.'
)

export default function AboutPage() {
  const settings = cms.settings.get()
  const stats = cms.stats.getAll()

  return (
    <div className="pt-24 md:pt-32">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/about-hero.jpg')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Our Story</h1>
          <p className="text-white/70 max-w-xl mx-auto">{settings.description}</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <AnimatedDiv initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-accent text-sm tracking-[0.3em] uppercase">Mission</span>
              <h2 className="text-2xl md:text-3xl font-serif text-text mt-4 mb-6">Preserving Heritage Through Modern Elegance</h2>
              <p className="text-text/70 leading-relaxed">
                To create exceptional bespoke fashion that honors Nigerian cultural heritage while embracing contemporary design. Every stitch is a bridge between tradition and innovation.
              </p>
            </AnimatedDiv>
            <AnimatedDiv initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="text-accent text-sm tracking-[0.3em] uppercase">Vision</span>
              <h2 className="text-2xl md:text-3xl font-serif text-text mt-4 mb-6">The Global Standard for African Luxury</h2>
              <p className="text-text/70 leading-relaxed">
                To establish Nigerian bespoke tailoring as a globally recognized symbol of luxury, craftsmanship, and cultural pride — worn by discerning gentlemen worldwide.
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Craftsmanship" subtitle="What sets Òwe Bespoke apart" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Premium Fabrics', desc: 'We source only the finest materials — Swiss cotton, Italian wool, handwoven Aso-Oke, and silk blends from trusted suppliers.' },
              { title: 'Hand Finishing', desc: 'Every piece receives meticulous hand-finishing, from embroidery to button attachment. Machines assist; hands perfect.' },
              { title: 'Precision Fitting', desc: 'Multiple fitting sessions ensure your garment drapes exactly as intended. Comfort and silhouette are never compromised.' },
            ].map((item, i) => (
              <AnimatedDiv key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-sm">
                <h3 className="font-serif text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-text/70 text-sm leading-relaxed">{item.desc}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-serif text-accent">{stat.value}{stat.suffix}</div>
                <div className="mt-2 text-sm text-white/70 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Why Gentlemen Choose Òwe" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {[
              'Bespoke tailoring with personal consultations',
              'Premium imported and local fabrics',
              'Hand-finished embroidery and detailing',
              'Timely delivery with fitting guarantees',
              'Discreet, professional service',
              'Legacy pieces that last generations',
            ].map((item, i) => (
              <AnimatedDiv key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-6 bg-secondary rounded-sm">
                <span className="w-8 h-8 flex items-center justify-center bg-accent text-primary rounded-full text-sm font-medium">{i + 1}</span>
                <span className="text-text font-medium">{item}</span>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
