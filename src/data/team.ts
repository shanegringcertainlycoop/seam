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
    bio: '15+ years commercial real estate experience, mostly in adaptive reuse. Rainey is passionate about anti-trafficking, combatting modern slavery, and is a Rescue Team Operator for child trafficking and forced labor rescue missions.',
    image: '/images/team/rainey-shane.png',
  },
  {
    slug: 'alex-demestihas',
    name: 'Alex Demestihas',
    role: 'Co-Founder',
    bio: '15+ years commercial real estate experience covering multi-family and large corporate headquarters. Alex is passionate about causes involving human rights and spends his volunteer efforts focused on immigration rights.',
    image: '/images/team/alex-demestihas.png',
  },
  {
    slug: 'chris-pirschel',
    name: 'Chris Pirschel',
    role: 'CMO',
    bio: '15+ years commercial real estate experience, mostly in adaptive reuse. Rainey is passionate about anti-trafficking, combatting modern slavery, and is a Rescue Team Operator for child trafficking and forced labor rescue missions.',
    image: '/images/team/chris-pirschel.jpg',
  },
  {
    slug: 'shane-gring',
    name: 'Shane Gring',
    role: 'COO',
    bio: 'Shane builds certification ecosystems. Through his consultancy Certainly, he helps organizations turn proven expertise into professional credentials, standards, and systems of trust. His team has designed and supported certification programs across wellness, sustainability, and leadership development — including the WELL AP program at IWBI. At SEAM, he leads operations, program design, and the infrastructure that makes social equity certification scalable and credible.',
    image: '/images/team/shane-gring.jpg',
  },
]
