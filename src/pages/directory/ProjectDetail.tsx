import { Link, Navigate, useParams } from 'react-router-dom'
import SEO, { breadcrumbSchema } from '../../components/SEO'
import { useReveal } from '../../hooks/useReveal'
import { certifiedProjects, seamAPs } from '../../data/directory'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = certifiedProjects.find((p) => p.slug === slug)

  const heroRef = useReveal()
  const contentRef = useReveal()
  const relatedRef = useReveal()

  if (!project) return <Navigate to="/directory?tab=projects" replace />

  const leadAP = project.apLead
    ? seamAPs.find((ap) => ap.slug === project.apLead)
    : null

  const relatedProjects = certifiedProjects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        (p.ratingSystem === project.ratingSystem ||
          p.certificationLevel === project.certificationLevel),
    )
    .slice(0, 3)

  const levelColors: Record<string, string> = {
    Bronze: 'bg-amber-100 text-amber-800',
    Silver: 'bg-gray-100 text-gray-700',
    Gold: 'bg-gold-400/10 text-gold-600',
    Platinum: 'bg-seam-50 text-seam-700',
  }

  function formatCompletionDate(dateStr: string) {
    const [year, month] = dateStr.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1)
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  return (
    <>
      <SEO
        title={`${project.name} — ${project.certificationLevel} Certified`}
        description={project.description.slice(0, 160)}
        path={`/directory/project/${project.slug}`}
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Directory', path: '/directory' },
          { name: project.name, path: `/directory/project/${project.slug}` },
        ])}
      />

      {/* Hero Image */}
      <section
        ref={heroRef}
        className="reveal-fade relative min-h-[50vh] lg:min-h-[60vh] flex items-end bg-warm-900 overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/60 to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pb-16 lg:pb-20 pt-40">
          <Link
            to="/directory?tab=projects"
            className="inline-flex items-center gap-2 text-[14px] text-white/60 hover:text-white/90 transition-colors mb-8"
          >
            &larr; All Certified Projects
          </Link>
          <span
            className={`inline-block rounded-full px-4 py-1.5 text-[13px] font-medium mb-4 ${
              levelColors[project.certificationLevel] || 'bg-warm-50 text-warm-600'
            }`}
          >
            {project.certificationLevel}
          </span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white mb-4">
            {project.name}
          </h1>
          <p className="text-[17px] text-white/70">
            {project.location.city}, {project.location.state}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div
          ref={contentRef}
          className="reveal-fade-up mx-auto max-w-[1400px] px-6 lg:px-10"
        >
          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-warm-100">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-400 mb-2">
                Certification
              </p>
              <p className="text-[17px] font-medium text-warm-900">
                {project.certificationLevel}
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-400 mb-2">
                Rating System
              </p>
              <p className="text-[17px] font-medium text-warm-900">
                {project.ratingSystem}
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-400 mb-2">
                Size
              </p>
              <p className="text-[17px] font-medium text-warm-900">{project.size}</p>
            </div>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-400 mb-2">
                Completed
              </p>
              <p className="text-[17px] font-medium text-warm-900">
                {formatCompletionDate(project.completionDate)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
            {/* Main */}
            <div>
              <h2 className="font-display text-[28px] lg:text-[32px] tracking-[-0.02em] text-warm-900 mb-6">
                About this project
              </h2>
              <p className="text-[17px] leading-[1.8] text-warm-600 mb-12">
                {project.description}
              </p>

              <h3 className="font-display text-[22px] tracking-[-0.02em] text-warm-900 mb-6">
                Highlights
              </h3>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-seam-500 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-[16px] leading-relaxed text-warm-600">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-warm-100 p-6">
                <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-400 mb-3">
                  Owner
                </p>
                <p className="text-[16px] font-medium text-warm-900 mb-6">
                  {project.owner}
                </p>

                {leadAP && (
                  <>
                    <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-400 mb-3">
                      Lead AP
                    </p>
                    <Link
                      to={`/directory/ap/${leadAP.slug}`}
                      className="group flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-warm-100 overflow-hidden shrink-0">
                        <img
                          src={leadAP.photo}
                          alt={leadAP.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            ;(e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-[15px] font-medium text-warm-900 group-hover:text-gold-600 transition-colors">
                          {leadAP.name}
                        </p>
                        <p className="text-[13px] text-warm-500">
                          {leadAP.credentials}
                        </p>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 lg:py-28 bg-warm-50">
          <div
            ref={relatedRef}
            className="reveal-fade-up mx-auto max-w-[1400px] px-6 lg:px-10"
          >
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 mb-10">
              Related projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/directory/project/${rp.slug}`}
                  className="group block rounded-2xl bg-white border border-warm-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div className="h-48 bg-warm-100 overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        ;(e.target as HTMLImageElement).style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-[12px] font-medium mb-3 ${
                        levelColors[rp.certificationLevel] ||
                        'bg-warm-50 text-warm-600'
                      }`}
                    >
                      {rp.certificationLevel}
                    </span>
                    <h3 className="font-display text-[18px] tracking-[-0.02em] text-warm-900 group-hover:text-gold-600 transition-colors duration-300 mb-1">
                      {rp.name}
                    </h3>
                    <p className="text-[14px] text-warm-500">
                      {rp.location.city}, {rp.location.state}
                    </p>
                  </div>
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
            Certify your building
          </h2>
          <p className="text-[17px] leading-relaxed text-warm-500 max-w-2xl mx-auto mb-10">
            Whether new construction or existing operations, SEAM certification
            measures what matters for the people in and around your building.
          </p>
          <Link
            to="/certification"
            className="inline-flex items-center rounded-full bg-warm-900 px-8 py-4 text-[15px] font-medium text-white hover:bg-warm-800 transition-colors"
          >
            Explore certification
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
