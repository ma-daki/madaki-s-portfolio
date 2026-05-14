import FadeIn from '@/components/animations/FadeIn'
import { profile } from '@/data/portfolio'
import { ArrowUpRight } from 'lucide-react'

const highlights = [
  { label: 'Clean Code',       desc: 'I write semantic, maintainable, and scalable code that stands the test of time.' },
  { label: 'Pixel Perfection', desc: 'Every pixel matters. I translate designs into precise, beautiful UI with precision.' },
  { label: 'Performance First',desc: 'Fast load times, smooth animations, and optimised rendering are non-negotiable.' },
]

export default function AboutSection() {
  return (
    <section
      id="about-detail"
      aria-label="About Madaki Shepherd"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left — Editorial heading */}
          <FadeIn direction="left" delay={0.1} className="lg:col-span-5">
            <div className="sticky top-24">
              <span className="section-label bg-yellow text-black border-yellow mb-6 inline-block">
                About Me
              </span>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] text-white mb-6">
                I Build<br />
                <span className="text-yellow">Things</span><br />
                That Matter.
              </h2>
              <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm">
                {profile.bio}
              </p>
              <div className="mt-8 flex gap-3">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal bg-yellow border-yellow text-black shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_rgba(255,255,255,0.3)] text-sm"
                  aria-label="Contact Madaki on WhatsApp"
                >
                  Get In Touch
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — Info blocks */}
          <div className="lg:col-span-7 flex flex-col gap-4">

            {highlights.map((item, i) => (
              <FadeIn key={item.label} direction="right" delay={0.15 + i * 0.1}>
                <div className="border border-white/10 rounded-[6px] p-6 hover:border-yellow/60 hover:bg-white/5 transition-all group">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-yellow/50 mt-1 font-bold">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-yellow transition-colors">
                        {item.label}
                      </h3>
                      <p className="font-body text-white/50 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Contact info card */}
            <FadeIn direction="right" delay={0.45}>
              <div className="border-3 border-yellow rounded-[6px] p-6 bg-yellow/10">
                <p className="font-mono text-xs text-yellow/70 uppercase tracking-widest mb-3">
                  Contact Info
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="font-heading text-xs font-bold text-white/50 mb-1">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-body text-sm text-white hover:text-yellow transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold text-white/50 mb-1">Phone</p>
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, '')}`}
                      className="font-body text-sm text-white hover:text-yellow transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold text-white/50 mb-1">Location</p>
                    <p className="font-body text-sm text-white">{profile.location}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
