import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  none:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  as: Tag = 'div',
}) {
  const variants = directionVariants[direction] || directionVariants.up

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  )
}
