import { Link } from 'react-router-dom'

const footerSections = [
  {
    title: 'Products',
    links: [
      { label: 'Certification', href: '/certification' },
      { label: 'SEAM Approved', href: '/approved' },
      { label: 'AP Credential', href: '/ap-credential' },
      { label: 'Commons', href: '/commons' },
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
    title: 'About',
    links: [
      { label: 'Our Mission', href: '/about/mission' },
      { label: 'Team', href: '/about/team' },
      { label: 'Certified Projects', href: '/about/projects' },
      { label: 'Contact', href: '/get-started' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-300">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="font-display text-[28px] font-semibold tracking-[-0.04em] text-white">
              SEAM
            </span>
            <p className="mt-6 text-[17px] leading-relaxed text-warm-400 max-w-sm">
              Social equity in the built environment. We believe that where people live and work
              should reflect their dignity.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
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
