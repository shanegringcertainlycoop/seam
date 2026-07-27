import { defineMiddleware } from 'astro:middleware'

/**
 * Edge-cache the SSR HTML.
 *
 * The site runs `output: 'server'`, so every page render is a Netlify function
 * invocation. The Jul 2026 audit measured 25 routes between 2.0s and 6.8s TTFB —
 * /resources/standard at 6.8s, /standard/social-impact at 5.2s, /certification and
 * /ap-credential at 3.6s. Warm responses measure 0.2–1.0s, so those figures are
 * function cold starts, and they land hardest on the conversion pages.
 *
 * Netlify-CDN-Cache-Control governs Netlify's edge and is stripped before the
 * response reaches the browser; Cache-Control governs the browser and Cloudflare.
 * Holding HTML at the edge for 5 minutes takes the function out of the path for
 * almost every request, so a cold start stops being something a visitor waits on.
 *
 * The trade-off is content freshness: a Sanity publish can take up to s-maxage to
 * appear, and the first request after that window may serve stale while the edge
 * refreshes behind it. Nothing here is personalised — no cookies, no auth, no
 * per-user branching — so a shared cache entry is safe.
 */

const CACHEABLE_METHODS = new Set(['GET', 'HEAD'])

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next()

  if (!CACHEABLE_METHODS.has(context.request.method)) return response
  if (response.status !== 200) return response

  // Only HTML documents. Astro serves hashed assets with their own immutable
  // headers, and JSON endpoints should not inherit a document TTL.
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('text/html')) return response

  // Don't hand the CDN a shared copy of anything already marked private/no-store.
  if (/no-store|private/i.test(response.headers.get('cache-control') || '')) {
    return response
  }

  response.headers.set(
    'Netlify-CDN-Cache-Control',
    'public, s-maxage=300, stale-while-revalidate=86400'
  )
  response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')

  return response
})
