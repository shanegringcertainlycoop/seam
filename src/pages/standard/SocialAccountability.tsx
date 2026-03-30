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
        src="/icons/pillar-social-accountability.png"
        alt=""
        className="absolute right-[5%] bottom-0 translate-y-1/3 w-[clamp(400px,60vw,900px)] pointer-events-none select-none z-30"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-3xl hero-enter">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'The Standard', href: '/resources/standard' },
              { label: 'Social Accountability' },
            ]}
          />
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            SEAM Standard Pillar
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Social{' '}
            <em className="font-display italic font-normal text-seam-300">
              Accountability
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            Transparency, reporting, and stakeholder engagement. Social Accountability is the pillar that ensures commitments are kept, progress is visible, and communities have a voice in evaluation.
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
            What is Social Accountability
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Keeping promises{' '}
            <em className="italic font-normal">visible and verifiable</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Social Accountability within the SEAM Standard evaluates whether a building or development project maintains transparency about its social equity commitments and performance. It demands that projects create mechanisms for ongoing reporting, independent verification, and meaningful community participation in evaluation.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            This pillar ensures that certification is not a one-time achievement but a continuous, publicly visible commitment — one that communities can trust because they can see it, question it, and shape it.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Credit Areas ─── */
const creditAreas = [
  {
    title: 'Transparent Reporting',
    description:
      'Evaluate whether social equity data is collected, published, and made accessible to stakeholders. Assess public dashboards, annual impact reports, and data disclosure practices that allow communities to track performance over time.',
  },
  {
    title: 'Stakeholder Engagement',
    description:
      'Measure the depth and authenticity of community participation in project planning, operation, and evaluation. Assess advisory boards, town halls, surveys, and co-design processes that give affected communities genuine decision-making power.',
  },
  {
    title: 'Third-Party Verification',
    description:
      'Document independent review processes that validate social equity claims. Evaluate the use of accredited assessors, peer review, and external audits that ensure performance data is accurate and unbiased.',
  },
  {
    title: 'Grievance Mechanisms',
    description:
      'Assess whether formal channels exist for occupants, workers, and community members to raise concerns, report violations, and seek resolution. Evaluate the accessibility, responsiveness, and independence of complaint processes.',
  },
  {
    title: 'Community Feedback Loops',
    description:
      'Track whether project teams systematically collect, analyze, and act on feedback from the people their buildings serve. Evaluate continuous improvement practices that close the gap between commitment and lived experience.',
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
            <em className="italic font-normal">verified transparency</em>
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
      'For new construction and renovations, Social Accountability credits evaluate the transparency mechanisms designed into the project from the start — public commitments, reporting frameworks, and community engagement processes embedded in the development agreement.',
  },
  {
    title: 'Operations + Maintenance',
    description:
      'For existing buildings, Social Accountability credits assess ongoing transparency — annual impact reports, occupant satisfaction surveys, grievance resolution rates, and the accessibility of performance data to tenants, workers, and neighbors.',
  },
  {
    title: 'Community Development',
    description:
      'For neighborhood-scale projects, Social Accountability credits measure district-wide transparency — community advisory structures, public data dashboards, independent audits, and feedback systems that operate at the scale of the development.',
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
            Trust requires proof.{' '}
            <em className="italic font-normal text-seam-300">Accountability provides it.</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-400 max-w-2xl mx-auto">
            Communities have heard promises before. The Social Accountability pillar ensures that SEAM-certified projects earn trust through action — with transparent data, independent verification, and formal mechanisms that give stakeholders the power to hold project teams to their word.
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
          Ready to build{' '}
          <em className="italic font-normal text-seam-600">transparent trust?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-500 max-w-xl mx-auto">
          Explore the full SEAM Standard or start your project today to embed accountability into every phase of your development.
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
export default function SocialAccountability() {
  return (
    <>
      <SEO
        title="Social Accountability — SEAM Standard Pillar"
        description="The Social Accountability pillar of the SEAM Standard ensures transparency, reporting, and stakeholder engagement: transparent reporting, stakeholder engagement, third-party verification, grievance mechanisms, and community feedback loops."
        path="/standard/social-accountability"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Standard', path: '/resources/standard' },
            { name: 'Social Accountability', path: '/standard/social-accountability' },
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
