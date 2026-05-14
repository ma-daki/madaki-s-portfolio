import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/cards/ProjectCard'
import FadeIn from '@/components/animations/FadeIn'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectsSection() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" aria-label="Projects showcase" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-stone-100">
      <div className="max-w-7xl mx-auto">

        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <span className="section-label mb-3 inline-block">Work</span>
              <h2 className="font-heading text-4xl sm:text-5xl font-black text-black leading-tight">
                Selected<br />Projects
              </h2>
            </div>
            <p className="font-body text-stone-500 text-sm max-w-xs leading-relaxed sm:text-right">
              Personal and collaborative projects that sharpened my frontend craft.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <FadeIn direction="up" delay={0.15} className="lg:col-span-8">
            <ProjectCard project={featured} featured={true} className="h-full" />
          </FadeIn>
          <FadeIn direction="right" delay={0.2} className="lg:col-span-4">
            <ProjectCard project={rest[0]} className="h-full" />
          </FadeIn>
          {rest.slice(1).map((project, i) => (
            <FadeIn key={project.id} direction="up" delay={0.1 + i * 0.08} className="lg:col-span-4">
              <ProjectCard project={project} className="h-full" />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="mt-10 text-center">
            <a href="https://github.com/Sheff-ma" target="_blank" rel="noopener noreferrer"
              className="btn-brutal btn-brutal-primary" aria-label="View all projects on GitHub">
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
