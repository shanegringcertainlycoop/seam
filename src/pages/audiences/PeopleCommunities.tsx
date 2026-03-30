import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      <div className="absolute inset-0">
        <img
          src="/images/hero-people.jpg"
          alt="Diverse community members in a welcoming building lobby"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="hero-enter max-w-4xl mx-auto text-center">
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            For People &amp; Communities
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Buildings should work{' '}
            <em className="font-display italic font-normal text-seam-300">
              for you
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl mx-auto text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            SEAM-certified spaces are held to measurable standards for health, equity, accessibility, and community — so you can choose places that reflect your values.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/directory?tab=projects"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
            >
              Find certified buildings
            </Link>
            <Link
              to="/resources/standard"
              className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300"
            >
              Learn the Standard
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
    pain: 'How do I know if a building is actually healthy?',
    solution: 'SEAM-certified buildings meet verified standards for air quality, natural light, thermal comfort, and mental wellness. These aren\u2019t marketing claims \u2014 they\u2019re measured, third-party-verified outcomes.',
  },
  {
    pain: 'Will this space be accessible to everyone I care about?',
    solution: 'The Standard requires universal design, multilingual wayfinding, gender-inclusive facilities, and full ADA+ accessibility. Every certified building is evaluated against these criteria.',
  },
  {
    pain: 'Is this landlord investing in the community?',
    solution: 'SEAM tracks local hiring, vendor diversity, anti-displacement commitments, and community benefit agreements. Certification means the investment goes beyond the property line.',
  },
  {
    pain: 'Are the workers who built and maintain this place treated fairly?',
    solution: 'Social Responsibility credits verify living wages, labor protections, and ethical supply chains. The people who construct and care for buildings deserve the same equity as those who occupy them.',
  },
  {
    pain: 'Does this place represent my culture and identity?',
    solution: 'Cultural Preservation credits ensure spaces honor community heritage, arts, and narrative. Certification recognizes that buildings carry meaning beyond their function.',
  },
]

function Challenges() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Why it matters
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Your questions.{' '}
            <em className="italic font-normal">Real answers.</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger space-y-6">
          {challenges.map((c) => (
            <div
              key={c.pain}
              className="reveal-child grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 rounded-2xl border border-warm-100 p-5 sm:p-8 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-500 mb-3 block">
                  Your concern
                </span>
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">
                  {c.pain}
                </h3>
              </div>
              <div>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-gold-500 mb-3 block">
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
    title: 'SEAM Certification',
    description: 'Look for SEAM-certified buildings when choosing where to live, work, or gather. Bronze through Platinum tells you the depth of commitment.',
    href: '/certification',
    fit: 'When you\u2019re evaluating a new apartment, office, or community space \u2014 check whether it\u2019s SEAM-certified.',
    logo: '/logos/cert-platinum.png',
  },
  {
    label: 'Directory',
    title: 'SEAM Directory',
    description: 'Browse certified projects, approved activities, and credentialed professionals in your area.',
    href: '/directory',
    fit: 'Find what\u2019s certified near you, and see exactly what each building has been verified for.',
  },
  {
    label: 'The Standard',
    title: 'The SEAM Standard',
    description: 'Read the full Standard to understand exactly what certified buildings are held to. It\u2019s free and open.',
    href: '/resources/standard',
    fit: 'When you want to understand the specific criteria behind certification \u2014 from air quality to labor practices.',
  },
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
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Your toolkit
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Tools for{' '}
            <em className="italic font-normal">informed choices</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
          {products.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              className="reveal-child group relative overflow-visible rounded-2xl bg-white border border-warm-100 p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <ProductIcon logo={p.logo} />
              <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-gold-500 mb-2 block">
                {p.label}
              </span>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
                {p.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500 mb-6">
                {p.description}
              </p>
              <p className="text-[14px] leading-relaxed text-warm-500 italic border-t border-warm-100 pt-5">
                {p.fit}
              </p>
              <span className="inline-block mt-4 text-[14px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
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
  { metric: 'Healthier indoor environments', detail: 'Verified air quality, daylight, and thermal comfort standards \u2014 not marketing language, but measured performance you can trust.' },
  { metric: 'Inclusive by design', detail: 'Spaces built for people of all abilities, languages, and identities. Universal design and gender-inclusive facilities are required, not optional.' },
  { metric: 'Community investment', detail: 'Local hiring, fair wages, and vendor diversity baked into the certification. The building\u2019s success is tied to the neighborhood\u2019s success.' },
  { metric: 'Transparency you can trust', detail: 'Public reporting and third-party verification replace marketing claims. You can see exactly what a certified building has been held to.' },
]

function Outcomes() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            What you get
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Buildings that{' '}
            <em className="italic font-normal">earn your trust</em>
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
            When we moved into a SEAM-certified building, the difference was immediate. The air felt cleaner, the common spaces were designed for everyone, and for the first time I felt like the building was built with people like me in mind — not as an afterthought.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Maria Torres</p>
            <p className="text-[14px] text-warm-400 mt-1">
              Resident &middot; Alma Commons, Denver
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
    q: 'What does SEAM certification mean for me as a tenant?',
    a: 'It means your building has been independently verified against standards for air quality, accessibility, community investment, and fair labor practices. Certification is earned through measurable performance, not self-reporting.',
  },
  {
    q: 'How can I find SEAM-certified buildings near me?',
    a: 'The SEAM Directory lets you browse certified projects by location, certification level, and rating system track. You can see exactly what each building has been verified for.',
  },
  {
    q: 'Does SEAM certification affect my rent?',
    a: 'SEAM does not set or regulate rent. However, certified buildings often participate in anti-displacement and affordability commitments as part of the Community Development track. Check a building\u2019s certification details in the Directory.',
  },
  {
    q: 'What\u2019s the difference between SEAM and LEED?',
    a: 'LEED measures environmental performance \u2014 energy efficiency, water use, materials. SEAM measures social equity \u2014 health, accessibility, community investment, fair labor, and cultural preservation. Many buildings pursue both.',
  },
  {
    q: 'How do I ask my landlord to pursue SEAM certification?',
    a: 'Start by sharing the SEAM Standard or Directory with your property manager. Many buildings begin with SEAM Approved \u2014 verifying individual practices like local hiring or accessibility improvements \u2014 before committing to full certification.',
  },
]

function FAQ() {
  const headerRef = useReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Frequently asked
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Questions from{' '}
            <em className="italic font-normal">people &amp; communities</em>
          </h2>
        </div>

        <div className="max-w-3xl">
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
          Choose spaces that{' '}
          <em className="italic font-normal text-seam-300">reflect your values</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Browse certified buildings in your area, read the Standard, or share SEAM with your landlord or property manager.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/directory?tab=projects"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
          >
            Find certified buildings
          </Link>
          <Link
            to="/resources/standard"
            className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300"
          >
            Read the Standard
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function PeopleCommunities() {
  return (
    <>
      <SEO
        title="For People & Communities"
        description="SEAM-certified buildings meet verified standards for health, equity, accessibility, and community investment. Choose places that reflect your values."
        path="/for/people"
        jsonLd={[
          faqSchema(faqItems),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Who We Serve', path: '/for/people' },
            { name: 'People & Communities', path: '/for/people' },
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
