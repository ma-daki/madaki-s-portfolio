import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '@/data/portfolio'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/95 backdrop-blur-sm border-b-3 border-black shadow-brutal-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-xl font-black tracking-[0.15em] text-black hover:text-yellow transition-colors"
            aria-label="Madaki Shepherd — Home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            {profile.shortName}
            <span className="text-yellow">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="relative px-4 py-2 font-heading text-sm font-bold text-black hover:text-black transition-colors group"
                  aria-label={link.label}
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <span className="font-body text-xs font-semibold text-stone-500">Available</span>
            </div>
            <a
              href="https://wa.me/2349133956038"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-brutal-primary text-xs py-2 px-4"
              aria-label="Contact Madaki on WhatsApp"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 border-3 border-black rounded-[6px] bg-white shadow-brutal-sm hover:shadow-brutal transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        onLinkClick={handleNavClick}
      />
    </>
  )
}
