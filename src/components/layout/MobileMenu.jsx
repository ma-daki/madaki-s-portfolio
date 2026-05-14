import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react'
import { profile, socials } from '@/data/portfolio'

const iconMap = { Github, Linkedin, Twitter, Instagram, MessageCircle }

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit:   { opacity: 0 },
}
const itemVariants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { ease: [0.21, 0.47, 0.32, 0.98] } },
  exit:    { opacity: 0, x: -30 },
}

export default function MobileMenu({ isOpen, onClose, links, onLinkClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black flex flex-col"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          aria-modal="true"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span className="font-heading text-xl font-black tracking-[0.15em] text-white">
              {profile.shortName}<span className="text-yellow">.</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 border-2 border-white/20 rounded-[6px] text-white hover:border-yellow hover:text-yellow transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <motion.nav
            className="flex-1 flex flex-col justify-center px-6 gap-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map((link, i) => (
              <motion.div key={link.href} variants={itemVariants}>
                <button
                  onClick={() => onLinkClick(link.href)}
                  className="w-full text-left font-heading text-4xl font-black text-white hover:text-yellow transition-colors py-2 border-b border-white/10"
                >
                  <span className="text-yellow/40 font-mono text-sm mr-3">0{i + 1}</span>
                  {link.label}
                </button>
              </motion.div>
            ))}
          </motion.nav>

          {/* Footer row */}
          <motion.div
            className="px-6 pb-8 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <span className="font-body text-xs text-white/60">{profile.availability}</span>
            </div>
            <div className="flex gap-4">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                return Icon ? (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/50 hover:text-yellow transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ) : null
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
