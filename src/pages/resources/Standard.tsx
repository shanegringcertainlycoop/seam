import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { useCountUp } from '../../hooks/useCountUp'
import SEO, { breadcrumbSchema } from '../../components/SEO'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative z-20 min-h-[80vh] flex items-center bg-gradient-to-br from-warm-900 via-warm-800 to-seam-900">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/40 to-warm-900/20" />
      <img
        src="/icons/standard-hero-building.png"
        alt=""
        className="absolute right-[-5%] bottom-0 translate-y-[15%] w-[clamp(560px,75vw,1100px)] pointer-events-none select-none z-30"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-24 lg:py-32 w-full">
        <div className="hero-enter max-w-3xl">
          <span className="inline-block rounded-full bg-seam-600/20 border border-seam-500/30 px-4 py-1.5 text-[13px] font-medium text-seam-300 mb-8">
            The SEAM Standard&trade;
          </span>
          <h1 className="hero-title font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-white">
            The framework for belonging{' '}
            <em className="font-display italic font-normal text-seam-300">
              in the built environment
            </em>
          </h1>
          <p className="hero-subtitle mt-8 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed text-warm-300">
            The first social equity certification purpose-built for commercial real estate. A rigorous, human-centered standard that embeds belonging into every stage of how buildings are conceived, built, and managed.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Link to="/get-started" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">
              Explore the Standard
            </Link>
            <a href="#levels" className="inline-flex items-center rounded-full border border-white/25 px-8 py-4 text-[16px] font-medium text-white hover:border-white/50 transition-colors duration-300">
              View certification levels
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Belief Statement ─── */
function Belief() {
  const ref = useReveal()
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal-fade-up max-w-4xl mx-auto text-center">
          <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.02em] text-warm-900">
            &ldquo;When people feel like they belong in a space, everything performs better — the building, the business, the community.&rdquo;
          </blockquote>
          <p className="mt-10 text-[17px] leading-relaxed text-warm-500 max-w-2xl mx-auto">
            Belonging is not a finishing touch. It is a foundation — designed into the structure, sourced into the materials, built into the relationships with the community before the first wall goes up. The SEAM Standard gives organizations the framework to do that work with rigor, integrity, and proof.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Why SEAM ─── */
const differentiators = [
  { number: '01', title: 'Contextual assessment', seam: 'Requires a Social Impact Assessment for every project — understanding the people, the place, and the issues material to this specific context before any other work begins.', others: 'Prescribe social goals without understanding of community context or what issues are actually material to the project.' },
  { number: '02', title: 'No offsetting of harm', seam: 'Avoiding negative impact must come before earning points for positive initiatives — the scoring design enforces this sequence.', others: 'Allow positive-impact points to offset negative performance — a project can do harm and still earn certification.' },
  { number: '03', title: 'Impact-aligned levels', seam: 'Certification levels align directly to social impact goals — Bronze through Platinum correspond to acting to avoid harm, preventing harm, achieving positive impact, and contributing to lasting change.', others: 'Certification levels based on point thresholds — a project can earn a higher level without demonstrating meaningful improvement for people.' },
  { number: '04', title: 'Leading indicators', seam: 'Measures the principles and processes that cause change, so organizations know they are on the right track before harm is done.', others: 'Measure lagging indicators — outcomes after work is complete. In social issues, that can mean harm has already occurred by the time measurement happens.' },
  { number: '05', title: 'Roadmap design', seam: 'A roadmap structure with ordered, prerequisite activities — ensuring foundational work is done before more advanced initiatives can begin.', others: 'Activities can be completed in any order, often leading to advanced initiatives built on a missing foundation.' },
  { number: '06', title: 'Project-level scope', seam: 'Social initiatives apply to the specific project and the people it touches, with additional recognition for organization-level implementation.', others: 'Organization-wide scope — a heavier lift for organizations early in their social equity journey, and harder to connect to real impact on people in specific places.' },
]

function WhySEAM() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.05)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Why SEAM</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Built different.{' '}<em className="italic font-normal">Designed to matter.</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Other certifications measure what organizations do. SEAM measures whether it works — for the people it is meant to serve.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger space-y-4">
          {differentiators.map((d) => (
            <div key={d.number} className="reveal-child rounded-2xl bg-white border border-warm-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-1 p-6 lg:p-8 flex items-start">
                  <span className="font-display text-[clamp(1.2rem,1.5vw,1.5rem)] tracking-[-0.02em] text-seam-500">{d.number}</span>
                </div>
                <div className="lg:col-span-3 px-6 lg:px-0 lg:py-8">
                  <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900">{d.title}</h3>
                </div>
                <div className="lg:col-span-4 p-6 lg:p-8 lg:border-l border-warm-100">
                  <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-gold-500 mb-2 block">SEAM</span>
                  <p className="text-[15px] leading-relaxed text-warm-600">{d.seam}</p>
                </div>
                <div className="lg:col-span-4 p-6 lg:p-8 lg:border-l border-warm-100 bg-warm-50/50">
                  <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-warm-500 mb-2 block">Others</span>
                  <p className="text-[15px] leading-relaxed text-warm-500">{d.others}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── The Framework ─── */
const pillars = [
  {
    number: '01',
    title: 'Social Impact',
    href: '/standard/social-impact',
    description: 'Reduce poverty and inequality by identifying and managing the social, cultural, and economic impacts of development — before they happen.',
    concepts: ['Impact Assessment: Contextual Assessment, Impacted Party Engagement, Monitoring + Evaluation'],
    icon: '/icons/pillar-social-impact.png',
  },
  {
    number: '02',
    title: 'Social Responsibility',
    href: '/standard/social-responsibility',
    description: 'Strengthen civil society and promote capacity through responsible, sustainable development practices at every level of the organization.',
    concepts: ['Transformational Governance (5 objectives)', 'Community Involvement', 'Social Investment'],
    icon: '/icons/pillar-social-responsibility.png',
  },
  {
    number: '03',
    title: 'Social Justice',
    href: '/standard/social-justice',
    description: 'Promote root cause strategies that lead to equal access to social resources — in procurement, in the workplace, in the community, in capital.',
    concepts: ['Social Equity + Justice (Procurement, Workplace, Community, Capital)', 'Social Justice Innovation'],
    icon: '/icons/pillar-social-justice.png',
  },
  {
    number: '04',
    title: 'Social Accountability',
    href: '/standard/social-accountability',
    description: 'Protect fundamental human rights and freedoms — and create safe, healthy workplaces and environments for everyone the building touches.',
    concepts: ['Human Rights (Ethical Materials, Ethical Suppliers, Reporting, Education)', 'Health + Safety'],
    icon: '/icons/pillar-social-accountability.png',
  },
]

function Framework() {
  const headerRef = useReveal()
  const s1 = useCountUp(4, { suffix: '' })
  const s2 = useCountUp(8, { suffix: '' })
  const s3 = useCountUp(21, { suffix: '' })
  const statsRef = useReveal(0.2)
  const gridRef = useReveal(0.1)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-12">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">The framework</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Four pillars. Eight concepts.{' '}<em className="italic font-normal">One standard.</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            The SEAM Standard organizes social equity into a structured, logical framework — aligned to the UN Sustainable Development Goals and grounded in internationally recognized principles.
          </p>
        </div>

        <div ref={statsRef} className="reveal-fade-up flex flex-wrap gap-4 sm:gap-8 mb-10 lg:mb-16">
          <div className="flex items-baseline gap-2">
            <span ref={s1.ref} className="font-display text-[32px] tracking-[-0.04em] text-gold-500">{s1.display}</span>
            <span className="text-[14px] text-warm-500">Pillars</span>
          </div>
          <span className="text-warm-200">&middot;</span>
          <div className="flex items-baseline gap-2">
            <span ref={s2.ref} className="font-display text-[32px] tracking-[-0.04em] text-gold-500">{s2.display}</span>
            <span className="text-[14px] text-warm-500">Concepts</span>
          </div>
          <span className="text-warm-200">&middot;</span>
          <div className="flex items-baseline gap-2">
            <span ref={s3.ref} className="font-display text-[32px] tracking-[-0.04em] text-gold-500">{s3.display}</span>
            <span className="text-[14px] text-warm-500">Objectives</span>
          </div>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <Link key={p.number} to={p.href} className="reveal-child group relative rounded-2xl border border-warm-100 p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
              <img src={p.icon} alt="" className="absolute -top-4 -right-4 w-48 h-48 object-contain opacity-90 pointer-events-none" />
              <span className="relative text-[14px] font-medium text-seam-500 mb-4 block">Pillar {p.number}</span>
              <h3 className="relative font-display text-[24px] lg:text-[28px] tracking-[-0.02em] text-warm-900 mb-4 group-hover:text-gold-600 transition-colors">{p.title}</h3>
              <p className="text-[16px] leading-relaxed text-warm-500 mb-6">{p.description}</p>
              <ul className="space-y-2 border-t border-warm-100 pt-5">
                {p.concepts.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[14px] leading-snug text-warm-500">
                    <svg className="shrink-0 w-4 h-4 mt-0.5 text-seam-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
              <span className="inline-block mt-6 text-[14px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">Explore pillar &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works (structure) ─── */
const layers = [
  { title: 'Pillars', count: '4', description: 'The four organizing themes of social equity in the built environment. Every activity connects back to a pillar — so users always understand the why behind each requirement.' },
  { title: 'Concepts', count: '8', description: 'Eight focused areas within the pillars, each addressing a specific social theme — from impact assessment and human rights to social equity in procurement and community investment.' },
  { title: 'Objectives', count: '21', description: 'Twenty-one specific, measurable goals within each concept — defining what the project is trying to achieve, with clear rationale and connection to internationally recognized standards.' },
  { title: 'Activities', count: '50+', description: 'The individual actions that drive certification — each with defined requirements, a clear scoring rubric, documentation standards, and a referenced international source. Activities are the unit of measurement.' },
]

function NestingGraphic() {
  const ringData = [
    { label: 'Pillars', count: '4', bg: 'bg-seam-900', text: 'text-white', countColor: 'text-seam-300', size: 'w-[480px] h-[480px]', pt: 'pt-5' },
    { label: 'Concepts', count: '8', bg: 'bg-seam-700', text: 'text-white', countColor: 'text-seam-300', size: 'w-[360px] h-[360px]', pt: 'pt-5' },
    { label: 'Objectives', count: '21', bg: 'bg-seam-500', text: 'text-white', countColor: 'text-seam-200', size: 'w-[260px] h-[260px]', pt: 'pt-4' },
    { label: 'Activities', count: '50+', bg: 'bg-gold-400', text: 'text-warm-900', countColor: 'text-warm-800', size: 'w-[120px] h-[120px]', pt: 'pt-2' },
  ]

  return (
    <div className="relative w-[480px] h-[480px] mx-auto">
      {ringData.map((ring, i) => (
        <div
          key={ring.label}
          className={`absolute rounded-3xl ${ring.bg} ${ring.size} flex flex-col items-center justify-start transition-all duration-500`}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: i,
          }}
        >
          <div className={`text-center ${ring.pt}`}>
            <span className={`block text-[12px] font-medium uppercase tracking-[0.15em] ${ring.countColor}`}>
              {ring.label}
            </span>
            <span className={`block font-display text-[22px] tracking-[-0.02em] leading-tight ${ring.text}`}>
              {ring.count}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function HowItWorks() {
  const headerRef = useReveal()
  const stepsRef = useReveal(0.1)
  const graphicRef = useReveal(0.2)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">How it works</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            A structure built for{' '}<em className="italic font-normal">real impact</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            The SEAM Standard is not a checklist. It is a layered framework that builds from foundation to impact — with each level informing and enabling the next.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Nesting graphic */}
          <div ref={graphicRef} className="reveal-scale hidden lg:block">
            <NestingGraphic />
          </div>

          {/* Text descriptions */}
          <div ref={stepsRef} className="reveal-stagger">
            {layers.map((layer, i) => (
              <div key={layer.title} className={`reveal-child flex gap-6 py-8 ${i < layers.length - 1 ? 'border-b border-warm-200' : ''}`}>
                <div className="shrink-0">
                  <span className="block font-display text-[28px] tracking-[-0.04em] text-gold-500">
                    {layer.count}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-[22px] lg:text-[26px] tracking-[-0.02em] text-warm-900 mb-2">{layer.title}</h3>
                  <p className="text-[16px] leading-relaxed text-warm-500">{layer.description}</p>
                </div>
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
  { name: 'Bronze', tagline: 'Acting to avoid harm', description: 'The project is making measurable progress toward international social targets. Foundational activities are in place. Harm is being identified and addressed.', imp: 'Act to Avoid Harm', logo: '/logos/cert-bronze.png' },
  { name: 'Silver', tagline: 'Preventing harm', description: 'The project has moved from awareness to active prevention — with a demonstrated commitment to growing into positive social impact over time.', imp: 'Act to Avoid Harm (advanced)', logo: '/logos/cert-silver.png' },
  { name: 'Gold', tagline: 'Achieving positive impact', description: 'The project is actively improving the well-being of impacted parties. Social outcomes fall within a sustainable range — real benefit, not just reduced harm.', imp: 'Benefit Impacted Parties', logo: '/logos/cert-gold.png' },
  { name: 'Platinum', tagline: 'Contributing to solutions', description: 'The project is setting the standard for the industry — achieving lasting positive impact at scale, with benefits that extend beyond the project itself.', imp: 'Contribute to Solutions', logo: '/logos/cert-platinum.png' },
]

function CertLevels() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section id="levels" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Certification levels</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Recognition that reflects{' '}<em className="italic font-normal">real progress</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Four levels aligned to the Impact Management Project&apos;s ABC framework — avoiding harm, benefiting people, contributing to solutions. Level reflects impact, not just points.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, i) => {
            const intensities = ['bg-seam-700/10', 'bg-seam-700/20', 'bg-seam-800/70', 'bg-seam-900/85']
            const textColors = ['text-seam-800', 'text-seam-800', 'text-white', 'text-white']
            const subColors = ['text-gold-500', 'text-gold-500', 'text-seam-200', 'text-seam-200']
            const bodyColors = ['text-warm-500', 'text-warm-500', 'text-seam-100/80', 'text-seam-100/80']
            return (
              <div key={level.name} className={`reveal-child relative rounded-2xl ${intensities[i]} p-8 lg:p-10 overflow-hidden`}>
                <img src={level.logo} alt={`${level.name} certification`} className="absolute -top-4 -right-4 w-28 h-28 object-contain opacity-60 drop-shadow-lg" />
                <h3 className={`relative font-display text-[28px] tracking-[-0.02em] ${textColors[i]}`}>{level.name}</h3>
                <p className={`mt-1 text-[14px] font-medium ${subColors[i]}`}>{level.tagline}</p>
                <p className={`mt-4 text-[15px] leading-relaxed ${bodyColors[i]}`}>{level.description}</p>
                <p className={`mt-5 text-[12px] uppercase tracking-[0.1em] ${subColors[i]} border-t ${i >= 2 ? 'border-seam-400/20' : 'border-seam-600/20'} pt-4`}>
                  IMP: {level.imp}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Rating Systems ─── */
const ratings = [
  { code: 'B+I:D', title: 'Buildings + Interiors: Developer', description: 'Ground-up construction and major renovations where the owner assumes developer responsibilities — project ownership, financing, construction supervision, and tenant leasing management.', href: '/rating-system/buildings-interiors' },
  { code: 'B+I:O', title: 'Buildings + Interiors: Occupier', description: 'Construction or renovation projects where the owner occupies the space — fit-outs, interior buildouts, and workplace environments where the owner is the primary occupant.', href: '/rating-system/buildings-interiors' },
  { code: 'O+M:D', title: 'Operations + Management: Developer', description: 'Existing assets being operated and managed by the developer — applying social equity standards to the ongoing performance and management of a building or portfolio.', href: '/rating-system/operations-maintenance' },
  { code: 'O+M:O', title: 'Operations + Management: Occupier', description: 'Ongoing operations by an occupier — applying the Standard to the management of an occupied space, including workplace practices, supply chain, and community relationships.', href: '/rating-system/operations-maintenance' },
]

function RatingSystems() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Rating systems</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Tailored to{' '}<em className="italic font-normal">how you build</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            Not every activity applies to every project. Four active rating systems ensure that certification reflects your specific project type and role.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
          {ratings.map((r) => (
            <Link key={r.code} to={r.href} className="reveal-child group rounded-2xl bg-white p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <span className="inline-block rounded-lg bg-seam-50 px-3 py-1.5 text-[13px] font-mono font-medium text-gold-600 mb-4">{r.code}</span>
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3 group-hover:text-seam-600 transition-colors">{r.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{r.description}</p>
              <span className="inline-block mt-4 text-[14px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">Explore rating system &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Framework Design Principles ─── */
const principles = [
  { number: '01', title: 'Timely contextual analysis', description: 'A Social Impact Assessment is required for every certification — because people are complex, communities change, and no two projects share the same context. The SIA shapes everything that follows.' },
  { number: '02', title: 'No offsetting of harm', description: 'The scoring design prevents positive-impact points from masking harm. Preventing harm is a prerequisite for earning recognition for positive endeavors — full stop.' },
  { number: '03', title: 'Logic model structure', description: 'Activities follow a causal logic model — connecting inputs, processes, outputs, and outcomes in a way that shows the pathway from action to impact.' },
  { number: '04', title: 'Human rights-weighted scoring', description: 'Points are weighted based on the salience of human rights issues — directing organizations to prioritize activities that matter most, not just those that are easiest to complete.' },
  { number: '05', title: 'Roadmap design', description: "Driver activities establish prerequisites for more advanced work. Organizations cannot skip foundational steps — because in social equity, a flawed foundation does not just underperform. It can cause harm." },
  { number: '06', title: 'Impact-aligned levels', description: 'Certification levels reflect where an organization stands on the spectrum of social impact — not just how many points they have accumulated. Level means something because level is defined by what changes for people.' },
]

function DesignPrinciples() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Framework design</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Social equity embedded{' '}<em className="italic font-normal">by design</em>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-warm-500 max-w-xl">
            The SEAM Standard does not bolt equity onto a compliance framework. It engineers equity into the scoring logic itself — in six distinct ways.
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => (
            <div key={p.number} className="reveal-child rounded-2xl border border-warm-100 p-8 lg:p-10">
              <span className="text-[14px] font-medium text-seam-500 mb-3 block">{p.number}</span>
              <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.02em] text-warm-900 mb-3">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-warm-500">{p.description}</p>
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
    title: 'CRE decision-makers',
    subtitle: 'Developers, owners, architects',
    quote: 'When people feel like they belong in a space, everything performs better — the building, the business, the community.',
    description: 'The SEAM Standard gives you the framework to build for belonging, and the verified recognition to show it. Whether you are managing ESG commitments, responding to investor expectations, or building something worth being proud of.',
    href: '/who-we-serve/developers-owners',
  },
  {
    title: 'Operators + managers',
    subtitle: 'Property managers, asset managers',
    quote: 'The buildings that perform best are the ones where people actually want to be.',
    description: 'SEAM certification helps operators connect social practices to performance outcomes — occupancy, retention, tenant satisfaction, and community relationships. A structured, measurable framework for the work many operators are already doing.',
    href: '/who-we-serve/property-managers',
  },
  {
    title: 'Social equity practitioners',
    subtitle: 'Sustainability, ESG, impact teams',
    quote: 'SEAM gives the work language, structure, and proof — not just intention.',
    description: 'For professionals leading social equity efforts inside real estate organizations, SEAM provides the rigor that makes the work credible — internally and externally. It translates commitment into a framework that can be measured, verified, and communicated.',
    href: '/who-we-serve/impact-professionals',
  },
]

function WhoItsFor() {
  const headerRef = useReveal()
  const gridRef = useReveal(0.1)
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={headerRef} className="reveal-slide-left max-w-2xl mb-16 lg:mb-20">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-6">Who it serves</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900">
            Built for everyone{' '}<em className="italic font-normal">the building touches</em>
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <Link key={a.title} to={a.href} className="reveal-child group rounded-2xl bg-white p-10 lg:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <h3 className="font-display text-[22px] lg:text-[24px] tracking-[-0.02em] text-warm-900 group-hover:text-seam-600 transition-colors">{a.title}</h3>
              <p className="text-[14px] text-warm-500 mt-1 mb-6">{a.subtitle}</p>
              <blockquote className="text-[15px] italic leading-relaxed text-gold-600 border-l-2 border-seam-500 pl-4 mb-6">
                &ldquo;{a.quote}&rdquo;
              </blockquote>
              <p className="text-[15px] leading-relaxed text-warm-500">{a.description}</p>
              <span className="inline-block mt-4 text-[14px] font-medium text-gold-500 group-hover:text-gold-600 transition-colors">Learn more &rarr;</span>
            </Link>
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
          Ready to build for{' '}<em className="italic font-normal text-seam-300">belonging?</em>
        </h2>
        <p className="mt-6 text-[17px] text-warm-400 max-w-xl mx-auto">
          Start where you are. The SEAM Standard is designed to meet organizations at their stage of readiness — whether that is exploring what equity means for your portfolio or pursuing full certification today.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link to="/certification" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[16px] font-medium text-warm-900 hover:bg-warm-100 transition-colors duration-300">Start certification</Link>
          <Link to="/get-started" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Access the Standard</Link>
          <Link to="/ap-credential" className="inline-flex items-center rounded-full border border-warm-600 px-8 py-4 text-[16px] font-medium text-warm-300 hover:border-warm-400 hover:text-white transition-colors duration-300">Find a SEAM AP</Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function Standard() {
  return (
    <>
      <SEO
        title="The SEAM Standard"
        description="The first social equity certification purpose-built for commercial real estate. Four pillars, eight concepts, twenty-one objectives — a rigorous framework that embeds belonging into how buildings are conceived, built, and managed."
        path="/resources/standard"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Resources', path: '/resources/standard' },
          { name: 'The Standard', path: '/resources/standard' },
        ])}
      />
      <Hero />
      <Belief />
      <WhySEAM />
      <Framework />
      <HowItWorks />
      <CertLevels />
      <RatingSystems />
      <DesignPrinciples />
      <WhoItsFor />
      <CtaBlock />
    </>
  )
}
