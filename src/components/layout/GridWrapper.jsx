import { cn } from '@/lib/utils'

export default function GridWrapper({ children, className }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-4',
        className
      )}
    >
      {children}
    </div>
  )
}
