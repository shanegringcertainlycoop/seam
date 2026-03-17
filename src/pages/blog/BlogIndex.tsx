import { useState } from 'react'
import { Link } from 'react-router-dom'
import { posts, categories, type BlogPost } from '../../data/blog'
import SEO from '../../components/SEO'

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

/* ─── Featured Post ─── */

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/resources/blog/${post.slug}`}
      className="group block rounded-2xl bg-warm-900 p-10 lg:p-14 min-h-[480px] flex flex-col justify-end relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-warm-900 via-warm-900/90 to-warm-900/50" />
      <div className="relative">
        <span className="inline-block rounded-full bg-seam-600/90 px-4 py-1.5 text-[12px] font-medium text-white mb-6">
          {post.category}
        </span>
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.03em] text-white mb-4 group-hover:text-warm-200 transition-colors duration-300">
          {post.title}
        </h2>
        <p className="text-[17px] leading-relaxed text-warm-300 mb-6 max-w-2xl">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-[14px] text-warm-400">
          <span>{post.author.name}</span>
          <span className="w-1 h-1 rounded-full bg-warm-600" />
          <span>{formatDate(post.date)}</span>
          <span className="w-1 h-1 rounded-full bg-warm-600" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  )
}

/* ─── Article Card ─── */

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/resources/blog/${post.slug}`}
      className="group block"
    >
      <div className="rounded-2xl bg-warm-50 p-8 lg:p-10 mb-5 min-h-[200px] flex items-end transition-all duration-300 group-hover:bg-warm-100/80 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-seam-600">
          {post.category}
        </span>
      </div>
      <h3 className="font-display text-[22px] lg:text-[24px] leading-[1.2] tracking-[-0.02em] text-warm-900 mb-3 group-hover:text-seam-700 transition-colors duration-300">
        {post.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-warm-400 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-3 text-[13px] text-warm-400">
        <span>{post.author.name}</span>
        <span className="w-1 h-1 rounded-full bg-warm-300" />
        <span>{formatDate(post.date)}</span>
        <span className="w-1 h-1 rounded-full bg-warm-300" />
        <span>{post.readTime}</span>
      </div>
    </Link>
  )
}

/* ─── Blog Index ─── */

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = posts.find((p) => p.featured)
  const filtered =
    activeCategory === 'All'
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => p.category === activeCategory && !p.featured)

  return (
    <>
      <SEO
        title="Blog & Insights"
        description="Lessons from SEAM-certified projects, practitioner perspectives, sector analysis, and updates on the Standard and ROSSI calculator."
        path="/resources/blog"
      />
      {/* Header */}
      <section className="pt-16 lg:pt-24 pb-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-seam-600 mb-6">
            Blog & Insights
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-warm-900 max-w-3xl">
            Lessons from the field,{' '}
            <em className="italic font-normal text-warm-500">not the boardroom</em>
          </h1>
          <p className="mt-6 text-[18px] leading-relaxed text-warm-500 max-w-2xl">
            Practitioner perspectives, certified project outcomes, and honest analysis
            of what social equity in the built environment looks like in practice.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && activeCategory === 'All' && (
        <section className="pb-16">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <FeaturedCard post={featured} />
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-4 sticky top-[88px] z-30 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[14px] font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-warm-900 text-white'
                    : 'bg-warm-50 text-warm-500 hover:bg-warm-100 hover:text-warm-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {filtered.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[17px] text-warm-400">
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.02em] text-warm-900 mb-4">
            Stay in the conversation
          </h2>
          <p className="text-[17px] text-warm-500 mb-10 max-w-lg mx-auto">
            New articles, certified project announcements, and Standard updates
            delivered to your inbox. No noise.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-warm-200 bg-white px-6 py-3.5 text-[15px] text-warm-900 placeholder:text-warm-300 outline-none focus:border-warm-400 transition-colors"
            />
            <button
              type="submit"
              className="rounded-full bg-warm-900 px-8 py-3.5 text-[15px] font-medium text-white hover:bg-warm-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
