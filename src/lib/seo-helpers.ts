export const SITE_URL =
  import.meta.env.SITE_URL || import.meta.env.URL || 'https://seamcertification.org'
export const SITE_NAME = 'SEAM'
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`
export const DEFAULT_DESCRIPTION =
  'SEAM is the first certification system that measures social equity in buildings. Bronze through Platinum certification across four pillars.'

export function blogPostingSchema(post: {
  title: string
  excerpt: string
  slug: string
  author: { name: string; role: string }
  date: string
  body: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SEAM',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/resources/blog/${post.slug}`,
    },
    articleBody: post.body.slice(0, 1000),
    wordCount: post.body.split(/\s+/).length,
    url: `${SITE_URL}/resources/blog/${post.slug}`,
  }
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
