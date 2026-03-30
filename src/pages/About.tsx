import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import SEO, { breadcrumbSchema } from '../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="max-w-3xl hero-enter">
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            About SEAM
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Our mission is to help real estate make a{' '}
            <em className="font-display italic font-normal text-seam-300">
              positive impact on the world
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            SEAM, Inc. is a US 501(c)(3) nonprofit organization created to help businesses make a positive social impact through their commercial real estate.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── What We Do ─── */
function WhatWeDo() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal-fade-up grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
              What we do
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
              Embedding social equity into{' '}
              <em className="italic font-normal">the built environment</em>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-[17px] leading-relaxed text-warm-500">
              SEAM is an impact-driven, membership-based nonprofit that developed and maintains the SEAM social equity rating system for commercial real estate. We believe the built environment should uplift everyone.
            </p>
            <p className="text-[17px] leading-relaxed text-warm-500">
              Our mission is to provide the tools, resources, and framework to help projects and organizations put people at the center of their real estate projects. By promoting equity and fairness, we aim to transform how the industry thinks about development — making it more inclusive, just, and impactful for all communities.
            </p>
            <p className="text-[17px] leading-relaxed text-warm-500">
              Our certification program is designed to guide and recognize those committed to making social equity a cornerstone of their projects. Together, we can shape a future where every person, regardless of their background, benefits from the places they live, work, and interact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Values ─── */
const values = [
  {
    title: 'Unapologetically idealistic',
    description: 'We believe deeply that social change can be made and that we can all take part in it.',
  },
  {
    title: 'Accountable',
    description: 'We hold ourselves responsible for successes and failures, constantly learning from them to grow.',
  },
  {
    title: 'Trusted + transparent',
    description: 'We are forthright and honest in every interaction, building long-lasting relationships through integrity.',
  },
]

function Values() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Who we are
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Built on conviction,{' '}
            <em className="italic font-normal">not compromise</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="reveal-child rounded-2xl bg-white border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-4">
                {v.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Founders ─── */
const founders = [
  {
    name: 'Rainey Shane',
    role: 'Co-Founder',
    bio: '15+ years commercial real estate experience, mostly in adaptive reuse. Rainey is passionate about anti-trafficking, combatting modern slavery, and is a Rescue Team Operator for child trafficking and forced labor rescue missions.',
    image: '/team/rainey.jpg',
  },
  {
    name: 'Alex Demestihas',
    role: 'Co-Founder',
    bio: '15+ years commercial real estate experience covering multi-family and large corporate headquarters. Alex is passionate about causes involving human rights and spends his volunteer efforts focused on immigration rights.',
    image: '/team/alex.jpg',
  },
]

function Founders() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Leadership
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            The people behind{' '}
            <em className="italic font-normal">the mission</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founders.map((f) => (
            <div
              key={f.name}
              className="reveal-child rounded-2xl border border-warm-100 overflow-hidden transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="aspect-[4/3] bg-warm-100 overflow-hidden">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
              <div className="p-10 lg:p-12">
                <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-gold-500 mb-2">
                  {f.role}
                </p>
                <h3 className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-4">
                  {f.name}
                </h3>
                <p className="text-[16px] leading-relaxed text-warm-500">
                  {f.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Sponsors ─── */
function Sponsors() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">
            Thank you
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white">
            Founding Sponsors{' '}
            <em className="italic font-normal text-seam-300">+ Donors</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-400 max-w-2xl mx-auto">
            Founding sponsors and donors are an exclusive group of organizations that believe in our bold vision and financially support our ability to carry out the vision of leveraging real estate to create a positive social impact in the world.
          </p>
          <div className="mt-12">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
            >
              Become a sponsor
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
    <section className="py-24 lg:py-32 bg-warm-50">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 max-w-3xl mx-auto">
          Ready to join the{' '}
          <em className="italic font-normal text-seam-600">movement?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-500 max-w-xl mx-auto">
          Whether you are certifying a building, earning a credential, or joining the community — there is a place for you.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-warm-900 px-8 py-4 text-[16px] font-medium text-white hover:bg-warm-800 transition-colors duration-300"
          >
            Get started
          </Link>
          <Link
            to="/community"
            className="inline-flex items-center rounded-full border border-warm-300 px-8 py-4 text-[16px] font-medium text-warm-700 hover:border-warm-400 transition-colors duration-300"
          >
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function About() {
  return (
    <>
      <SEO
        title="About SEAM — Our Mission"
        description="SEAM, Inc. is a US 501(c)(3) nonprofit dedicated to embedding social equity into the construction and real estate sectors. Learn about our mission, values, and the people behind the Standard."
        path="/about"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ] as unknown as Record<string, unknown>}
      />
      <Hero />
      <WhatWeDo />
      <Values />
      <Founders />
      <Sponsors />
      <CtaBlock />
    </>
  )
}
