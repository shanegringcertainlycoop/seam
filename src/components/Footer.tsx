import { Link } from 'react-router-dom'

const footerSections = [
  {
    title: 'Solutions',
    links: [
      { label: 'Certification', href: '/certification' },
      { label: 'SEAM Approved', href: '/approved' },
      { label: 'AP Credential', href: '/ap-credential' },
      { label: 'The Standard', href: '/resources/standard' },
      { label: 'Community', href: '/community' },
      { label: 'Individual Membership', href: '/community/individual' },
      { label: 'Organization Membership', href: '/community/organization' },
    ],
  },
  {
    title: 'Rating Systems',
    links: [
      { label: 'Buildings + Interiors', href: '/rating-system/buildings-interiors' },
      { label: 'Operations + Maintenance', href: '/rating-system/operations-maintenance' },
      { label: 'Community Development', href: '/rating-system/community-development' },
    ],
  },
  {
    title: 'Pillars',
    links: [
      { label: 'Social Impact', href: '/standard/social-impact' },
      { label: 'Social Responsibility', href: '/standard/social-responsibility' },
      { label: 'Social Justice', href: '/standard/social-justice' },
      { label: 'Social Accountability', href: '/standard/social-accountability' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'The Standard', href: '/resources/standard' },
      { label: 'ROSSI Calculator', href: '/resources/rossi' },
      { label: 'Blog & Insights', href: '/resources/blog' },
      { label: 'Courses', href: '/resources/courses' },
    ],
  },
  {
    title: 'Who We Serve',
    links: [
      { label: 'Developers & Owners', href: '/for/developers-owners' },
      { label: 'Property Managers', href: '/for/operators' },
      { label: 'Capital Providers', href: '/for/capital-providers' },
      { label: 'Impact Professionals', href: '/for/impact-professionals' },
      { label: 'People & Communities', href: '/for/people' },
    ],
  },
  {
    title: 'Directory',
    links: [
      { label: 'SEAM APs', href: '/directory?tab=aps' },
      { label: 'Certified Projects', href: '/directory?tab=projects' },
      { label: 'Approved Activities', href: '/directory?tab=activities' },
      { label: 'About SEAM', href: '/about' },
      { label: 'Contact', href: '/get-started' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-300">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <img src="/logos/seam-wordmark.png" alt="SEAM" className="h-8 w-auto" />
            <p className="mt-6 text-[17px] leading-relaxed text-warm-400 max-w-sm">
              Real estate has a human impact. SEAM exists to make that impact positive, for everyone connected to it.
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-warm-500 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-[15px] text-warm-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-warm-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-warm-500">
            &copy; {new Date().getFullYear()} SEAM, Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[14px] text-warm-500 hover:text-warm-300 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-[14px] text-warm-500 hover:text-warm-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
