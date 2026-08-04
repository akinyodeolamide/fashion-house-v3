'use client'

import { motion, HTMLMotionProps } from 'framer-motion'

export default function AnimatedDiv(props: HTMLMotionProps<'div'>) {
  return <motion.div {...props} />
}
