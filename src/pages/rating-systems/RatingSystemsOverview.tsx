import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import SEO, { breadcrumbSchema } from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-3xl hero-enter">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'The Standard', href: '/resources/standard' },
              { label: 'Rating Systems' },
            ]}
          />
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            The SEAM Standard
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Three rating systems.{' '}
            <em className="font-display italic font-normal text-seam-300">
              One standard.
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            The SEAM Standard measures social equity through three distinct rating systems each built for a different stage of how buildings and communities are conceived, managed, and grown.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
            >
              Get started
            </Link>
            <Link
              to="/resources/standard"
              className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300"
            >
              Access the Standard
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Overview ─── */
function Overview() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal-fade-up max-w-3xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            How it works
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            A system for every stage of{' '}
            <em className="italic font-normal">the built environment</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Social equity does not begin or end with design. It must be embedded in how buildings are planned, how they operate day-to-day, and how entire neighborhoods evolve. Each SEAM rating system addresses a different dimension so every project can find the right entry point.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            All three systems share the same four pillars, Social Impact, Social Responsibility, Social Justice, and Social Accountability, and the same Bronze-through-Platinum certification levels. What changes is the lens.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Rating System Cards ─── */
const ratingSystems = [
  {
    number: '01',
    title: 'Buildings + Interiors',
    description:
      'Covers the spectrum of social equity considerations in design and construction: from understanding your social impact before breaking ground, to your governance practices, the equity of your procurement decisions, and the human rights standards that apply to everyone involved in building it.',
    href: '/rating-system/buildings-interiors',
    audience: 'Developers, architects, interior designers',
    credits: '30+ measurable credits',
  },
  {
    number: '02',
    title: 'Operations + Maintenance',
    description:
      'Measures how operations reflect a consistent commitment to the people your building serves: through responsible governance, meaningful community engagement, fair labor standards, and health and safety practices that extend to occupants and neighbors alike.',
    href: '/rating-system/operations-maintenance',
    audience: 'Property managers, facility teams, building operators',
    credits: '35+ measurable credits',
  },
  {
    number: '03',
    title: 'Community Development',
    description:
      'Examines social equity at the broadest scale: how a project assesses and manages its impact on the surrounding community, how governance and investments contribute to resilience, how procurement and capital access create opportunity, and how human rights and health standards hold across an entire development.',
    href: '/rating-system/community-development',
    audience: 'CDOs, municipalities, master planners',
    credits: '40+ measurable credits',
  },
]

function RatingSystemCards() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Choose your track
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Three systems,{' '}
            <em className="italic font-normal">one commitment</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ratingSystems.map((system) => (
            <Link
              key={system.number}
              to={system.href}
              className="reveal-child group rounded-2xl bg-white border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col"
            >
              <span className="text-[14px] font-medium text-seam-500 mb-4 block">
                {system.number}
              </span>
              <h3 className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-4">
                {system.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500 mb-6 flex-1">
                {system.description}
              </p>
              <div className="pt-6 border-t border-warm-100 space-y-2">
                <p className="text-[13px] text-warm-500">
                  <span className="font-medium text-warm-600">{system.credits}</span>
                </p>
                <p className="text-[13px] text-warm-500">
                  For {system.audience}
                </p>
              </div>
              <span className="inline-block mt-6 text-[14px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
                Explore this track &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pillars Connection ─── */
function PillarsConnection() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Shared foundation
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
            Every track is built on{' '}
            <em className="italic font-normal text-seam-300">four pillars</em>
          </h2>
          <p className="mt-6 text-[17px] text-warm-400 max-w-2xl mx-auto leading-relaxed">
            Regardless of which rating system you pursue, certification requires demonstrated progress across all four pillars. Each certification level reflects progress across all four pillars. The path to Platinum is built on consistent, documented commitment at every level of the Standard.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Social Impact', href: '/standard/social-impact', description: 'Identify and engage who your project affects and measure whether your efforts are working.' },
              { title: 'Social Responsibility', href: '/standard/social-responsibility', description: 'Build equity into how your organization operates through governance, community engagement, and investments.' },
              { title: 'Social Justice', href: '/standard/social-justice', description: 'Advance equity across procurement, the workplace, the community, and in access to capital.' },
              { title: 'Social Accountability', href: '/standard/social-accountability', description: 'Uphold human rights across the supply chain, support safe working conditions, and protect the health of those your project touches.' },
            ].map((pillar) => (
              <Link
                key={pillar.title}
                to={pillar.href}
                className="rounded-2xl border border-warm-700 p-8 text-left hover:border-warm-500 transition-colors duration-300"
              >
                <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.02em] text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-warm-400">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Certification Levels ─── */
function Levels() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal-fade-up max-w-3xl mx-auto text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Certification levels
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Bronze through{' '}
            <em className="italic font-normal">Platinum</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl mx-auto">
            All three rating systems use the same four-tier certification structure. Each level requires progressively deeper commitment across all four pillars.
          </p>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { level: 'Bronze', description: 'Foundational commitment. Baseline requirements met across all pillars.' },
              { level: 'Silver', description: 'Meaningful progress with documented outcomes beyond baseline.' },
              { level: 'Gold', description: 'Leadership in equitable practice with innovative approaches.' },
              { level: 'Platinum', description: 'Industry benchmark. Transformative outcomes across every category.' },
            ].map((tier) => (
              <div
                key={tier.level}
                className="rounded-2xl border border-warm-100 p-8 text-left"
              >
                <h3 className="font-display text-[22px] tracking-[-0.02em] text-warm-900 mb-2">
                  {tier.level}
                </h3>
                <p className="text-[14px] leading-relaxed text-warm-500">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CtaBlock() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 max-w-3xl mx-auto">
          Ready to find the right{' '}
          <em className="italic font-normal text-seam-600">track for your project?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-500 max-w-xl mx-auto">
          Whether you are certifying a new building, improving operations at an existing one, or developing an entire neighborhood, there is a path for you.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-warm-900 px-8 py-4 text-[16px] font-medium text-white hover:bg-warm-800 transition-colors duration-300"
          >
            Start your project
          </Link>
          <Link
            to="/resources/standard"
            className="inline-flex items-center rounded-full border border-warm-300 px-8 py-4 text-[16px] font-medium text-warm-700 hover:border-warm-400 transition-colors duration-300"
          >
            Access the Standard
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function RatingSystemsOverview() {
  return (
    <>
      <SEO
        title="Rating Systems — SEAM Standard"
        description="The SEAM Standard includes three rating systems: Buildings + Interiors for new construction, Operations + Maintenance for existing buildings, and Community Development for neighborhood-scale projects. Each measures social equity across four pillars."
        path="/rating-system"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'The Standard', path: '/resources/standard' },
            { name: 'Rating Systems', path: '/rating-system' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      <Overview />
      <RatingSystemCards />
      <PillarsConnection />
      <Levels />
      <CtaBlock />
    </>
  )
}
