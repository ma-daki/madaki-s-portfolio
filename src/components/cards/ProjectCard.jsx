import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function ProjectCard({ project, featured = false, className }) {
  const [hovered, setHovered] = useState(false)

  if (featured) {
    return (
      <motion.article
        className={cn(
          'relative border-3 border-black rounded-[6px] overflow-hidden bg-white shadow-brutal group',
          className
        )}
        whileHover={{ x: -3, y: -3, boxShadow: '14px 14px 0px #111111' }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        aria-label={`Featured project: ${project.title}`}
      >
        {/* Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden border-b-3 border-black">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          {/* Tag overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute inset-0 bg-black/80 flex items-center justify-center gap-3 flex-wrap p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border-2 border-yellow bg-yellow text-black font-heading text-sm font-bold rounded-[4px]"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Featured badge */}
          <div className="absolute top-3 left-3 bg-yellow border-2 border-black px-3 py-1 rounded-[4px] font-heading text-xs font-bold uppercase tracking-widest">
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-2xl font-bold mb-2 text-black">{project.title}</h3>
          <p className="font-body text-stone-500 text-sm leading-relaxed mb-4">{project.description}</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-brutal-primary text-sm"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-brutal-outline text-sm"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </motion.article>
    )
  }

  // Standard card
  return (
    <motion.article
      className={cn(
        'relative border-3 border-black rounded-[6px] overflow-hidden bg-white shadow-brutal-sm group flex flex-col',
        className
      )}
      whileHover={{ x: -2, y: -2, boxShadow: '10px 10px 0px #111111' }}
      transition={{ duration: 0.2 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      aria-label={`Project: ${project.title}`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden border-b-3 border-black">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 bg-black/75 flex items-center justify-center gap-2 flex-wrap p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 border border-yellow bg-yellow text-black font-mono text-xs font-bold rounded-[3px]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-heading text-base font-bold mb-1 text-black">{project.title}</h3>
        <p className="font-body text-stone-500 text-xs leading-relaxed mb-4 flex-1">{project.shortDesc}</p>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-heading text-xs font-bold text-black hover:text-yellow transition-colors group/link"
          aria-label={`View ${project.title}`}
        >
          View Project
          <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.article>
  )
}
