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
            Individual Membership
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Your practice.{' '}
            <em className="font-display italic font-normal text-seam-300">Your pace.</em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            A la carte commitments at multiple price points. Whether you are exploring the Standard for the first time or leading certification engagements full-time, there is a tier that fits.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
              Join as Practitioner
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

/* ─── What's Included ─── */
const included = [
  { title: 'Activity templates', description: 'Pre-built documentation for every activity in the Standard. Start from proven formats instead of blank pages.' },
  { title: 'Course library', description: 'Self-paced courses covering the Standard, pillar deep-dives, the certification process, and the ROSSI financial framework.' },
  { title: 'Practitioner network', description: 'Connect with SEAM APs, project teams, and peers. Referral pipeline, co-practice opportunities, and collaborative problem-solving.' },
  { title: 'CEU tracking', description: 'Automatic continuing education credit tracking for AP renewal. Courses, webcasts, and peer sessions all count.' },
  { title: 'ROSSI access', description: 'Model the financial impact of social equity outcomes for client presentations, investor decks, and project proposals.' },
  { title: 'Standard development input', description: 'Participate in advisory sessions and pilot programs. Help shape the next version of the SEAM Standard.' },
]

function WhatsIncluded() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">What you get</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Tools to build{' '}<em className="italic font-normal">a real practice</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item) => (
            <div key={item.title} className="reveal-child rounded-2xl border border-warm-100 p-8 lg:p-10 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{item.description}</p>
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
    name: 'Explorer',
    price: 'Free',
    period: '',
    description: 'For professionals exploring the Standard. No commitment required.',
    features: ['Download the full SEAM Standard', 'Browse the practitioner directory', 'Attend public webcasts and events', 'Monthly newsletter with field updates'],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Practitioner',
    price: '$249',
    period: '/year',
    description: 'For professionals pursuing or holding the AP credential. Full Commons access.',
    features: ['Everything in Explorer', 'Activity documentation templates', 'Full course library with CEU credit', 'Practitioner network and referrals', 'Basic ROSSI Calculator access', 'CEU tracking dashboard', 'AP exam fee discount ($50 off)', 'Discounted SEAM Approved verification'],
    cta: 'Join as Practitioner',
    highlighted: true,
  },
  {
    name: 'Fellow',
    price: '$99',
    period: '/year',
    description: 'Income-qualified rate for students, early-career professionals, and nonprofit staff.',
    features: ['Everything in Practitioner', 'Income-qualified pricing (self-reported)', 'Mentorship matching with senior APs', 'Priority access to fellowship programs'],
    cta: 'Apply as Fellow',
    highlighted: false,
    note: 'Available to students, professionals with under 3 years of experience, and staff at nonprofits with budgets under $5M.',
  },
]

function Pricing() {
  const headerRef = useReveal()
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Pricing</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Pick what{' '}<em className="italic font-normal">you need</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Start free with Explorer. Upgrade when you are ready. Downgrade or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl p-8 lg:p-10 flex flex-col ${tier.highlighted ? 'bg-warm-900 text-white ring-2 ring-seam-500' : 'bg-white border border-warm-100'}`}>
              <h3 className={`font-display text-[28px] tracking-[-0.02em] ${tier.highlighted ? 'text-white' : 'text-warm-900'}`}>{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-display text-[40px] tracking-[-0.04em] ${tier.highlighted ? 'text-white' : 'text-warm-900'}`}>{tier.price}</span>
                {tier.period && <span className={`text-[16px] ${tier.highlighted ? 'text-warm-400' : 'text-warm-500'}`}>{tier.period}</span>}
              </div>
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

              {'note' in tier && tier.note && (
                <p className={`mt-6 text-[13px] leading-relaxed italic ${tier.highlighted ? 'text-warm-400' : 'text-warm-400'}`}>{tier.note}</p>
              )}

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

/* ─── Who It's For ─── */
const personas = [
  { title: 'Consultants building a SEAM practice', description: 'Templates, ROSSI access, and the practitioner network give you the tools to serve clients pursuing certification or SEAM Approved.' },
  { title: 'APs maintaining their credential', description: 'CEU-eligible courses, webcasts, and peer sessions keep you current. Automatic tracking means no spreadsheets at renewal time.' },
  { title: 'Professionals preparing for the AP exam', description: 'Course library covers all four pillars and the certification process. Practitioner tier includes a $50 discount on the exam fee.' },
  { title: 'Advocates entering the built environment', description: 'The Standard, courses, and mentorship matching give you a structured pathway from advocacy into implementation work.' },
]

function WhoItsFor() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Who it serves</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Wherever you are{' '}<em className="italic font-normal">in your journey</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personas.map((p) => (
            <div key={p.title} className="reveal-child rounded-2xl bg-warm-50 p-8 lg:p-10">
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{p.description}</p>
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
            I joined as an Explorer, earned the AP three months later, and had my first client referral from the network within the same quarter. The Practitioner tier paid for itself before the year was up.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Tanya Brooks</p>
            <p className="text-[14px] text-warm-400 mt-1">SEAM AP &middot; Practitioner Member</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const faqs = [
  { q: 'Can I upgrade or downgrade at any time?', a: 'Yes. Upgrade from Explorer to Practitioner or Fellow at any time — your billing starts immediately. Downgrade at the end of your annual billing cycle.' },
  { q: 'Is the Fellow tier really honor-system?', a: 'Yes. Self-reported eligibility for students, early-career professionals (under 3 years), and nonprofit staff (organizations under $5M budget). We trust our community.' },
  { q: 'Do Practitioner benefits carry over if I let my membership lapse?', a: 'Course completions and CEU records are permanent. Template access, ROSSI, and network features require an active membership. Re-join anytime to restore access.' },
  { q: 'How does the AP exam discount work?', a: 'Practitioner and Fellow members receive $50 off the AP exam registration fee. The discount is applied automatically when you register through your member dashboard.' },
  { q: 'Can my employer reimburse individual membership?', a: 'Yes. We provide invoices and receipts suitable for professional development reimbursement. Many employers cover Practitioner membership as a continuing education benefit.' },
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
            Questions about{' '}<em className="italic font-normal">individual membership</em>
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
          Start free.{' '}<em className="italic font-normal text-seam-300">Grow when you are ready.</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">Explorer costs nothing. Practitioner pays for itself with one client referral.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Join the Commons</Link>
          <Link to="/ap-credential" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Earn the AP credential</Link>
        </div>
      </div>
    </section>
  )
}

const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function IndividualMembership() {
  return (
    <>
      <SEO title="Individual Membership" description="Individual Commons membership for SEAM practitioners. Explorer (free), Practitioner ($249/yr), and Fellow ($99/yr) tiers with templates, courses, ROSSI access, and practitioner network." path="/commons/individual"
        jsonLd={[faqSchema(faqItems), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Commons', path: '/commons' }, { name: 'Individual Membership', path: '/commons/individual' }])] as unknown as Record<string, unknown>} />
      <Hero /><WhatsIncluded /><Pricing /><WhoItsFor /><Testimonial /><FAQ /><CtaBlock />
    </>
  )
}
