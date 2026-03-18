import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="hero-enter max-w-3xl">
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            For Developers &amp; Owners
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Differentiate your asset.{' '}
            <em className="font-display italic font-normal text-seam-300">
              Attract mission-aligned capital.
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            SEAM certification gives developers and owners a measurable, third-party-verified signal that their buildings advance social equity — the metric investors, tenants, and communities increasingly demand.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
            >
              Start a project
            </Link>
            <Link
              to="/certification"
              className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300"
            >
              Explore certification
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Pain Points → Solutions ─── */
const challenges = [
  {
    pain: 'ESG commitments with no social proof',
    solution: 'SEAM certification provides third-party-verified evidence of social equity outcomes — not promises, not policies, but measured performance across four interdependent pillars.',
  },
  {
    pain: 'Tenant and community skepticism',
    solution: 'Certification includes community voice in evaluation. Occupant surveys and neighborhood engagement are built into the verification process — not bolted on as marketing.',
  },
  {
    pain: 'Capital providers asking for social diligence',
    solution: 'SEAM is GRESB-aligned and designed for institutional reporting. The ROSSI Calculator translates social outcomes into the financial language investors and insurers speak.',
  },
  {
    pain: 'Competing certifications that ignore equity',
    solution: 'LEED measures environmental performance. WELL measures wellness. SEAM measures the one dimension they both miss: the relationship between a building and the people it touches.',
  },
]

function Challenges() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            The challenge
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            You know equity matters.{' '}
            <em className="italic font-normal">Now prove it.</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger space-y-6">
          {challenges.map((c) => (
            <div
              key={c.pain}
              className="reveal-child grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 rounded-2xl border border-warm-100 p-8 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-400 mb-3 block">
                  The problem
                </span>
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">
                  {c.pain}
                </h3>
              </div>
              <div>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-seam-600 mb-3 block">
                  How SEAM helps
                </span>
                <p className="text-[16px] leading-relaxed text-warm-500">
                  {c.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Products for You ─── */
const products = [
  {
    label: 'Certification',
    title: 'Full building certification',
    description: 'Bronze through Platinum across Buildings + Interiors, Operations + Maintenance, or Community Development tracks.',
    href: '/certification',
    fit: 'Best for new developments and major renovations where social equity is part of the business plan from day one.',
  },
  {
    label: 'SEAM Approved',
    title: 'Activity-level verification',
    description: 'Verify individual social equity practices without committing to full certification. A standalone credential or a pathway into it.',
    href: '/approved',
    fit: 'Best for existing assets where you want to credential specific programs — local hiring, community advisory boards, procurement policies.',
  },
  {
    label: 'ROSSI Calculator',
    title: 'Financial modeling',
    description: 'Translate social equity outcomes into financial language. Model project-level and portfolio-level impact, GRESB alignment, and insurance risk reduction.',
    href: '/resources/rossi',
    fit: 'Best for capital conversations — investor decks, insurance negotiations, and ESG reporting.',
  },
]

function ProductsForYou() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Your toolkit
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Products built for{' '}
            <em className="italic font-normal">your decisions</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              className="reveal-child group rounded-2xl bg-white p-10 lg:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-seam-600 mb-2 block">
                {p.label}
              </span>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
                {p.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500 mb-6">
                {p.description}
              </p>
              <p className="text-[14px] leading-relaxed text-warm-400 italic border-t border-warm-100 pt-5">
                {p.fit}
              </p>
              <span className="inline-block mt-4 text-[14px] font-medium text-seam-600 group-hover:text-seam-700 transition-colors">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Outcomes ─── */
const outcomes = [
  { metric: 'Reduced turnover', detail: 'Certified buildings report lower vacancy rates because tenants feel genuine investment in community, not just square footage.' },
  { metric: 'Premium positioning', detail: 'Social equity certification differentiates your asset in a market where environmental certifications are table stakes.' },
  { metric: 'Capital alignment', detail: 'GRESB-aligned data and ROSSI modeling give institutional investors the social diligence signal they increasingly require.' },
  { metric: 'Risk mitigation', detail: 'Ongoing community engagement and third-party verification reduce reputational, regulatory, and insurance risk exposure.' },
]

function Outcomes() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            The business case
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Equity is the{' '}
            <em className="italic font-normal">asset strategy</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
          {outcomes.map((o) => (
            <div key={o.metric} className="reveal-child rounded-2xl border border-warm-100 p-8 lg:p-10">
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">
                {o.metric}
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-500">
                {o.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonial ─── */
function Testimonial() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="mx-auto mb-8 w-12 h-12 text-warm-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-white">
            SEAM gave us the language to show our LP group that social equity is not a concession — it is the thesis. Our certified buildings outperform the rest of the portfolio on every retention metric.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Alex Medina</p>
            <p className="text-[14px] text-warm-400 mt-1">
              Managing Partner &middot; Civic Capital Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'How does SEAM certification affect property value?',
    a: 'Certified buildings report reduced vacancy, higher tenant satisfaction, and stronger renewal rates. The ROSSI Calculator models project-level financial impact including insurance risk reduction, GRESB alignment, and tenant retention value.',
  },
  {
    q: 'Is SEAM certification compatible with LEED and WELL?',
    a: 'Yes. SEAM is designed to complement environmental and wellness certifications. Many projects pursue SEAM alongside LEED or WELL — each measures a different dimension of building performance.',
  },
  {
    q: 'What if our building is already built and operating?',
    a: 'The Operations + Maintenance track is specifically designed for existing buildings. It evaluates ongoing practices — procurement, programming, staffing, community engagement — rather than design and construction decisions.',
  },
  {
    q: 'How do investors view SEAM certification?',
    a: 'SEAM provides GRESB-aligned social performance data that institutional investors increasingly require. The ROSSI Calculator translates social outcomes into financial language for investor decks, ESG reports, and insurance negotiations.',
  },
  {
    q: 'Can we start with SEAM Approved before full certification?',
    a: 'Yes. Many developers start by verifying individual practices through SEAM Approved, then pursue full certification as the portfolio matures. Every approved activity counts toward certification credit.',
  },
]

function FAQ() {
  const headerRef = useReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Frequently asked
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Questions from{' '}
            <em className="italic font-normal">developers &amp; owners</em>
          </h2>
        </div>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-warm-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-[17px] lg:text-[18px] font-medium text-warm-900 pr-8">
                  {faq.q}
                </span>
                <svg
                  className={`shrink-0 w-5 h-5 text-warm-400 transition-transform duration-300 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 text-[16px] leading-relaxed text-warm-500 max-w-2xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CtaBlock() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mx-auto">
          Build something{' '}
          <em className="italic font-normal text-seam-300">worth investing in</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Register your project, model the financial case, or talk to our team about what certification looks like for your portfolio.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
          >
            Start a project
          </Link>
          <Link
            to="/resources/rossi"
            className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300"
          >
            Try the ROSSI Calculator
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function DevelopersOwners() {
  return (
    <>
      <SEO
        title="For Developers & Owners"
        description="SEAM certification gives developers and owners a measurable, third-party-verified signal that their buildings advance social equity. Reduce turnover, attract mission-aligned capital, and differentiate your asset."
        path="/for/developers-owners"
        jsonLd={[
          faqSchema(faqItems),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Who We Serve', path: '/for/developers-owners' },
            { name: 'Developers & Owners', path: '/for/developers-owners' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      <Challenges />
      <ProductsForYou />
      <Outcomes />
      <Testimonial />
      <FAQ />
      <CtaBlock />
    </>
  )
}
