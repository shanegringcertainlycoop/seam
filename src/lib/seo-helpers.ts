export const SITE_URL =
  import.meta.env.SITE_URL || import.meta.env.URL || 'https://seamcertification.org'
export const SITE_NAME = 'SEAM'
export const DEFAULT_IMAGE = `${SITE_URL}/images/seam-social-card.jpg`
export const DEFAULT_DESCRIPTION =
  'SEAM is the first certification system built to measure and advance social equity in the built environment — for developers, building professionals, and communities.'

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

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NonprofitOrganization',
    name: 'SEAM, Inc.',
    alternateName: 'Social Equity Assessment Method',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: DEFAULT_IMAGE,
    description: DEFAULT_DESCRIPTION,
    foundingDate: '2023',
    nonprofitStatus: '501(c)(3)',
    sameAs: [
      'https://www.linkedin.com/company/seam-standard/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@seamcertification.org',
      contactType: 'customer service',
    },
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
