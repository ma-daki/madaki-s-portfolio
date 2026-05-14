import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1500, startOnMount = false) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(startOnMount)
  const ref = useRef(null)

  useEffect(() => {
    if (!startOnMount) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHasStarted(true)
            observer.disconnect()
          }
        },
        { threshold: 0.3 }
      )
      if (ref.current) observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [startOnMount])

  useEffect(() => {
    if (!hasStarted) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [hasStarted, target, duration])

  return { count, ref }
}
