// Directory content now lives in the SEAM Marketing Sanity studio (project 2gezu0mx).
// Fetch with getSeamAPs / getCertifiedProjects / getMemberOrgs / getApprovedActivities
// from ../lib/sanity. This module keeps the shared types and the static filter enums.

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
  credentials: 'SEAM AP' | 'SEAM AP+' | 'Member'
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
  certificationLevel: 'Pursuing' | 'Seal' | 'Pre-certification' | 'Bronze' | 'Silver' | 'Gold' | 'Platinum'
  ratingSystem:
    | 'Buildings + Interiors'
    | 'Operations + Maintenance'
    | 'Community Development Seal'
    | 'Ethical Procurement Seal'
  description: string
  completionDate: string
  size: string
  owner: string
  highlights: string[]
  apLead?: string
  blogPost?: string
  website?: string
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

/* ─── Static filter enums (UI) ─── */

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
  'Seal',
  'Pre-certification',
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
] as const

export const ratingSystems = [
  'All',
  'Buildings + Interiors',
  'Operations + Maintenance',
  'Community Development Seal',
  'Ethical Procurement Seal',
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
