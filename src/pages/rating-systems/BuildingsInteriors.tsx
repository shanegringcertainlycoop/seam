import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'
import SEO, { breadcrumbSchema } from '../../components/SEO'
import Breadcrumbs from '../../components/Breadcrumbs'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-3xl hero-enter">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'The Standard', href: '/resources/standard' },
              { label: 'Buildings + Interiors' },
            ]}
          />
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            Rating System
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Buildings +{' '}
            <em className="font-display italic font-normal text-seam-300">
              Interiors
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            The rating system for new construction, renovations, and interior fit-outs. Measure social equity across every dimension of how a project is designed, built, and brought to life, from the initial design decisions to the people involved in construction and the communities affected by both.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
            >
              Start your project
            </Link>
            <Link
              to="/resources/standard"
              className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300"
            >
              Access the Standard
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const s1 = useCountUp(6, { suffix: '' })
  const s2 = useCountUp(4, { suffix: '' })
  const s3 = useCountUp(28, { suffix: '+' })
  const s4 = useCountUp(4, { suffix: '' })
  const ref = useReveal(0.2)

  const stats = [
    { ...s1, label: 'Credit categories' },
    { ...s2, label: 'Certification levels' },
    { ...s3, label: 'Measurable credits' },
    { ...s4, label: 'Interdependent pillars' },
  ]

  return (
    <section ref={ref} className="reveal-fade-up bg-warm-50 border-b border-warm-100">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span
                ref={s.ref}
                className="block font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.04em] text-gold-500"
              >
                {s.display}
              </span>
              <span className="block mt-1 text-[14px] text-warm-500 uppercase tracking-[0.08em]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Overview ─── */
function Overview() {
  const headerRef = useReveal()
  const bodyRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Overview
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Design and construction that centers{' '}
            <em className="italic font-normal">people</em>
          </h2>
        </div>

        <div ref={bodyRef} className="reveal-fade-up grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-[17px] leading-relaxed text-warm-500">
              Buildings + Interiors is SEAM's rating system for projects at the design and construction stage.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-warm-500">
              It applies all four pillars of the SEAM Standard to the decisions that happen before a building opens: who you engage during planning, how you govern the project, who you hire and on what terms, what your materials are made of and where they come from, and how the finished space serves everyone it touches.
            </p>
          </div>
          <div>
            <p className="text-[17px] leading-relaxed text-warm-500">
              This track asks a fundamental question: does this building serve the health, dignity, and economic opportunity of every person who enters it? Credits span indoor environmental quality, accessibility, inclusive procurement, and biophilic design — creating spaces that are not only sustainable but genuinely equitable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Credit Categories ─── */
const categories = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: 'Social Impact',
    description:
      'Before a shovel hits the ground, understand who your project affects and how. Map the social context, engage impacted parties, and put monitoring systems in place so you can track outcomes from day one.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Social Responsibility',
    description:
      'Build equity into how your organization governs the project from the start. Train your team, establish site-specific policies, align with recognized initiatives, and invest in the communities your project will shape.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    ),
    title: 'Equity + Inclusion in Procurement',
    description:
      'Build inclusive practices into how you hire suppliers, award contracts, and structure leases. From tier-one vendors to tenant agreements, ensure the economic opportunity your project creates reaches a broader range of people and businesses.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
    ),
    title: 'Equity + Inclusion in the Workplace',
    description:
      'Set clear standards for how people are treated on and around your project. This covers fair treatment, equal pay, and inclusive design standards for everyone who works in or on your building.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: 'Equity + Inclusion in the Community',
    description:
      'Understand and actively manage your project\'s relationship with the surrounding community. This includes avoiding involuntary displacement, promoting local employment, and taking responsibility for negative impacts when they occur.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.253 2.253 0 0 1-1.699 2.583l-.349.087a9 9 0 0 1-5.191-1.49" />
      </svg>
    ),
    title: 'Human Rights + Health and Safety',
    description:
      'Protect the people your project touches across its full reach. This covers ethical materials procurement, ethical suppliers procurement, human rights reporting, and the health and safety of workers, occupants, and the surrounding community.',
  },
]

function CreditCategories() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Credit categories
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            What gets measured{' '}
            <em className="italic font-normal">gets built</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Each credit category addresses a dimension of how buildings shape the daily experience and long-term outcomes of the people inside them.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className="reveal-child group rounded-2xl border border-warm-100 bg-white p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="text-gold-500 mb-6">{c.icon}</div>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
                {c.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Who It's For ─── */
function Audience() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Who it&rsquo;s for
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
            Built for the teams that{' '}
            <em className="italic font-normal text-seam-300">shape our spaces</em>
          </h2>
          <p className="mt-6 text-[17px] text-warm-400 max-w-2xl mx-auto leading-relaxed">
            The Buildings + Interiors track is designed for everyone who has a hand in how a new project comes to life, from the developers who set the vision to the architects and designers who execute it, and the capital providers who make it possible.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Developers + Owners', description: 'Set project requirements that embed equity into every phase of design and construction.' },
              { title: 'Architects', description: 'Use a rigorous framework to translate equity goals into spatial design decisions and material selections.' },
              { title: 'Interior Designers', description: 'Design fit-outs that serve the health, comfort, and dignity of every occupant who uses the space.' },
              { title: 'Capital Providers', description: 'Align investment decisions with a structured social equity framework and support projects that can demonstrate measurable outcomes for people and communities.' },
            ].map((a) => (
              <div key={a.title} className="rounded-2xl border border-warm-700 p-8 lg:p-10 text-left">
                <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-white mb-3">
                  {a.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-warm-400">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Certification Levels ─── */
const levels = [
  {
    number: '01',
    title: 'Bronze',
    description:
      'Foundational commitment. The project meets baseline requirements across all four pillars, with a primary focus on identifying and avoiding harm to the people it affects.',
  },
  {
    number: '02',
    title: 'Silver',
    description:
      'Meaningful progress. The project goes beyond baseline in multiple areas and demonstrates documented outcomes that measurably benefit the people and communities it serves.',
  },
  {
    number: '03',
    title: 'Gold',
    description:
      'Active leadership. The project achieves high performance across all pillars, with innovative approaches that actively contribute to more equitable outcomes in procurement, the workplace, the community, and the supply chain.',
  },
  {
    number: '04',
    title: 'Platinum',
    description:
      'Industry benchmark. The project sets a standard for what social equity in the built environment can look like, with transformative, documented contributions to solutions that extend beyond the project itself.',
  },
]

function CertificationLevels() {
  const headerRef = useReveal()
  const stepsRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Certification levels
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Bronze through{' '}
            <em className="italic font-normal">Platinum</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Each certification level reflects demonstrated progress across all four pillars. The path to Platinum is built on consistent, documented commitment at every level of the Standard.
          </p>
        </div>

        <div ref={stepsRef} className="reveal-stagger">
          {levels.map((level, i) => (
            <div
              key={level.number}
              className={`reveal-child grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-12 ${
                i < levels.length - 1 ? 'border-b border-warm-200' : ''
              }`}
            >
              <div className="lg:col-span-1">
                <span className="font-display text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.02em] text-seam-500">
                  {level.number}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900">
                  {level.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[16px] lg:text-[17px] leading-relaxed text-warm-500">
                  {level.description}
                </p>
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
          Ready to build something that works for{' '}
          <em className="italic font-normal text-seam-300">everyone it touches?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Register your project today or download the Standard to explore the Buildings + Interiors framework.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
          >
            Register your project
          </Link>
          <Link
            to="/resources/standard"
            className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300"
          >
            Access the Standard
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function BuildingsInteriors() {
  return (
    <>
      <SEO
        title="Buildings + Interiors Rating System — SEAM"
        description="The SEAM Buildings + Interiors rating system evaluates how new construction, renovations, and interior fit-outs are designed to advance social equity. Air quality, lighting, thermal comfort, acoustics, accessibility, and biophilic design."
        path="/rating-system/buildings-interiors"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Rating Systems', path: '/rating-system' },
            { name: 'Buildings + Interiors', path: '/rating-system/buildings-interiors' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      <StatsBar />
      <Overview />
      <CreditCategories />
      <Audience />
      <CertificationLevels />
      <CtaBlock />
    </>
  )
}
