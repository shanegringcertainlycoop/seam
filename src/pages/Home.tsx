import { Link } from 'react-router-dom'

/* ─── Section 1: Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-50 to-white" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.04em] text-warm-900">
            Buildings should serve{' '}
            <em className="font-display italic font-normal text-warm-500">
              the people inside them
            </em>
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(1.1rem,1.5vw,1.25rem)] leading-relaxed text-warm-500">
            SEAM is the first certification system built to measure what matters most
            about the places we live and work: whether they advance social equity for
            the communities they touch.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/get-started"
              className="inline-flex items-center rounded-full bg-warm-900 px-8 py-4 text-[16px] font-medium text-white hover:bg-warm-800 transition-colors duration-300"
            >
              Start a project
            </Link>
            <Link
              to="/about/mission"
              className="inline-flex items-center rounded-full border border-warm-200 px-8 py-4 text-[16px] font-medium text-warm-700 hover:border-warm-400 transition-colors duration-300"
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
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Our purpose
          </p>
          <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-warm-900">
            We believe belonging is a cause{' '}
            <em className="italic font-normal text-warm-500">
              and performance is a consequence.
            </em>{' '}
            When buildings are designed and operated with social equity at their core,
            communities thrive and investments outperform.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Four Pillars ─── */
const pillars = [
  {
    number: '01',
    title: 'Health + Wellness',
    description:
      'Indoor environments that protect and promote the physical and mental health of every occupant, worker, and visitor.',
  },
  {
    number: '02',
    title: 'Economic Equity',
    description:
      'Procurement, employment, and wealth-building practices that create opportunity for historically excluded communities.',
  },
  {
    number: '03',
    title: 'Accessibility + Inclusion',
    description:
      'Spaces designed so that everyone can participate fully, regardless of ability, language, or identity.',
  },
  {
    number: '04',
    title: 'Community + Culture',
    description:
      'Programming and governance that honor the social fabric of the neighborhoods buildings inhabit.',
  },
]

function Pillars() {
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            The framework
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Four pillars of{' '}
            <em className="italic font-normal">social equity</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group rounded-2xl bg-white p-10 lg:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
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
    label: 'Certification',
    title: 'Full building certification',
    description:
      'Bronze through Platinum certification across three tracks: Buildings + Interiors, Operations + Maintenance, and Community Development.',
    href: '/certification',
    audience: 'For developers, owners, and capital providers',
  },
  {
    label: 'SEAM Approved',
    title: 'Activity-level verification',
    description:
      'Verify individual social equity activities without committing to full certification. A standalone credential or a pathway into it.',
    href: '/approved',
    audience: 'For operators, managers, and anchor institutions',
  },
  {
    label: 'AP Credential',
    title: 'Professional accreditation',
    description:
      'The qualification for practitioners who lead certification work. Build a practice, join a directory, shape the field.',
    href: '/ap-credential',
    audience: 'For consultants and sustainability professionals',
  },
  {
    label: 'Commons',
    title: 'Membership community',
    description:
      'Resources, peer connection, and ongoing support for organizations and individuals committed to the Standard.',
    href: '/commons',
    audience: 'For all professional audiences',
  },
]

function Products() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            What we offer
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Products built for{' '}
            <em className="italic font-normal">where you are</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.href}
              to={product.href}
              className="group rounded-2xl border border-warm-100 p-10 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
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
    location: 'Kansas City, MO',
    level: 'Gold Certified',
    description:
      'A mixed-use development demonstrating that social equity and financial performance reinforce each other.',
  },
  {
    name: 'Interface',
    location: 'Portland, OR',
    level: 'Silver Certified',
    description:
      'Corporate headquarters redesigned around the communities and workers who give the building its life.',
  },
]

function Proof() {
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Proof
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Buildings already{' '}
            <em className="italic font-normal">leading the way</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative rounded-2xl bg-warm-900 p-10 lg:p-12 min-h-[360px] flex flex-col justify-end overflow-hidden"
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
    description: 'Translate social equity outcomes into the financial language decision-makers use.',
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
    title: 'Courses & Webinars',
    description: 'Build your understanding of social equity in the built environment. Free and open.',
    cta: 'Enroll',
    href: '/resources/courses',
  },
]

function Resources() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Open resources
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Start here,{' '}
            <em className="italic font-normal">no commitment required</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              to={resource.href}
              className="group rounded-2xl bg-warm-50 p-8 lg:p-10 transition-all duration-300 hover:bg-warm-100/80"
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
  return (
    <section className="py-24 lg:py-32 bg-warm-900">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-[-0.03em] text-white max-w-3xl mx-auto">
          Ready to build something{' '}
          <em className="italic font-normal text-warm-400">worth belonging to?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Whether you are certifying a building, earning a credential, or exploring the Standard
          for the first time, we will help you find the right path.
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
      <Hero />
      <Mission />
      <Pillars />
      <Products />
      <Proof />
      <Resources />
      <CtaBlock />
    </>
  )
}
