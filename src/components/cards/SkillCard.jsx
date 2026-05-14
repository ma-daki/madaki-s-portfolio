import { motion } from 'framer-motion'

export default function SkillCard({ name, icon, color, emoji }) {
  return (
    <motion.div
      className="skill-badge"
      whileHover={{ scale: 1.03, backgroundColor: '#FACC15' }}
      transition={{ duration: 0.15 }}
      aria-label={name}
    >
      {icon ? (
        <img src={icon} alt={`${name} logo`} className="w-5 h-5 object-contain" />
      ) : emoji ? (
        <span className="text-base leading-none">{emoji}</span>
      ) : (
        <span
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ backgroundColor: color }}
        />
      )}
      <span className="font-heading text-sm font-bold">{name}</span>
    </motion.div>
  )
}
