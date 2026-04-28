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
  membershipTier?: 'Open' | 'Changemaker'
  roles?: ('Leadership' | 'TAG')[]
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
  description: string
  completionDate: string
  size: string
  owner: string
  highlights: string[]
  apLead?: string
  blogPost?: string
}

export interface MemberOrg {
  slug: string
  name: string
  logo?: string
  tier: 'Founding Sponsor' | 'Member'
  description: string
  location: { city: string; state: string }
  website?: string
  sectors: string[]
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

/* ─── SEAM APs (from Accredible credentials export) ─── */

export const seamAPs: SeamAP[] = [
  {
    slug: 'christian-mayer',
    name: 'Christian Mayer Garcia',
    photo: '/images/ap-christian-mayer.jpg',
    title: 'Senior Project Manager',
    organization: 'JLL',
    location: { city: 'Chicago', state: 'IL' },
    specialties: ['Operations + Maintenance', 'Mixed-Use', 'Portfolio Certification'],
    bio: 'Within six months of earning his AP, Christian was leading certification engagements for multiple projects. His project management expertise at JLL allows him to coordinate cross-functional teams across building operations, ownership groups, and community stakeholders to drive SEAM certification forward efficiently.',
    credentials: 'SEAM AP',
    membershipTier: 'Changemaker',
    dateCredentialed: '2025-01-24',
    projectsLed: 3,
  },
  {
    slug: 'alexandra-bull',
    name: 'Alexandra Bull',
    photo: '/images/ap-alexandra-bull.jpg',
    title: 'Senior Sustainability & Wellness Consultant',
    organization: 'JLL',
    location: { city: 'New York', state: 'NY' },
    specialties: ['Corporate Headquarters', 'Health + Wellness', 'GRESB Alignment'],
    bio: 'Alexandra connects her background in public health to the built environment, helping developers and investors see social equity as a performance metric. Her consulting work at JLL focuses on integrating SEAM alongside WELL and LEED to create holistic building strategies that serve occupants, operators, and surrounding communities.',
    credentials: 'SEAM AP',
    membershipTier: 'Changemaker',
    dateCredentialed: '2025-02-07',
    projectsLed: 2,
  },
  {
    slug: 'jennifer-beyer',
    name: 'Jennifer Beyer',
    photo: '/images/directory/ap-jennifer-beyer.jpg',
    title: 'Sustainability Project Consultant',
    organization: 'IMEG Corp',
    location: { city: 'Seattle', state: 'WA' },
    specialties: ['Corporate Headquarters', 'Health + Wellness'],
    bio: 'Jennifer is a Sustainability Project Consultant at IMEG Corp, one of the largest engineering firms in the United States. She holds SEAM AP, WELL AP, LEED AP, LFA, and Fitwel Ambassador credentials, bringing deep sustainability and wellness expertise to social equity certification in the built environment.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-02-06',
    projectsLed: 0,
  },
  {
    slug: 'monica-wentz',
    name: 'Monica Wentz',
    photo: '/images/directory/ap-monica-wentz.jpg',
    title: 'ESG Analyst',
    organization: 'Turner Construction Company',
    location: { city: '', state: '' },
    specialties: ['Procurement', 'Workforce'],
    bio: 'Monica is an ESG Analyst at Turner Construction Company, where she supports ESG strategy implementation, performance tracking, and supply chain sustainability initiatives. She holds WELL AP and SEAM AP credentials.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-02-07',
    projectsLed: 0,
  },
  {
    slug: 'valerie-oliver',
    name: 'Valerie Oliver',
    photo: '/images/directory/ap-valerie-oliver.jpg',
    title: 'Sustainability Specialist',
    organization: 'GB Shades',
    location: { city: '', state: 'MD' },
    specialties: ['Health + Wellness', 'Procurement'],
    bio: 'Valerie is a Sustainability Specialist at GB Shades with over 14 years of experience. She holds SEAM AP, LEED AP, WELL AP, and SITES AP credentials, bringing multi-certification expertise to social equity in the built environment.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-02-17',
    projectsLed: 0,
  },
  {
    slug: 'jennifer-webb',
    name: 'Jennifer Webb',
    photo: '/images/directory/ap-jennifer-webb.jpg',
    title: 'Senior Technical Services Manager',
    organization: 'Verdani Partners',
    location: { city: '', state: '' },
    specialties: ['GRESB Alignment', 'Operations + Maintenance'],
    bio: 'Jennifer is a Senior Technical Services Manager at Verdani Partners specializing in GRESB, CDP, and ENERGY STAR, with eleven years of experience in sustainability consulting focused on energy efficiency and certifications for the commercial real estate industry.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-02-20',
    projectsLed: 0,
  },
  {
    slug: 'patricia-raicht',
    name: 'Patricia Raicht',
    photo: '/images/directory/ap-patricia-raicht.jpg',
    title: 'Senior Director, Property Data Solutions',
    organization: 'CBRE',
    location: { city: '', state: '' },
    specialties: ['Capital Strategy', 'Economic Equity'],
    bio: 'Patricia is Senior Director of Property Data Solutions at CBRE with 30+ years of experience in commercial real estate. She is committed to elevating underestimated voices and advancing equity and diversity in the workplace, bringing deep research and analytics expertise to the social equity space.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-02-23',
    projectsLed: 0,
  },
  {
    slug: 'anna-fredlander',
    name: 'Anna Fredlander',
    photo: '/images/directory/ap-anna-fredlander.jpg',
    title: 'Principal Social Value Consultant',
    organization: 'Hoare Lea',
    location: { city: 'London', state: 'UK' },
    specialties: ['Community Development', 'Community Engagement'],
    bio: 'Anna is a Principal Social Value Consultant on the Societal Insights team at Hoare Lea and the first SEAM AP in the United Kingdom. She serves on the SEAM Technical Advisory Group, helping develop crosswalks between SEAM and other leading building certifications. A champion for regenerative, circular, and community-focused development, she brings a holistic, systems-based approach to social value in the built environment.',
    credentials: 'SEAM AP',
    roles: ['TAG'],
    dateCredentialed: '2025-03-05',
    projectsLed: 0,
  },
  {
    slug: 'karin-miller',
    name: 'Karin Miller',
    photo: '/images/directory/ap-karin-miller.jpg',
    title: 'Director',
    organization: 'Brightworks Sustainability',
    location: { city: 'New York', state: 'NY' },
    specialties: ['Mixed-Use', 'Health + Wellness', 'Procurement'],
    bio: 'Karin is a Director at Brightworks Sustainability with 11+ years of experience across Chicago, Portland, and New York. She leads consulting operations, project delivery, and business development, specializing in sustainability strategy, certification management, and healthy materials consulting. She holds a Master\'s in Urban Planning and Policy Design from Politecnico di Milano.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-03-17',
    projectsLed: 0,
  },
  {
    slug: 'lonna-babu',
    name: 'Lonna Babu',
    photo: '/images/directory/ap-lonna-babu.jpg',
    title: 'Associate',
    organization: 'Ayers Saint Gross',
    location: { city: 'Baltimore', state: 'MD' },
    specialties: ['Community Development', 'Accessibility'],
    bio: 'Lonna is an Associate at Ayers Saint Gross and Adjunct Professor at the Catholic University of America. She holds AIA, NOMA, NCARB, LFA, and SEAM AP credentials, and was named ACE Mentor Program of Baltimore Mentor of the Year. She brings architecture and planning expertise to social equity certification.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-03-29',
    projectsLed: 0,
  },
  {
    slug: 'melina-gorrebeeck',
    name: 'Melina Gorrebeeck',
    photo: '/images/ap-melina-gorrebeeck.jpg',
    title: 'Social Value Expert',
    organization: 'LAMMP',
    location: { city: 'Brussels', state: 'Belgium' },
    specialties: ['Community Development', 'Community Engagement', 'Economic Equity'],
    bio: 'Melina brings twenty years of community organizing experience to the SEAM framework, translating grassroots knowledge into measurable outcomes that show up in project financing. Based in Brussels, she is helping expand SEAM\'s reach into international markets and demonstrating how the Standard applies across cultural and regulatory contexts.',
    credentials: 'SEAM AP',
    membershipTier: 'Changemaker',
    dateCredentialed: '2025-05-05',
    projectsLed: 2,
  },
  {
    slug: 'lina-daniel',
    name: 'Lina Daniel',
    photo: '/images/directory/ap-lina-daniel.jpg',
    title: 'Regional Sustainable Operations Manager',
    organization: 'JLL',
    location: { city: '', state: '' },
    specialties: ['Operations + Maintenance', 'Mixed-Use'],
    bio: 'Lina is a Regional Sustainable Operations Manager at JLL, delivering sustainability strategies and green building certifications including LEED, WELL, Green Globes, SEAM, and Fitwel for commercial interior projects. She brings extensive project management experience to social responsibility and equity-focused certifications.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-05-29',
    projectsLed: 0,
  },
  {
    slug: 'max-kriegsfeld',
    name: 'Max Kriegsfeld',
    photo: '/images/directory/ap-max-kriegsfeld.jpg',
    title: 'Sr. Energy & Sustainability Analyst',
    organization: 'JLL (Vanguard account)',
    location: { city: 'Phoenix', state: 'AZ' },
    specialties: ['Operations + Maintenance', 'GRESB Alignment'],
    bio: 'Max is a Senior Energy and Sustainability Analyst at JLL supporting the Vanguard account. He holds LEED Green Associate, TRUE Zero Waste Advisor, and SEAM AP credentials, bringing zero waste strategy and energy management expertise to social equity certification in the built environment.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-06-03',
    projectsLed: 0,
  },
  {
    slug: 'edward-wan',
    name: 'Tsz Wai Edward Wan',
    photo: '/images/directory/ap-edward-wan.jpg',
    title: 'Project Director, Project & Development Services',
    organization: 'JLL',
    location: { city: 'Hong Kong', state: '' },
    specialties: ['Corporate Headquarters', 'Mixed-Use'],
    bio: 'Edward is a Project Director in JLL\'s Project & Development Services division in Hong Kong, specializing in commercial real estate project management across office and retail markets. He led JLL Hong Kong\'s own headquarters relocation to One Taikoo Place, targeting WELL Platinum and LEED Platinum certifications. A certified F.CPM and PMP, he brings deep sustainable building expertise to JLL\'s social equity practice across Asia Pacific.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-07-04',
    projectsLed: 0,
  },
  {
    slug: 'eva-lo',
    name: 'Eva Lo',
    photo: '/images/directory/ap-eva-lo.png',
    title: 'Account Director, Work Dynamics',
    organization: 'JLL',
    location: { city: 'Hong Kong', state: '' },
    specialties: ['Operations + Maintenance', 'Corporate Headquarters'],
    bio: 'Eva is an Account Director in JLL\'s Work Dynamics division in Hong Kong with over 15 years at the firm. She brings deep expertise in facilities project management and ESG integration, managing major accounts including Hang Seng Bank, FWD Insurance, and WPP. A certified PMP, SFP, and CFM, she is dedicated to ensuring corporate clients benefit from environmentally conscious and socially responsible business practices.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-07-28',
    projectsLed: 0,
  },
  {
    slug: 'hetvi-vora',
    name: 'Hetvi Vora',
    photo: '/images/directory/ap-hetvi-vora.jpg',
    title: 'Sustainability Project Manager',
    organization: 'BranchPattern',
    location: { city: 'Pittsburgh', state: 'PA' },
    specialties: ['Health + Wellness', 'Mixed-Use'],
    bio: 'Hetvi is a Sustainability Project Manager at BranchPattern, an employee-owned consulting firm focused on improving life through better built environments. She holds LEED AP ID+C, WELL Performance Testing Agent, and SEAM AP credentials, and brings an architecture background from India alongside an M.S. in Sustainable Building Systems from Northeastern University.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-08-03',
    projectsLed: 0,
  },
  {
    slug: 'jayne-lee',
    name: 'Jayne Lee',
    photo: '/images/directory/ap-jayne-lee.jpg',
    title: 'Program Manager',
    organization: 'Partner Energy',
    location: { city: 'Sacramento', state: 'CA' },
    specialties: ['Affordable Housing', 'Community Development'],
    bio: 'Jayne is a Program Manager at Partner Energy with 10+ years in sustainability. She guides developers, lenders, and property managers through sustainability requirements for LIHTC, Fannie Mae, Freddie Mac, and HUD green lending programs. She holds an MA in Global and International Studies from UC Santa Barbara.',
    credentials: 'SEAM AP',
    dateCredentialed: '2025-11-18',
    projectsLed: 0,
  },
]

/* ─── Member Organizations ─── */

export const memberOrgs: MemberOrg[] = [
  {
    slug: 'jll',
    name: 'JLL',
    logo: '/logos/jll.png',
    tier: 'Founding Sponsor',
    description: 'A Fortune 500 global real estate services firm operating across 80+ countries. JLL was the first real estate company in the world to have a net-zero target validated by the Science Based Targets initiative and has committed to net-zero emissions from its own buildings by 2030.',
    location: { city: 'Chicago', state: 'IL' },
    website: 'https://www.jll.com',
    sectors: ['Property Management', 'Investment Management', 'Sustainability Consulting'],
  },
  {
    slug: 'jamestown',
    name: 'Jamestown',
    logo: '/logos/jamestown.png',
    tier: 'Founding Sponsor',
    description: 'A design-focused, vertically integrated real estate investment and management firm that has executed transactions totaling approximately $40 billion. Jamestown launched a formal sustainability program in 2008 and has committed to net-zero operational carbon by 2050.',
    location: { city: 'Atlanta', state: 'GA' },
    website: 'https://www.jamestownlp.com',
    sectors: ['Real Estate Investment', 'Property Management', 'Mixed-Use Development'],
  },
  {
    slug: 'hitt-contracting',
    name: 'HITT Contracting',
    logo: '/logos/hitt.png',
    tier: 'Founding Sponsor',
    description: 'One of the top 20 largest general contractors in the United States, founded in 1937. HITT is building a new 270,000 SF headquarters targeting LEED Platinum, net-zero energy, and net-zero carbon — with a 40,000 SF research lab in partnership with Virginia Tech.',
    location: { city: 'Falls Church', state: 'VA' },
    website: 'https://www.hitt.com',
    sectors: ['Commercial Construction', 'Interior Fit-Out', 'Net-Zero Construction'],
  },
  {
    slug: 'interface',
    name: 'Interface',
    logo: '/logos/interface.png',
    tier: 'Founding Sponsor',
    description: 'The world\'s largest manufacturer of modular carpet tile and a pioneer in corporate sustainability. In 1994, founder Ray Anderson launched "Mission Zero" to eliminate the company\'s negative environmental impact — Interface achieved carbon-neutral flooring across its entire product lifecycle.',
    location: { city: 'Atlanta', state: 'GA' },
    website: 'https://www.interface.com',
    sectors: ['Flooring Manufacturing', 'Sustainable Materials', 'Carbon-Neutral Products'],
  },
  {
    slug: 'leapley-construction',
    name: 'Leapley Construction',
    logo: '/logos/leapley.png',
    tier: 'Founding Sponsor',
    description: 'The largest female-owned interior contractor in Atlanta and a Top 5 Commercial Interior Contractor in the market. Leapley achieved 52% diverse supplier inclusion on the Microsoft Atlanta campus project and promotes construction material reuse through the Lifecycle Building Center.',
    location: { city: 'Atlanta', state: 'GA' },
    website: 'https://leapleyconstruction.com',
    sectors: ['Commercial Interiors', 'Diverse Procurement', 'Tenant Improvement'],
  },
  {
    slug: 'thm-advisors',
    name: 'THM Advisors',
    logo: '/logos/thm-advisors.svg',
    tier: 'Member',
    description: 'A certified Minority-Owned Business Enterprise that helps commercial real estate developers embed racial equity strategies into their operating models. THM designs career, community, contract, and capital strategies that promote equity and inclusion — including the DEI framework for Harvard\'s Enterprise Research Campus.',
    location: { city: 'Boston', state: 'MA' },
    website: 'https://www.thmcclory.com',
    sectors: ['Equitable Development Advisory', 'DEI Strategy', 'Social Impact'],
  },
  {
    slug: 'val-interiors',
    name: 'Val Interiors',
    logo: undefined,
    tier: 'Member',
    description: 'A commercial interiors firm contributing to social equity in the built environment through SEAM membership and sustainable interior construction practices.',
    location: { city: '', state: '' },
    sectors: ['Commercial Interiors'],
  },
  {
    slug: 'brightworks-sustainability',
    name: 'Brightworks Sustainability',
    logo: '/logos/brightworks.svg',
    tier: 'Member',
    description: 'One of the most trusted sustainability consulting firms in the U.S., founded in 2001. Two-thirds of Brightworks\' 50+ team hold advanced degrees in engineering, architecture, and environmental policy. Their work spans LEED, WELL, Fitwel, and now SEAM certification consulting across 25+ industries.',
    location: { city: 'Portland', state: 'OR' },
    website: 'https://brightworks.net',
    sectors: ['Sustainability Consulting', 'Green Building Certification', 'Healthy Buildings'],
  },
]

/* ─── Sample Data: Certified Projects ─── */

export const certifiedProjects: CertifiedProject[] = [
  {
    slug: 'the-jack',
    name: 'The Jack',
    image: '/images/directory/the-jack.avif',
    location: { city: 'Seattle', state: 'WA' },
    certificationLevel: 'Bronze',
    ratingSystem: 'Operations + Maintenance',
    description:
      'A mixed-use building in Seattle\'s Pioneer Square — the first project in the world to achieve SEAM Certification. Urban Visions engaged more than 1,000 community voices to shape the project, and every contractor incorporated human rights requirements into their contracts.',
    completionDate: '2025-01',
    size: '175,000 SF',
    owner: 'Urban Visions',
    highlights: [
      'First SEAM-certified building in the world',
      '1,000+ community voices documented through Impacted Party Engagement',
      'Human rights requirements incorporated into all contractor agreements',
      'Serves up to 459 building occupants across mixed uses',
    ],
    apLead: undefined,
    blogPost: '/resources/blog/what-the-jack-teaches-us-about-human-centric-real-estate',
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
    apLead: undefined,
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
    apLead: undefined,
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
    apLead: undefined,
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
    apLead: undefined,
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
    apLead: undefined,
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
    apLead: undefined,
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
