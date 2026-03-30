/* ─── Data Models ─── */

export interface SeamAP {
  slug: string
  name: string
  photo: string
  title: string
  organization: string
  location: { city: string; state: string }
  specialties: string[]
  bio: string
  credentials: 'SEAM AP' | 'SEAM AP+'
  linkedIn?: string
  website?: string
  dateCredentialed: string
  projectsLed: number
}

export interface CertifiedProject {
  slug: string
  name: string
  image: string
  location: { city: string; state: string }
  certificationLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum'
  ratingSystem:
    | 'Buildings + Interiors'
    | 'Operations + Maintenance'
    | 'Community Development'
  description: string
  completionDate: string
  size: string
  owner: string
  highlights: string[]
  apLead?: string
}

export interface ApprovedActivity {
  slug: string
  name: string
  organization: string
  category:
    | 'Procurement'
    | 'Community Engagement'
    | 'Workforce'
    | 'Accessibility'
    | 'Health + Wellness'
    | 'Cultural Programming'
  pillar:
    | 'Social Impact'
    | 'Social Responsibility'
    | 'Social Justice'
    | 'Social Accountability'
  description: string
  dateApproved: string
  location: { city: string; state: string }
}

/* ─── Sample Data: SEAM APs ─── */

export const seamAPs: SeamAP[] = [
  {
    slug: 'marcus-chen',
    name: 'Marcus Chen',
    photo: '/images/directory/ap-marcus-chen.jpg',
    title: 'Principal Consultant',
    organization: 'Equitable Futures Group',
    location: { city: 'Portland', state: 'OR' },
    specialties: ['Corporate Headquarters', 'Mixed-Use', 'Accessibility'],
    bio: 'Marcus brings over a decade of sustainability consulting experience to the SEAM framework. His work at Interface Portland demonstrated how corporate headquarters can achieve meaningful social equity outcomes without compromising operational efficiency. He specializes in bridging the gap between environmental and social certification systems, helping clients see SEAM as a complement to their existing LEED and WELL investments.',
    credentials: 'SEAM AP+',
    linkedIn: 'https://linkedin.com/in/marcus-chen',
    website: 'https://equitablefutures.com',
    dateCredentialed: '2025-03-15',
    projectsLed: 4,
  },
  {
    slug: 'diana-torres',
    name: 'Diana Torres',
    photo: '/images/directory/ap-diana-torres.jpg',
    title: 'Director of Social Impact',
    organization: 'Civic Design Partners',
    location: { city: 'Kansas City', state: 'MO' },
    specialties: ['Multifamily', 'Community Development', 'Economic Equity'],
    bio: 'Diana led the certification process for The Jack, one of the first SEAM Gold projects in the country. Her approach to community engagement has become a model for practitioners working in multifamily housing. She is particularly skilled at translating community voice requirements into governance structures that property managers can sustain long-term.',
    credentials: 'SEAM AP+',
    linkedIn: 'https://linkedin.com/in/diana-torres',
    dateCredentialed: '2025-01-10',
    projectsLed: 6,
  },
  {
    slug: 'james-whitfield',
    name: 'James Whitfield',
    photo: '/images/directory/ap-james-whitfield.jpg',
    title: 'Senior Associate',
    organization: 'Urban Systems Advisory',
    location: { city: 'Atlanta', state: 'GA' },
    specialties: ['Affordable Housing', 'Health + Wellness', 'Workforce'],
    bio: 'James focuses on affordable housing projects where social equity certification can strengthen grant applications and community development financing. His background in public health informs his approach to the Health + Wellness pillar, where he helps clients design indoor environments that address health disparities rather than just meeting baseline performance thresholds.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-06-20',
    projectsLed: 2,
  },
  {
    slug: 'priya-sharma',
    name: 'Priya Sharma',
    photo: '/images/directory/ap-priya-sharma.jpg',
    title: 'Founder',
    organization: 'Sharma Equity Consulting',
    location: { city: 'Chicago', state: 'IL' },
    specialties: ['Operations + Maintenance', 'Procurement', 'Cultural Programming'],
    bio: 'Priya specializes in operations and maintenance certification, helping existing buildings achieve SEAM recognition without major capital expenditure. Her procurement methodology has helped clients redirect millions in annual spending toward locally owned and minority-owned businesses while maintaining or improving service quality.',
    credentials: 'SEAM AP+',
    linkedIn: 'https://linkedin.com/in/priya-sharma',
    website: 'https://sharmaequity.com',
    dateCredentialed: '2025-04-05',
    projectsLed: 5,
  },
  {
    slug: 'david-okonkwo',
    name: 'David Okonkwo',
    photo: '/images/directory/ap-david-okonkwo.jpg',
    title: 'Vice President, ESG',
    organization: 'Meridian Capital Group',
    location: { city: 'New York', state: 'NY' },
    specialties: ['Capital Strategy', 'GRESB Alignment', 'Portfolio Certification'],
    bio: 'David approaches SEAM certification from the capital side, helping institutional investors understand and communicate the financial performance of socially equitable buildings. His work translating SEAM outcomes into GRESB-compatible reporting has made him a key resource for capital providers entering the social equity space.',
    credentials: 'SEAM AP',
    linkedIn: 'https://linkedin.com/in/david-okonkwo',
    dateCredentialed: '2025-08-12',
    projectsLed: 3,
  },
  {
    slug: 'rachel-greenspan',
    name: 'Rachel Greenspan',
    photo: '/images/directory/ap-rachel-greenspan.jpg',
    title: 'Community Development Manager',
    organization: 'Evergreen Impact',
    location: { city: 'Denver', state: 'CO' },
    specialties: ['Community Development', 'Neighborhood Scale', 'Community Engagement'],
    bio: 'Rachel works exclusively on community development rating system projects, helping neighborhoods and districts pursue SEAM certification at a scale larger than individual buildings. Her background in urban planning gives her a unique perspective on how the Standard applies to public spaces, streetscapes, and mixed-use districts.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-09-01',
    projectsLed: 2,
  },
  {
    slug: 'omar-hassan',
    name: 'Omar Hassan',
    photo: '/images/directory/ap-omar-hassan.jpg',
    title: 'Associate Director',
    organization: 'Inclusive Spaces Studio',
    location: { city: 'Houston', state: 'TX' },
    specialties: ['Healthcare Facilities', 'Accessibility', 'Health + Wellness'],
    bio: 'Omar focuses on healthcare and anchor institution projects where accessibility and health equity intersect. His work at Houston Methodist demonstrated how hospital systems can use the SEAM framework to evaluate not just patient-facing spaces but also the working environments of every employee, from surgeons to custodial staff.',
    credentials: 'SEAM AP+',
    linkedIn: 'https://linkedin.com/in/omar-hassan',
    dateCredentialed: '2025-05-18',
    projectsLed: 4,
  },
  {
    slug: 'elena-vasquez',
    name: 'Elena Vasquez',
    photo: '/images/directory/ap-elena-vasquez.jpg',
    title: 'Principal',
    organization: 'Vasquez + Associates',
    location: { city: 'Los Angeles', state: 'CA' },
    specialties: ['Mixed-Use', 'Multifamily', 'Economic Equity'],
    bio: 'Elena brings extensive experience in Southern California real estate to SEAM certification. She has developed a streamlined gap assessment methodology that reduces the pre-certification timeline by 30%, making the process more accessible for mid-market developers who lack dedicated sustainability teams.',
    credentials: 'SEAM AP',
    website: 'https://vasquezassociates.com',
    dateCredentialed: '2025-07-22',
    projectsLed: 3,
  },
]

/* ─── Sample Data: Certified Projects ─── */

export const certifiedProjects: CertifiedProject[] = [
  {
    slug: 'the-jack',
    name: 'The Jack',
    image: '/images/directory/project-the-jack.jpg',
    location: { city: 'Kansas City', state: 'MO' },
    certificationLevel: 'Gold',
    ratingSystem: 'Buildings + Interiors',
    description:
      'A 240-unit multifamily development that became one of the first SEAM Gold certified buildings in the country. The Jack demonstrated that social equity certification drives measurable outcomes: 23% improvement in resident satisfaction, $2.1M in redirected local procurement, and 11% NOI improvement over pro forma in year one.',
    completionDate: '2025-01',
    size: '240 units / 285,000 SF',
    owner: 'Pennrose Development',
    highlights: [
      'Resident-led community programming exceeding Gold requirements',
      '$2.1M annual local procurement from historically excluded businesses',
      '40% of contracted services sourced within 15-mile radius',
      'Community advisory board with binding governance authority',
    ],
    apLead: 'diana-torres',
  },
  {
    slug: 'interface-hq',
    name: 'Interface HQ',
    image: '/images/directory/project-interface-hq.jpg',
    location: { city: 'Portland', state: 'OR' },
    certificationLevel: 'Silver',
    ratingSystem: 'Buildings + Interiors',
    description:
      'Interface\'s corporate headquarters achieved SEAM Silver certification, demonstrating how commercial office buildings can address social equity without major capital expenditure. The project pioneered community voice methodology for corporate environments, giving contracted workers and neighboring businesses formal evaluation roles.',
    completionDate: '2025-08',
    size: '120,000 SF',
    owner: 'Interface, Inc.',
    highlights: [
      'Community voice process adapted for corporate headquarters context',
      'Local procurement increased from 35% to 52% within certification period',
      'Accessibility audit exceeded ADA by 40+ interventions',
      'Clear Gold pathway identified for recertification cycle',
    ],
    apLead: 'marcus-chen',
  },
  {
    slug: 'magnolia-commons',
    name: 'Magnolia Commons',
    image: '/images/directory/project-magnolia-commons.jpg',
    location: { city: 'Atlanta', state: 'GA' },
    certificationLevel: 'Gold',
    ratingSystem: 'Buildings + Interiors',
    description:
      'An affordable housing community that earned Gold certification by centering resident voice in every aspect of building operations. Magnolia Commons proved that SEAM certification is not limited to market-rate developments and can strengthen LIHTC applications and community development financing.',
    completionDate: '2025-11',
    size: '180 units / 195,000 SF',
    owner: 'Atlanta Housing Authority',
    highlights: [
      'First affordable housing project to achieve SEAM Gold',
      'Multilingual programming in four languages',
      'On-site workforce development center with job placement',
      'Living wage verification for all contracted service providers',
    ],
    apLead: 'james-whitfield',
  },
  {
    slug: 'meridian-tower',
    name: 'Meridian Tower',
    image: '/images/directory/project-meridian-tower.jpg',
    location: { city: 'New York', state: 'NY' },
    certificationLevel: 'Platinum',
    ratingSystem: 'Buildings + Interiors',
    description:
      'The first SEAM Platinum certified building in the country. Meridian Tower set the standard for what social equity excellence looks like in Class A commercial real estate, proving that the highest certification levels are achievable in premium markets without sacrificing financial performance.',
    completionDate: '2026-01',
    size: '450,000 SF',
    owner: 'Brookfield Properties',
    highlights: [
      'First SEAM Platinum certification nationally',
      '65% of annual procurement from locally owned businesses',
      'Universal design features exceeding any existing standard',
      'GRESB score improvement of 18 points attributed to SEAM practices',
    ],
    apLead: 'david-okonkwo',
  },
  {
    slug: 'lakewood-village',
    name: 'Lakewood Village',
    image: '/images/directory/project-lakewood-village.jpg',
    location: { city: 'Denver', state: 'CO' },
    certificationLevel: 'Silver',
    ratingSystem: 'Community Development',
    description:
      'A neighborhood-scale certification covering a 12-block mixed-use district in Denver. Lakewood Village demonstrated the Community Development rating system at scale, coordinating across multiple property owners, public spaces, and community organizations to achieve district-wide social equity outcomes.',
    completionDate: '2025-10',
    size: '12-block district / 45 acres',
    owner: 'Lakewood Community Development Corporation',
    highlights: [
      'First Community Development rating system certification',
      'Coordinated 8 property owners under single certification umbrella',
      'Public space activation program serving 3,000+ residents monthly',
      'District-wide living wage commitment from all participating employers',
    ],
    apLead: 'rachel-greenspan',
  },
  {
    slug: 'houston-methodist-pavilion',
    name: 'Houston Methodist Pavilion',
    image: '/images/directory/project-houston-methodist.jpg',
    location: { city: 'Houston', state: 'TX' },
    certificationLevel: 'Gold',
    ratingSystem: 'Operations + Maintenance',
    description:
      'Houston Methodist used the Operations + Maintenance rating system to certify their newest patient pavilion, focusing on health equity for every person in the building — from patients to custodial staff. The project demonstrated that healthcare facilities are natural candidates for SEAM certification.',
    completionDate: '2025-12',
    size: '380,000 SF',
    owner: 'Houston Methodist Hospital System',
    highlights: [
      'First healthcare facility to achieve SEAM certification',
      'Health equity metrics applied across all building occupant categories',
      'Staff wellness program with measurable mental health outcomes',
      'Procurement policy redirected $4.2M annually to local suppliers',
    ],
    apLead: 'omar-hassan',
  },
  {
    slug: 'vista-del-sol',
    name: 'Vista del Sol',
    image: '/images/directory/project-vista-del-sol.jpg',
    location: { city: 'Los Angeles', state: 'CA' },
    certificationLevel: 'Bronze',
    ratingSystem: 'Buildings + Interiors',
    description:
      'A mid-market mixed-use development that used SEAM Bronze certification as an entry point into social equity practice. Vista del Sol proved that certification is accessible to developers without dedicated sustainability teams, using Elena Vasquez\'s streamlined gap assessment methodology.',
    completionDate: '2025-09',
    size: '85 units / 110,000 SF',
    owner: 'Altura Development',
    highlights: [
      'Achieved Bronze certification in under 6 months',
      'Streamlined gap assessment methodology piloted here',
      'Community advisory committee established pre-occupancy',
      'Clear Silver pathway with 18-month recertification target',
    ],
    apLead: 'elena-vasquez',
  },
  {
    slug: 'prairie-wind-estates',
    name: 'Prairie Wind Estates',
    image: '/images/directory/project-prairie-wind.jpg',
    location: { city: 'Chicago', state: 'IL' },
    certificationLevel: 'Gold',
    ratingSystem: 'Operations + Maintenance',
    description:
      'An existing Class B office campus that earned Gold through the Operations + Maintenance track, demonstrating that SEAM certification is not just for new construction. Priya Sharma led a procurement transformation that redirected $3.1M in annual spending without increasing costs.',
    completionDate: '2025-07',
    size: '320,000 SF across 3 buildings',
    owner: 'Sterling Asset Management',
    highlights: [
      'Existing building certified through O+M track',
      '$3.1M procurement redirected to local and minority-owned businesses',
      'Zero net cost increase from procurement policy changes',
      'Tenant satisfaction scores increased 19% post-certification',
    ],
    apLead: 'priya-sharma',
  },
]

/* ─── Sample Data: Approved Activities ─── */

export const approvedActivities: ApprovedActivity[] = [
  {
    slug: 'local-procurement-tracking',
    name: 'Local Procurement Tracking & Reporting Program',
    organization: 'Sterling Asset Management',
    category: 'Procurement',
    pillar: 'Social Responsibility',
    description:
      'A systematic procurement tracking program that monitors vendor diversity, geographic origin, and ownership demographics across all contracted services. Sterling implemented quarterly reporting dashboards that give property managers real-time visibility into local spending percentages, making procurement equity a management practice rather than an annual audit exercise.',
    dateApproved: '2025-09-15',
    location: { city: 'Chicago', state: 'IL' },
  },
  {
    slug: 'multilingual-resident-communications',
    name: 'Multilingual Resident Communications Initiative',
    organization: 'Pennrose Development',
    category: 'Accessibility',
    pillar: 'Social Justice',
    description:
      'A comprehensive multilingual communication program covering all resident-facing materials, signage, digital platforms, and emergency communications in English, Spanish, Somali, and Vietnamese. The program includes professional translation services and community review to ensure cultural appropriateness beyond literal translation accuracy.',
    dateApproved: '2025-08-22',
    location: { city: 'Kansas City', state: 'MO' },
  },
  {
    slug: 'community-advisory-board',
    name: 'Community Advisory Board with Governance Authority',
    organization: 'Lakewood Community Development Corporation',
    category: 'Community Engagement',
    pillar: 'Social Accountability',
    description:
      'Establishment of a resident and stakeholder advisory board with binding authority over community programming decisions and annual budget allocations. The board includes representatives from neighboring businesses, contracted workers, and residents selected through a democratic process with term limits and conflict-of-interest provisions.',
    dateApproved: '2025-10-01',
    location: { city: 'Denver', state: 'CO' },
  },
  {
    slug: 'living-wage-verification',
    name: 'Living Wage Verification for Contracted Services',
    organization: 'Brookfield Properties',
    category: 'Workforce',
    pillar: 'Social Impact',
    description:
      'A third-party verified living wage program covering all contracted service providers including janitorial, security, landscaping, and maintenance personnel. The program establishes minimum compensation thresholds indexed to local cost-of-living data and includes annual wage audits with public reporting of compliance rates.',
    dateApproved: '2025-11-10',
    location: { city: 'New York', state: 'NY' },
  },
  {
    slug: 'accessibility-audit-beyond-ada',
    name: 'Accessibility Audit Beyond ADA Minimum',
    organization: 'Houston Methodist Hospital System',
    category: 'Accessibility',
    pillar: 'Social Justice',
    description:
      'A comprehensive accessibility assessment that evaluates building performance against universal design principles beyond ADA minimum requirements. The audit covers wayfinding for visually impaired visitors, sensory-friendly environments for neurodivergent occupants, gender-inclusive restroom access, and digital accessibility for all building management platforms.',
    dateApproved: '2025-07-28',
    location: { city: 'Houston', state: 'TX' },
  },
  {
    slug: 'workforce-development-center',
    name: 'On-Site Workforce Development & Job Placement Center',
    organization: 'Atlanta Housing Authority',
    category: 'Workforce',
    pillar: 'Social Impact',
    description:
      'An on-site workforce development center providing job training, resume assistance, interview preparation, and direct placement services for residents. The program partners with local employers to create hiring pipelines and tracks employment outcomes for 24 months post-placement to measure sustained economic impact.',
    dateApproved: '2025-12-05',
    location: { city: 'Atlanta', state: 'GA' },
  },
  {
    slug: 'cultural-programming-series',
    name: 'Resident-Led Cultural Programming Series',
    organization: 'Pennrose Development',
    category: 'Cultural Programming',
    pillar: 'Social Accountability',
    description:
      'A year-round cultural programming initiative designed and led by building residents. The series includes monthly community gatherings, quarterly cultural celebrations reflecting the demographic composition of the building, and an annual community arts installation. Programming budgets are managed by the resident advisory board with full financial transparency.',
    dateApproved: '2025-10-18',
    location: { city: 'Kansas City', state: 'MO' },
  },
  {
    slug: 'health-equity-monitoring',
    name: 'Indoor Health Equity Monitoring Program',
    organization: 'Interface, Inc.',
    category: 'Health + Wellness',
    pillar: 'Social Impact',
    description:
      'A health equity monitoring program that measures indoor environmental quality across all occupied spaces, including areas used by contracted and hourly workers. The program ensures that air quality, thermal comfort, lighting, and acoustic performance are equitable across all zones of the building, not just executive and client-facing areas.',
    dateApproved: '2025-09-30',
    location: { city: 'Portland', state: 'OR' },
  },
]

/* ─── Filter options ─── */

export const apSpecialties = [
  'All',
  'Multifamily',
  'Corporate Headquarters',
  'Mixed-Use',
  'Affordable Housing',
  'Healthcare Facilities',
  'Community Development',
  'Operations + Maintenance',
  'Accessibility',
  'Health + Wellness',
  'Economic Equity',
  'Procurement',
  'Capital Strategy',
  'Workforce',
  'Neighborhood Scale',
  'Cultural Programming',
  'GRESB Alignment',
  'Portfolio Certification',
] as const

export const certificationLevels = [
  'All',
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
] as const

export const ratingSystems = [
  'All',
  'Buildings + Interiors',
  'Operations + Maintenance',
  'Community Development',
] as const

export const activityCategories = [
  'All',
  'Procurement',
  'Community Engagement',
  'Workforce',
  'Accessibility',
  'Health + Wellness',
  'Cultural Programming',
] as const

export const activityPillars = [
  'All',
  'Social Impact',
  'Social Responsibility',
  'Social Justice',
  'Social Accountability',
] as const
