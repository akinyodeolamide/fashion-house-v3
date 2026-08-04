'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/app/components/ui/SectionHeader'
import AnimatedCounter from '@/app/components/ui/AnimatedCounter'
import cms from '@/app/lib/cms'

export default function TrustStats() {
  const stats = cms.stats.getAll()

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Built on Trust & Excellence"
          subtitle="Numbers that reflect our commitment to craftsmanship and client satisfaction"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16"
        >
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
