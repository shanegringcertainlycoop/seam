import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'

import SEO, { breadcrumbSchema } from '../../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-enter">
            <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
              Building Certification
            </span>
            <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
              Certify that your building{' '}
              <em className="font-display italic font-normal text-seam-300">
                improves human impact
              </em>
            </h1>
            <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
              SEAM Certification is a first-of-its-kind operating system for managing human impact in real estate, from design, construction, and procurement through day-to-day operations.
            </p>
            <div className="hero-cta mt-10 flex flex-wrap gap-4">
              <Link
                to="/get-started"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
              >
                Start certification
              </Link>
              <Link
                to="/resources/standard"
                className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300"
              >
                Access the Standard
              </Link>
            </div>
          </div>

          {/* Certification badges — diagonal cascade */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[420px] h-[420px]">
              {[
                { src: '/logos/cert-bronze.png', alt: 'Bronze certification', style: { width: 220, height: 220, bottom: 0, left: 0 } },
                { src: '/logos/cert-silver.png', alt: 'Silver certification', style: { width: 220, height: 220, bottom: 60, left: 60 } },
                { src: '/logos/cert-gold.png', alt: 'Gold certification', style: { width: 220, height: 220, bottom: 120, left: 120 } },
                { src: '/logos/cert-platinum.png', alt: 'Platinum certification', style: { width: 220, height: 220, bottom: 180, left: 180 } },
              ].map((badge, i) => (
                <img
                  key={badge.alt}
                  src={badge.src}
                  alt={badge.alt}
                  style={{ ...badge.style, zIndex: i }}
                  className="absolute object-contain drop-shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Business Case ─── */
function BusinessCase() {
  const headerRef = useReveal()
  const gapRef = useReveal(0.2)
  const engagementRef = useReveal(0.1)
  const closerRef = useReveal(0.2)

  const s1 = useCountUp(23, { suffix: '%' })
  const s2 = useCountUp(17, { suffix: '%' })
  const s3 = useCountUp(51, { suffix: '%' })
  const s4 = useCountUp(10, { suffix: '%' })

  const engagement = [
    { ...s1, label: 'higher profitability' },
    { ...s2, label: 'higher productivity' },
    { ...s3, label: 'lower employee turnover' },
    { ...s4, label: 'higher customer loyalty' },
  ]

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            The business case
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Equity impacts your bottom line.
          </h2>
        </div>

        {/* The Gap */}
        <div ref={gapRef} className="reveal-fade-up grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="rounded-2xl bg-warm-900 p-10 lg:p-12">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-display text-[clamp(3rem,6vw,5rem)] tracking-[-0.04em] text-white leading-none">
                93%
              </span>
              <span className="font-display text-[clamp(3rem,6vw,5rem)] tracking-[-0.04em] text-warm-600 leading-none">
                vs 8%
              </span>
            </div>
            <p className="text-[17px] leading-relaxed text-warm-400 max-w-md">
              of companies say they have a social value strategy in place — but only 8% can be considered market leaders in delivering measurable results.
            </p>
            <p className="mt-6 text-[13px] text-warm-600">
              JLL Research · 800+ senior decision makers · 12 global markets
            </p>
          </div>

          <div className="rounded-2xl bg-warm-50 p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="font-display text-[clamp(3rem,6vw,5rem)] tracking-[-0.04em] text-seam-600 leading-none block">
                $6.7T
              </span>
              <p className="mt-4 text-[17px] leading-relaxed text-warm-500 max-w-md">
                The potential addressable market for corporate social responsibility in America alone.
              </p>
            </div>
            <p className="mt-6 text-[13px] text-warm-400">
              JLL Research
            </p>
          </div>
        </div>

        {/* Engagement Stats */}
        <div ref={engagementRef} className="reveal-fade-up rounded-2xl border border-warm-100 p-10 lg:p-12 mb-6">
          <p className="text-[17px] text-warm-500 mb-10 max-w-xl">
            Companies that put people first see measurable returns. Highly engaged organizations outperform their peers by:
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {engagement.map((s) => (
              <div key={s.label} className="text-center">
                <span
                  ref={s.ref}
                  className="block font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[-0.04em] text-seam-600"
                >
                  {s.display}
                </span>
                <span className="block mt-2 text-[14px] text-warm-500 uppercase tracking-[0.08em]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[13px] text-warm-400">
            Gallup Q12 Meta-Analysis, 11th Edition · 736 studies
          </p>
        </div>

        {/* McKinsey Closer */}
        <div ref={closerRef} className="reveal-fade-up rounded-2xl bg-seam-900 p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center">
            <span className="font-display text-[clamp(3rem,6vw,5rem)] tracking-[-0.04em] text-white leading-none whitespace-nowrap">
              +7pp
            </span>
            <div>
              <p className="text-[17px] leading-relaxed text-seam-200 max-w-2xl">
                Companies that combine strong ESG performance with revenue growth deliver 7 percentage points higher total shareholder return — and are more than twice as likely to achieve revenue growth above 10% annually.
              </p>
              <p className="mt-4 text-[13px] text-seam-400">
                McKinsey · 2,269 companies · 2017–2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Rating Systems (Tracks) ─── */
const ratingSystems = [
  {
    title: 'Buildings + Interiors:\nDevelopers',
    description:
      'For ground-up construction and major renovations. Evaluates social equity across design, procurement, supply chain, and community impact.',
    audience: 'Developers, ownership groups, capital providers',
  },
  {
    title: 'Buildings + Interiors:\nOccupiers',
    description:
      'For tenants and property owners fitting out a space without landlord duties. Evaluates social equity in how the space is designed, sourced, and built.',
    audience: 'Tenants, interior designers, fit-out contractors',
  },
  {
    title: 'Operations + Maintenance:\nDevelopers',
    description:
      'For building owners acting as landlord. Evaluates governance, community engagement, labor standards, and human rights across ongoing operations.',
    audience: 'Owners, asset managers, portfolio managers',
  },
  {
    title: 'Operations + Maintenance:\nOccupiers',
    description:
      'For tenants managing day-to-day operations without landlord duties. Evaluates how procurement, staffing, and community relationships reflect ongoing social equity commitments.',
    audience: 'Tenants, facility teams, property managers',
  },
]

function Tracks() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Four rating systems
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Choose the rating system that fits{' '}
            <em className="italic font-normal">your project</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ratingSystems.map((t) => (
            <div
              key={t.title}
              className="reveal-child group rounded-2xl border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4 whitespace-pre-line">
                {t.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500 mb-6">
                {t.description}
              </p>
              <span className="text-[14px] text-warm-500">{t.audience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── The Four Pillars ─── */
const pillars = [
  {
    number: '01',
    title: 'Social Impact',
    icon: '/icons/pillar-social-impact.png',
    description:
      'Identify who your project affects, engage them meaningfully, and measure whether your efforts are actually working.',
  },
  {
    number: '02',
    title: 'Social Responsibility',
    icon: '/icons/pillar-social-responsibility.png',
    description:
      'Build equity into how your organization operates through governance practices, community engagement, and social investments that reflect your values.',
  },
  {
    number: '03',
    title: 'Social Justice',
    icon: '/icons/pillar-social-justice.png',
    description:
      'Advance equity and inclusion across procurement, the workplace, the community, and access to capital, while pushing the field forward.',
  },
  {
    number: '04',
    title: 'Social Accountability',
    icon: '/icons/pillar-social-accountability.png',
    description:
      'Uphold human rights across your supply chain, support safe working conditions, and protect the health of the people your project touches.',
  },
]

function Pillars() {
  const headerRef = useReveal()
  const stepsRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            The framework
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Four{' '}
            <em className="italic font-normal">pillars of the SEAM Standard</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Much like your building, social equity is an ecosystem of interdependent efforts. With progress in each SEAM pillar, you move closer to certification.
          </p>
        </div>

        <div ref={stepsRef} className="reveal-stagger">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`reveal-child relative grid grid-cols-1 lg:grid-cols-[80px_auto_1fr] gap-6 lg:gap-12 items-center py-10 lg:py-12 ${
                i < pillars.length - 1 ? 'border-b border-warm-200' : ''
              }`}
            >
              <div>
                <span className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.02em] text-seam-500">
                  {pillar.number}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <img
                  src={pillar.icon}
                  alt=""
                  className="hidden lg:block h-[128px] w-auto object-contain pointer-events-none"
                />
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">
                  {pillar.title}
                </h3>
              </div>
              <div>
                <p className="text-[16px] lg:text-[17px] leading-relaxed text-warm-500">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ─── */
const steps = [
  {
    title: 'Register your project',
    description: 'Submit your project details and select your certification track. Our team will confirm eligibility and assign an initial assessment scope.',
  },
  {
    title: 'Complete the assessment',
    description: 'Work with a SEAM AP to evaluate your building across all four pillars. Document existing practices, identify gaps, and build an implementation plan.',
  },
  {
    title: 'Implement and verify',
    description: 'Execute your plan. A third-party reviewer verifies performance through documentation review and community engagement surveys.',
  },
  {
    title: 'Earn your certification',
    description: 'Receive your Bronze, Silver, Gold, or Platinum certification. O+M certification recertifies every three years to maintain the achievement and demonstrate ongoing commitment.',
  },
]

function HowItWorks() {
  const headerRef = useReveal()
  const timelineRef = useReveal(0.05)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            The process
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            From registration to{' '}
            <em className="italic font-normal">certification</em>
          </h2>
        </div>

        <div ref={timelineRef} className="reveal-stagger relative">
          {/* Vertical spine — hidden on mobile */}
          <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-warm-200" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className="reveal-child group relative grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-12 pb-16 last:pb-0"
            >
              {/* Node */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-warm-200 bg-white group-hover:border-seam-500 transition-colors duration-300">
                  <span className="font-display text-[28px] tracking-[-0.02em] text-seam-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="rounded-2xl border border-warm-100 p-8 lg:p-10 group-hover:border-warm-200 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
                <span className="lg:hidden text-[14px] font-medium text-seam-500 mb-3 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-warm-500 max-w-2xl">
                  {step.description}
                </p>
                {i === 0 && (
                  <Link
                    to="/get-started"
                    className="inline-flex items-center mt-5 rounded-full bg-warm-900 px-6 py-3 text-[14px] font-medium text-white hover:bg-warm-800 transition-colors duration-300"
                  >
                    Register now &rarr;
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── What Makes SEAM Different ─── */
const differentiators = [
  {
    title: 'Social equity, not just sustainability',
    description: 'Environmental certifications measure how a building performs for the planet. Wellness certifications measure how it performs for physical health. SEAM complements both by measuring how it performs for people, communities, and those in the supply chain the building touches.',
  },
  {
    title: 'A holistic approach',
    description: "Each certification level reflects demonstrated progress across all four pillars. The path to Platinum is built on transformative, long-term solutions across the Standard's pillars.",
  },
  {
    title: 'Community voice in evaluation',
    description: "Certification isn't just a paperwork exercise. SEAM includes activities that incorporate direct surveys and interviews with occupants, workers, and neighbors.",
  },
  {
    title: 'Ongoing verification',
    description: 'SEAM Operation + Maintenance Certification requires recertification every three years. Buildings must demonstrate sustained commitment to social equity.',
  },
]

function Differentiators() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            What makes us different
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            <em className="italic font-normal">The only social equity standard for real estate</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentiators.map((d) => (
            <div key={d.title} className="reveal-child rounded-2xl bg-white p-5 sm:p-8 lg:p-10">
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">
                {d.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-500">
                {d.description}
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
            [SEAM Certification] reflects our belief that real estate carries a responsibility for strengthening neighborhoods, advancing fair business practices, and creating spaces designed to support the people who rely on them.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Greg Smith</p>
            <p className="text-[14px] text-warm-400 mt-1">
              CEO, Urban Visions &middot; The Jack
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing (placeholder) ─── */
function Pricing() {
  const headerRef = useReveal()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Frequently asked
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Pricing
          </h2>
        </div>
        <div className="mt-16 bg-warm-50 rounded-2xl h-[300px] flex items-center justify-center">
          <p className="text-[15px] text-warm-400 italic">
            Pricing details — coming soon
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function Certification() {
  return (
    <>
      <SEO
        title="SEAM Certification"
        description="SEAM Certification is the first system that measures social equity in the built environment. Bronze through Platinum certification across four rating systems."
        path="/certification"
        jsonLd={
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Certification', path: '/certification' },
          ])
        }
      />
      <Hero />
      <BusinessCase />
      <Pillars />
      <HowItWorks />
      <Differentiators />
      <Tracks />
      <Testimonial />
      <Pricing />
    </>
  )
}
