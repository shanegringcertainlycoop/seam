import { useParams, Link, Navigate } from 'react-router-dom'
import { posts } from '../../data/blog'

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

/* ─── Markdown-ish body renderer ─── */

function ArticleBody({ body }: { body: string }) {
  const blocks = body.split('\n\n')

  return (
    <div className="prose-seam">
      {blocks.map((block, i) => {
        const trimmed = block.trim()
        if (!trimmed) return null

        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={i}
              className="font-display text-[28px] lg:text-[32px] tracking-[-0.02em] text-warm-900 mt-14 mb-6"
            >
              {trimmed.replace('## ', '')}
            </h2>
          )
        }

        if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
          return (
            <p
              key={i}
              className="text-[17px] leading-relaxed text-warm-900 font-medium mt-8 mb-3"
            >
              {trimmed.replace(/\*\*/g, '')}
            </p>
          )
        }

        // Bold inline handling
        if (trimmed.includes('**')) {
          const parts = trimmed.split(/(\*\*.*?\*\*)/g)
          return (
            <p key={i} className="text-[17px] leading-[1.8] text-warm-600 mb-6">
              {parts.map((part, j) =>
                part.startsWith('**') && part.endsWith('**') ? (
                  <strong key={j} className="font-medium text-warm-900">
                    {part.replace(/\*\*/g, '')}
                  </strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </p>
          )
        }

        // List items
        if (trimmed.includes('\n- ') || trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').filter((l) => l.startsWith('- '))
          return (
            <ul key={i} className="mb-6 space-y-2 pl-1">
              {items.map((item, j) => (
                <li
                  key={j}
                  className="text-[17px] leading-[1.8] text-warm-600 flex gap-3"
                >
                  <span className="text-seam-500 mt-[2px] shrink-0">&bull;</span>
                  <span>{item.replace('- ', '')}</span>
                </li>
              ))}
            </ul>
          )
        }

        // Numbered list items
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split('\n').filter((l) => /^\d+\.\s/.test(l))
          return (
            <ol key={i} className="mb-6 space-y-2 pl-1">
              {items.map((item, j) => (
                <li
                  key={j}
                  className="text-[17px] leading-[1.8] text-warm-600 flex gap-3"
                >
                  <span className="text-seam-500 font-medium shrink-0 w-5 text-right">
                    {j + 1}.
                  </span>
                  <span>{item.replace(/^\d+\.\s/, '')}</span>
                </li>
              ))}
            </ol>
          )
        }

        return (
          <p key={i} className="text-[17px] leading-[1.8] text-warm-600 mb-6">
            {trimmed}
          </p>
        )
      })}
    </div>
  )
}

/* ─── Related Posts ─── */

function RelatedPosts({ currentSlug, category }: { currentSlug: string; category: string }) {
  const related = posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === category ? -1 : 1) - (b.category === category ? -1 : 1))
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="py-20 lg:py-28 bg-warm-50">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.02em] text-warm-900 mb-12">
          Keep reading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((post) => (
            <Link
              key={post.slug}
              to={`/resources/blog/${post.slug}`}
              className="group block"
            >
              <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-seam-600 mb-3 block">
                {post.category}
              </span>
              <h3 className="font-display text-[20px] leading-[1.25] tracking-[-0.02em] text-warm-900 mb-3 group-hover:text-seam-700 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-[14px] text-warm-400">
                {post.author.name} &middot; {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Blog Post Page ─── */

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/resources/blog" replace />

  return (
    <>
      {/* Article Header */}
      <article>
        <header className="pt-16 lg:pt-24 pb-12 lg:pb-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Link
              to="/resources/blog"
              className="inline-flex items-center gap-2 text-[14px] text-warm-400 hover:text-warm-700 transition-colors mb-10"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All articles
            </Link>

            <span className="inline-block rounded-full bg-seam-50 text-seam-700 px-4 py-1.5 text-[13px] font-medium mb-6">
              {post.category}
            </span>

            <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-warm-900 mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-[15px] text-warm-400">
              <div>
                <span className="text-warm-900 font-medium">{post.author.name}</span>
                <span className="text-warm-300 mx-1">/</span>
                <span>{post.author.role}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-warm-300" />
              <span>{formatDate(post.date)}</span>
              <span className="w-1 h-1 rounded-full bg-warm-300" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Divider */}
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="border-t border-warm-100 mb-12" />
        </div>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-6 lg:px-10 pb-20 lg:pb-28">
          <ArticleBody body={post.body} />
        </div>
      </article>

      {/* Related */}
      <RelatedPosts currentSlug={post.slug} category={post.category} />
    </>
  )
}
