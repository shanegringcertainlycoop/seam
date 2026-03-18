import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'
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
            Membership Community
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            The Commons.{' '}
            <em className="font-display italic font-normal text-seam-300">
              Where the movement lives.
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            Resources, peer connection, and ongoing support for organizations and individuals committed to social equity in the built environment. Join the network that shapes the Standard.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
              Join the Commons
            </Link>
            <Link to="/commons/benefits" className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300">
              See member benefits
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */
function StatsBar() {
  const s1 = useCountUp(2, { suffix: '' })
  const s2 = useCountUp(3, { suffix: '' })
  const s3 = useCountUp(4, { suffix: '' })
  const ref = useReveal(0.2)
  const stats = [
    { ...s1, label: 'Membership tracks' },
    { ...s2, label: 'Organization tiers' },
    { ...s3, label: 'Pillar resource libraries' },
  ]
  return (
    <section ref={ref} className="reveal-fade-up bg-warm-50 border-b border-warm-100">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span ref={s.ref} className="block font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] text-seam-600">{s.display}</span>
              <span className="block mt-1 text-[14px] text-warm-500 uppercase tracking-[0.08em]">{s.label}</span>
            </div>
          ))}
        </div>
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
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Member benefits</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Everything you need to{' '}<em className="italic font-normal">implement the Standard</em>
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

/* ─── Membership Tiers ─── */
const individualTiers = [
  { name: 'Explorer', price: 'Free', description: 'Access the Standard, browse the directory, and attend public webcasts.', features: ['Standard download', 'Directory access', 'Public webcast attendance', 'Newsletter'] },
  { name: 'Practitioner', price: '$249/yr', description: 'Full Commons access for individuals pursuing or holding the AP credential.', features: ['Everything in Explorer', 'Activity templates', 'Course library', 'Practitioner network', 'CEU tracking', 'AP exam discount'], highlighted: true },
  { name: 'Fellow', price: '$99/yr', description: 'Reduced rate for students, early-career professionals, and nonprofit staff.', features: ['Everything in Practitioner', 'Income-qualified pricing', 'Mentorship matching'] },
]

const orgTiers = [
  { name: 'Contributor', description: 'For organizations beginning their SEAM journey. Access to templates and basic ROSSI.', features: ['5 team seats', 'Activity templates', 'Basic ROSSI access', 'Quarterly webinars'] },
  { name: 'Builder', description: 'For organizations actively pursuing certification or rolling out SEAM Approved.', features: ['15 team seats', 'Full ROSSI Calculator', 'Priority reviewer scheduling', 'Dedicated onboarding', 'Discounted verification fees'], highlighted: true },
  { name: 'Steward', description: 'For institutions leading the movement. Standard development input and portfolio tools.', features: ['Unlimited team seats', 'Portfolio ROSSI modeling', 'Advisory council seat', 'Co-branded case studies', 'Custom training', 'Volume verification pricing'] },
]

function Tiers() {
  const headerRef = useReveal()
  const [tab, setTab] = useState<'individual' | 'organization'>('individual')
  const tiers = tab === 'individual' ? individualTiers : orgTiers

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-12">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Membership tiers</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Choose your{' '}<em className="italic font-normal">level of commitment</em>
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-12">
          <button
            onClick={() => setTab('individual')}
            className={`rounded-full px-6 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
              tab === 'individual' ? 'bg-warm-900 text-white' : 'bg-white text-warm-500 hover:text-warm-900 border border-warm-200'
            }`}
          >
            Individual
          </button>
          <button
            onClick={() => setTab('organization')}
            className={`rounded-full px-6 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
              tab === 'organization' ? 'bg-warm-900 text-white' : 'bg-white text-warm-500 hover:text-warm-900 border border-warm-200'
            }`}
          >
            Organization
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 lg:p-10 transition-all duration-300 ${
                'highlighted' in tier && tier.highlighted
                  ? 'bg-warm-900 text-white ring-2 ring-seam-500'
                  : 'bg-white border border-warm-100'
              }`}
            >
              <h3 className={`font-display text-[24px] lg:text-[28px] tracking-[-0.02em] ${
                'highlighted' in tier && tier.highlighted ? 'text-white' : 'text-warm-900'
              }`}>
                {tier.name}
              </h3>
              {'price' in tier && (
                <p className={`mt-2 font-display text-[20px] tracking-[-0.02em] ${
                  'highlighted' in tier && tier.highlighted ? 'text-seam-300' : 'text-seam-600'
                }`}>
                  {tier.price}
                </p>
              )}
              <p className={`mt-4 text-[15px] leading-relaxed ${
                'highlighted' in tier && tier.highlighted ? 'text-warm-300' : 'text-warm-500'
              }`}>
                {tier.description}
              </p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] leading-snug ${
                    'highlighted' in tier && tier.highlighted ? 'text-warm-200' : 'text-warm-500'
                  }`}>
                    <svg className={`shrink-0 w-4 h-4 mt-0.5 ${
                      'highlighted' in tier && tier.highlighted ? 'text-seam-400' : 'text-seam-500'
                    }`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/get-started"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 ${
                  'highlighted' in tier && tier.highlighted
                    ? 'bg-white text-warm-900 hover:bg-warm-100'
                    : 'bg-warm-900 text-white hover:bg-warm-800'
                }`}
              >
                {tier.name === 'Explorer' ? 'Get started free' : `Join as ${tier.name}`}
              </Link>
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
            The Commons is where I found my first three project referrals. The templates alone saved us weeks on our first SEAM Approved submission. This is not a newsletter — it is an operating system for the practice.
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
  { q: 'Can I try the Commons before committing?', a: 'Yes. The Explorer tier is free and gives you access to the Standard, the directory, and public webcasts. Upgrade to Practitioner or an organization tier when you are ready for full access.' },
  { q: 'Do members get discounts on certification?', a: 'Yes. Practitioner and organization members receive discounted SEAM Approved verification fees and full certification pricing. Builder and Steward organization tiers include volume pricing for portfolio rollouts.' },
  { q: 'Is the Fellow tier really for students and nonprofits?', a: 'Yes. The Fellow tier is income-qualified and available to students, early-career professionals (under three years of experience), and staff at nonprofits with budgets under $5M. Self-reported, honor system.' },
  { q: 'How do organization seats work?', a: 'Organization membership includes a set number of team seats. Each seat holder gets full individual-level access (templates, courses, network, ROSSI). Seat assignments can be changed quarterly.' },
  { q: 'Can I earn CEUs through the Commons?', a: 'Yes. Courses, webcasts, and peer learning sessions in the Commons carry CEU credit toward SEAM AP renewal. Your CEU progress is tracked automatically in your member dashboard.' },
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
            Questions about{' '}<em className="italic font-normal">the Commons</em>
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

/* ─── CTA ─── */
function CtaBlock() {
  const ref = useReveal()
  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mx-auto">
          The Standard is open.{' '}<em className="italic font-normal text-seam-300">The community is how you use it.</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">Join for free with Explorer, or go deeper with Practitioner or Organization membership.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Join the Commons</Link>
          <Link to="/resources/standard" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Download the Standard</Link>
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
      <SEO title="The Commons" description="Membership community for organizations and individuals committed to social equity in the built environment. Templates, ROSSI access, practitioner network, courses, and discounted certification fees." path="/commons"
        jsonLd={[faqSchema(faqItems), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Community', path: '/commons' }, { name: 'The Commons', path: '/commons' }])] as unknown as Record<string, unknown>} />
      <Hero />
      <StatsBar />
      <Benefits />
      <Tiers />
      <Testimonial />
      <FAQ />
      <CtaBlock />
    </>
  )
}
