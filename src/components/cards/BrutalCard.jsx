import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const variantStyles = {
  white:  'bg-white border-black',
  yellow: 'bg-yellow border-black',
  black:  'bg-black border-black text-white',
  muted:  'bg-stone-100 border-black',
  bg:     'bg-bg border-black',
}

const shadowStyles = {
  default: 'shadow-brutal',
  sm:      'shadow-brutal-sm',
  lg:      'shadow-brutal-lg',
  yellow:  'shadow-brutal-yellow',
  none:    '',
}

export default function BrutalCard({
  children,
  variant = 'white',
  shadow = 'default',
  className,
  hover = true,
  onClick,
  as: Tag = 'div',
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={
        hover
          ? { x: -2, y: -2, boxShadow: '12px 12px 0px #111111' }
          : undefined
      }
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={cn(
        'border-3 rounded-[6px] overflow-hidden',
        variantStyles[variant],
        shadowStyles[shadow],
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
