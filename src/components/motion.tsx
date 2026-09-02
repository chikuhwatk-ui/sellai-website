/**
 * Motion helpers. One easing, one duration scale, reduced-motion aware.
 * Sections reveal once on scroll; the hero reveals on load. Nothing loops
 * except the product demos inside the phone frames.
 */
import type { ReactNode } from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'

import { EASE } from './ease'

export function Reveal({ children, delay = 0, y = 24, className = '', once = true }: { children: ReactNode; delay?: number; y?: number; className?: string; once?: boolean }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/** Staggers direct children. Wrap each child in <StaggerItem>. */
export function Stagger({ children, className = '', onLoad = false }: { children: ReactNode; className?: string; onLoad?: boolean }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      {...(onLoad ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, margin: '0px 0px -60px 0px' } })}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return <motion.div className={className} variants={item}>{children}</motion.div>
}

