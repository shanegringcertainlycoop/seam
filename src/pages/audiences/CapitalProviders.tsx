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
          src="/images/hero-capital.jpg"
          alt="Capital providers and social diligence"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="hero-enter max-w-4xl mx-auto text-center">
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            For Capital Providers &amp; Compliance
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            A diligence signal for{' '}
            <em className="font-display italic font-normal text-seam-300">social risk</em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl mx-auto text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            SEAM provides GRESB-aligned social performance data, financial modeling through ROSSI, and third-party-verified outcomes that institutional investors, insurers, and international compliance teams can act on.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/resources/rossi" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
              Try the ROSSI Calculator
            </Link>
            <Link to="/get-started" className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300">
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const challenges = [
  {
    pain: 'Social risk with no measurement framework',
    solution: 'SEAM certification provides standardized, third-party-verified social performance data across four pillars. Not self-reported surveys — measured outcomes with independent verification.',
  },
  {
    pain: 'GRESB social indicators are hard to populate',
    solution: 'SEAM data maps directly to GRESB social indicators. Certified projects generate reporting-ready data that eliminates the manual translation between operational reality and submission requirements.',
  },
  {
    pain: 'No financial language for social outcomes',
    solution: 'The ROSSI Calculator translates social equity performance into financial terms: tenant retention value, insurance risk reduction, operating cost impact, and portfolio-level ESG scoring.',
  },
  {
    pain: 'International compliance frameworks are multiplying',
    solution: "SEAM is designed for cross-border applicability. The Standard's four pillars align with EU Taxonomy social objectives, SFDR principal adverse impact indicators, and emerging international social sustainability reporting requirements.",
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
            Social performance is the next{' '}<em className="italic font-normal">diligence frontier</em>
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
  { label: 'ROSSI Calculator', title: 'Financial modeling for social equity', description: 'Model project-level and portfolio-level social impact in financial terms. GRESB alignment scoring, insurance risk quantification, and tenant retention value.', href: '/resources/rossi', fit: 'Best for investment committees, insurance negotiations, and ESG reporting.' },
  { label: 'Certification', title: 'Portfolio-level diligence', description: 'Require or incentivize SEAM certification across portfolio assets. Standardized social performance data flows into ESG reports without manual reconciliation.', href: '/certification', fit: 'Best for institutional owners setting social performance requirements across holdings.', logo: '/logos/cert-platinum.png' },
  { label: 'The Standard', title: 'Due diligence framework', description: "Use the SEAM Standard as a social equity screen in acquisition diligence. Evaluate a building's social performance against a public, evidence-based benchmark.", href: '/resources/standard', fit: 'Best for acquisition teams evaluating social risk in new investments.' },
]

function ProductIcon({ logo }: { logo?: string }) {
  if (!logo) return null
  return (
    <div className="absolute -top-7 right-4 sm:-top-8 sm:right-8">
      <img src={logo} alt="" className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-sm" />
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
            Products built for{' '}<em className="italic font-normal">capital decisions</em>
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
            ROSSI gave us a way to present social equity to our investment committee in the only language they respond to — returns. We now require SEAM certification for every new acquisition above fifty million.
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

const faqs = [
  { q: 'How does SEAM align with GRESB?', a: "SEAM certification data maps directly to GRESB social indicators. Certified projects generate standardized performance data that feeds into GRESB submissions. The ROSSI Calculator produces GRESB-aligned scoring at both project and portfolio levels." },
  { q: 'Can SEAM data be used for SFDR reporting?', a: "SEAM's four pillars align with SFDR principal adverse impact indicators related to social and governance factors. The Standard's community engagement, employment, and accessibility metrics provide evidence for Article 8 and Article 9 fund disclosures." },
  { q: 'How does ROSSI quantify social outcomes?', a: 'ROSSI models financial impact across four dimensions: tenant retention value (reduced vacancy and turnover costs), insurance risk reduction (claims reduction from community engagement), operating cost impact (efficiency gains from inclusive design), and ESG scoring improvement (GRESB and proprietary scoring models).' },
  { q: 'Can we require SEAM certification in our investment criteria?', a: 'Yes. Several institutional investors now include SEAM certification or SEAM Approved as a condition or incentive in acquisition criteria, fund mandates, and asset management agreements. Our team can help structure these requirements.' },
  { q: 'What is the verification methodology?', a: 'SEAM certification uses independent third-party review including documentation assessment, site verification, and community engagement surveys. Reviewers are credentialed and follow standardized protocols. All certifications require recertification every three years.' },
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
            Questions from{' '}<em className="italic font-normal">capital providers</em>
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
          Social equity is{' '}<em className="italic font-normal text-seam-300">the next diligence layer</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">Model the financial case, set portfolio requirements, or talk to our team about institutional partnerships.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/resources/rossi" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Try ROSSI</Link>
          <Link to="/get-started" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Contact our team</Link>
        </div>
      </div>
    </section>
  )
}

const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function CapitalProviders() {
  return (
    <>
      <SEO title="For Capital Providers & Compliance" description="SEAM provides GRESB-aligned social performance data, ROSSI financial modeling, and third-party-verified outcomes for institutional investors, insurers, and international compliance teams." path="/for/capital-providers"
        jsonLd={[faqSchema(faqItems), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Who We Serve', path: '/for/capital-providers' }, { name: 'Capital Providers', path: '/for/capital-providers' }])] as unknown as Record<string, unknown>} />
      <Hero /><Challenges /><ProductsForYou /><Testimonial /><FAQ /><CtaBlock />
    </>
  )
}
