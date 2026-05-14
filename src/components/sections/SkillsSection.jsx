import { techStack } from '@/data/portfolio'
import FadeIn from '@/components/animations/FadeIn'
import SkillCard from '@/components/cards/SkillCard'

const categories = [
  {
    label: 'Languages',
    items: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Bootstrap', 'Tailwind'],
  },
  {
    label: 'Design Tools',
    items: ['Figma'],
  },
]

export default function SkillsSection() {
  const techMap = Object.fromEntries(techStack.map((t) => [t.name, t]))

  return (
    <section
      id="skills"
      aria-label="Tech stack and skills"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Header */}
          <FadeIn direction="left" delay={0.1} className="lg:col-span-4">
            <div>
              <span className="section-label mb-4 inline-block">Skills</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-black text-black leading-tight mb-4">
                My Tech<br />Stack
              </h2>
              <p className="font-body text-stone-500 text-sm leading-relaxed">
                The tools I use to design, build, and ship modern web products from concept to deployment.
              </p>
            </div>
          </FadeIn>

          {/* Skills Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories.map((cat, ci) => (
              <FadeIn key={cat.label} direction="up" delay={0.1 + ci * 0.1}>
                <div className="brutal-card p-5 h-full">
                  <p className="font-mono text-xs text-stone-400 uppercase tracking-widest mb-4 border-b border-stone-200 pb-3">
                    {cat.label}
                  </p>
                  <div className="flex flex-col gap-3">
                    {cat.items.map((name, i) => {
                      const tech = techMap[name]
                      if (!tech) return null
                      return (
                        <FadeIn key={name} direction="up" delay={0.05 * i}>
                          <SkillCard
                            name={tech.name}
                            icon={tech.icon}
                            color={tech.color}
                            emoji={tech.emoji}
                          />
                        </FadeIn>
                      )
                    })}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Scrolling marquee strip */}
          <FadeIn direction="up" delay={0.4} className="lg:col-span-12">
            <div className="border-3 border-black rounded-[6px] bg-black overflow-hidden py-4">
              <div className="flex marquee-track">
                {[...techStack, ...techStack].map((tech, i) => (
                  <div
                    key={`${tech.name}-${i}`}
                    className="flex items-center gap-2 px-6 text-white font-heading font-bold text-sm whitespace-nowrap"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                    {tech.name}
                    <span className="text-yellow/30 ml-4">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
