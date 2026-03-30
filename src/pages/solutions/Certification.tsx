import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'

import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

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
                advances social equity
              </em>
            </h1>
            <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
              SEAM Certification is the first system that measures what matters most about the places we live and work — whether they serve the people inside them. Bronze through Platinum across three tracks.
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

/* ─── Certification Tracks ─── */
const tracks = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: 'Buildings + Interiors',
    description:
      'For new construction, major renovations, and interior fit-outs. Evaluates how the physical environment is designed and built to advance social equity from day one.',
    audience: 'Developers, architects, owners',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: 'Operations + Maintenance',
    description:
      'For existing buildings seeking certification based on how they operate. Measures ongoing practices in procurement, programming, staffing, and community engagement.',
    audience: 'Property managers, facility teams',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Community Development',
    description:
      'For neighborhood-scale initiatives, campuses, and districts. Evaluates how development projects engage, employ, and create wealth for the communities they touch.',
    audience: 'Anchor institutions, CDFIs, municipalities',
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
            Three tracks
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Choose the track that fits{' '}
            <em className="italic font-normal">your project</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <div
              key={t.title}
              className="reveal-child group rounded-2xl border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="text-gold-500 mb-6">{t.icon}</div>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
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
    title: 'Social Accountability',
    description:
      'Indoor environments that protect and promote the physical and mental health of every occupant, worker, and visitor. Air quality, thermal comfort, biophilic design, and restorative space.',
  },
  {
    number: '02',
    title: 'Social Responsibility',
    description:
      'Procurement, employment, and wealth-building practices that create opportunity for historically excluded communities. Local hiring, diverse supply chains, living wages.',
  },
  {
    number: '03',
    title: 'Social Justice',
    description:
      'Spaces designed so that everyone can participate fully, regardless of ability, language, or identity. Universal design, wayfinding, cultural responsiveness, and digital access.',
  },
  {
    number: '04',
    title: 'Social Impact',
    description:
      'Programming and governance that honor the social fabric of the neighborhoods buildings inhabit. Community voice in evaluation, arts integration, public benefit provisions.',
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
            <em className="italic font-normal">pillars</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Much like your building, social equity is an ecosystem of interdependent efforts. With progress in each SEAM pillar, you move closer to certification.
          </p>
        </div>

        <div ref={stepsRef} className="reveal-stagger">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`reveal-child grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-12 ${
                i < pillars.length - 1 ? 'border-b border-warm-200' : ''
              }`}
            >
              <div className="lg:col-span-1">
                <span className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.02em] text-seam-500">
                  {pillar.number}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">
                  {pillar.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
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
    description: 'Execute your plan. A third-party reviewer verifies performance through documentation review, site visits, and community engagement surveys.',
  },
  {
    title: 'Earn your certification',
    description: 'Receive your Bronze, Silver, Gold, or Platinum certification. Recertify every three years to maintain your credential and demonstrate ongoing commitment.',
  },
]

function HowItWorks() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

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

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="reveal-child rounded-2xl border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <span className="text-[14px] font-medium text-seam-500 mb-4 block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
                {step.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500">
                {step.description}
              </p>
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
    description: 'LEED measures environmental performance. WELL measures wellness. SEAM is the perfect complement to measure the relationship between a building and the people it touches.',
  },
  {
    title: 'A holistic approach',
    description: "You can't earn Platinum in one pillar and ignore the others. Every certification level requires demonstrated progress across all four pillars.",
  },
  {
    title: 'Community voice in evaluation',
    description: "Certification isn't just a paperwork exercise. Third-party verification includes surveys and interviews with occupants, workers, and neighbors.",
  },
  {
    title: 'Ongoing verification',
    description: 'SEAM certification requires recertification every three years. Buildings must demonstrate sustained commitment, not a one-time achievement.',
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
            <em className="italic font-normal">A social equity standard.</em>
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

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'How long does certification take?',
    a: 'Timeline varies by track and project complexity. Buildings + Interiors typically takes 12 to 18 months from registration to certification. Operations + Maintenance can be faster for buildings with existing social equity programs.',
  },
  {
    q: 'How much does certification cost?',
    a: 'Pricing is based on project size and track. Registration fees cover the initial assessment scope. Verification fees are separate. Community members and portfolio subscribers receive discounted rates.',
  },
  {
    q: 'Do we need a SEAM AP on our team?',
    a: 'At least one SEAM Accredited Professional must be on the project team for full certification submissions. APs guide the assessment process, identify gaps, and prepare documentation for third-party review.',
  },
  {
    q: 'How is SEAM different from LEED or WELL?',
    a: 'SEAM is complementary, not competitive. LEED measures environmental performance. WELL measures occupant wellness. SEAM measures social equity — the relationship between a building and the communities it touches. Many projects pursue multiple certifications.',
  },
  {
    q: 'What are the certification levels?',
    a: 'Bronze, Silver, Gold, and Platinum. Each level requires increasing performance across all four pillars. Scoring is interdependent — you cannot earn a high level by excelling in one pillar while ignoring others.',
  },
  {
    q: 'How often do we need to recertify?',
    a: 'Every three years. Recertification verifies ongoing commitment through updated documentation, occupant surveys, and evidence of continued community engagement. Buildings must demonstrate sustained performance, not a one-time achievement.',
  },
]

function FAQ() {
  const headerRef = useReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-warm-50 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          <div>
            <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
              <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
                Frequently asked
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
                Questions about{' '}
                <em className="italic font-normal">certification</em>
              </h2>
            </div>

            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-warm-200">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
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
                    id={`faq-answer-${i}`}
                    role="region"
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

          <div className="hidden lg:block sticky top-32">
            <img
              src="/images/faq-certification.jpg"
              alt="The Jack — a SEAM-certified building in the city skyline"
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
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
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mx-auto">
          Ready to certify a building that{' '}
          <em className="italic font-normal text-seam-300">serves its community?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Register your project today or download the Standard to explore the framework on your own terms.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
          >
            Register your project
          </Link>
          <Link
            to="/resources/standard"
            className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300"
          >
            Access the Standard
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function Certification() {
  return (
    <>
      <SEO
        title="SEAM Certification"
        description="SEAM Certification is the first system that measures social equity in the built environment. Bronze through Platinum certification across three tracks: Buildings + Interiors, Operations + Maintenance, and Community Development."
        path="/certification"
        jsonLd={[
          faqSchema(faqItems),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Certification', path: '/certification' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      {/* StatsBar removed */}
      <Tracks />
      <Pillars />
      <HowItWorks />
      <Differentiators />
      <Testimonial />
      <FAQ />
      <CtaBlock />
    </>
  )
}
