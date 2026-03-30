import { useEffect, useRef } from 'react'

/** True when the page is being captured by Figma HTML-to-Design */
const isFigmaCapture = typeof window !== 'undefined' && window.location.hash.includes('figmacapture')

/**
 * Intersection Observer hook that adds a 'revealed' class
 * when an element scrolls into view. Triggers once.
 * During Figma capture, reveals everything immediately.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (isFigmaCapture) {
      el.classList.add('revealed')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
