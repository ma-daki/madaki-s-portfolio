import { motion } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

export default function StatsCard({ label, value, suffix = '', className = '' }) {
  const { count, ref } = useCountUp(value)

  return (
    <div
      ref={ref}
      className={`brutal-card-yellow p-4 flex flex-col justify-between min-h-[100px] ${className}`}
      role="figure"
      aria-label={`${label}: ${value}${suffix}`}
    >
      <motion.span
        className="font-heading text-4xl font-black text-black leading-none"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {count}{suffix}
      </motion.span>
      <span className="font-body text-xs font-semibold text-black/70 uppercase tracking-widest mt-2">
        {label}
      </span>
    </div>
  )
}
