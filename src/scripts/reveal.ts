/**
 * Global IntersectionObserver that finds .reveal-* elements and adds .revealed class.
 * Replaces the React useReveal hook.
 */
function initReveal() {
  const isFigmaCapture = window.location.hash.includes('figmacapture')

  const elements = document.querySelectorAll<HTMLElement>(
    '.reveal-fade-up, .reveal-fade, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .reveal-stagger, .reveal-line'
  )

  if (isFigmaCapture) {
    elements.forEach((el) => el.classList.add('revealed'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15 }
  )

  elements.forEach((el) => observer.observe(el))
}

// Run on initial load and on Astro page transitions
document.addEventListener('astro:page-load', initReveal)
if (document.readyState !== 'loading') {
  initReveal()
} else {
  document.addEventListener('DOMContentLoaded', initReveal)
}
