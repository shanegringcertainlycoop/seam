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
    bio: 'Rainey Shane is Chief Executive Officer and Executive Director of SEAM, Inc., a nonprofit organization that specializes in embedding social equity in commercial real estate through the Social Equity Assessment Method (SEAM) Standard and certification framework. As co-founder, she played a central role in developing the standard itself — a framework that addresses the social impacts of commercial real estate projects, much like LEED addresses climate change, with the aim of minimizing negative impacts while maximizing opportunities for positive, sustainable outcomes that contribute to long-term systemic change in diversity, equity, inclusion, human rights, and prosperity.\n\nBefore launching SEAM as a standalone nonprofit, Rainey served as Director of Social Sustainability for North America at JLL, where she led the firm\'s social sustainability consulting services and aligned commercial real estate projects with clients\' social sustainability goals. Prior to that, she established and grew the Adaptive Reuse practice for JLL\'s Project and Development Services in the Southeast Central region — a foundation that continues to shape her approach to social impact work, given how closely the two disciplines connect.\n\nRainey brings 15+ years of commercial real estate experience, predominantly in adaptive reuse, to her leadership of SEAM. Her work has earned recognition through ULI Atlanta\'s Women\'s Leadership Initiative "The Leaders" cohort, an award based on career achievements, community outreach, and mentorship within the industry, and she was recently selected to the 2026 class of the Georgia Tech Alumni Association Board of Trustees.\n\nBeyond her professional work, Rainey is passionate about anti-trafficking and combatting modern slavery, and serves as a Rescue Team Operator on child trafficking and forced labor rescue missions — lived experience that gives her perspective on social equity an unusual depth and urgency.',
    image: '/images/team/rainey-shane.png',
  },
  {
    slug: 'alex-demestihas',
    name: 'Alex Demestihas',
    role: 'Co-Founder',
    bio: 'Alex Demestihas is co-founder of SEAM, the world\'s first social impact certification, accreditation, and membership program for commercial real estate. Alongside fellow co-founder Rainey Shane, Alex launched SEAM as a 501(c)(3) nonprofit to provide a roadmap for developers, property owners, and occupiers to maximize positive social impact through the built environment — positioning the standard as a complement to green building programs like LEED, with a framework that aligns to the UN Sustainable Development Goals.\n\nAlex brings more than 15 years of commercial real estate experience spanning multi-family and large corporate headquarters to SEAM\'s mission. He recently completed a decade-long tenure as Managing Director for JLL\'s Project and Development Services group in Atlanta, where he led teams responsible for constructing multiple Fortune 500 headquarters that have reshaped the Atlanta skyline — including projects for Norfolk Southern, Invesco, Inspire Brands, NCR, and Warner Media. He has since moved on to North Avenue Partners, continuing his focus on strategy and execution for complex real estate projects.\n\nEarlier in his career, Alex served as a Construction Manager at Jamestown, LP, providing construction oversight on capital improvement and tenant improvement projects, and previously held a project management role at CBRE supporting CBRE Global Investors\' Atlanta portfolio.\n\nA longtime civic leader in Atlanta\'s real estate community, Alex is a graduate and former Co-Chair of the Urban Land Institute\'s Center for Leadership and a member of ULI. He holds a Bachelor of Science in Building Construction from the Georgia Institute of Technology and an MBA from Georgia State University\'s J. Mack Robinson College of Business, and is a LEED Green Associate. He was named to Real Estate Forum\'s "50 Under 40" in 2018.\n\nAlex is passionate about causes involving human rights and focuses his volunteer efforts on immigration rights.',
    image: '/images/team/alex-demestihas.png',
  },
  {
    slug: 'chris-pirschel',
    name: 'Chris Pirschel',
    role: 'CMO',
    bio: 'Chris builds the brands behind certifications. Through his work with Certainly, he helps mission-driven organizations sharpen their voice, grow their audiences, and turn complex standards into clear, compelling stories. His experience spans more than a decade across the certification and membership space, including roles with the International WELL Building Institute and the Oncology Nursing Society. At SEAM, he leads marketing, communications, and growth — driving awareness and adoption of SEAM Certification™ and the SEAM AP credential worldwide.',
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
