/**
 * Animated counter for elements with data-count-target attribute.
 * Replaces the React useCountUp hook.
 *
 * Usage: <span data-count-target="23" data-count-suffix="%" data-count-prefix="">0%</span>
 */
function initCountUp() {
  const elements = document.querySelectorAll<HTMLElement>('[data-count-target]')

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue

        const el = entry.target as HTMLElement
        if (el.dataset.countDone) continue
        el.dataset.countDone = '1'
        observer.unobserve(el)

        const target = parseInt(el.dataset.countTarget || '0', 10)
        const duration = parseInt(el.dataset.countDuration || '2000', 10)
        const suffix = el.dataset.countSuffix || ''
        const prefix = el.dataset.countPrefix || ''
        const start = performance.now()

        function tick(now: number) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          // Ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          const value = Math.round(target * eased)
          el.textContent = `${prefix}${value.toLocaleString()}${suffix}`
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      }
    },
    { threshold: 0.3 }
  )

  elements.forEach((el) => observer.observe(el))
}

document.addEventListener('astro:page-load', initCountUp)
if (document.readyState !== 'loading') {
  initCountUp()
} else {
  document.addEventListener('DOMContentLoaded', initCountUp)
}
