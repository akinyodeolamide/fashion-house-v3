'use client'

import { motion, HTMLMotionProps } from 'framer-motion'

export default function AnimatedArticle(props: HTMLMotionProps<'article'>) {
  return <motion.article {...props} />
}