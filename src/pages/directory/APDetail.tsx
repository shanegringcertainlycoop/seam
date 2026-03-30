import { Link, Navigate, useParams } from 'react-router-dom'
import SEO, { breadcrumbSchema } from '../../components/SEO'
import { useReveal } from '../../hooks/useReveal'
import { seamAPs, certifiedProjects } from '../../data/directory'

export default function APDetail() {
  const { slug } = useParams<{ slug: string }>()
  const ap = seamAPs.find((a) => a.slug === slug)

  const headerRef = useReveal()
  const contentRef = useReveal()

  if (!ap) return <Navigate to="/directory?tab=aps" replace />

  const relatedProjects = certifiedProjects.filter((p) => p.apLead === ap.slug)

  function formatDate(dateStr: string) {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <>
      <SEO
        title={`${ap.name} — SEAM AP`}
        description={`${ap.name} is a ${ap.credentials} at ${ap.organization}, specializing in ${ap.specialties.slice(0, 3).join(', ')}.`}
        path={`/directory/ap/${ap.slug}`}
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Directory', path: '/directory' },
          { name: ap.name, path: `/directory/ap/${ap.slug}` },
        ])}
      />

      <article className="pt-28 sm:pt-30 lg:pt-32 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Back link */}
          <Link
            to="/directory?tab=aps"
            className="inline-flex items-center gap-2 text-[14px] text-warm-500 hover:text-warm-700 transition-colors mb-10"
          >
            &larr; All SEAM APs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-start">
            {/* Sidebar */}
            <div ref={headerRef} className="reveal-fade-up lg:sticky lg:top-32">
              <div className="w-32 h-32 rounded-full bg-warm-100 overflow-hidden mb-6">
                <img
                  src={ap.photo}
                  alt={ap.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>

              <h1 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 mb-2">
                {ap.name}
              </h1>

              <p className="text-[16px] text-warm-500 mb-1">{ap.title}</p>
              <p className="text-[16px] text-warm-700 font-medium mb-4">
                {ap.organization}
              </p>

              <div className="space-y-3 text-[15px] text-warm-500">
                <p>
                  {ap.location.city}, {ap.location.state}
                </p>
                <p>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[13px] font-medium ${
                      ap.credentials === 'SEAM AP+'
                        ? 'bg-gold-400/10 text-gold-600'
                        : 'bg-seam-50 text-seam-700'
                    }`}
                  >
                    {ap.credentials}
                  </span>
                </p>
                <p>Credentialed {formatDate(ap.dateCredentialed)}</p>
                <p>
                  {ap.projectsLed} project{ap.projectsLed !== 1 ? 's' : ''} led
                </p>
              </div>

              {(ap.linkedIn || ap.website) && (
                <div className="flex gap-4 mt-6">
                  {ap.linkedIn && (
                    <a
                      href={ap.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-medium text-gold-500 hover:text-gold-600 transition-colors"
                    >
                      LinkedIn &rarr;
                    </a>
                  )}
                  {ap.website && (
                    <a
                      href={ap.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-medium text-gold-500 hover:text-gold-600 transition-colors"
                    >
                      Website &rarr;
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Main Content */}
            <div ref={contentRef} className="reveal-fade-up">
              <section className="mb-12">
                <h2 className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-6">
                  About
                </h2>
                <p className="text-[17px] leading-[1.8] text-warm-600">{ap.bio}</p>
              </section>

              <section className="mb-12">
                <h2 className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-6">
                  Specialties
                </h2>
                <div className="flex flex-wrap gap-2">
                  {ap.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-warm-50 border border-warm-100 px-4 py-2 text-[14px] text-warm-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </section>

              {relatedProjects.length > 0 && (
                <section>
                  <h2 className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-6">
                    Projects
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedProjects.map((project) => (
                      <Link
                        key={project.slug}
                        to={`/directory/project/${project.slug}`}
                        className="group block rounded-2xl border border-warm-100 overflow-hidden transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                      >
                        <div className="h-40 bg-warm-100 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              ;(e.target as HTMLImageElement).style.display = 'none'
                            }}
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-display text-[18px] tracking-[-0.02em] text-warm-900 group-hover:text-gold-600 transition-colors duration-300 mb-1">
                            {project.name}
                          </h3>
                          <p className="text-[14px] text-warm-500">
                            {project.certificationLevel} &middot;{' '}
                            {project.location.city}, {project.location.state}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-warm-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 mb-6">
            Become a SEAM AP
          </h2>
          <p className="text-[17px] leading-relaxed text-warm-500 max-w-2xl mx-auto mb-10">
            Join the growing network of practitioners leading social equity
            certification in the built environment.
          </p>
          <Link
            to="/ap-credential"
            className="inline-flex items-center rounded-full bg-warm-900 px-8 py-4 text-[15px] font-medium text-white hover:bg-warm-800 transition-colors"
          >
            Learn about the AP Credential
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
