import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'

import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-commons.jpg"
          alt="The Community community for social equity"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="hero-enter max-w-3xl">
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            Membership Community
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            SEAM Community.{' '}
            <em className="font-display italic font-normal text-seam-300">
              Where the movement lives.
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            Resources, peer connection, and ongoing support for organizations and individuals committed to social equity in the built environment. Join the network shaping social sustainability.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
              Join the Community
            </Link>
            <Link to="/community/benefits" className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300">
              See member benefits
            </Link>
          </div>
        </div>
      </div>
      {/* Membership logos — large, overlapping below hero into next section */}
      <div className="hidden lg:flex absolute -bottom-44 right-16 items-end z-10">
        <img src="/logos/member-individual.png" alt="Individual membership" className="w-96 h-96 object-contain drop-shadow-2xl -mr-14" />
        <img src="/logos/member-organization.png" alt="Organization membership" className="w-[26rem] h-[26rem] object-contain drop-shadow-2xl" />
      </div>
    </section>
  )
}

/* ─── What You Get ─── */
const benefits = [
  { title: 'Activity support templates', description: 'Pre-built documentation templates for every activity in the Standard. Reduce the time from decision to submission by starting with proven formats.' },
  { title: 'ROSSI Calculator access', description: 'Model the financial impact of social equity outcomes at project and portfolio level. GRESB-aligned scoring, insurance risk quantification, and tenant retention value.' },
  { title: 'Courses and continuing education', description: 'Self-paced and instructor-led courses covering the Standard, certification process, and pillar-specific deep dives. CEU credit for AP renewal.' },
  { title: 'Practitioner network', description: 'Connect with SEAM APs, certified project teams, and peer organizations. Co-practice opportunities, referrals, and collaborative problem-solving.' },
  { title: 'Standard development input', description: 'Participate in advisory sessions, pilot new activities, and provide feedback that shapes future versions of the SEAM Standard.' },
  { title: 'Discounted verification fees', description: 'Members receive reduced pricing on SEAM Approved activity verification and full certification fees. Volume pricing for portfolio-level rollouts.' },
]

function Benefits() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Member benefits</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Everything you need to{' '}<em className="italic font-normal">accelerate social equity</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="reveal-child rounded-2xl border border-warm-100 p-8 lg:p-10 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">{b.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Membership Paths ─── */
function MembershipPaths() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Membership</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Choose your{' '}<em className="italic font-normal">path</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
          <Link
            to="/community/individual"
            className="reveal-child group relative overflow-visible rounded-2xl bg-white border border-warm-100 p-6 sm:p-10 lg:p-14 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="absolute -top-10 right-10 w-20 h-20 rounded-full overflow-hidden drop-shadow-sm">
              <img src="/logos/member-individual.png" alt="" className="w-full h-full object-cover scale-[1.35]" />
            </div>
            <h3 className="font-display text-[26px] lg:text-[32px] tracking-[-0.02em] text-warm-900 mb-4">
              Individual Membership
            </h3>
            <p className="text-[17px] leading-relaxed text-warm-500 mb-6">
              A la carte commitments at multiple price points for practitioners, consultants, and professionals. Open (free), Practitioner, and Education tiers.
            </p>
            <span className="inline-flex items-center text-[15px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
              Explore individual tiers &rarr;
            </span>
          </Link>

          <Link
            to="/community/organization"
            className="reveal-child group relative overflow-visible rounded-2xl bg-white border border-warm-100 p-6 sm:p-10 lg:p-14 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="absolute -top-10 right-10 w-20 h-20 rounded-full overflow-hidden drop-shadow-sm">
              <img src="/logos/member-organization.png" alt="" className="w-full h-full object-cover scale-[1.35]" />
            </div>
            <h3 className="font-display text-[26px] lg:text-[32px] tracking-[-0.02em] text-warm-900 mb-4">
              Organization Membership
            </h3>
            <p className="text-[17px] leading-relaxed text-warm-500 mb-6">
              Contributor, Builder, and Steward tiers for teams and institutions. Portfolio tools, team seats, dedicated onboarding, and volume pricing.
            </p>
            <span className="inline-flex items-center text-[15px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
              Explore organization tiers &rarr;
            </span>
          </Link>
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
            The Community is where I found my first three project referrals. The templates alone saved us weeks on our first SEAM Approved submission. This is not a newsletter — it is an operating system for the practice.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Marcus Williams</p>
            <p className="text-[14px] text-warm-400 mt-1">SEAM AP &middot; Practitioner Member</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  { q: 'What is the difference between Individual and Organization membership?', a: 'Individual membership is for practitioners, consultants, and professionals. Organization membership provides team seats, portfolio tools, and institutional benefits for companies, nonprofits, and institutions working with the Standard.' },
  { q: 'Can I try the Community before committing?', a: 'Yes. The Open tier is free and gives you access to the Standard, the directory, and public webcasts. Upgrade to Practitioner or an organization tier when you are ready for full access.' },
  { q: 'Do members get discounts on certification?', a: 'Yes. Practitioner and organization members receive discounted SEAM Approved verification fees and full certification pricing. Builder and Steward organization tiers include volume pricing for portfolio rollouts.' },
  { q: 'Is the Education tier really for students and nonprofits?', a: 'Yes. The Education tier is income-qualified and available to students, early-career professionals (under three years of experience), and staff at nonprofits with budgets under $5M. Self-reported, honor system.' },
  { q: 'How do organization seats work?', a: 'Organization membership includes a set number of team seats. Each seat holder gets full individual-level access (templates, courses, network, ROSSI). Seat assignments can be changed quarterly.' },
  { q: 'Can I earn CEUs through the Community?', a: 'Yes. Courses, webcasts, and peer learning sessions in the Community carry CEU credit toward SEAM AP renewal. Your CEU progress is tracked automatically in your member dashboard.' },
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
            Questions about{' '}<em className="italic font-normal">the Community</em>
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

/* ─── CTA ─── */
function CtaBlock() {
  const ref = useReveal()
  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mx-auto">
          The Standard is open.{' '}<em className="italic font-normal text-seam-300">The community is how you use it.</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">Join for free with Open, or go deeper with Practitioner or Organization membership.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Join the community</Link>
          <Link to="/resources/standard" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Access the Standard</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function Commons() {
  return (
    <>
      <SEO title="The Community" description="Membership community for organizations and individuals committed to social equity in the built environment. Templates, ROSSI access, practitioner network, courses, and discounted certification fees." path="/community"
        jsonLd={[faqSchema(faqItems), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Community', path: '/community' }, { name: 'The Community', path: '/community' }])] as unknown as Record<string, unknown>} />
      <Hero />
      {/* StatsBar removed */}
      <Benefits />
      <MembershipPaths />
      <Testimonial />
      <FAQ />
      <CtaBlock />
    </>
  )
}
