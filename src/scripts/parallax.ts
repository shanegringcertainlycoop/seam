/**
 * Parallax scroll effect for elements with data-parallax attribute.
 * Replaces the Home page useEffect parallax.
 *
 * Usage: <img data-parallax="0.25" ... />
 */
function initParallax() {
  const elements = document.querySelectorAll<HTMLElement>('[data-parallax]')
  if (elements.length === 0) return

  function handleScroll() {
    const y = window.scrollY
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.25')
      el.style.transform = `translateY(${y * speed}px) scale(1.05)`
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
}

document.addEventListener('astro:page-load', initParallax)
if (document.readyState !== 'loading') {
  initParallax()
} else {
  document.addEventListener('DOMContentLoaded', initParallax)
}
