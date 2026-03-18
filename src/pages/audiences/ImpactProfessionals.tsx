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
            For Social Impact Professionals
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Build a practice around{' '}
            <em className="font-display italic font-normal text-seam-300">the Standard</em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            Whether you come from DEI, sustainability, community development, or advocacy — SEAM gives you the framework, credential, and network to lead social equity work in the built environment.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link to="/ap-credential" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
              Earn the AP credential
            </Link>
            <Link to="/commons" className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300">
              Join the Commons
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const challenges = [
  {
    pain: 'Expertise without a market credential',
    solution: "You have years of experience in DEI, sustainability, or community work. The SEAM AP credential translates that expertise into a recognized qualification that building owners, developers, and capital providers seek out.",
  },
  {
    pain: 'Advocacy work that hits a ceiling',
    solution: 'SEAM turns advocacy into implementation. The Standard provides a measurable, evidence-based framework that moves social equity from aspirational language into building operations, procurement, and design.',
  },
  {
    pain: 'Isolation in a niche practice area',
    solution: 'The Commons connects you with a practitioner network of APs, certified project teams, and organizations committed to the Standard. Peer learning, templates, and co-practice opportunities.',
  },
  {
    pain: 'No structured pathway into built environment work',
    solution: "SEAM provides a clear on-ramp: preparation coursework, the AP exam, directory listing, and project opportunities. You don't need an architecture degree to lead social equity certification.",
  },
]

function Challenges() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">The challenge</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            You already believe.{' '}<em className="italic font-normal">Now build a practice.</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger space-y-6">
          {challenges.map((c) => (
            <div key={c.pain} className="reveal-child grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 rounded-2xl border border-warm-100 p-8 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-400 mb-3 block">The problem</span>
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">{c.pain}</h3>
              </div>
              <div>
                <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-seam-600 mb-3 block">How SEAM helps</span>
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
  { label: 'AP Credential', title: 'Your professional qualification', description: 'The SEAM AP demonstrates mastery of the Standard. Clients and employers recognize it as evidence of deep social equity expertise in the built environment.', href: '/ap-credential', fit: 'Best for consultants, DEI practitioners, and sustainability professionals building a practice.' },
  { label: 'Commons', title: 'Your practitioner network', description: 'Membership community with templates, peer connection, course access, ROSSI tools, and co-practice opportunities with other APs and certified project teams.', href: '/commons', fit: 'Best for ongoing support, learning, and professional development after earning the AP.' },
  { label: 'Courses', title: 'Your knowledge foundation', description: 'Self-paced and instructor-led courses covering the Standard, the four pillars, the certification process, and the ROSSI financial framework.', href: '/resources/courses', fit: 'Best for professionals new to the built environment or preparing for the AP exam.' },
]

function ProductsForYou() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Your toolkit</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Products built for{' '}<em className="italic font-normal">practitioners</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.href} to={p.href} className="reveal-child group rounded-2xl bg-white p-10 lg:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-seam-600 mb-2 block">{p.label}</span>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">{p.title}</h3>
              <p className="text-[16px] leading-relaxed text-warm-500 mb-6">{p.description}</p>
              <p className="text-[14px] leading-relaxed text-warm-400 italic border-t border-warm-100 pt-5">{p.fit}</p>
              <span className="inline-block mt-4 text-[14px] font-medium text-seam-600 group-hover:text-seam-700 transition-colors">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const backgrounds = [
  { title: 'DEI practitioners', description: 'Bring your inclusion expertise into physical spaces where equitable design creates lasting structural change — not just training, but buildings that perform equitably.' },
  { title: 'Sustainability professionals', description: 'Add the social dimension that environmental certifications miss. SEAM complements LEED and WELL by measuring what they cannot — the human impact.' },
  { title: 'Community development leaders', description: 'Translate community voice into measurable outcomes. The Standard centers participatory evaluation and neighborhood engagement in building performance.' },
  { title: 'Advocates and organizers', description: 'Move from advocacy to implementation. SEAM gives you a framework to hold buildings accountable to social equity commitments with third-party verification.' },
]

function Backgrounds() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">Your background</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Every path leads{' '}<em className="italic font-normal">here</em>
          </h2>
        </div>
        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {backgrounds.map((b) => (
            <div key={b.title} className="reveal-child rounded-2xl border border-warm-100 p-8 lg:p-10">
              <h3 className="font-display text-[20px] tracking-[-0.02em] text-warm-900 mb-3">{b.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{b.description}</p>
            </div>
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
            I spent fifteen years in community organizing before earning the AP. For the first time, the work I care about has a market credential that building owners actually seek out. My phone rings now.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Priya Nair</p>
            <p className="text-[14px] text-warm-400 mt-1">SEAM AP &middot; Founder, Root Equity Consulting</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  { q: 'Do I need a specific degree to earn the AP?', a: "No specific degree is required. Candidates should hold a bachelor's degree in a related field or have three or more years of professional experience in community development, DEI, sustainability, public health, real estate, or a related area." },
  { q: 'How do I find project opportunities after earning the AP?', a: 'APs are listed in the SEAM directory, which project teams use to find qualified practitioners. Commons membership provides additional networking, co-practice opportunities, and referral access.' },
  { q: 'Can I earn the AP while working full-time?', a: 'Yes. The preparation course is self-paced and typically takes 30 to 40 hours. Most candidates complete it within six to eight weeks while working full-time. The exam is proctored online and can be scheduled at your convenience.' },
  { q: 'What does a SEAM AP actually do on a project?', a: 'APs lead the certification assessment — evaluating a building across all four pillars, identifying gaps, building an implementation plan, preparing documentation for third-party review, and guiding the project team through verification.' },
  { q: 'Is there a community of other practitioners?', a: 'Yes. The Commons is the membership community for APs and organizations. It includes peer learning, templates, ROSSI access, continuing education opportunities, and networking with certified project teams.' },
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
            Questions from{' '}<em className="italic font-normal">impact professionals</em>
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
          Your expertise deserves{' '}<em className="italic font-normal text-seam-300">a market credential</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">Earn the AP, join the practitioner network, and start leading certification work in the built environment.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/ap-credential" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Earn the AP credential</Link>
          <Link to="/commons" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Join the Commons</Link>
        </div>
      </div>
    </section>
  )
}

const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function ImpactProfessionals() {
  return (
    <>
      <SEO title="For Social Impact Professionals" description="Earn the SEAM AP credential, join a practitioner network, and build a practice around social equity certification in the built environment. For DEI practitioners, sustainability professionals, and community development leaders." path="/for/impact-professionals"
        jsonLd={[faqSchema(faqItems), breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Who We Serve', path: '/for/impact-professionals' }, { name: 'Impact Professionals', path: '/for/impact-professionals' }])] as unknown as Record<string, unknown>} />
      <Hero /><Challenges /><ProductsForYou /><Backgrounds /><Testimonial /><FAQ /><CtaBlock />
    </>
  )
}
