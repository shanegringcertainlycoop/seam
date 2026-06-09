// Team content now lives in the SEAM Marketing Sanity studio (project 2gezu0mx).
// Fetch with getTeam() from ../lib/sanity. This module keeps the shared type only.
export interface TeamMember {
  slug: string
  name: string
  role: string
  bio: string
  image: string
  /** CSS object-position for the card thumbnail. Defaults to 'top'. Use 'center 30%' etc. when the source crop is too tight and the headshot looks like a floating head. */
  imagePosition?: string
  linkedIn?: string
}
