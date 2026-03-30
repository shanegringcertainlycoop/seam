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
        src="/icons/pillar-social-impact.png"
        alt=""
        className="absolute right-[5%] bottom-0 translate-y-1/3 w-[clamp(400px,60vw,900px)] pointer-events-none select-none z-30"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-3xl hero-enter">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'The Standard', href: '/resources/standard' },
              { label: 'Social Impact' },
            ]}
          />
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            SEAM Standard Pillar
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Social{' '}
            <em className="font-display italic font-normal text-seam-300">
              Impact
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            Measurable outcomes for people and communities. Social Impact is the pillar that asks the essential question: did this project make life better for the people it touches?
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
            What is Social Impact
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Outcomes that can be{' '}
            <em className="italic font-normal">measured and verified</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Social Impact within the SEAM Standard evaluates the tangible, measurable outcomes a building or development project delivers for the people and communities it serves. It moves beyond intent to evidence — tracking changes in health, education, economic mobility, and housing stability that can be directly attributed to the built environment.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            This pillar ensures that every certified project can demonstrate real, documented improvements in the lives of its occupants, workers, and neighbors.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Credit Areas ─── */
const creditAreas = [
  {
    title: 'Community Health Outcomes',
    description:
      'Track improvements in physical and mental health indicators for building occupants and surrounding communities. Measure access to healthcare services, wellness programming, and healthy building features that reduce chronic disease risk.',
  },
  {
    title: 'Educational Access',
    description:
      'Evaluate how the project expands access to educational resources, workforce training, and lifelong learning opportunities. Assess partnerships with schools, libraries, and training providers that create pathways to knowledge.',
  },
  {
    title: 'Economic Mobility',
    description:
      'Measure the project\'s contribution to income growth, wealth building, and financial stability for residents and local workers. Track job creation, career advancement programs, and access to financial services.',
  },
  {
    title: 'Housing Stability',
    description:
      'Assess protections against involuntary displacement, rent burden, and housing insecurity. Evaluate affordability commitments, tenant protections, and long-term housing preservation strategies.',
  },
  {
    title: 'Displacement Prevention',
    description:
      'Document proactive strategies to prevent cultural and economic displacement of existing community members. Measure anti-displacement investments, community land trusts, and right-to-return policies.',
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
            <em className="italic font-normal">measurable impact</em>
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
      'For new construction and renovations, Social Impact credits evaluate how design decisions — from unit mix to amenity programming — create measurable health, educational, and economic outcomes for future occupants and surrounding neighborhoods.',
  },
  {
    title: 'Operations + Maintenance',
    description:
      'For existing buildings, Social Impact credits measure ongoing outcomes: Are tenants healthier? Are workers earning more? Is the community more stable? Operational practices are evaluated against baseline community indicators.',
  },
  {
    title: 'Community Development',
    description:
      'For neighborhood-scale projects, Social Impact credits assess district-wide outcomes across health, education, housing, and economic mobility. Impact is measured at the population level with longitudinal tracking.',
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
            Buildings shape lives.{' '}
            <em className="italic font-normal text-seam-300">Impact proves it.</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-400 max-w-2xl mx-auto">
            Without measurable impact, social equity commitments remain aspirational. The Social Impact pillar demands evidence — verified outcomes that demonstrate a project is not just well-intentioned, but genuinely effective at improving the conditions of the people it serves.
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
          Ready to measure the{' '}
          <em className="italic font-normal text-seam-600">impact that matters?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-500 max-w-xl mx-auto">
          Explore the full SEAM Standard or start your project today to begin tracking real outcomes for people and communities.
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
export default function SocialImpact() {
  return (
    <>
      <SEO
        title="Social Impact — SEAM Standard Pillar"
        description="The Social Impact pillar of the SEAM Standard measures tangible outcomes for people and communities: health, education, economic mobility, housing stability, and displacement prevention."
        path="/standard/social-impact"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Standard', path: '/resources/standard' },
            { name: 'Social Impact', path: '/standard/social-impact' },
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
