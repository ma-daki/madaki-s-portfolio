import { Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react'
import { profile, socials } from '@/data/portfolio'

const iconMap = { Github, Linkedin, Twitter, Instagram, MessageCircle }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-3 border-black bg-black text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-black tracking-widest">
              {profile.shortName}<span className="text-yellow">.</span>
            </p>
            <p className="font-body text-xs text-white/40 mt-1">
              Frontend Developer — Plateau, Nigeria
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4" role="list" aria-label="Social media links">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return Icon ? (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 border-2 border-white/20 rounded-[4px] text-white/50 hover:border-yellow hover:text-yellow transition-all hover:shadow-[2px_2px_0px_#FACC15]"
                  role="listitem"
                >
                  <Icon size={16} />
                </a>
              ) : null
            })}
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-white/40 text-center sm:text-right">
            © {year} {profile.name}. <br className="sm:hidden" />
            Built with React + Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}
