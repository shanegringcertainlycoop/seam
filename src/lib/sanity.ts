import { createClient } from '@sanity/client'
import { ptToBody } from './pt-to-body'
import type { BlogPost } from '../data/blog'
import type {
  SeamAP,
  CertifiedProject,
  MemberOrg,
  ApprovedActivity,
} from '../data/directory'
import type { TeamMember } from '../data/team'

/**
 * Marketing content source. Content is authored in the SEAM Marketing studio
 * (project 2gezu0mx) and fetched per request so published edits appear live.
 *
 * The studio stores rich text as Portable Text; `ptToBody` serializes it back
 * to the exact markdown-ish string the existing page renderers already parse,
 * so templates render unchanged.
 */
// Read token is required: the project serves documents only to authenticated
// reads. It is server-only (never PUBLIC_), so it never reaches the browser —
// all fetches here run during SSR / build. Set SANITY_READ_TOKEN in the env
// (.env.local locally, Netlify env in production).
// Read process.env FIRST so the Netlify function picks the token up at request
// time. import.meta.env is resolved by Vite at build, so a value that only
// exists in the runtime environment gets inlined as undefined otherwise.
const token =
  process.env.SANITY_READ_TOKEN ?? import.meta.env.SANITY_READ_TOKEN ?? undefined

export const sanity = createClient({
  projectId:
    process.env.SANITY_PROJECT_ID ?? import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '2gezu0mx',
  dataset:
    process.env.SANITY_DATASET ?? import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
})

// ── GROQ projections (shapes match SEAM/src/data interfaces) ─────────────────
const POST = `{
  "slug": slug.current, title, excerpt, category, author, "date": date,
  readTime, featured, "image": { "src": image.asset->url, "alt": image.alt }, body
}`
const AP = `{
  "slug": slug.current, name, "photo": photo.asset->url, title, organization,
  location, specialties, bio, credentials, membershipTier, roles, linkedIn, website,
  dateCredentialed, projectsLed
}`
const ORG = `{
  "slug": slug.current, name, "logo": logo.asset->url, tier, description, location,
  website, sectors
}`
const PROJECT = `{
  "slug": slug.current, name, "image": image.asset->url, location, certificationLevel,
  ratingSystem, description, completionDate, size, owner, highlights,
  "apLead": apLead->slug.current,
  "blogPost": select(defined(blogPost) => "/resources/blog/" + blogPost->slug.current),
  website
}`
const ACTIVITY = `{
  "slug": slug.current, name, organization, category, pillar, description,
  dateApproved, location
}`
const TEAM = `{
  "slug": slug.current, name, role, bio, "image": image.asset->url, imagePosition,
  linkedIn, order
}`

// ── Getters (per-request fetch + shape mapping) ──────────────────────────────
export async function getPosts(): Promise<BlogPost[]> {
  const rows = await sanity.fetch<any[]>(`*[_type=="blogPost"]|order(date desc)${POST}`)
  return rows.map((p) => ({
    ...p,
    image: p.image?.src ? p.image : undefined,
    body: ptToBody(p.body),
  }))
}

export async function getSeamAPs(): Promise<SeamAP[]> {
  return sanity.fetch(`*[_type=="seamAP"]|order(name asc)${AP}`)
}

export async function getMemberOrgs(): Promise<MemberOrg[]> {
  return sanity.fetch(`*[_type=="memberOrg"]|order(name asc)${ORG}`)
}

export async function getCertifiedProjects(): Promise<CertifiedProject[]> {
  return sanity.fetch(`*[_type=="certifiedProject"]|order(name asc)${PROJECT}`)
}

export async function getApprovedActivities(): Promise<ApprovedActivity[]> {
  return sanity.fetch(`*[_type=="approvedActivity"]|order(name asc)${ACTIVITY}`)
}

export async function getTeam(): Promise<TeamMember[]> {
  const rows = await sanity.fetch<any[]>(`*[_type=="teamMember"]|order(order asc)${TEAM}`)
  return rows.map((t) => ({ ...t, bio: ptToBody(t.bio) }))
}
