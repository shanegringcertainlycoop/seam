import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import SEO, { breadcrumbSchema } from '../components/SEO'

/* ─── Types ─── */
type TabKey = 'certification' | 'approved' | 'credential' | 'membership'

/* ─── Checkmark Icon ─── */
function Check({ className = '' }: { className?: string }) {
  return (
    <svg className={`shrink-0 w-4 h-4 mt-0.5 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-pricing.jpg"
          alt="People moving forward together"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="hero-enter max-w-4xl mx-auto text-center">
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            Pricing
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.04em] text-white">
            Transparent pricing for{' '}
            <em className="font-display italic font-normal text-seam-300">every path</em>
          </h1>
          <p className="hero-subtitle mt-6 max-w-2xl mx-auto text-[clamp(1.05rem,1.4vw,1.15rem)] leading-relaxed text-warm-300">
            Whether you are certifying a building, verifying a single activity, earning your credential, or joining a community of practice — you should know exactly what it costs before you start.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Tab Navigation ─── */
const tabs: { key: TabKey; label: string }[] = [
  { key: 'certification', label: 'Certification' },
  { key: 'approved', label: 'SEAM Approved' },
  { key: 'credential', label: 'AP Credential' },
  { key: 'membership', label: 'Membership' },
]

function TabBar({ active, onChange }: { active: TabKey; onChange: (key: TabKey) => void }) {
  return (
    <div className="sticky top-[72px] z-30 bg-white border-b border-warm-100 shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <nav className="flex gap-1 overflow-x-auto scrollbar-hide py-2" aria-label="Pricing categories">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onChange(tab.key)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors duration-200 ${
                active === tab.key
                  ? 'bg-warm-900 text-white'
                  : 'text-warm-500 hover:bg-warm-100 hover:text-warm-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

/* ─── Certification Tab ─── */
const certificationTracks = [
  {
    name: 'Buildings + Interiors',
    description: 'New construction and major renovations. The most comprehensive path to SEAM Certification.',
    tiers: [
      { size: 'Small', sqft: 'Under 50,000 sq ft', registration: '$3,500', verification: '$12,500', recertification: '$7,500' },
      { size: 'Medium', sqft: '50,000 – 250,000 sq ft', registration: '$5,000', verification: '$22,500', recertification: '$13,500' },
      { size: 'Large', sqft: 'Over 250,000 sq ft', registration: '$7,500', verification: '$35,000', recertification: '$21,000' },
    ],
  },
  {
    name: 'Operations + Maintenance',
    description: 'Existing buildings seeking certification through operational practices and ongoing programs.',
    tiers: [
      { size: 'Small', sqft: 'Under 50,000 sq ft', registration: '$2,500', verification: '$9,500', recertification: '$5,700' },
      { size: 'Medium', sqft: '50,000 – 250,000 sq ft', registration: '$3,500', verification: '$17,500', recertification: '$10,500' },
      { size: 'Large', sqft: 'Over 250,000 sq ft', registration: '$5,000', verification: '$27,500', recertification: '$16,500' },
    ],
  },
  {
    name: 'Community Development',
    description: 'Neighborhood-scale projects and district-level social equity initiatives.',
    tiers: [
      { size: 'Small', sqft: 'Under 10 acres', registration: '$5,000', verification: '$18,000', recertification: '$10,800' },
      { size: 'Medium', sqft: '10 – 100 acres', registration: '$7,500', verification: '$30,000', recertification: '$18,000' },
      { size: 'Large', sqft: 'Over 100 acres', registration: '$10,000', verification: '$45,000', recertification: '$27,000' },
    ],
  },
]

function CertificationTab() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Full Certification</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Bronze through Platinum{' '}<em className="italic font-normal">across three tracks</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Pricing is based on project size and rating system. Registration locks in your fee schedule for 24 months. Recertification is required every 3 years.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger space-y-12">
          {certificationTracks.map((track) => (
            <div key={track.name} className="reveal-child">
              <h3 className="font-display text-[24px] tracking-[-0.02em] text-warm-900 mb-2">{track.name}</h3>
              <p className="text-[15px] text-warm-500 mb-6">{track.description}</p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-warm-200">
                      <th className="text-left py-4 pr-6 text-[13px] font-medium uppercase tracking-[0.1em] text-warm-500">Project Size</th>
                      <th className="text-left py-4 pr-6 text-[13px] font-medium uppercase tracking-[0.1em] text-warm-500">Registration</th>
                      <th className="text-left py-4 pr-6 text-[13px] font-medium uppercase tracking-[0.1em] text-warm-500">Verification</th>
                      <th className="text-left py-4 text-[13px] font-medium uppercase tracking-[0.1em] text-warm-500">Recertification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {track.tiers.map((tier) => (
                      <tr key={tier.size} className="border-b border-warm-100">
                        <td className="py-5 pr-6">
                          <span className="block text-[16px] font-medium text-warm-900">{tier.size}</span>
                          <span className="block text-[13px] text-warm-500 mt-0.5">{tier.sqft}</span>
                        </td>
                        <td className="py-5 pr-6 font-display text-[22px] tracking-[-0.02em] text-warm-800">{tier.registration}</td>
                        <td className="py-5 pr-6 font-display text-[22px] tracking-[-0.02em] text-warm-800">{tier.verification}</td>
                        <td className="py-5 font-display text-[22px] tracking-[-0.02em] text-warm-800">{tier.recertification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-seam-50/60 border border-seam-100 p-6 lg:p-8">
          <p className="text-[15px] leading-relaxed text-seam-700">
            <strong className="font-semibold">Community member discount:</strong> Organizations with an active Builder or Steward membership receive 10 – 20% off verification fees. Volume discounts available for portfolios of 5+ projects.{' '}
            <Link to="/community/organization" className="underline hover:text-seam-900 transition-colors">Learn about organization membership &rarr;</Link>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/certification" className="inline-flex items-center rounded-full bg-warm-900 px-8 py-4 text-[15px] font-medium text-white hover:bg-warm-800 transition-colors duration-300">
            Explore certification
          </Link>
          <Link to="/get-started" className="inline-flex items-center rounded-full border border-warm-200 px-8 py-4 text-[15px] font-medium text-warm-700 hover:border-warm-300 transition-colors duration-300">
            Register a project
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ─── SEAM Approved Tab ─── */
const approvedTiers = [
  {
    name: 'Single Activity',
    price: '$1,200',
    period: '/activity',
    description: 'Verify one activity against the SEAM Standard. Ideal for testing a single practice before committing to full certification.',
    features: [
      'Third-party verification of one activity',
      'Digital SEAM Approved badge',
      'Listing in the Approved registry',
      'Valid for 3 years',
      'Pathway credit toward full certification',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Bundle of 5',
    price: '$4,500',
    period: '/bundle',
    description: 'Verify five activities at a discount. The most popular option for organizations building toward certification.',
    features: [
      'Everything in Single Activity',
      '25% savings vs. individual pricing',
      'Flexible: use across multiple projects',
      'Priority reviewer scheduling',
      'Progress dashboard toward full cert',
    ],
    cta: 'Start a bundle',
    highlighted: true,
  },
  {
    name: 'Portfolio',
    price: '$8,500',
    period: '/year',
    description: 'Unlimited activity verifications for organizations scaling social equity across a portfolio.',
    features: [
      'Unlimited activity verifications',
      'Dedicated account manager',
      'Portfolio-level reporting and benchmarking',
      'Custom verification cadence',
      'Bulk pathway credits toward certification',
      'Quarterly strategy reviews',
    ],
    cta: 'Talk to our team',
    highlighted: false,
  },
]

function ApprovedTab() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">SEAM Approved</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Verify activities{' '}<em className="italic font-normal">at any scale</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            SEAM Approved lets you verify individual practices against the Standard — standalone or as a stepping stone to full certification. Start small and scale up.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {approvedTiers.map((tier) => (
            <div key={tier.name} className={`reveal-child rounded-2xl p-8 lg:p-10 flex flex-col ${tier.highlighted ? 'bg-seam-800 text-white ring-2 ring-gold-400/60' : 'bg-white border border-warm-200/60'}`}>
              <h3 className={`font-display text-[28px] tracking-[-0.02em] ${tier.highlighted ? 'text-white' : 'text-warm-900'}`}>{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-display text-[42px] tracking-[-0.04em] ${tier.highlighted ? 'text-gold-300' : 'text-warm-900'}`}>{tier.price}</span>
                <span className={`text-[16px] ${tier.highlighted ? 'text-warm-400' : 'text-warm-500'}`}>{tier.period}</span>
              </div>
              <p className={`mt-4 text-[15px] leading-relaxed ${tier.highlighted ? 'text-seam-200' : 'text-warm-500'}`}>{tier.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] leading-snug ${tier.highlighted ? 'text-seam-100' : 'text-warm-500'}`}>
                    <Check className={tier.highlighted ? 'text-gold-400' : 'text-seam-500'} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/get-started" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 ${tier.highlighted ? 'bg-white text-seam-800 hover:bg-warm-100' : 'bg-warm-900 text-white hover:bg-warm-800'}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-seam-50/60 border border-seam-100 p-6 lg:p-8">
          <p className="text-[15px] leading-relaxed text-seam-700">
            <strong className="font-semibold">Community member discount:</strong> Practitioner-level individual members receive 15% off single activity fees. Organization members at Builder tier and above receive volume pricing automatically.{' '}
            <Link to="/community" className="underline hover:text-seam-900 transition-colors">Join the Community &rarr;</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─── AP Credential Tab ─── */
const credentialTiers = [
  {
    name: 'Exam Only',
    price: '$350',
    period: '',
    description: 'For experienced professionals who are ready to sit for the SEAM AP exam without additional preparation.',
    features: [
      'SEAM AP examination access',
      'Digital credential upon passing',
      'Listing in the AP directory',
      'Valid for 3 years',
      '2 exam attempts included',
    ],
    cta: 'Register for exam',
    highlighted: false,
  },
  {
    name: 'Exam + Prep Course',
    price: '$595',
    period: '',
    description: 'The recommended path. Combines the full preparation course with your exam registration at a bundled rate.',
    features: [
      'Everything in Exam Only',
      '40-hour self-paced prep course',
      'Practice exams and flashcards',
      'Study group access',
      'Instructor office hours',
      '15 CEU credits upon completion',
    ],
    cta: 'Start prep + exam',
    highlighted: true,
  },
  {
    name: 'Renewal',
    price: '$150',
    period: '/3 years',
    description: 'Keep your credential current. Renew every three years with continuing education credits.',
    features: [
      '30 CEU credits required per cycle',
      'CEU tracking dashboard',
      'Continued AP directory listing',
      'Access to renewal courses',
      'Credential remains active during grace period',
    ],
    cta: 'Renew credential',
    highlighted: false,
  },
]

function CredentialTab() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">AP Credential</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Invest in{' '}<em className="italic font-normal">your expertise</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            The SEAM Accredited Professional credential signals mastery of the Standard and the ability to lead projects toward certification. Prepare, pass, and maintain.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {credentialTiers.map((tier) => (
            <div key={tier.name} className={`reveal-child rounded-2xl p-8 lg:p-10 flex flex-col ${tier.highlighted ? 'bg-seam-800 text-white ring-2 ring-gold-400/60' : 'bg-white border border-warm-200/60'}`}>
              <h3 className={`font-display text-[28px] tracking-[-0.02em] ${tier.highlighted ? 'text-white' : 'text-warm-900'}`}>{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-display text-[42px] tracking-[-0.04em] ${tier.highlighted ? 'text-gold-300' : 'text-warm-900'}`}>{tier.price}</span>
                {tier.period && <span className={`text-[16px] ${tier.highlighted ? 'text-warm-400' : 'text-warm-500'}`}>{tier.period}</span>}
              </div>
              <p className={`mt-4 text-[15px] leading-relaxed ${tier.highlighted ? 'text-seam-200' : 'text-warm-500'}`}>{tier.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] leading-snug ${tier.highlighted ? 'text-seam-100' : 'text-warm-500'}`}>
                    <Check className={tier.highlighted ? 'text-gold-400' : 'text-seam-500'} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/get-started" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 ${tier.highlighted ? 'bg-white text-seam-800 hover:bg-warm-100' : 'bg-warm-900 text-white hover:bg-warm-800'}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-seam-50/60 border border-seam-100 p-6 lg:p-8">
          <p className="text-[15px] leading-relaxed text-seam-700">
            <strong className="font-semibold">Community member discount:</strong> Practitioner-level individual members save $50 on the exam and receive the prep course at no additional cost with their membership.{' '}
            <Link to="/community/individual" className="underline hover:text-seam-900 transition-colors">See membership benefits &rarr;</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

/* ─── Membership Tab ─── */
const individualTiers = [
  {
    name: 'Explorer',
    price: 'Free',
    period: '',
    description: 'For professionals exploring SEAM and getting involved. No commitment required.',
    features: [
      'Download the full SEAM Standard',
      'Browse the practitioner directory',
      'Attend public webcasts and events',
      'Monthly newsletter with field updates',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Practitioner',
    price: '$249',
    period: '/year',
    description: 'For professionals pursuing or holding the AP credential. Full community access and tools.',
    features: [
      'Everything in Explorer',
      'Activity documentation templates',
      'Full course library with CEU credit',
      'Practitioner network and referrals',
      'Basic ROSSI Calculator access',
      'CEU tracking dashboard',
      'Discounted SEAM Approved verification',
      '$50 off AP exam registration',
    ],
    cta: 'Join as Practitioner',
    highlighted: true,
  },
  {
    name: 'Fellow',
    price: '$99',
    period: '/year',
    description: 'Income-qualified rate for students, early-career professionals, and nonprofit staff.',
    features: [
      'Everything in Practitioner',
      'Income-qualified pricing (self-reported)',
      'Mentorship matching with senior APs',
      'Priority access to fellowship programs',
    ],
    cta: 'Apply for Fellow',
    highlighted: false,
    note: 'Available to students, professionals with under 3 years of experience, and staff at nonprofits with budgets under $5M.',
  },
]

const organizationTiers = [
  {
    name: 'Contributor',
    price: '$2,500',
    period: '/year',
    description: 'For organizations beginning their SEAM journey. Access to templates and basic portfolio tools.',
    features: [
      '5 team seats',
      'Activity documentation templates',
      'Basic ROSSI Calculator',
      'Quarterly webinars and office hours',
      'Standard member directory listing',
      'Discounted SEAM Approved fees',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Builder',
    price: '$7,500',
    period: '/year',
    description: 'For organizations actively pursuing certification or rolling out SEAM Approved across properties.',
    features: [
      '15 team seats',
      'Full ROSSI Calculator with portfolio modeling',
      'Priority reviewer scheduling',
      'Dedicated onboarding session',
      'Full course library for all seats',
      '10% off certification fees',
      'Volume SEAM Approved pricing',
      'Quarterly strategy check-ins',
    ],
    cta: 'Start as Builder',
    highlighted: true,
  },
  {
    name: 'Steward',
    price: '$18,000',
    period: '/year',
    description: 'For institutions leading the movement. Maximum influence, unlimited scale.',
    features: [
      'Unlimited team seats',
      'Portfolio ROSSI with benchmarking',
      'Advisory council seat',
      'Co-branded case studies',
      'Custom training for your team',
      '20% off certification fees',
      'Priority access to pilot programs',
      'Speaking opportunities at SEAM events',
      'Executive briefings and board presentations',
    ],
    cta: 'Talk to our team',
    highlighted: false,
  },
]

function MembershipTab() {
  const individualHeaderRef = useReveal()
  const individualGridRef = useReveal(0.1)
  const orgHeaderRef = useReveal()
  const orgGridRef = useReveal(0.1)

  return (
    <div className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Individual membership */}
        <div ref={individualHeaderRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Individual Membership</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Your practice,{' '}<em className="italic font-normal">your pace</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Start free. Upgrade when you are ready. Downgrade or cancel anytime.
          </p>
        </div>

        <div ref={individualGridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {individualTiers.map((tier) => (
            <div key={tier.name} className={`reveal-child rounded-2xl p-8 lg:p-10 flex flex-col ${tier.highlighted ? 'bg-seam-800 text-white ring-2 ring-seam-400/40' : 'bg-white border border-warm-200/60'}`}>
              <h3 className={`font-display text-[28px] tracking-[-0.02em] ${tier.highlighted ? 'text-white' : 'text-warm-900'}`}>{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-display text-[42px] tracking-[-0.04em] ${tier.highlighted ? 'text-gold-300' : 'text-warm-900'}`}>{tier.price}</span>
                {tier.period && <span className={`text-[16px] ${tier.highlighted ? 'text-warm-400' : 'text-warm-500'}`}>{tier.period}</span>}
              </div>
              <p className={`mt-4 text-[15px] leading-relaxed ${tier.highlighted ? 'text-seam-200' : 'text-warm-500'}`}>{tier.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] leading-snug ${tier.highlighted ? 'text-seam-100' : 'text-warm-500'}`}>
                    <Check className={tier.highlighted ? 'text-gold-400' : 'text-seam-500'} />
                    {f}
                  </li>
                ))}
              </ul>

              {'note' in tier && tier.note && (
                <p className={`mt-6 text-[13px] leading-relaxed italic ${tier.highlighted ? 'text-seam-300' : 'text-warm-500'}`}>{tier.note}</p>
              )}

              <Link to="/get-started" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 ${tier.highlighted ? 'bg-white text-seam-800 hover:bg-warm-100' : 'bg-warm-900 text-white hover:bg-warm-800'}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 lg:my-28 border-t border-warm-200" />

        {/* Organization membership */}
        <div ref={orgHeaderRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Organization Membership</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Scale your commitment{' '}<em className="italic font-normal">with your portfolio</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Organization pricing includes annual billing with the option to add seats and properties mid-cycle.
          </p>
        </div>

        <div ref={orgGridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {organizationTiers.map((tier) => (
            <div key={tier.name} className={`reveal-child rounded-2xl p-8 lg:p-10 flex flex-col ${tier.highlighted ? 'bg-seam-800 text-white ring-2 ring-seam-400/40' : 'bg-white border border-warm-200/60'}`}>
              <h3 className={`font-display text-[28px] tracking-[-0.02em] ${tier.highlighted ? 'text-white' : 'text-warm-900'}`}>{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-display text-[42px] tracking-[-0.04em] ${tier.highlighted ? 'text-gold-300' : 'text-warm-900'}`}>{tier.price}</span>
                {tier.period && <span className={`text-[16px] ${tier.highlighted ? 'text-warm-400' : 'text-warm-500'}`}>{tier.period}</span>}
              </div>
              <p className={`mt-4 text-[15px] leading-relaxed ${tier.highlighted ? 'text-seam-200' : 'text-warm-500'}`}>{tier.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] leading-snug ${tier.highlighted ? 'text-seam-100' : 'text-warm-500'}`}>
                    <Check className={tier.highlighted ? 'text-gold-400' : 'text-seam-500'} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/get-started" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 ${tier.highlighted ? 'bg-white text-seam-800 hover:bg-warm-100' : 'bg-warm-900 text-white hover:bg-warm-800'}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: 'Can I start with SEAM Approved and upgrade to full Certification later?',
    a: 'Yes. Every verified activity earns pathway credit toward full certification. Many organizations start by verifying 3 to 5 activities and then transition to a full certification track when they are ready.',
  },
  {
    q: 'Do Commons members get discounts on certification and verification fees?',
    a: 'Yes. Individual Practitioner members receive 15% off SEAM Approved single-activity fees and $50 off the AP exam. Organization members at Builder tier receive 10% off certification fees, and Steward members receive 20% off.',
  },
  {
    q: 'How long does a certification remain valid?',
    a: 'SEAM Certification is valid for 3 years. After that, projects must recertify to maintain their certification level. Recertification fees are approximately 60% of the original verification fee.',
  },
  {
    q: 'Is there volume pricing for portfolios with many buildings?',
    a: 'Yes. Organizations certifying 5 or more projects can access portfolio pricing through an Organization membership at the Builder or Steward tier. Contact our team for a custom quote.',
  },
  {
    q: 'What is included in the registration fee?',
    a: 'Registration gives you access to the online project portal, documentation templates, a preliminary review of your project scope, and locks in your fee schedule for 24 months. It is a separate fee from the verification review.',
  },
  {
    q: 'Can my AP exam fee be covered by my organization?',
    a: 'Yes. Many organizations cover exam and membership fees for their team. Organization members at Builder and Steward tiers include full course library access for all seats, and exam fees can be invoiced to the organization.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept credit cards, ACH transfers, and wire transfers. Organization memberships and certification fees above $5,000 can be invoiced with Net 30 terms.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Registration fees are non-refundable once your project is entered into review. Membership fees can be refunded within 30 days of purchase. Exam fees can be transferred to a later date but are non-refundable.',
  },
]

function FAQ() {
  const headerRef = useReveal()
  const listRef = useReveal(0.1)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-[#f7f6f4]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">FAQ</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Common questions{' '}<em className="italic font-normal">answered</em>
          </h2>
        </div>

        <div ref={listRef} className="reveal-stagger max-w-3xl space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal-child border-b border-warm-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-[16px] lg:text-[17px] font-medium text-warm-900 pr-6 group-hover:text-seam-600 transition-colors">{faq.q}</span>
                <svg
                  className={`shrink-0 w-5 h-5 text-warm-400 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <div id={`faq-answer-${i}`} role="region" className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-[15px] leading-relaxed text-warm-500 pr-12">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function BottomCTA() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal-fade-up rounded-3xl bg-seam-800 p-12 lg:p-20 text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.03em] text-white">
            Not sure which path is right?
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-300 max-w-2xl mx-auto">
            Whether you are a practitioner, a building owner, or an organization with a portfolio, our team can help you find the right entry point. No commitment required.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-seam-800 hover:bg-warm-100 transition-colors duration-300"
            >
              Get started
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300"
            >
              Explore the Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Main Page ─── */
export default function Pricing() {
  const [activeTab, setActiveTab] = useState<TabKey>('certification')

  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent pricing for SEAM Certification, SEAM Approved verification, AP Credential, and Commons membership. See fees for every path to social equity in the built environment."
        path="/pricing"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />

      <Hero />
      <TabBar active={activeTab} onChange={setActiveTab} />

      {activeTab === 'certification' && <CertificationTab />}
      {activeTab === 'approved' && <ApprovedTab />}
      {activeTab === 'credential' && <CredentialTab />}
      {activeTab === 'membership' && <MembershipTab />}

      <FAQ />
      <BottomCTA />
    </>
  )
}
