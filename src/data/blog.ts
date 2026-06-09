// Blog content now lives in the SEAM Marketing Sanity studio (project 2gezu0mx).
// Fetch with getPosts() from ../lib/sanity. This module keeps the shared type
// and the static category list (used by the blog filter UI).
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: { name: string; role: string }
  date: string
  readTime: string
  featured?: boolean
  image?: { src: string; alt: string }
  body: string
}

export const categories = [
  'All',
  'Certified Projects',
  'News',
  'In the Press',
  'Practitioner Perspectives',
  'The Standard',
] as const
