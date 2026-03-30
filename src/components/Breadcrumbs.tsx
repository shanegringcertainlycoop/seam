import { Link } from 'react-router-dom'

interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[]
  light?: boolean
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px]">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className={light ? 'text-warm-500' : 'text-warm-400/60'}>
                  /
                </span>
              )}
              {isLast || !crumb.href ? (
                <span
                  className={
                    light
                      ? 'text-warm-500 font-medium'
                      : 'text-white/70 font-medium'
                  }
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.href}
                  className={`transition-colors duration-200 ${
                    light
                      ? 'text-warm-400 hover:text-warm-700'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
