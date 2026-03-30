import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { useEffect, useRef } from 'react'
import SEO, { faqSchema } from '../components/SEO'
import Marquee from '../components/Marquee'

/* ─── Section 1: Hero ─── */
function Hero() {
  const imageRef = useRef<HTMLImageElement>(null)

  // Subtle parallax on the hero image
  useEffect(() => {
    function handleScroll() {
      if (imageRef.current) {
        const y = window.scrollY
        imageRef.current.style.transform = `translateY(${y * 0.25}px) scale(1.05)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/hero.png"
          alt="People gathered in conversation beneath the columns of a modern building"
          className="hero-image h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/10" />
      </div>

      <div className="hero-enter relative mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <h1 className="hero-title font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            Buildings impact everyone.{' '}
            <em className="font-display italic font-normal text-warm-200">
              How can they uplift all?
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-2xl text-[clamp(1.1rem,1.5vw,1.25rem)] leading-relaxed text-warm-200">
            From the labor you source to the manufacturers you choose and the communities you touch, your building leaves a lasting impression. SEAM was created to make it a positive one.
          </p>
          <div className="hero-cta mt-12 flex flex-wrap gap-4">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
            >
              Start a project
            </Link>
            <Link
              to="/about/mission"
              className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 text-[16px] font-medium text-white hover:border-white/60 transition-colors duration-300"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: Mission ─── */
function Mission() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal-fade-up max-w-3xl mx-auto text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Our purpose
          </p>
          <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-warm-900">
            When buildings are{' '}
            <em className="italic font-normal text-warm-500">
              designed and operated
            </em>{' '}
            with social equity as a focus, and not an afterthought, communities thrive and investments outperform. SEAM is the world's first standard built to advance social equity in commercial real estate.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2b: Stats Ticker ─── */
function Stats() {
  const s1 = useCountUp(4, { suffix: '' })
  const s2 = useCountUp(3, { suffix: '' })
  const s3 = useCountUp(100, { suffix: '%' })
  const s4 = useCountUp(50, { suffix: '+' })
  const ref = useReveal(0.2)

  const stats = [
    { ...s1, label: 'Certification pillars' },
    { ...s2, label: 'Product tracks' },
    { ...s3, label: 'Open-source standard' },
    { ...s4, label: 'Activities measured' },
  ]

  return (
    <section ref={ref} className="reveal-fade-up py-16 lg:py-20 border-b border-warm-100">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span
                ref={s.ref}
                className="block font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[-0.04em] text-seam-600"
              >
                {s.display}
              </span>
              <span className="block mt-2 text-[14px] text-warm-500 uppercase tracking-[0.08em]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Four Pillars ─── */
const pillars = [
  {
    number: '01',
    title: 'Social Impact',
    icon: '/icons/pillar-social-impact.png',
    description:
      'Measurable outcomes for people and communities. Social Impact is the pillar that builds the evidence behind your project\u2019s wide-ranging effect on the people and communities it reaches.',
  },
  {
    number: '02',
    title: 'Social Responsibility',
    icon: '/icons/pillar-social-responsibility.png',
    description:
      'How an organization operates says as much as what it builds. Social Responsibility focuses on the governance practices, community engagement, and social investments that turn values into consistent, documented action.',
  },
  {
    number: '03',
    title: 'Social Justice',
    icon: '/icons/pillar-social-justice.png',
    description:
      'Real estate shapes who has access to opportunity, and who doesn\u2019t. The Social Justice pillar addresses issues that historically impact how we build, zone, invest, and support impacted parties.',
  },
  {
    number: '04',
    title: 'Social Accountability',
    icon: '/icons/pillar-social-accountability.png',
    description:
      'Every building is connected to people far beyond its walls. Social Accountability is the pillar that addresses the full reach of that connection, from the materials sourced and the suppliers hired to the health and safety of everyone the project impacts.',
  },
]

function Pillars() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            The framework
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Four pillars of{' '}
            <em className="italic font-normal">social equity</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="reveal-child group relative overflow-visible rounded-2xl bg-white p-10 lg:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <img
                src={pillar.icon}
                alt=""
                className="absolute -top-6 right-6 h-32 w-auto object-contain pointer-events-none"
              />
              <span className="text-[14px] font-medium text-seam-500 mb-4 block">
                {pillar.number}
              </span>
              <h3 className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 4: Products ─── */
const products = [
  {
    label: 'SEAM Certification',
    title: 'Full building certification',
    description:
      'Bronze through Platinum certification across three tracks: Buildings + Interiors, Operations + Maintenance, and Community Development.',
    href: '/certification',
    audience: 'For developers, owners, and capital providers',
    logos: ['/logos/cert-bronze.png', '/logos/cert-silver.png', '/logos/cert-gold.png', '/logos/cert-platinum.png'],
  },
  {
    label: 'SEAM Approved',
    title: 'Activity-level verification',
    description:
      'Verify individual social equity activities without committing to full certification.',
    href: '/approved',
    audience: 'For operators, managers, and anchor institutions',
    logo: '/logos/approved-wordmark.png',
  },
  {
    label: 'SEAM AP Credential',
    title: 'Professional accreditation',
    description:
      'The qualification for practitioners who lead certification work. Build your practice, join the directory, shape the field.',
    href: '/ap-credential',
    audience: 'For consultants and sustainability professionals',
    logo: '/logos/ap-seal.png',
  },
  {
    label: 'COMMUNITY',
    title: 'SEAM Membership',
    description:
      'Resources, peer connection, and ongoing support for organizations and individuals committed to improving social equity.',
    href: '/commons',
    audience: 'For all professional audiences',
    logo: '/logos/member-organization.png',
    logo2: '/logos/member-individual.png',
  },
]

function Products() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            What we offer
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            SEAM is built for{' '}
            <em className="italic font-normal">where you are</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.href}
              to={product.href}
              className="reveal-child group relative overflow-visible rounded-2xl border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute -top-10 right-8 flex items-end pointer-events-none">
                {'logos' in product && product.logos ? (
                  <div className="flex items-end -space-x-12">
                    {product.logos.map((logo: string) => (
                      <img
                        key={logo}
                        src={logo}
                        alt=""
                        className="h-24 w-auto object-contain"
                      />
                    ))}
                  </div>
                ) : 'logo2' in product && product.logo2 ? (
                  <div className="flex items-end">
                    <img
                      src={product.logo}
                      alt=""
                      className="h-24 w-auto object-contain"
                    />
                    <img
                      src={product.logo2}
                      alt=""
                      className="h-24 w-auto object-contain -ml-16"
                    />
                  </div>
                ) : product.logo.includes('approved-wordmark') ? (
                  <div className="h-24 w-24 bg-[#01313d] rounded-xl flex items-center justify-center p-3">
                    <img
                      src={product.logo}
                      alt=""
                      className="w-full object-contain brightness-0 invert"
                    />
                  </div>
                ) : (
                  <img
                    src={product.logo}
                    alt=""
                    className="h-24 w-auto object-contain"
                  />
                )}
              </div>
              <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-seam-600 mb-2 block">
                {product.label}
              </span>
              <h3 className="font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-4">
                {product.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-warm-500 mb-6">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-warm-400">{product.audience}</span>
                <span className="text-warm-400 group-hover:text-warm-900 group-hover:translate-x-1 transition-all duration-300">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: Proof / Certified Projects ─── */
const projects = [
  {
    name: 'The Jack',
    location: 'Seattle, Washington, USA',
    level: 'Bronze Certified',
    description:
      'A mixed-use development demonstrating that social equity and financial performance reinforce each other.',
  },
  {
    name: 'Interface HQ',
    location: 'Atlanta, GA',
    level: 'Silver Certified',
    description:
      'Corporate headquarters redesigned around the communities and workers who give the building its life.',
  },
]

function Proof() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Proof
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Buildings already{' '}
            <em className="italic font-normal">leading the way</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="reveal-child group relative rounded-2xl bg-warm-900 p-10 lg:p-12 min-h-[360px] flex flex-col justify-end overflow-hidden"
            >
              {/* Placeholder for future project imagery */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/80 to-warm-900/40" />
              <div className="relative">
                <span className="inline-block rounded-full bg-seam-600 px-4 py-1.5 text-[12px] font-medium text-white mb-4">
                  {project.level}
                </span>
                <h3 className="font-display text-[28px] lg:text-[32px] tracking-[-0.02em] text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-[15px] text-warm-300 mb-3">{project.location}</p>
                <p className="text-[16px] leading-relaxed text-warm-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/about/projects"
            className="text-[15px] font-medium text-warm-900 underline underline-offset-4 decoration-warm-300 hover:decoration-warm-900 transition-colors duration-300"
          >
            View all certified projects
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6: Resources ─── */
const resources = [
  {
    title: 'The SEAM Standard',
    description: 'The full framework, free to download. Built on international human rights principles.',
    cta: 'Download',
    href: '/resources/standard',
  },
  {
    title: 'ROSSI Calculator',
    description: 'Translate social equity outcomes into the financial language decision-makers understand.',
    cta: 'Try ROSSI',
    href: '/resources/rossi',
  },
  {
    title: 'Blog & Insights',
    description: 'Lessons from certified projects, practitioner perspectives, and sector analysis.',
    cta: 'Read',
    href: '/resources/blog',
  },
  {
    title: 'Open Membership',
    description: 'Join the starting tier of our membership program to learn, participate, and join conversations.',
    cta: 'Enroll for free',
    href: '/community',
  },
]

function Resources() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Open resources
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Start here,{' '}
            <em className="italic font-normal">no commitment required</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              to={resource.href}
              className="reveal-child group rounded-2xl bg-warm-50 p-8 lg:p-10 transition-all duration-300 hover:bg-warm-100/80"
            >
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">
                {resource.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-warm-500 mb-8">
                {resource.description}
              </p>
              <span className="text-[14px] font-medium text-seam-600 group-hover:text-seam-700 transition-colors">
                {resource.cta} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 7: CTA ─── */
function CtaBlock() {
  const ref = useReveal()

  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div ref={ref} className="reveal-scale mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mx-auto">
          Ready to build something{' '}
          <em className="italic font-normal text-warm-400">worth belonging to?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Whether you are certifying a building, earning a credential, or exploring the SEAM Standard for the first time, we'll help you find the place you belong.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300"
          >
            Get started
          </Link>
          <Link
            to="/resources/standard"
            className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300"
          >
            Download the Standard
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <SEO
        path="/"
        description="SEAM is the first certification system that measures social equity in buildings. Bronze through Platinum certification across Social Impact, Social Responsibility, Social Justice, and Social Accountability."
        jsonLd={faqSchema([
          {
            question: 'What is SEAM certification?',
            answer: 'SEAM is the first certification system built to measure social equity in the built environment. It evaluates buildings across four interdependent pillars: Social Impact, Social Responsibility, Social Justice, and Social Accountability, with levels from Bronze through Platinum.',
          },
          {
            question: 'How is SEAM different from LEED or WELL?',
            answer: 'SEAM is complementary to LEED, WELL, and Fitwel. While those systems focus on environmental performance and physical wellness, SEAM measures social equity — the relationship between a building and the people it touches. SEAM requires ongoing verification, community voice in evaluation, and interdependent scoring across all four pillars.',
          },
          {
            question: 'What is SEAM Approved?',
            answer: 'SEAM Approved is a standalone activity-level verification program. Organizations can verify individual social equity practices without committing to full certification. It serves as both a standalone credential and a natural on-ramp to full SEAM certification.',
          },
          {
            question: 'What is the ROSSI Calculator?',
            answer: 'ROSSI (Return on Social Sustainability Investment) translates social equity outcomes into financial language. It models project-level and portfolio-level impact, GRESB alignment, and insurance risk reduction to help capital providers evaluate social sustainability investments.',
          },
        ])}
      />
      <Hero />
      <Mission />
      <Stats />
      <Marquee
        items={[
          'Health + Wellness',
          'Economic Equity',
          'Accessibility + Inclusion',
          'Community + Culture',
          'Bronze to Platinum',
          'Open Standard',
          'GRESB Aligned',
        ]}
      />
      <Pillars />
      <Products />
      <Proof />
      <Resources />
      <CtaBlock />
    </>
  )
}
