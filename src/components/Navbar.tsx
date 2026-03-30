import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

/* ─── Nav Data ─── */

interface NavLink {
  label: string
  href: string
  description: string
  logo?: string
}

interface NavSection {
  heading: string
  href?: string
  links: NavLink[]
}

interface NavGroup {
  label: string
  links: NavLink[]
  featured?: { label: string; href: string; description: string }
  sections?: NavSection[]
}

const solutions: NavGroup = {
  label: 'Solutions',
  links: [],
  sections: [
    {
      heading: 'Products',
      links: [
        {
          label: 'Certification',
          href: '/certification',
          description: 'Full building certification across three tracks, Bronze through Platinum.',
          logo: '/logos/cert-platinum.png',
        },
        {
          label: 'SEAM Approved',
          href: '/approved',
          description: 'Standalone activity verification. An on-ramp or a parallel track.',
          logo: '/logos/approved-wordmark.png',
        },
        {
          label: 'AP Credential',
          href: '/ap-credential',
          description: 'The professional qualification for practitioners leading certification.',
          logo: '/logos/ap-seal.png',
        },
      ],
    },
    {
      heading: 'Community',
      links: [
        {
          label: 'Community Overview',
          href: '/community',
          description: 'The membership community for organizations and individuals.',
        },
        {
          label: 'Individual Membership',
          href: '/community/individual',
          description: 'A la carte commitments at multiple price points. Pick what you need.',
          logo: '/logos/member-individual.png',
        },
        {
          label: 'Organization Membership',
          href: '/community/organization',
          description: 'Contributor, Builder, and Steward tiers for teams and institutions.',
          logo: '/logos/member-organization.png',
        },
      ],
    },
  ],
}

const theStandard: NavGroup = {
  label: 'The Standard',
  links: [],
  featured: {
    label: 'The Standard',
    href: '/resources/standard',
    description: 'The full SEAM framework, free to download.',
  },
  sections: [
    {
      heading: 'Rating Systems',
      href: '/rating-system',
      links: [
        {
          label: 'Buildings + Interiors',
          href: '/rating-system/buildings-interiors',
          description: 'Design and construction of equitable indoor environments.',
        },
        {
          label: 'Operations + Maintenance',
          href: '/rating-system/operations-maintenance',
          description: 'Ongoing management, procurement, and facility stewardship.',
        },
        {
          label: 'Community Development',
          href: '/rating-system/community-development',
          description: 'Neighborhood-scale projects and community engagement.',
        },
      ],
    },
    {
      heading: 'Pillars',
      links: [
        {
          label: 'Social Impact',
          href: '/standard/social-impact',
          description: 'Measurable outcomes for people and communities.',
          logo: '/icons/pillar-social-impact.png',
        },
        {
          label: 'Social Responsibility',
          href: '/standard/social-responsibility',
          description: 'Ethical practices in procurement, labor, and governance.',
          logo: '/icons/pillar-social-responsibility.png',
        },
        {
          label: 'Social Justice',
          href: '/standard/social-justice',
          description: 'Addressing systemic inequity through the built environment.',
          logo: '/icons/pillar-social-justice.png',
        },
        {
          label: 'Social Accountability',
          href: '/standard/social-accountability',
          description: 'Transparency, reporting, and stakeholder engagement.',
          logo: '/icons/pillar-social-accountability.png',
        },
      ],
    },
  ],
}

const resources: NavGroup = {
  label: 'Resources',
  links: [
    {
      label: 'Directory',
      href: '/directory',
      description: 'Find accredited professionals, certified projects, and verified activities.',
    },
    {
      label: 'The Standard',
      href: '/resources/standard',
      description: 'The full SEAM framework, free to download.',
    },
    {
      label: 'ROSSI Calculator',
      href: '/resources/rossi',
      description: 'Translate social equity outcomes into financial language.',
    },
    {
      label: 'Blog & Insights',
      href: '/resources/blog',
      description: 'Lessons from certified projects and practitioner perspectives.',
    },
    {
      label: 'Courses & Webinars',
      href: '/resources/courses',
      description: 'Build your understanding of social equity. Free and open.',
    },
    {
      label: 'Pricing',
      href: '/pricing',
      description: 'Transparent pricing for certification, credentials, and membership.',
    },
  ],
}

const audiences: NavGroup = {
  label: 'Who We Serve',
  links: [
    {
      label: 'Developers & Owners',
      href: '/for/developers-owners',
      description: 'Reduce turnover, attract mission-aligned capital, and differentiate your asset in the market.',
    },
    {
      label: 'Property Managers & Facility Teams',
      href: '/for/operators',
      description: 'Turn the equity work you already do into a verified credential that strengthens renewals.',
    },
    {
      label: 'Capital Providers & Compliance',
      href: '/for/capital-providers',
      description: 'A diligence signal for social risk. GRESB-aligned data, international compliance-ready.',
    },
    {
      label: 'Social Impact Professionals',
      href: '/for/impact-professionals',
      description: 'Earn the AP credential, join a practitioner network, and build a practice around the Standard.',
    },
    {
      label: 'People & Communities',
      href: '/for/people',
      description: 'Choose buildings that reflect your values — health, equity, and inclusion verified.',
    },
  ],
}

const dropdowns = [solutions, theStandard, audiences, resources]

/* ─── Chevron Icon ─── */

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

/* ─── Desktop Dropdown Panel ─── */

function DropdownPanel({
  group,
  onClose,
}: {
  group: NavGroup
  onClose: () => void
}) {
  const hasFeatured = !!group.featured
  const hasSections = !!group.sections?.length

  // Sectioned layout (e.g. The Standard with Rating Systems + Pillars)
  if (hasSections && group.sections) {
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
        <div className="rounded-2xl border border-warm-100 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)] w-[720px]">
          <div className="grid grid-cols-2 divide-x divide-warm-100">
            {group.sections.map((section) => (
              <div key={section.heading} className="p-6 space-y-1">
                {section.href ? (
                  <Link
                    to={section.href}
                    onClick={onClose}
                    className="block px-3 pb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-warm-400 hover:text-gold-500 transition-colors"
                  >
                    {section.heading} &rarr;
                  </Link>
                ) : (
                  <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-warm-400">
                    {section.heading}
                  </p>
                )}
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={onClose}
                    className="group/item flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-150 hover:bg-warm-50"
                  >
                    {link.logo && (
                      <img
                        src={link.logo}
                        alt=""
                        className={`object-contain shrink-0 ${
                          link.logo.includes('approved-wordmark')
                            ? 'w-11 h-11 bg-[#01313d] rounded-lg p-1.5'
                            : link.logo.includes('member-')
                              ? 'w-14 h-14 rounded-full'
                              : 'w-11 h-11'
                        }`}
                      />
                    )}
                    <div>
                      <span className="block text-[15px] font-medium text-warm-900 group-hover/item:text-gold-600">
                        {link.label}
                      </span>
                      <span className="block mt-0.5 text-[13px] leading-snug text-warm-400">
                        {link.description}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-warm-100 px-6 py-4">
            <Link
              to="/resources/standard"
              onClick={onClose}
              className="group/std flex items-center justify-between rounded-xl px-3 py-3 transition-colors duration-150 hover:bg-warm-50"
            >
              <div>
                <span className="block text-[15px] font-medium text-warm-900 group-hover/std:text-gold-600">
                  Explore the Standard
                </span>
                <span className="block mt-0.5 text-[13px] leading-snug text-warm-400">
                  The full SEAM framework, free to download.
                </span>
              </div>
              <span className="text-warm-400 group-hover/std:text-gold-500 transition-colors">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
      <div
        className={`rounded-2xl border border-warm-100 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)] ${
          hasFeatured ? 'w-[640px]' : 'w-[480px]'
        }`}
      >
        <div className={hasFeatured ? 'grid grid-cols-5' : ''}>
          {/* Main links */}
          <div className={`p-6 space-y-1 ${hasFeatured ? 'col-span-3' : ''}`}>
            <p className="px-3 pb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-warm-400">
              {group.label}
            </p>
            {group.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={onClose}
                className="group/item flex items-center gap-4 rounded-xl px-3 py-3 transition-colors duration-150 hover:bg-warm-50"
              >
                {link.logo && (
                  <img
                    src={link.logo}
                    alt=""
                    className={`w-10 h-10 object-contain shrink-0 ${
                      link.logo.includes('approved-wordmark') ? 'bg-[#01313d] rounded-md p-1.5 brightness-0 invert' : ''
                    }`}
                  />
                )}
                <div>
                  <span className="block text-[15px] font-medium text-warm-900 group-hover/item:text-gold-600">
                    {link.label}
                  </span>
                  <span className="block mt-0.5 text-[13px] leading-snug text-warm-400">
                    {link.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured callout */}
          {hasFeatured && group.featured && (
            <div className="col-span-2 rounded-r-2xl bg-warm-50 p-6 flex flex-col justify-end">
              <Link
                to={group.featured.href}
                onClick={onClose}
                className="group/feat block"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-gold-500 mb-2">
                  Featured
                </p>
                <p className="text-[15px] font-medium text-warm-900 group-hover/feat:text-gold-600 transition-colors">
                  {group.featured.label}
                </p>
                <p className="mt-1 text-[13px] leading-snug text-warm-400">
                  {group.featured.description}
                </p>
                <span className="inline-block mt-3 text-[13px] font-medium text-gold-500">
                  Learn more &rarr;
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Mobile Accordion ─── */

function MobileAccordion({
  group,
  onNavigate,
}: {
  group: NavGroup
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-warm-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-[17px] font-medium text-warm-700"
      >
        {group.label}
        <ChevronDown open={open} />
      </button>
      {open && (
        <div className="pb-4 pl-2 space-y-1">
          {group.sections?.length ? (
            group.sections.map((section) => (
              <div key={section.heading}>
                {section.href ? (
                  <Link
                    to={section.href}
                    onClick={onNavigate}
                    className="block pt-2 pb-1 text-[12px] font-medium uppercase tracking-[0.12em] text-warm-400 hover:text-gold-500 transition-colors"
                  >
                    {section.heading} &rarr;
                  </Link>
                ) : (
                  <p className="pt-2 pb-1 text-[12px] font-medium uppercase tracking-[0.12em] text-warm-400">
                    {section.heading}
                  </p>
                )}
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={onNavigate}
                    className="block py-2.5 text-[16px] text-warm-500 hover:text-warm-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))
          ) : (
            group.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={onNavigate}
                className="block py-2.5 text-[16px] text-warm-500 hover:text-warm-900"
              >
                {link.label}
              </Link>
            ))
          )}
          {group.featured && (
            <Link
              to={group.featured.href}
              onClick={onNavigate}
              className="block py-2.5 text-[16px] text-gold-500"
            >
              {group.featured.label}
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

/* ─── Navbar ─── */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navRef = useRef<HTMLElement>(null)

  // Track scroll position for transparent → solid transition
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openDropdown = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(label)
  }, [])

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }, [])

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen || activeDropdown
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-warm-900/10 backdrop-blur-[2px]'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-[88px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logos/seam-wordmark.png"
              alt="SEAM"
              className={`h-8 w-auto transition-all duration-300 ${
                scrolled || mobileOpen || activeDropdown ? 'brightness-0' : ''
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/about"
              className={`text-[15px] transition-colors duration-300 ${
                scrolled || activeDropdown
                  ? 'text-warm-500 hover:text-warm-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </Link>

            {dropdowns.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => openDropdown(group.label)}
                onMouseLeave={closeDropdown}
              >
                <button
                  className={`inline-flex items-center text-[15px] transition-colors duration-300 ${
                    scrolled || activeDropdown
                      ? activeDropdown === group.label
                        ? 'text-warm-900'
                        : 'text-warm-500 hover:text-warm-900'
                      : activeDropdown === group.label
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                  }`}
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === group.label ? null : group.label
                    )
                  }
                  aria-expanded={activeDropdown === group.label}
                >
                  {group.label}
                  <ChevronDown open={activeDropdown === group.label} />
                </button>

                {activeDropdown === group.label && (
                  <DropdownPanel
                    group={group}
                    onClose={() => setActiveDropdown(null)}
                  />
                )}
              </div>
            ))}

            <Link
              to="/get-started"
              className={`ml-4 inline-flex items-center rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-300 ${
                scrolled || activeDropdown
                  ? 'bg-warm-900 text-white hover:bg-warm-800'
                  : 'bg-white text-warm-900 hover:bg-white/90'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled || mobileOpen ? 'text-warm-500' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-warm-100">
          <div className="px-6 py-4">
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-[17px] font-medium text-warm-700 border-b border-warm-100"
            >
              About
            </Link>

            {dropdowns.map((group) => (
              <MobileAccordion
                key={group.label}
                group={group}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}

            <Link
              to="/get-started"
              className="mt-6 block w-full text-center rounded-full bg-warm-900 px-6 py-3.5 text-[17px] font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
