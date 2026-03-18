import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'
import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-enter">
            <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
              Activity-Level Verification
            </span>
            <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
              Verify the equity work{' '}
              <em className="font-display italic font-normal text-seam-300">
                you already do
              </em>
            </h1>
            <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
              SEAM Approved verifies individual social equity activities without requiring full building certification. A standalone credential or a natural on-ramp into it.
            </p>
            <div className="hero-cta mt-10 flex flex-wrap gap-4">
              <Link
                to="/get-started"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
              >
                Get SEAM Approved
              </Link>
              <Link
                to="/certification"
                className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300"
              >
                Compare to full certification
              </Link>
            </div>
          </div>

          {/* Checkmark badge */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full border border-seam-500/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-0 -m-16 rounded-full border border-seam-400/10 animate-[spin_45s_linear_infinite_reverse]" />
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-seam-600 to-seam-800 flex flex-col items-center justify-center shadow-2xl shadow-seam-900/40">
                <svg className="w-20 h-20 text-white mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
                <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-200">
                  Approved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const s1 = useCountUp(50, { suffix: '+' })
  const s2 = useCountUp(4, { suffix: '' })
  const s3 = useCountUp(1, { suffix: '' })
  const ref = useReveal(0.2)

  const stats = [
    { ...s1, label: 'Verifiable activities' },
    { ...s2, label: 'Pillar categories' },
    { ...s3, label: 'Activity at a time' },
  ]

  return (
    <section ref={ref} className="reveal-fade-up bg-warm-50 border-b border-warm-100">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span
                ref={s.ref}
                className="block font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] text-seam-600"
              >
                {s.display}
              </span>
              <span className="block mt-1 text-[14px] text-warm-500 uppercase tracking-[0.08em]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It's Different ─── */
const comparisons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: 'Start with one activity',
    description: "Full certification evaluates your entire building across four pillars. SEAM Approved lets you verify a single practice — like a local hiring program, an air quality protocol, or a community advisory board — and build from there.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: 'Faster turnaround',
    description: "Activity verification takes weeks, not months. Submit documentation for a specific practice, receive third-party review, and earn your SEAM Approved credential on a timeline that fits operational cycles.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    title: 'A natural on-ramp',
    description: "Every SEAM Approved activity counts toward full certification. As you verify more practices, you accumulate credit across the four pillars — making the step to Bronze, Silver, Gold, or Platinum smaller each time.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Standalone credibility',
    description: "SEAM Approved is a real credential, not a participation trophy. Third-party verified, publicly listed, and recognized by capital providers and compliance teams as a diligence signal for social performance.",
  },
]

function HowItsDifferent() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            How it works
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Full certification is not the only{' '}
            <em className="italic font-normal">path forward</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparisons.map((c) => (
            <div
              key={c.title}
              className="reveal-child group rounded-2xl border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="text-seam-600 mb-6">{c.icon}</div>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
                {c.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Example Activities ─── */
const activities = [
  { pillar: 'Health + Wellness', examples: ['Indoor air quality monitoring program', 'Biophilic design integration', 'Mental health and restorative space access', 'Thermal comfort and occupant control'] },
  { pillar: 'Economic Equity', examples: ['Local and diverse procurement policy', 'Living wage commitment', 'Workforce development and apprenticeship', 'Community wealth-building partnership'] },
  { pillar: 'Accessibility + Inclusion', examples: ['Universal design beyond code compliance', 'Multilingual wayfinding and signage', 'Digital accessibility standards', 'Culturally responsive programming'] },
  { pillar: 'Community + Culture', examples: ['Community advisory board governance', 'Arts and cultural integration', 'Public benefit and open-access provisions', 'Neighborhood engagement reporting'] },
]

function ExampleActivities() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            What you can verify
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Activities across{' '}
            <em className="italic font-normal">all four pillars</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Choose any activity from the SEAM Standard. Each verified activity earns credit toward its pillar — and toward full certification if you decide to pursue it.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((a) => (
            <div key={a.pillar} className="reveal-child rounded-2xl bg-white p-8 lg:p-10">
              <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.02em] text-warm-900 mb-5">
                {a.pillar}
              </h3>
              <ul className="space-y-3">
                {a.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2.5 text-[15px] leading-snug text-warm-500">
                    <svg className="shrink-0 w-4 h-4 mt-0.5 text-seam-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── The Process ─── */
const steps = [
  {
    number: '01',
    title: 'Select an activity',
    description: 'Browse the SEAM Standard and choose the activity that best represents the social equity work your organization is already doing or plans to implement.',
  },
  {
    number: '02',
    title: 'Submit documentation',
    description: 'Provide evidence of implementation: policies, program data, third-party agreements, occupant feedback, or operational records that demonstrate the activity in practice.',
  },
  {
    number: '03',
    title: 'Third-party review',
    description: 'An independent reviewer evaluates your submission against the Standard. Reviewers may request additional documentation or clarification before issuing a determination.',
  },
  {
    number: '04',
    title: 'Earn your credential',
    description: 'Receive the SEAM Approved mark for the verified activity. Your organization is listed in the SEAM directory. Repeat for additional activities at any time.',
  },
]

function Process() {
  const headerRef = useReveal()
  const stepsRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            The process
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Four steps to{' '}
            <em className="italic font-normal">verification</em>
          </h2>
        </div>

        <div ref={stepsRef} className="reveal-stagger">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal-child grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-12 ${
                i < steps.length - 1 ? 'border-b border-warm-200' : ''
              }`}
            >
              <div className="lg:col-span-1">
                <span className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.02em] text-seam-500">
                  {step.number}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[16px] lg:text-[17px] leading-relaxed text-warm-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Who It's For ─── */
const audiences = [
  {
    title: 'Property managers',
    description: 'Turn the equity programs you already run into a verified credential. Strengthen lease renewals and demonstrate value to ownership without a full certification commitment.',
  },
  {
    title: 'Anchor institutions',
    description: 'Hospitals, universities, and civic buildings can verify community benefit practices — local hiring, procurement policies, public access — one activity at a time.',
  },
  {
    title: 'Operators exploring certification',
    description: "Not sure if full certification is right for your building? Start with SEAM Approved. Every verified activity counts toward certification if you decide to pursue it later.",
  },
  {
    title: 'Portfolio managers',
    description: 'Roll out SEAM Approved across multiple properties as a portfolio-wide social equity baseline before committing individual buildings to full certification.',
  },
]

function WhoItsFor() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Who it serves
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Built for organizations{' '}
            <em className="italic font-normal">ready to start</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a) => (
            <div key={a.title} className="reveal-child rounded-2xl bg-white p-8 lg:p-10">
              <h3 className="font-display text-[20px] tracking-[-0.02em] text-warm-900 mb-3">
                {a.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-500">
                {a.description}
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
            We got SEAM Approved for our local hiring program in six weeks. It gave our ownership group the proof they needed to expand the program across the portfolio.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Damon Reeves</p>
            <p className="text-[14px] text-warm-400 mt-1">
              Director of Operations &middot; Meridian Property Group
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
    q: 'How is SEAM Approved different from full certification?',
    a: 'Full certification evaluates your entire building across all four pillars. SEAM Approved verifies a single activity at a time. Both are third-party verified and publicly listed, but Approved is faster, more focused, and lower commitment.',
  },
  {
    q: 'Does SEAM Approved count toward full certification?',
    a: 'Yes. Every verified activity earns credit toward its pillar. If you later pursue full certification, your SEAM Approved activities carry forward — reducing the scope and timeline of the certification process.',
  },
  {
    q: 'How long does verification take?',
    a: 'Most activity verifications are completed within four to six weeks from documentation submission. Timeline depends on the complexity of the activity and the completeness of your initial submission.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing is per activity. Commons members receive discounted verification fees. Volume pricing is available for organizations verifying multiple activities or rolling out Approved across a portfolio.',
  },
  {
    q: 'Do we need a SEAM AP for activity verification?',
    a: 'No. A SEAM AP is not required for SEAM Approved submissions. However, working with an AP can strengthen your documentation and increase the likelihood of first-submission approval.',
  },
  {
    q: 'How long does the credential last?',
    a: 'SEAM Approved credentials are valid for three years. Renewal requires updated documentation demonstrating that the verified activity remains in practice.',
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
            Questions about{' '}
            <em className="italic font-normal">SEAM Approved</em>
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
          Start with one activity.{' '}
          <em className="italic font-normal text-seam-300">Build from there.</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Verify the social equity work your building already does — or take the first step toward full certification.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
          >
            Get SEAM Approved
          </Link>
          <Link
            to="/certification"
            className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300"
          >
            Explore full certification
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function Approved() {
  return (
    <>
      <SEO
        title="SEAM Approved"
        description="SEAM Approved verifies individual social equity activities without requiring full building certification. A standalone credential or a natural on-ramp to full SEAM certification."
        path="/approved"
        jsonLd={[
          faqSchema(faqItems),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/certification' },
            { name: 'SEAM Approved', path: '/approved' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      <StatsBar />
      <HowItsDifferent />
      <ExampleActivities />
      <Process />
      <WhoItsFor />
      <Testimonial />
      <FAQ />
      <CtaBlock />
    </>
  )
}
