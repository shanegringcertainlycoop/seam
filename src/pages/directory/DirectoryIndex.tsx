import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SEO, { breadcrumbSchema } from '../../components/SEO'
import { useReveal } from '../../hooks/useReveal'
import {
  seamAPs,
  certifiedProjects,
  approvedActivities,
  certificationLevels,
  ratingSystems,
  activityCategories,
  activityPillars,
  type SeamAP,
  type CertifiedProject,
  type ApprovedActivity,
} from '../../data/directory'

type Tab = 'aps' | 'projects' | 'activities'

const tabs: { key: Tab; label: string }[] = [
  { key: 'aps', label: 'SEAM APs' },
  { key: 'projects', label: 'Certified Projects' },
  { key: 'activities', label: 'Approved Activities' },
]


/* ─── Cards ─── */

function APCard({ ap }: { ap: SeamAP }) {
  return (
    <Link
      to={`/directory/ap/${ap.slug}`}
      className="group block rounded-2xl border border-warm-100 p-6 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-warm-100 shrink-0 overflow-hidden">
          <img
            src={ap.photo}
            alt={ap.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-[18px] tracking-[-0.02em] text-warm-900 group-hover:text-gold-600 transition-colors duration-300 truncate">
            {ap.name}
          </h3>
          <p className="text-[14px] text-warm-500 truncate">{ap.organization}</p>
        </div>
      </div>
      <p className="text-[14px] text-warm-500 mb-4">
        {ap.location.city}, {ap.location.state}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {ap.specialties.slice(0, 3).map((s) => (
          <span
            key={s}
            className="rounded-full bg-warm-50 px-3 py-1 text-[12px] text-warm-600"
          >
            {s}
          </span>
        ))}
      </div>
      <span
        className={`inline-block rounded-full px-3 py-1 text-[12px] font-medium ${
          ap.credentials === 'SEAM AP+'
            ? 'bg-gold-400/10 text-gold-600'
            : 'bg-seam-50 text-seam-700'
        }`}
      >
        {ap.credentials}
      </span>
    </Link>
  )
}

function ProjectCard({ project }: { project: CertifiedProject }) {
  const levelColors: Record<string, string> = {
    Bronze: 'bg-amber-100 text-amber-800',
    Silver: 'bg-gray-100 text-gray-700',
    Gold: 'bg-gold-400/10 text-gold-600',
    Platinum: 'bg-seam-50 text-seam-700',
  }

  return (
    <Link
      to={`/directory/project/${project.slug}`}
      className="group block rounded-2xl border border-warm-100 overflow-hidden transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="h-48 bg-warm-100 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      </div>
      <div className="p-6">
        <span
          className={`inline-block rounded-full px-3 py-1 text-[12px] font-medium mb-3 ${
            levelColors[project.certificationLevel] || 'bg-warm-50 text-warm-600'
          }`}
        >
          {project.certificationLevel}
        </span>
        <h3 className="font-display text-[20px] tracking-[-0.02em] text-warm-900 group-hover:text-gold-600 transition-colors duration-300 mb-2">
          {project.name}
        </h3>
        <p className="text-[14px] text-warm-500 mb-2">
          {project.location.city}, {project.location.state}
        </p>
        <p className="text-[13px] text-warm-400">{project.ratingSystem}</p>
      </div>
    </Link>
  )
}

function ActivityCard({ activity }: { activity: ApprovedActivity }) {
  return (
    <Link
      to={`/directory/activity/${activity.slug}`}
      className="group block rounded-2xl border border-warm-100 p-6 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      <div className="flex flex-wrap gap-1.5 mb-4">
        <span className="rounded-full bg-seam-50 px-3 py-1 text-[12px] font-medium text-seam-700">
          {activity.category}
        </span>
        <span className="rounded-full bg-gold-400/10 px-3 py-1 text-[12px] font-medium text-gold-600">
          {activity.pillar}
        </span>
      </div>
      <h3 className="font-display text-[18px] tracking-[-0.02em] text-warm-900 group-hover:text-gold-600 transition-colors duration-300 mb-2">
        {activity.name}
      </h3>
      <p className="text-[14px] text-warm-500 mb-2">{activity.organization}</p>
      <p className="text-[13px] text-warm-400">
        {activity.location.city}, {activity.location.state}
      </p>
    </Link>
  )
}

/* ─── Search Icon ─── */

function SearchIcon() {
  return (
    <svg
      className="w-5 h-5 text-warm-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  )
}

/* ─── Main Page ─── */

export default function DirectoryIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = (searchParams.get('tab') as Tab) || 'aps'
  const [search, setSearch] = useState('')
  const [apSpecialtyFilter, setApSpecialtyFilter] = useState('All')
  const [levelFilter, setLevelFilter] = useState('All')
  const [ratingFilter, setRatingFilter] = useState('All')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [pillarFilter, setPillarFilter] = useState('All')

  const heroRef = useReveal()

  function setTab(tab: Tab) {
    setSearchParams({ tab })
    setSearch('')
    setApSpecialtyFilter('All')
    setLevelFilter('All')
    setRatingFilter('All')
    setCategoryFilter('All')
    setPillarFilter('All')
  }

  function clearFilters() {
    setSearch('')
    setApSpecialtyFilter('All')
    setLevelFilter('All')
    setRatingFilter('All')
    setCategoryFilter('All')
    setPillarFilter('All')
  }

  // Compute unique specialties from data
  const uniqueSpecialties = useMemo(() => {
    const set = new Set<string>()
    seamAPs.forEach((ap) => ap.specialties.forEach((s) => set.add(s)))
    return ['All', ...Array.from(set).sort()]
  }, [])

  // Filtered results
  const filteredAPs = useMemo(() => {
    const q = search.toLowerCase()
    return seamAPs.filter((ap) => {
      if (apSpecialtyFilter !== 'All' && !ap.specialties.includes(apSpecialtyFilter))
        return false
      if (!q) return true
      return (
        ap.name.toLowerCase().includes(q) ||
        ap.organization.toLowerCase().includes(q) ||
        ap.location.city.toLowerCase().includes(q) ||
        ap.location.state.toLowerCase().includes(q) ||
        ap.specialties.some((s) => s.toLowerCase().includes(q))
      )
    })
  }, [search, apSpecialtyFilter])

  const filteredProjects = useMemo(() => {
    const q = search.toLowerCase()
    return certifiedProjects.filter((p) => {
      if (levelFilter !== 'All' && p.certificationLevel !== levelFilter) return false
      if (ratingFilter !== 'All' && p.ratingSystem !== ratingFilter) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.owner.toLowerCase().includes(q) ||
        p.location.city.toLowerCase().includes(q) ||
        p.location.state.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.highlights.some((h) => h.toLowerCase().includes(q))
      )
    })
  }, [search, levelFilter, ratingFilter])

  const filteredActivities = useMemo(() => {
    const q = search.toLowerCase()
    return approvedActivities.filter((a) => {
      if (categoryFilter !== 'All' && a.category !== categoryFilter) return false
      if (pillarFilter !== 'All' && a.pillar !== pillarFilter) return false
      if (!q) return true
      return (
        a.name.toLowerCase().includes(q) ||
        a.organization.toLowerCase().includes(q) ||
        a.location.city.toLowerCase().includes(q) ||
        a.location.state.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q)
      )
    })
  }, [search, categoryFilter, pillarFilter])

  const hasResults =
    (activeTab === 'aps' && filteredAPs.length > 0) ||
    (activeTab === 'projects' && filteredProjects.length > 0) ||
    (activeTab === 'activities' && filteredActivities.length > 0)

  const ctaConfig: Record<Tab, { heading: string; body: string; label: string; href: string }> = {
    aps: {
      heading: 'Become a SEAM AP',
      body: 'Join the growing network of practitioners leading social equity certification in the built environment.',
      label: 'Learn about the AP Credential',
      href: '/ap-credential',
    },
    projects: {
      heading: 'Certify your building',
      body: 'Whether new construction or existing operations, SEAM certification measures what matters for the people in and around your building.',
      label: 'Explore certification',
      href: '/certification',
    },
    activities: {
      heading: 'Get your activity SEAM Approved',
      body: 'Standalone verification for specific social equity practices. An on-ramp to certification or a parallel track.',
      label: 'Learn about SEAM Approved',
      href: '/approved',
    },
  }

  const cta = ctaConfig[activeTab]

  return (
    <>
      <SEO
        title="Directory"
        description="Browse SEAM Accredited Professionals, certified projects, and approved activities. The social equity ecosystem in the built environment."
        path="/directory"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Directory', path: '/directory' },
        ])}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end bg-warm-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900 via-warm-900/95 to-warm-900" />
        <div
          ref={heroRef}
          className="reveal-fade-up relative mx-auto max-w-[1400px] px-6 lg:px-10 pb-16 lg:pb-20 pt-40"
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Directory
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white mb-6 max-w-4xl">
            The SEAM ecosystem
          </h1>
          <p className="text-[17px] lg:text-[19px] leading-relaxed text-warm-400 max-w-2xl">
            Accredited professionals, certified buildings, and verified activities — the
            growing network advancing social equity in the built environment.
          </p>
        </div>
      </section>

      {/* Sticky Tab Bar */}
      <section className="sticky top-[88px] z-30 bg-white/95 backdrop-blur-md border-b border-warm-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setTab(tab.key)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-warm-900 text-white'
                    : 'bg-warm-50 text-warm-500 hover:bg-warm-100 hover:text-warm-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search + Filters + Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Search bar */}
          <div className="relative mb-6">
            <label htmlFor="directory-search" className="sr-only">
              Search the directory
            </label>
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
            <input
              id="directory-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={
                activeTab === 'aps'
                  ? 'Search by name, organization, or specialty...'
                  : activeTab === 'projects'
                    ? 'Search by name, owner, or location...'
                    : 'Search by name, organization, or category...'
              }
              className="w-full rounded-full border border-warm-200 bg-white pl-12 pr-6 py-3.5 text-[15px] placeholder:text-warm-400 outline-none focus:border-warm-400 transition-colors"
            />
          </div>

          {/* Sub-filter pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {activeTab === 'aps' &&
              uniqueSpecialties.map((s) => (
                <button
                  key={s}
                  onClick={() => setApSpecialtyFilter(s)}
                  className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                    apSpecialtyFilter === s
                      ? 'bg-seam-700 text-white'
                      : 'bg-warm-50 text-warm-500 hover:bg-warm-100 hover:text-warm-700'
                  }`}
                >
                  {s}
                </button>
              ))}

            {activeTab === 'projects' && (
              <>
                {certificationLevels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevelFilter(l)}
                    className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                      levelFilter === l
                        ? 'bg-seam-700 text-white'
                        : 'bg-warm-50 text-warm-500 hover:bg-warm-100 hover:text-warm-700'
                    }`}
                  >
                    {l === 'All' ? 'All Levels' : l}
                  </button>
                ))}
                <span className="w-px h-8 bg-warm-200 self-center mx-1" />
                {ratingSystems.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRatingFilter(r)}
                    className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                      ratingFilter === r
                        ? 'bg-seam-700 text-white'
                        : 'bg-warm-50 text-warm-500 hover:bg-warm-100 hover:text-warm-700'
                    }`}
                  >
                    {r === 'All' ? 'All Systems' : r}
                  </button>
                ))}
              </>
            )}

            {activeTab === 'activities' && (
              <>
                {activityCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategoryFilter(c)}
                    className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                      categoryFilter === c
                        ? 'bg-seam-700 text-white'
                        : 'bg-warm-50 text-warm-500 hover:bg-warm-100 hover:text-warm-700'
                    }`}
                  >
                    {c === 'All' ? 'All Categories' : c}
                  </button>
                ))}
                <span className="w-px h-8 bg-warm-200 self-center mx-1" />
                {activityPillars.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPillarFilter(p)}
                    className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                      pillarFilter === p
                        ? 'bg-seam-700 text-white'
                        : 'bg-warm-50 text-warm-500 hover:bg-warm-100 hover:text-warm-700'
                    }`}
                  >
                    {p === 'All' ? 'All Pillars' : p}
                  </button>
                ))}
              </>
            )}
          </div>

          {/* Results Grid */}
          {hasResults ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTab === 'aps' &&
                filteredAPs.map((ap) => <APCard key={ap.slug} ap={ap} />)}
              {activeTab === 'projects' &&
                filteredProjects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              {activeTab === 'activities' &&
                filteredActivities.map((a) => (
                  <ActivityCard key={a.slug} activity={a} />
                ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <p className="text-[17px] text-warm-500 mb-4">
                No results match your current filters.
              </p>
              <button
                onClick={clearFilters}
                className="rounded-full bg-warm-900 px-6 py-3 text-[15px] font-medium text-white hover:bg-warm-800 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-warm-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 mb-6">
            {cta.heading}
          </h2>
          <p className="text-[17px] leading-relaxed text-warm-500 max-w-2xl mx-auto mb-10">
            {cta.body}
          </p>
          <Link
            to={cta.href}
            className="inline-flex items-center rounded-full bg-warm-900 px-8 py-4 text-[15px] font-medium text-white hover:bg-warm-800 transition-colors"
          >
            {cta.label}
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
