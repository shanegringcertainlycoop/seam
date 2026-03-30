import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'
import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-enter">
            <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
              Financial Modeling Tool
            </span>
            <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
              ROSSI&trade;{' '}
              <em className="font-display italic font-normal text-seam-300">Calculator</em>
            </h1>
            <p className="hero-subtitle mt-4 text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-warm-400">
              Return on Social Sustainability Investment
            </p>
            <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
              Translate social equity outcomes into the financial language decision-makers use. Model project-level and portfolio-level impact in less than 20 questions.
            </p>
            <div className="hero-cta mt-10 flex flex-wrap gap-4">
              <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
                Calculate your ROSSI
              </Link>
              <a href="#methodology" className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300">
                Explore the methodology
              </a>
            </div>
          </div>

          {/* Calculator visual */}
          <div className="hidden lg:flex justify-center">
            <div className="w-80 rounded-2xl bg-warm-800/50 border border-warm-700/50 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-3 rounded-full bg-seam-600/40 w-full" />
                <div className="h-3 rounded-full bg-seam-600/30 w-4/5" />
                <div className="h-3 rounded-full bg-seam-600/20 w-3/5" />
              </div>
              <div className="mt-8 pt-6 border-t border-warm-700/50">
                <p className="text-[13px] text-warm-500 uppercase tracking-[0.1em]">Projected return</p>
                <p className="mt-2 font-display text-[40px] tracking-[-0.04em] text-seam-400">+18.4%</p>
                <p className="text-[14px] text-warm-500">portfolio social equity ROI</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[12px] text-warm-500 uppercase tracking-[0.08em]">Retention</p>
                  <p className="font-display text-[20px] text-warm-200">+12%</p>
                </div>
                <div>
                  <p className="text-[12px] text-warm-500 uppercase tracking-[0.08em]">Risk</p>
                  <p className="font-display text-[20px] text-warm-200">-23%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */
function StatsBar() {
  const s1 = useCountUp(20, { suffix: '' })
  const s2 = useCountUp(100, { suffix: 's' })
  const s3 = useCountUp(4, { suffix: '' })
  const ref = useReveal(0.2)
  const stats = [
    { ...s1, label: 'Questions or fewer' },
    { ...s2, label: 'Research studies reviewed' },
    { ...s3, label: 'Financial dimensions modeled' },
  ]
  return (
    <section ref={ref} className="reveal-fade-up bg-warm-50 border-b border-warm-100">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span ref={s.ref} className="block font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] text-gold-500">{s.display}</span>
              <span className="block mt-1 text-[14px] text-warm-500 uppercase tracking-[0.08em]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── The Business Case ─── */
function BusinessCase() {
  const headerRef = useReveal()
  const contentRef = useReveal()
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={headerRef} className="reveal-slide-left">
            <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">The problem</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
              Proving equitable business{' '}<em className="italic font-normal">is good business</em>
            </h2>
          </div>
          <div ref={contentRef} className="reveal-fade-up">
            <p className="text-[17px] leading-relaxed text-warm-500">
              Social sustainability drives both business and societal success, but quantifying the financial impact has always been the hard part. Investors ask for numbers. Boards ask for projections. Insurance underwriters ask for risk models.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-warm-500">
              ROSSI bridges that gap — connecting social equity strategies to financial performance so you can make the case with data, not just conviction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── What ROSSI Models ─── */
const dimensions = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: 'Tenant retention value',
    description: 'Model the financial impact of reduced vacancy and turnover. Certified buildings report higher tenant satisfaction and stronger renewal rates — ROSSI quantifies that in dollars.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Insurance risk reduction',
    description: 'Community engagement and social equity practices reduce claims and reputational risk. ROSSI models the insurance cost impact of verified social performance.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: 'Operating cost impact',
    description: 'Inclusive design, local procurement, and community programming create efficiency gains. ROSSI identifies the operating cost implications of social equity investment.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: 'ESG scoring improvement',
    description: 'GRESB-aligned social performance data improves your ESG scores. ROSSI models the scoring impact at project and portfolio level for investor and compliance reporting.',
  },
]

function WhatItModels() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Four dimensions</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            What ROSSI{' '}<em className="italic font-normal">models</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
          {dimensions.map((d) => (
            <div key={d.title} className="reveal-child group rounded-2xl bg-white p-10 lg:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="text-gold-500 mb-6">{d.icon}</div>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">{d.title}</h3>
              <p className="text-[16px] leading-relaxed text-warm-500">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Methodology ─── */
function Methodology() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section id="methodology" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">The methodology</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Built on research.{' '}<em className="italic font-normal">Grounded in evidence.</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="reveal-child rounded-2xl border border-warm-100 p-10 lg:p-12">
            <span className="font-display text-[40px] tracking-[-0.04em] text-gold-500">100s</span>
            <p className="mt-2 text-[14px] text-warm-500 uppercase tracking-[0.08em] mb-6">Studies reviewed</p>
            <p className="text-[16px] leading-relaxed text-warm-500">
              We examined hundreds of studies, whitepapers, and reports on the direct relationship between social sustainability and financial performance. All research from 2019 to 2024.
            </p>
          </div>
          <div className="reveal-child rounded-2xl border border-warm-100 p-10 lg:p-12">
            <span className="font-display text-[40px] tracking-[-0.04em] text-gold-500">NYU</span>
            <p className="mt-2 text-[14px] text-warm-500 uppercase tracking-[0.08em] mb-6">Stern ROSI foundation</p>
            <p className="text-[16px] leading-relaxed text-warm-500">
              ROSSI builds on NYU Stern Center for Sustainable Business&apos;s ROSI&trade; Methodology — the framework used by corporate leaders and investors to bridge sustainability and financial performance.
            </p>
          </div>
          <div className="reveal-child rounded-2xl border border-warm-100 p-10 lg:p-12">
            <span className="font-display text-[40px] tracking-[-0.04em] text-gold-500">4</span>
            <p className="mt-2 text-[14px] text-warm-500 uppercase tracking-[0.08em] mb-6">Pillar alignment</p>
            <p className="text-[16px] leading-relaxed text-warm-500">
              While NYU ROSI covers all ESG factors, ROSSI focuses specifically on social factors aligned with the four pillars of the SEAM Standard — making results directly actionable for certification decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Who Uses ROSSI ─── */
const users = [
  { title: 'Developers and owners', description: 'Model the business case for SEAM certification before committing. Show investors and boards that social equity investment has measurable financial returns.' },
  { title: 'Capital providers', description: 'Evaluate social performance in financial terms for acquisition diligence, fund mandates, and portfolio reporting. GRESB-aligned scoring at project and portfolio level.' },
  { title: 'Property managers', description: 'Quantify the retention and operating cost impact of existing equity programs. Build the case for expanding social equity initiatives to ownership.' },
  { title: 'Consultants and APs', description: 'Include ROSSI modeling in client proposals and certification scoping. Financial projections strengthen the business case for SEAM engagement.' },
]

function WhoUsesIt() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Who uses ROSSI</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            The financial case for{' '}<em className="italic font-normal">every stakeholder</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((u) => (
            <div key={u.title} className="reveal-child rounded-2xl bg-white p-8 lg:p-10">
              <h3 className="font-display text-[20px] tracking-[-0.02em] text-warm-900 mb-3">{u.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{u.description}</p>
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
          <svg className="mx-auto mb-8 w-12 h-12 text-warm-600" fill="currentColor" viewBox="0 0 24 24"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" /></svg>
          <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-white">
            ROSSI gave us a way to present social equity to our investment committee in the only language they respond to — returns. The portfolio model showed a twelve percent retention lift and a twenty-three percent risk reduction across certified assets.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Sarah Kowalski</p>
            <p className="text-[14px] text-warm-400 mt-1">Head of ESG &middot; Northbridge Capital Advisors</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  { q: 'Is ROSSI free to use?', a: 'Basic ROSSI access is included with Community Practitioner membership and all organization tiers. The full portfolio modeling tool is available with Builder and Steward organization membership.' },
  { q: 'How long does it take to complete?', a: 'The core calculator takes less than 20 questions. Project-level modeling can be completed in a single session. Portfolio-level analysis may take longer depending on the number of properties.' },
  { q: 'What data do I need to get started?', a: 'Basic property information: building size, occupancy type, tenant count, and current social equity programs. The calculator guides you through each input — no financial modeling expertise required.' },
  { q: 'How does ROSSI relate to GRESB?', a: 'ROSSI outputs are aligned with GRESB social indicators. The portfolio model generates GRESB-ready data that feeds directly into your annual submission without manual translation.' },
  { q: 'Can I use ROSSI results in investor presentations?', a: 'Yes. ROSSI generates presentation-ready outputs including projected ROI, retention impact, risk reduction estimates, and GRESB alignment scoring. Many users include ROSSI models in investor decks, board presentations, and acquisition proposals.' },
  { q: 'Is the methodology peer-reviewed?', a: 'ROSSI is built on peer-reviewed research from 2019 to 2024 and extends the NYU Stern ROSI methodology. The SEAM advisory council reviews and updates the underlying research base annually.' },
]

function FAQ() {
  const headerRef = useReveal()
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Frequently asked</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Questions about{' '}<em className="italic font-normal">ROSSI</em>
          </h2>
        </div>
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-warm-200">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`faq-answer-${i}`} className="flex w-full items-center justify-between py-6 text-left">
                <span className="text-[17px] lg:text-[18px] font-medium text-warm-900 pr-8">{faq.q}</span>
                <svg className={`shrink-0 w-5 h-5 text-warm-400 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              </button>
              <div id={`faq-answer-${i}`} role="region" className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden"><p className="pb-6 text-[16px] leading-relaxed text-warm-500 max-w-2xl">{faq.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBlock() {
  const ref = useReveal()
  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mx-auto">
          Social equity has a{' '}<em className="italic font-normal text-seam-300">return on investment</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">Calculate yours in less than 20 questions. Free with community membership.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Calculate your ROSSI</Link>
          <Link to="/community" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Join the community</Link>
        </div>
      </div>
    </section>
  )
}

const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function Rossi() {
  return (
    <>
      <SEO title="ROSSI Calculator" description="Return on Social Sustainability Investment. Translate social equity outcomes into financial language. Model tenant retention, insurance risk reduction, operating costs, and ESG scoring at project and portfolio level." path="/resources/rossi"
        jsonLd={[faqSchema(faqItems), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources/rossi' }, { name: 'ROSSI Calculator', path: '/resources/rossi' }])] as unknown as Record<string, unknown>} />
      <Hero />
      <StatsBar />
      <BusinessCase />
      <WhatItModels />
      <Methodology />
      <WhoUsesIt />
      <Testimonial />
      <FAQ />
      <CtaBlock />
    </>
  )
}
