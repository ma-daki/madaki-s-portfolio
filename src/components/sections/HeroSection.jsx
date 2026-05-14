import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Github, Linkedin, Twitter, Instagram, Download } from 'lucide-react'
import { profile, roles, socials, techStack, stats } from '@/data/portfolio'
import AnimatedText from '@/components/animations/AnimatedText'
import StatsCard from '@/components/cards/StatsCard'
import FadeIn from '@/components/animations/FadeIn'

const iconMap = { Github, Linkedin, Twitter, Instagram, MessageCircle }

export default function HeroSection() {
  return (
    <section
      id="about"
      aria-label="Hero — Introduction"
      className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-bg flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* ── Main Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* ── Intro Card (col-span-7) ── */}
          <FadeIn direction="left" delay={0.1} className="lg:col-span-7">
            <div className="brutal-card h-full p-7 sm:p-10 flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="section-label">Frontend Developer</span>
                  <div className="flex items-center gap-2">
                    <span className="status-dot" aria-hidden="true" />
                    <span className="font-body text-xs font-semibold text-stone-500">
                      {profile.availability}
                    </span>
                  </div>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.0] mb-3">
                  {profile.name.split(' ')[0]}{' '}
                  <span className="relative inline-block">
                    {profile.name.split(' ')[1]}
                    <span className="absolute -bottom-1 left-0 right-0 h-3 bg-yellow -z-10 opacity-70" />
                  </span>
                </h1>

                <div className="font-heading text-xl sm:text-2xl font-bold text-stone-400 mb-4 h-8">
                  <AnimatedText texts={roles} interval={2800} />
                </div>

                <p className="font-body text-stone-500 text-sm sm:text-base leading-relaxed max-w-lg">
                  {profile.bio}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal btn-brutal-primary"
                  aria-label="Connect with Madaki on WhatsApp"
                >
                  <MessageCircle size={16} />
                  Let's Connect
                </a>
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-brutal btn-brutal-outline"
                  aria-label="View Madaki's projects"
                >
                  View Projects
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* ── Profile Image Card (col-span-5) ── */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-5">
            <div className="border-3 border-black rounded-[6px] overflow-hidden shadow-brutal h-full relative min-h-[340px] bg-stone-200 group">
              <motion.img
                src="/img/IMG-20230402-WA0054.jpg"
                alt="Madaki Shepherd — Frontend Developer"
                className="w-full h-full object-cover object-top absolute inset-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-yellow border-2 border-black px-3 py-1.5 rounded-[4px] shadow-brutal-sm">
                <p className="font-heading text-xs font-black uppercase tracking-wider">
                  Madaki Shepherd
                </p>
                <p className="font-mono text-[10px] text-black/60">
                  @Sheff-ma on GitHub
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ── Tech Stack Row (col-span-4) ── */}
          <FadeIn direction="up" delay={0.3} className="lg:col-span-4">
            <div className="brutal-card p-5 h-full">
              <p className="section-label mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="skill-badge text-xs"
                    whileHover={{ backgroundColor: '#FACC15' }}
                    transition={{ duration: 0.15 }}
                  >
                    {tech.icon ? (
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4 object-contain" />
                    ) : tech.emoji ? (
                      <span className="text-sm">{tech.emoji}</span>
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tech.color }} />
                    )}
                    <span className="font-heading font-bold">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── Status Card (col-span-4) ── */}
          <FadeIn direction="up" delay={0.35} className="lg:col-span-4">
            <div className="brutal-card-black p-5 h-full flex flex-col justify-between min-h-[120px]">
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest">
                Current Status
              </p>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="status-dot" aria-hidden="true" />
                  <span className="font-heading text-lg font-bold text-white">
                    Open to Work
                  </span>
                </div>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Available for freelance, contract, and full-time roles.
                </p>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="btn-brutal btn-brutal-yellow mt-4 text-xs self-start"
                aria-label={`Email ${profile.email}`}
              >
                Hire Me
                <ArrowUpRight size={14} />
              </a>
            </div>
          </FadeIn>

          {/* ── Stats Grid (col-span-4) ── */}
          <FadeIn direction="up" delay={0.4} className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-3 h-full">
              {stats.map((stat) => (
                <StatsCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </FadeIn>

          {/* ── Social Dock (col-span-12) ── */}
          <FadeIn direction="up" delay={0.45} className="lg:col-span-12">
            <div className="brutal-card p-4 flex items-center gap-4 flex-wrap">
              <span className="font-mono text-xs text-stone-400 uppercase tracking-widest whitespace-nowrap">
                Find me on:
              </span>
              <div className="flex gap-3 flex-wrap" role="list" aria-label="Social media links">
                {socials.map((s) => {
                  const Icon = iconMap[s.icon]
                  return Icon ? (
                    <motion.a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-[4px] bg-white font-heading text-sm font-bold hover:bg-yellow shadow-[2px_2px_0px_#111] hover:shadow-[4px_4px_0px_#111] transition-all"
                      whileHover={{ x: -1, y: -1 }}
                      role="listitem"
                    >
                      <Icon size={15} />
                      {s.platform}
                    </motion.a>
                  ) : null
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
