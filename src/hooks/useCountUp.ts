import { useEffect, useRef, useState } from 'react'

/**
 * Animated counter that counts up when element scrolls into view.
 * Returns [ref, displayValue].
 */
export function useCountUp(
  target: number,
  opts: { duration?: number; suffix?: string; prefix?: string } = {},
) {
  const { duration = 2000, suffix = '', prefix = '' } = opts
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          const start = performance.now()

          function tick(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, display: `${prefix}${value.toLocaleString()}${suffix}` }
}
