import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import SEO, { faqSchema, breadcrumbSchema } from '../../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-enter">
            <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
              Professional Credential
            </span>
            <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
              Become a SEAM{' '}
              <em className="font-display italic font-normal text-seam-300">
                Accredited Professional
              </em>
            </h1>
            <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
              The credential for professionals who want to guide people-centered projects in the built environment. Gain a credential you can use to guide real projects and expand your advisory value.
            </p>
            <div className="hero-cta mt-10 flex flex-wrap gap-4">
              <Link
                to="/get-started"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
              >
                Become a SEAM AP
              </Link>
              <Link
                to="/resources/courses"
                className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300"
              >
                See program details
              </Link>
            </div>
          </div>

          {/* AP Credential seal */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-full border border-seam-500/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-0 -m-16 rounded-full border border-seam-400/10 animate-[spin_45s_linear_infinite_reverse]" />
              <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-seam-900/40 border border-seam-900/10">
                <img
                  src="/logos/ap-seal.png"
                  alt="SEAM AP credential seal"
                  className="w-56 h-56 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ─── Why Earn the AP ─── */
const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Strengthen your expertise',
    description:
      'Build fluency across the four pillars of social equity in the built environment. The AP credential signals deep, applied knowledge that clients and employers recognize.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Join a global practitioner network',
    description:
      'Get listed in the SEAM directory, connect with certified project teams, and access peer learning and collaboration opportunities worldwide.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    title: 'Build a practice',
    description:
      'APs lead certification engagements for developers, owners, and operators. The credential qualifies you to guide projects from initial assessment through full certification.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Shape the field',
    description:
      'Contribute to standard development, pilot new activities, and help define how social equity is measured in the built environment.',
  },
]

function WhyEarn() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Why earn the AP
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            A credential that{' '}
            <em className="italic font-normal text-seam-600">sets you apart</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="reveal-child group rounded-2xl border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="text-gold-500 mb-6">{b.icon}</div>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
                {b.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ─── */
const steps = [
  {
    number: '01',
    title: 'No prior SEAM experience required',
    description:
      'The program is designed for professionals from any background — sustainability, real estate, DEI, community development, public health, or related fields. No prerequisites to enroll.',
  },
  {
    number: '02',
    title: 'Complete the prep coursework',
    description:
      'Work through the self-paced SEAM AP Preparation Course covering all four pillars, the certification process, and how to apply SEAM activities in commercial real estate.',
  },
  {
    number: '03',
    title: 'Pass the examination',
    description:
      'Demonstrate competency across the Standard in a proctored online exam. Scenario-based questions test applied knowledge, not memorization.',
  },
  {
    number: '04',
    title: 'Maintain your credential',
    description:
      'Complete continuing education units every three years. Lead or contribute to certified projects, publish, teach, or participate in standard development.',
  },
]

function HowItWorks() {
  const headerRef = useReveal()
  const stepsRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            The path
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Four steps to{' '}
            <em className="italic font-normal text-seam-600">accreditation</em>
          </h2>
        </div>

        <div ref={stepsRef} className="reveal-stagger">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal-child grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-12 ${
                i < steps.length - 1 ? 'border-b border-warm-200' : ''
              }`}
            >
              <div className="lg:col-span-1">
                <span className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.02em] text-seam-500">
                  {step.number}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[16px] lg:text-[17px] leading-relaxed text-warm-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Who It's For ─── */
const audiences = [
  {
    title: 'Sustainability consultants',
    description: 'Add social equity to your service offering and differentiate from peers focused only on environmental performance.',
  },
  {
    title: 'DEI practitioners',
    description: 'Bring your expertise into the built environment — where equitable design creates lasting structural change.',
  },
  {
    title: 'Real estate professionals',
    description: 'Lead certification engagements for developers, owners, and operators seeking SEAM achievements for their buildings.',
  },
  {
    title: 'Community development leaders',
    description: "Translate community voice into measurable outcomes through the Standard's built-in participation engagements.",
  },
]

function WhoItsFor() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Who it's for
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Built for professionals{' '}
            <em className="italic font-normal text-seam-600">ready to lead</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="reveal-child rounded-2xl bg-warm-50 p-5 sm:p-8 lg:p-10"
            >
              <h3 className="font-display text-[20px] tracking-[-0.02em] text-warm-900 mb-3">
                {a.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-500">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Featured APs ─── */
const featuredAPs = [
  {
    name: 'Alexandra Bull',
    title: 'Senior Sustainability & Wellness Consultant',
    image: '/images/ap-alexandra-bull.jpg',
    logo: '/images/logo-jll.jpg',
    quote:
      'The AP credential connected my background in public health to the built environment in a way that developers and investors actually respond to.',
  },
  {
    name: 'Christian Mayer',
    title: 'Senior Project Manager',
    image: '/images/ap-christian-mayer.jpg',
    logo: '/images/logo-jll.jpg',
    quote:
      'Within six months of earning my AP, I was leading certification engagements for three projects. The credential gave me immediate credibility with building owners.',
  },
  {
    name: 'Melina Gorrebeeck',
    title: 'Social Value Expert',
    image: '/images/ap-melina-gorrebeeck.jpg',
    logo: '/images/logo-lammp.jpg',
    quote:
      'SEAM gave me a structured framework to translate twenty years of community organizing into measurable outcomes that show up in project financing.',
  },
]

function FeaturedAPs() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Meet our APs
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Practitioners leading{' '}
            <em className="italic font-normal text-seam-600">the work</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredAPs.map((ap) => (
            <div
              key={ap.name}
              className="reveal-child rounded-2xl bg-white border border-warm-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="aspect-[4/3] bg-warm-200 overflow-hidden">
                <img
                  src={ap.image}
                  alt={ap.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-8 lg:p-10">
                <blockquote className="text-[16px] leading-relaxed text-warm-600 italic">
                  "{ap.quote}"
                </blockquote>
                <div className="mt-6 pt-6 border-t border-warm-100 flex items-center justify-between">
                  <div>
                    <p className="text-[16px] font-medium text-warm-900">
                      {ap.name}
                    </p>
                    <p className="text-[14px] text-warm-500 mt-1">{ap.title}</p>
                  </div>
                  {ap.logo ? (
                    <img src={ap.logo} alt="" className="w-24 h-24 rounded-lg object-contain shrink-0 ml-4" />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-warm-100 border border-warm-200 flex items-center justify-center shrink-0 ml-4">
                      <svg className="w-5 h-5 text-warm-300" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
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
            The SEAM AP credential gave me the language and framework to turn twenty years of community development work into something building owners actually act on.
          </blockquote>
          <div className="mt-10">
            <p className="text-[16px] font-medium text-white">Jordan Torres</p>
            <p className="text-[14px] text-warm-400 mt-1">
              SEAM AP &middot; Principal, Equity Built Consulting
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
    q: 'What are the prerequisites for the SEAM AP?',
    a: 'Candidates should hold a bachelor\'s degree in a related field (architecture, urban planning, sustainability, social work, public health, real estate, or similar) or have three or more years of professional experience in community development, DEI, ESG, or the built environment.',
  },
  {
    q: 'How long does the preparation course take?',
    a: 'The self-paced course typically takes 30 to 40 hours to complete. Most candidates finish within six to eight weeks while working full-time. All materials are available online.',
  },
  {
    q: 'What does the exam cover?',
    a: 'The exam tests applied knowledge across all four pillars of the SEAM Standard (Health + Wellness, Economic Equity, Accessibility + Inclusion, Community + Culture), the certification process, the ROSSI financial framework, and scenario-based project decision-making.',
  },
  {
    q: 'How much does the credential cost?',
    a: 'The preparation course and exam fee are bundled at a single price. Community members receive a discount. Renewal every three years requires continuing education credits — no re-examination.',
  },
  {
    q: 'Is the AP credential required to work on SEAM projects?',
    a: 'No. Any professional can contribute to a SEAM certification project. However, having at least one SEAM AP on the project team is required for full certification submissions.',
  },
  {
    q: 'How do I maintain my credential?',
    a: 'Complete 30 continuing education units (CEUs) within each three-year renewal cycle. CEUs can be earned through project work, teaching, publishing, standard development contributions, and approved courses.',
  },
]

function FAQ() {
  const headerRef = useReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-warm-50 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          <div>
            <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
              <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
                Frequently asked
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
                Questions about{' '}
                <em className="italic font-normal text-seam-600">the AP credential</em>
              </h2>
            </div>

            <div>
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

          <div className="hidden lg:block sticky top-32">
            <img
              src="/images/faq-ap-credential.jpg"
              alt="SEAM Accredited Professional"
              className="w-full aspect-[3/4] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ─── */
function Pricing() {
  const headerRef = useReveal()
  const cardsRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20 mx-auto text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Pricing
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Invest in your{' '}
            <em className="italic font-normal text-seam-600">credential</em>
          </h2>
        </div>

        <div ref={cardsRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bundle card */}
          <div className="reveal-child rounded-2xl border-2 border-seam-500 p-10 lg:p-12 relative">
            <span className="absolute -top-3.5 left-8 bg-seam-500 text-white text-[12px] font-medium uppercase tracking-[0.1em] px-4 py-1.5 rounded-full">
              Best value
            </span>
            <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-2">
              AP Credential Bundle
            </h3>
            <p className="text-[15px] text-warm-500 mb-8">
              Everything you need to earn your SEAM AP
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-[clamp(2.5rem,4vw,3.5rem)] tracking-[-0.03em] text-warm-900">
                $389
              </span>
              <span className="text-[16px] text-warm-400 line-through">$518</span>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                'Self-paced preparation course',
                'Proctored online examination',
                'Digital credential & seal',
                'SEAM directory listing',
                'Community membership included',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-warm-600">
                  <svg className="w-5 h-5 text-seam-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/get-started"
              className="block w-full text-center rounded-full bg-seam-500 px-8 py-4 text-[16px] font-medium text-white hover:bg-seam-600 transition-colors duration-300"
            >
              Get started
            </Link>
          </div>

          {/* Training only card */}
          <div className="reveal-child rounded-2xl border border-warm-200 p-10 lg:p-12">
            <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-2">
              Training Only
            </h3>
            <p className="text-[15px] text-warm-500 mb-8">
              Learn the SEAM Standard at your own pace
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display text-[clamp(2.5rem,4vw,3.5rem)] tracking-[-0.03em] text-warm-900">
                $129
              </span>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                'Self-paced preparation course',
                'All four pillar modules',
                'Certification process overview',
                'Income-qualified rate available',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-warm-600">
                  <svg className="w-5 h-5 text-seam-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/resources/courses"
              className="block w-full text-center rounded-full border border-warm-300 px-8 py-4 text-[16px] font-medium text-warm-900 hover:border-warm-400 transition-colors duration-300"
            >
              Enroll in course
            </Link>
          </div>
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
          Ready to lead the next generation of{' '}
          <em className="italic font-normal text-seam-400">equitable buildings?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Start the AP preparation course today or reach out with questions about the credential.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
          >
            Start your application
          </Link>
          <Link
            to="/resources/courses"
            className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300"
          >
            Browse prep courses
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
const faqItems = faqs.map((f) => ({ question: f.q, answer: f.a }))

export default function APCredential() {
  return (
    <>
      <SEO
        title="SEAM AP Credential"
        description="Become a SEAM Accredited Professional. The credential for professionals who guide people-centered projects in the built environment. Build a practice, join the directory, shape the field."
        path="/ap-credential"
        jsonLd={[
          faqSchema(faqItems),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/certification' },
            { name: 'AP Credential', path: '/ap-credential' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      <WhyEarn />
      <HowItWorks />
      <WhoItsFor />
      <FeaturedAPs />
      <Testimonial />
      <FAQ />
      <Pricing />
      <CtaBlock />
    </>
  )
}
