import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import SEO, { breadcrumbSchema } from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative z-20 min-h-[80vh] flex items-center bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      <img
        src="/icons/pillar-social-justice.png"
        alt=""
        className="absolute right-[5%] bottom-0 translate-y-1/3 w-[clamp(400px,60vw,900px)] pointer-events-none select-none z-30"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-3xl hero-enter">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'The Standard', href: '/resources/standard' },
              { label: 'Social Justice' },
            ]}
          />
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            SEAM Standard Pillar
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Social{' '}
            <em className="font-display italic font-normal text-seam-300">
              Justice
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            Addressing systemic inequity through the built environment. Social Justice is the pillar that confronts the historical patterns of exclusion embedded in how we build, zone, and invest.
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
  const headerRef = useReveal()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-3xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            What is Social Justice in the SEAM Standard
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Confronting inequity through{' '}
            <em className="italic font-normal">the built environment</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Social Justice within the SEAM Standard evaluates whether a building or development project actively works to dismantle the systems of exclusion that have shaped the built environment for generations. It recognizes that buildings are not neutral — they are products of zoning, lending, planning, and investment decisions that have historically concentrated harm in specific communities.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            This pillar demands that certified projects move beyond neutrality to become instruments of repair, designing spaces that restore access, preserve culture, and redistribute opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Credit Areas ─── */
const creditAreas = [
  {
    title: 'Anti-Displacement',
    description:
      'Evaluate proactive strategies that prevent the involuntary removal of existing residents, businesses, and cultural institutions. Assess community land trusts, right-to-return policies, and equitable development agreements that protect long-term community stability.',
  },
  {
    title: 'Inclusive Design',
    description:
      'Measure whether the built environment is designed for full participation by people of all abilities, ages, languages, and identities. Assess universal design principles, multilingual wayfinding, gender-inclusive facilities, and culturally responsive spaces.',
  },
  {
    title: 'Equitable Access',
    description:
      'Track whether amenities, services, and opportunities created by the project are accessible to the people who need them most. Evaluate affordability, transportation access, digital connectivity, and public benefit provisions.',
  },
  {
    title: 'Cultural Preservation',
    description:
      'Document how the project honors, protects, and amplifies the cultural identity of the community it inhabits. Assess arts integration, heritage preservation, community narrative spaces, and protections against cultural erasure.',
  },
  {
    title: 'Reparative Development',
    description:
      'Evaluate whether the project explicitly addresses historical harm through its design, programming, and investment structure. Measure wealth-building mechanisms for historically excluded communities, restorative land use, and community ownership models.',
  },
]

function CreditAreas() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Key credit areas
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Five dimensions of{' '}
            <em className="italic font-normal">systemic repair</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creditAreas.map((area, i) => (
            <div
              key={area.title}
              className="reveal-child rounded-2xl bg-white border border-warm-100 p-8 lg:p-10 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <span className="text-[14px] font-medium text-seam-500 mb-4 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">
                {area.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-500">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Cross-Rating-System Applicability ─── */
const ratingSystems = [
  {
    title: 'Buildings + Interiors',
    description:
      'For new construction and renovations, Social Justice credits evaluate how design decisions address historical inequity — from inclusive space planning and universal accessibility to anti-displacement commitments and culturally responsive architecture.',
  },
  {
    title: 'Operations + Maintenance',
    description:
      'For existing buildings, Social Justice credits assess whether ongoing operations actively promote equity — through inclusive programming, accessible services, cultural events, and governance structures that center the voices of historically excluded communities.',
  },
  {
    title: 'Community Development',
    description:
      'For neighborhood-scale projects, Social Justice credits measure systemic impact — anti-displacement at the district level, equitable infrastructure investment, reparative land use policies, and community ownership structures that redistribute power.',
  },
]

function RatingSystems() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Across all three rating systems
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            One pillar,{' '}
            <em className="italic font-normal">three applications</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ratingSystems.map((system) => (
            <div
              key={system.title}
              className="reveal-child rounded-2xl border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
                {system.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why It Matters ─── */
function WhyItMatters() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Why it matters
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
            Neutrality is not equity.{' '}
            <em className="italic font-normal text-seam-300">Buildings must repair.</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-400 max-w-2xl mx-auto">
            The built environment was shaped by redlining, exclusionary zoning, and disinvestment. A building that ignores this history perpetuates it. The Social Justice pillar demands that certified projects actively work to reverse these patterns — not through rhetoric, but through design, investment, and governance decisions that redistribute access and power.
          </p>
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
          Ready to build for{' '}
          <em className="italic font-normal text-seam-600">justice?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-500 max-w-xl mx-auto">
          Explore the full SEAM Standard or start your project today to address systemic inequity through the built environment.
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
export default function SocialJustice() {
  return (
    <>
      <SEO
        title="Social Justice — SEAM Standard Pillar"
        description="The Social Justice pillar of the SEAM Standard addresses systemic inequity through the built environment: anti-displacement, inclusive design, equitable access, cultural preservation, and reparative development."
        path="/standard/social-justice"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Standard', path: '/resources/standard' },
            { name: 'Social Justice', path: '/standard/social-justice' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      <Overview />
      <CreditAreas />
      <RatingSystems />
      <WhyItMatters />
      <CtaBlock />
    </>
  )
}
