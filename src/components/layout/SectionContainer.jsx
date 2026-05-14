import { cn } from '@/lib/utils'

export default function SectionContainer({ children, id, label, className }) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn('w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24', className)}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
