import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  enter: { opacity: 0, y: 20, filter: 'blur(4px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -20, filter: 'blur(4px)' },
}

export default function AnimatedText({ texts, interval = 3000, className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <span className={`relative inline-block overflow-hidden ${className}`} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          className="inline-block"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
