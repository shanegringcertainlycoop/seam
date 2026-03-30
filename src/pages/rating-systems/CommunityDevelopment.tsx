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
              { label: 'Community Development' },
            ]}
          />
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            Rating System
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Community{' '}
            <em className="font-display italic font-normal text-seam-300">
              Development
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            The rating system for neighborhood-scale and community-level projects. Measure how development engages, employs, and creates lasting wealth for the communities it touches.
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
  const s1 = useCountUp(5, { suffix: '' })
  const s2 = useCountUp(4, { suffix: '' })
  const s3 = useCountUp(40, { suffix: '+' })
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
            Equity at the scale of{' '}
            <em className="italic font-normal">neighborhoods</em>
          </h2>
        </div>

        <div ref={bodyRef} className="reveal-fade-up grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-[17px] leading-relaxed text-warm-500">
              The Community Development track evaluates neighborhood-scale initiatives, campuses, and districts. It measures how development projects engage, employ, and create wealth for the communities they touch — moving beyond individual buildings to address systemic equity at the scale where it matters most.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-warm-500">
              Community engagement, placemaking, and local economic development are not afterthoughts in this framework. They are the primary metrics by which a project is evaluated.
            </p>
          </div>
          <div>
            <p className="text-[17px] leading-relaxed text-warm-500">
              This track recognizes that the most consequential decisions about social equity happen before a single building is designed — in the planning, engagement, and governance processes that determine who benefits from development and who is displaced by it. Credits evaluate authentic community voice, local hiring commitments, cultural preservation, and long-term economic inclusion.
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Community Engagement',
    description:
      'Authentic participatory processes that give residents genuine decision-making power over how their neighborhood is developed — not token outreach, but shared governance.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    title: 'Local Hiring',
    description:
      'Workforce development commitments that connect construction and permanent jobs to local residents, with targets for historically underemployed populations and living wage standards.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    title: 'Cultural Preservation',
    description:
      'Protections and investments that honor the existing cultural identity of a neighborhood — its stories, landmarks, traditions, and the communities that created them.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Public Space Access',
    description:
      'Parks, plazas, community facilities, and shared amenities that are designed for and accessible to all residents — not gated or privatized for the benefit of a few.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: 'Economic Inclusion',
    description:
      'Ownership structures, revenue-sharing models, and anti-displacement strategies that ensure long-term residents and local businesses share in the economic value development creates.',
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
            Development that builds{' '}
            <em className="italic font-normal">community wealth</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Each credit category addresses a dimension of how development projects can create lasting, equitable value for the neighborhoods they transform.
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
            Built for the organizations that{' '}
            <em className="italic font-normal text-seam-300">shape neighborhoods</em>
          </h2>
          <p className="mt-6 text-[17px] text-warm-400 max-w-2xl mx-auto leading-relaxed">
            The Community Development track is designed for organizations working at the neighborhood scale — where decisions about land use, investment, and governance determine who benefits from growth.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Community Development Orgs', description: 'Apply a rigorous, third-party-verified framework to demonstrate the social equity outcomes of your development projects.' },
              { title: 'Municipalities', description: 'Set measurable equity standards for public-private partnerships, rezoning approvals, and community benefit agreements.' },
              { title: 'Master Planners', description: 'Integrate social equity metrics into campus and district plans from the earliest stages of visioning and design.' },
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

/* ─── CTA ─── */
function CtaBlock() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mx-auto">
          Ready to develop a neighborhood that{' '}
          <em className="italic font-normal text-seam-300">belongs to its community?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Register your project today or download the Standard to explore the Community Development framework.
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
export default function CommunityDevelopment() {
  return (
    <>
      <SEO
        title="Community Development Rating System — SEAM"
        description="The SEAM Community Development rating system evaluates neighborhood-scale projects for social equity. Community engagement, local hiring, cultural preservation, public space access, and economic inclusion."
        path="/rating-system/community-development"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Rating Systems', path: '/rating-system' },
            { name: 'Community Development', path: '/rating-system/community-development' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      <StatsBar />
      <Overview />
      <CreditCategories />
      <Audience />
      <CtaBlock />
    </>
  )
}
