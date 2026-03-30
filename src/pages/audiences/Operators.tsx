import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-operators.jpg"
          alt="Property management and facility operations"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="hero-enter max-w-4xl mx-auto text-center">
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            For Property Managers &amp; Facility Teams
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Turn the work you already do into{' '}
            <em className="font-display italic font-normal text-seam-300">a recognized mark.</em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl mx-auto text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            Your building already runs community programs, maintains vendor relationships, and responds to tenant needs. SEAM gives you a way to measure, verify, and communicate that work.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/approved" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
              Get SEAM Approved
            </Link>
            <Link to="/certification" className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300">
              Explore full certification
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const challenges = [
  {
    pain: 'Good work with no visibility',
    solution: 'You run community hiring programs, maintain inclusive vendor lists, and respond to tenant needs daily. SEAM Approved verifies these practices individually so ownership, tenants, and the market can see what you do.',
  },
  {
    pain: 'Lease renewals need a stronger story',
    solution: 'Tenants increasingly choose buildings that reflect their values. A SEAM credential gives you a tangible differentiator in renewal conversations — not a brochure promise, but third-party-verified performance.',
  },
  {
    pain: 'Ownership wants ESG data you cannot produce',
    solution: 'SEAM certification generates standardized social performance data that feeds directly into ESG reports, GRESB submissions, and investor updates — no custom spreadsheets required.',
  },
  {
    pain: 'Full certification feels overwhelming',
    solution: "Start with SEAM Approved. Verify one activity — a local procurement policy, an air quality protocol, a community advisory board. Every approved activity counts toward full certification if you pursue it later.",
  },
]

function Challenges() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">The challenge</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            You run the building.{' '}<em className="italic font-normal">Now get credit for it.</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger space-y-6">
          {challenges.map((c) => (
            <div key={c.pain} className="reveal-child grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 rounded-2xl border border-warm-100 p-5 sm:p-8 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-500 mb-3 block">The problem</span>
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">{c.pain}</h3>
              </div>
              <div>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-gold-500 mb-3 block">How SEAM helps</span>
                <p className="text-[16px] leading-relaxed text-warm-500">{c.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const products = [
  { label: 'SEAM Approved', title: 'Start with what you have', description: 'Verify individual practices — local hiring, community programs, accessibility improvements — without full certification commitment.', href: '/approved', fit: 'Best for teams wanting quick wins and visible proof of existing equity work.', logo: '/logos/approved-wordmark.png' },
  { label: 'Certification', title: 'Operations + Maintenance track', description: 'Full certification for existing buildings based on how they operate — procurement, programming, staffing, and community engagement.', href: '/certification', fit: 'Best for buildings ready to demonstrate comprehensive social equity performance.', logo: '/logos/cert-platinum.png' },
  { label: 'Community', title: 'Membership community', description: 'Templates, peer learning, ROSSI access, and ongoing support for teams implementing the Standard across their portfolio.', href: '/community', fit: 'Best for teams managing multiple properties or pursuing certification at scale.', logo: '/logos/member-individual.png' },
]

function ProductIcon({ logo }: { logo?: string }) {
  if (!logo) return null
  const isApproved = logo.includes('approved-wordmark')
  const isMember = logo.includes('member-')
  return (
    <div className="absolute -top-7 right-4 sm:-top-8 sm:right-8">
      {isMember ? (
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden drop-shadow-sm">
          <img src={logo} alt="" className="w-full h-full object-cover scale-[1.35]" />
        </div>
      ) : (
        <img src={logo} alt="" className={`w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-sm ${isApproved ? 'bg-[#01313d] rounded-lg p-2' : ''}`} />
      )}
    </div>
  )
}

function ProductsForYou() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Your toolkit</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Products built for{' '}<em className="italic font-normal">operations teams</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
          {products.map((p) => (
            <Link key={p.href} to={p.href} className="reveal-child group relative overflow-visible rounded-2xl bg-white border border-warm-100 p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <ProductIcon logo={p.logo} />
              <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-gold-500 mb-2 block">{p.label}</span>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">{p.title}</h3>
              <p className="text-[16px] leading-relaxed text-warm-500 mb-6">{p.description}</p>
              <p className="text-[14px] leading-relaxed text-warm-500 italic border-t border-warm-100 pt-5">{p.fit}</p>
              <span className="inline-block mt-4 text-[14px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  const ref = useReveal()
  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="mx-auto mb-8 w-12 h-12 text-warm-600" fill="currentColor" viewBox="0 0 24 24"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" /></svg>
          <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-white">
            We got SEAM Approved for our community advisory board and local vendor program in the same quarter. When renewal season came, we had something concrete to show tenants beyond square footage and amenities.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Lisa Chen</p>
            <p className="text-[14px] text-warm-400 mt-1">Senior Property Manager &middot; Vantage Communities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'Do we need ownership approval to pursue SEAM?', a: 'SEAM Approved can often be pursued at the property management level for existing programs. Full certification typically requires ownership involvement, but starting with Approved gives you verified results to bring to that conversation.' },
  { q: 'How much time does this add to our workload?', a: "SEAM Approved verifies practices you're already running. The documentation effort is modest — most teams complete a submission in a few hours. Full certification is more involved but spreads across 12 to 18 months." },
  { q: 'What if our building is older and not ADA-perfect?', a: 'The Standard evaluates progress, not perfection. The Accessibility + Inclusion pillar includes universal design improvements, digital access, multilingual wayfinding, and cultural responsiveness — not just physical code compliance.' },
  { q: 'Can we verify practices across multiple properties?', a: 'Yes. Community membership includes portfolio tools for rolling out SEAM Approved across multiple properties. Volume pricing is available for organizations verifying the same activity across a portfolio.' },
  { q: 'How does this help with GRESB reporting?', a: 'SEAM certification generates standardized social performance data aligned with GRESB social indicators. This data feeds directly into your GRESB submission without manual translation.' },
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
            Questions from{' '}<em className="italic font-normal">operations teams</em>
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
          The building runs on your work.{' '}<em className="italic font-normal text-seam-300">Now prove it.</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">Start with one activity. Verify what you already do. Build from there.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/approved" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Get SEAM Approved</Link>
          <Link to="/certification" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Explore O+M certification</Link>
        </div>
      </div>
    </section>
  )
}

const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function Operators() {
  return (
    <>
      <SEO title="For Property Managers & Facility Teams" description="Turn the equity work you already do into a verified credential. SEAM Approved and certification for property managers and facility teams running buildings day to day." path="/for/operators"
        jsonLd={[faqSchema(faqItems), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Who We Serve', path: '/for/operators' }, { name: 'Property Managers', path: '/for/operators' }])] as unknown as Record<string, unknown>} />
      <Hero /><Challenges /><ProductsForYou /><Testimonial /><FAQ /><CtaBlock />
    </>
  )
}
