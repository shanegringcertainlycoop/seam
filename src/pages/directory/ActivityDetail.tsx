import { Link, Navigate, useParams } from 'react-router-dom'
import SEO, { breadcrumbSchema } from '../../components/SEO'
import { useReveal } from '../../hooks/useReveal'
import { approvedActivities } from '../../data/directory'

export default function ActivityDetail() {
  const { slug } = useParams<{ slug: string }>()
  const activity = approvedActivities.find((a) => a.slug === slug)

  const headerRef = useReveal()
  const relatedRef = useReveal()

  if (!activity) return <Navigate to="/directory?tab=activities" replace />

  const relatedActivities = approvedActivities
    .filter(
      (a) =>
        a.slug !== activity.slug &&
        (a.category === activity.category || a.pillar === activity.pillar),
    )
    .slice(0, 3)

  function formatDate(dateStr: string) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <>
      <SEO
        title={`${activity.name} — SEAM Approved`}
        description={activity.description.slice(0, 160)}
        path={`/directory/activity/${activity.slug}`}
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Directory', path: '/directory' },
          { name: activity.name, path: `/directory/activity/${activity.slug}` },
        ])}
      />

      <article className="pt-28 sm:pt-30 lg:pt-32 pb-20 lg:pb-28">
        <div ref={headerRef} className="reveal-fade-up mx-auto max-w-3xl px-6 lg:px-10">
          {/* Back link */}
          <Link
            to="/directory?tab=activities"
            className="inline-flex items-center gap-2 text-[14px] text-warm-500 hover:text-warm-700 transition-colors mb-10"
          >
            &larr; All Approved Activities
          </Link>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="rounded-full bg-seam-50 px-4 py-1.5 text-[13px] font-medium text-seam-700">
              {activity.category}
            </span>
            <span className="rounded-full bg-gold-400/10 px-4 py-1.5 text-[13px] font-medium text-gold-600">
              {activity.pillar}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 mb-8">
            {activity.name}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-[15px] text-warm-500 mb-12 pb-12 border-b border-warm-100">
            <span className="text-warm-900 font-medium">
              {activity.organization}
            </span>
            <span className="w-1 h-1 rounded-full bg-warm-300" />
            <span>
              {activity.location.city}, {activity.location.state}
            </span>
            <span className="w-1 h-1 rounded-full bg-warm-300" />
            <span>Approved {formatDate(activity.dateApproved)}</span>
          </div>

          {/* Description */}
          <div className="mb-16">
            <h2 className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-6">
              About this activity
            </h2>
            <p className="text-[17px] leading-[1.8] text-warm-600">
              {activity.description}
            </p>
          </div>
        </div>
      </article>

      {/* Related Activities */}
      {relatedActivities.length > 0 && (
        <section className="py-20 lg:py-28 bg-warm-50">
          <div
            ref={relatedRef}
            className="reveal-fade-up mx-auto max-w-[1400px] px-6 lg:px-10"
          >
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 mb-10">
              Related activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedActivities.map((ra) => (
                <Link
                  key={ra.slug}
                  to={`/directory/activity/${ra.slug}`}
                  className="group block rounded-2xl bg-white border border-warm-100 p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="rounded-full bg-seam-50 px-3 py-1 text-[12px] font-medium text-seam-700">
                      {ra.category}
                    </span>
                    <span className="rounded-full bg-gold-400/10 px-3 py-1 text-[12px] font-medium text-gold-600">
                      {ra.pillar}
                    </span>
                  </div>
                  <h3 className="font-display text-[18px] tracking-[-0.02em] text-warm-900 group-hover:text-gold-600 transition-colors duration-300 mb-2">
                    {ra.name}
                  </h3>
                  <p className="text-[14px] text-warm-500">{ra.organization}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 mb-6">
            Get your activity SEAM Approved
          </h2>
          <p className="text-[17px] leading-relaxed text-warm-500 max-w-2xl mx-auto mb-10">
            Standalone verification for specific social equity practices. An
            on-ramp to certification or a parallel track.
          </p>
          <Link
            to="/approved"
            className="inline-flex items-center rounded-full bg-warm-900 px-8 py-4 text-[15px] font-medium text-white hover:bg-warm-800 transition-colors"
          >
            Learn about SEAM Approved
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
