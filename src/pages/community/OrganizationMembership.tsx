import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

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
            Organization Membership
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Equip your team.{' '}
            <em className="font-display italic font-normal text-seam-300">Scale the commitment.</em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            Contributor, Builder, and Steward tiers for teams and institutions. Portfolio tools, team seats, dedicated onboarding, and volume pricing for organizations serious about social equity.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
              Talk to our team
            </Link>
            <a href="#pricing" className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300">
              Compare tiers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Why Org Membership ─── */
const reasons = [
  { title: 'Team-wide access', description: 'Give your entire team — property managers, sustainability leads, community liaisons, executives — access to the same templates, courses, and tools. No per-seat surprises.' },
  { title: 'Portfolio ROSSI modeling', description: 'Model social equity impact across your entire portfolio. Aggregate GRESB-aligned data, benchmark properties against each other, and generate board-ready reporting.' },
  { title: 'Volume verification pricing', description: 'Discounted SEAM Approved and certification fees when rolling out across multiple properties. Builder and Steward tiers include priority reviewer scheduling.' },
  { title: 'Dedicated onboarding', description: 'A SEAM team member works with your organization to map existing programs to the Standard, identify quick wins, and build a certification roadmap tailored to your portfolio.' },
  { title: 'Standard development influence', description: 'Steward members sit on the advisory council. Shape how the Standard evolves, pilot new activities before public release, and co-author case studies.' },
  { title: 'Co-branded recognition', description: 'Steward members receive co-branded case studies, directory placement, and speaking opportunities at SEAM events. Public leadership in the movement.' },
]

function WhyOrgMembership() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Why organizations join</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Certification is the goal.{' '}<em className="italic font-normal">Membership is the engine.</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="reveal-child rounded-2xl border border-warm-100 p-8 lg:p-10 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">{r.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ─── */
const tiers = [
  {
    name: 'Contributor',
    price: 'Custom',
    description: 'For organizations beginning their SEAM journey. Access to templates and basic portfolio tools.',
    features: ['5 team seats', 'Activity documentation templates', 'Basic ROSSI Calculator', 'Quarterly webinars and office hours', 'Standard member directory listing', 'Discounted SEAM Approved fees'],
    cta: 'Request pricing',
    highlighted: false,
  },
  {
    name: 'Builder',
    price: 'Custom',
    description: 'For organizations actively pursuing certification or rolling out SEAM Approved across properties.',
    features: ['15 team seats', 'Full ROSSI Calculator with portfolio modeling', 'Priority reviewer scheduling', 'Dedicated onboarding session', 'Full course library for all seats', 'Discounted certification fees', 'Volume SEAM Approved pricing', 'Quarterly strategy check-ins'],
    cta: 'Request pricing',
    highlighted: true,
  },
  {
    name: 'Steward',
    price: 'Custom',
    description: 'For institutions leading the movement. Maximum influence, unlimited scale.',
    features: ['Unlimited team seats', 'Portfolio ROSSI with benchmarking', 'Advisory council seat', 'Co-branded case studies', 'Custom training for your team', 'Volume certification pricing', 'Priority access to pilot programs', 'Speaking opportunities at SEAM events', 'Executive briefings and board presentations'],
    cta: 'Talk to our team',
    highlighted: false,
  },
]

function Pricing() {
  const headerRef = useReveal()
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Organization tiers</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Scale your commitment{' '}<em className="italic font-normal">with your portfolio</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Organization pricing is based on portfolio size and scope. All tiers include annual billing with the option to add seats and properties mid-cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl p-8 lg:p-10 flex flex-col ${tier.highlighted ? 'bg-warm-900 text-white ring-2 ring-seam-500' : 'bg-white border border-warm-100'}`}>
              <h3 className={`font-display text-[28px] tracking-[-0.02em] ${tier.highlighted ? 'text-white' : 'text-warm-900'}`}>{tier.name}</h3>
              <p className={`mt-2 font-display text-[20px] tracking-[-0.02em] ${tier.highlighted ? 'text-seam-300' : 'text-seam-600'}`}>{tier.price}</p>
              <p className={`mt-4 text-[15px] leading-relaxed ${tier.highlighted ? 'text-warm-300' : 'text-warm-500'}`}>{tier.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] leading-snug ${tier.highlighted ? 'text-warm-200' : 'text-warm-500'}`}>
                    <svg className={`shrink-0 w-4 h-4 mt-0.5 ${tier.highlighted ? 'text-seam-400' : 'text-seam-500'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/get-started" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 ${tier.highlighted ? 'bg-white text-warm-900 hover:bg-warm-100' : 'bg-warm-900 text-white hover:bg-warm-800'}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Who Joins ─── */
const orgs = [
  { title: 'Real estate operators', description: 'Property management firms rolling out social equity programs across a portfolio. Use SEAM Approved to credential existing practices at scale.' },
  { title: 'Developers and ownership groups', description: 'Organizations pursuing full certification for new developments or existing assets. Portfolio ROSSI modeling for investor and board reporting.' },
  { title: 'Anchor institutions', description: 'Hospitals, universities, and civic buildings using SEAM to formalize community benefit commitments and report on social impact outcomes.' },
  { title: 'Consulting and advisory firms', description: 'Firms offering SEAM certification services to clients. Team-wide access to templates, courses, and ROSSI tools for project delivery.' },
]

function WhoJoins() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Who joins</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Organizations that{' '}<em className="italic font-normal">mean it</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
          {orgs.map((o) => (
            <div key={o.title} className="reveal-child rounded-2xl bg-warm-50 p-8 lg:p-10">
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">{o.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{o.description}</p>
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
            Builder membership let us roll out SEAM Approved across twelve properties in one quarter. The dedicated onboarding mapped our existing programs to the Standard in a single session. We stopped reinventing the wheel.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Rachel Okonkwo</p>
            <p className="text-[14px] text-warm-400 mt-1">VP of Social Impact &middot; Vantage Communities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  { q: 'How does team seat allocation work?', a: 'Each organization tier includes a set number of seats. Every seat holder gets full individual-level access — templates, courses, ROSSI, and network. Seat assignments can be changed quarterly through your admin dashboard.' },
  { q: 'Can we add seats or properties mid-cycle?', a: 'Yes. Additional seats and properties can be added at any time. Pricing is prorated for the remainder of your annual billing cycle.' },
  { q: 'Is organization pricing public?', a: 'Pricing is based on portfolio size, property count, and scope. Contact our team for a quote tailored to your organization. All tiers are billed annually.' },
  { q: 'What does dedicated onboarding include?', a: 'A SEAM team member reviews your existing social equity programs, maps them to Standard activities, identifies quick wins for SEAM Approved, and builds a certification roadmap. Builder tier includes one session; Steward includes ongoing strategy check-ins.' },
  { q: 'Can our team members also hold individual memberships?', a: 'Organization seats provide full individual-level access. Separate individual memberships are not needed. Team members who are SEAM APs can track CEUs through their organization seat.' },
  { q: 'What is the advisory council?', a: 'Steward members sit on the advisory council that informs Standard development. The council meets quarterly, reviews proposed changes, pilots new activities, and provides strategic input on the direction of the SEAM ecosystem.' },
]

function FAQ() {
  const headerRef = useReveal()
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Frequently asked</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Questions about{' '}<em className="italic font-normal">organization membership</em>
          </h2>
        </div>
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-warm-200">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-6 text-left">
                <span className="text-[17px] lg:text-[18px] font-medium text-warm-900 pr-8">{faq.q}</span>
                <svg className={`shrink-0 w-5 h-5 text-warm-400 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
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
          Your portfolio deserves{' '}<em className="italic font-normal text-seam-300">a social equity strategy</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">Talk to our team about the right tier for your organization. Custom scoping, portfolio pricing, and dedicated onboarding.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Request a quote</Link>
          <Link to="/commons" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Commons overview</Link>
        </div>
      </div>
    </section>
  )
}

const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function OrganizationMembership() {
  return (
    <>
      <SEO title="Organization Membership" description="Organization Commons membership for teams and institutions. Contributor, Builder, and Steward tiers with team seats, portfolio ROSSI, dedicated onboarding, and volume certification pricing." path="/commons/organization"
        jsonLd={[faqSchema(faqItems), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Commons', path: '/commons' }, { name: 'Organization Membership', path: '/commons/organization' }])] as unknown as Record<string, unknown>} />
      <Hero /><WhyOrgMembership /><Pricing /><WhoJoins /><Testimonial /><FAQ /><CtaBlock />
    </>
  )
}
