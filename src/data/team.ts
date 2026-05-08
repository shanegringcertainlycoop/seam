export interface TeamMember {
  slug: string
  name: string
  role: string
  bio: string
  image: string
  linkedIn?: string
}

export const team: TeamMember[] = [
  {
    slug: 'rainey-shane',
    name: 'Rainey Shane',
    role: 'Co-Founder',
    bio: 'CEO and co-founder of SEAM. Rainey brings 15+ years of commercial real estate experience and played a central role in developing the SEAM Standard. Previously Director of Social Sustainability for North America at JLL.',
    image: '/images/team/rainey-shane.png',
  },
  {
    slug: 'alex-demestihas',
    name: 'Alex Demestihas',
    role: 'Co-Founder',
    bio: 'Co-founder of SEAM with 15+ years of commercial real estate experience. Previously Managing Director at JLL, where he led construction of multiple Fortune 500 headquarters in Atlanta.',
    image: '/images/team/alex-demestihas.png',
  },
  {
    slug: 'chris-pirschel',
    name: 'Chris Pirschel',
    role: 'CMO',
    bio: 'CMO at SEAM, leading marketing, communications, and growth. Chris drives awareness and adoption of SEAM Certification and the AP credential worldwide.',
    image: '/images/team/chris-pirschel.jpg',
  },
  {
    slug: 'shane-gring',
    name: 'Shane Gring',
    role: 'COO',
    bio: 'COO at SEAM, leading operations, program design, and the infrastructure that makes social equity certification scalable and credible.',
    image: '/images/team/shane-gring.jpg',
  },
  {
    slug: 'melina-gorrebeeck',
    name: 'Melina Gorrebeeck',
    role: 'SEAM Europe Regional Director',
    bio: 'Based in Brussels, Melina brings twenty years of community organizing experience to the SEAM framework. She is helping expand SEAM\'s reach into international markets.',
    image: '/images/ap-melina-gorrebeeck.jpg',
  },
]
