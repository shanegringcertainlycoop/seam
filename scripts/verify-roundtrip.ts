/**
 * Proof that the seed conversion + ptToBody serializer are exact inverses:
 * for every seeded doc, serialize its Portable Text back and compare to the
 * original src/data string. Any diff means rendering would change.
 *
 *   npx tsx scripts/verify-roundtrip.ts
 */
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ptToBody } from '../src/lib/pt-to-body'
import { posts } from '../src/data/blog'
import { team } from '../src/data/team'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ndjson = resolve(__dirname, '../../studio-seam-marketing/scripts/seed.ndjson')
const docs = readFileSync(ndjson, 'utf8')
  .trim()
  .split('\n')
  .map((l) => JSON.parse(l))
const byId = new Map(docs.map((d) => [d._id, d]))

// Rendering equivalence: identical visible text (tags stripped) AND identical
// set of links. Tolerant of cosmetic <a> attribute order and <em> tag grouping,
// which render the same via set:html, but catches any lost/changed text or link.
const visibleText = (s: string) => s.replace(/<\/?(?:a|em)\b[^>]*>/g, '')
const hrefs = (s: string) =>
  [...s.matchAll(/href="([^"]*)"/g)].map((m) => m[1]).sort().join('|')

let fail = 0
const check = (id: string, original: string, label: string) => {
  const doc = byId.get(id)
  if (!doc) {
    console.error(`MISSING ${id}`)
    fail++
    return
  }
  const field = id.startsWith('teamMember') ? doc.bio : doc.body
  const got = ptToBody(field)
  const textOk = visibleText(got) === visibleText(original)
  const linksOk = hrefs(got) === hrefs(original)
  if (!textOk || !linksOk) {
    fail++
    console.error(`\n✗ MISMATCH ${label} (${id}) — ${!textOk ? 'text' : ''} ${!linksOk ? 'links' : ''}`)
    if (!textOk) {
      const a = visibleText(original).split('\n')
      const b = visibleText(got).split('\n')
      for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if (a[i] !== b[i]) {
          console.error(`  line ${i}:\n    orig: ${JSON.stringify(a[i])}\n    got:  ${JSON.stringify(b[i])}`)
          break
        }
      }
    }
    if (!linksOk) {
      console.error(`  orig links: ${hrefs(original)}`)
      console.error(`  got links:  ${hrefs(got)}`)
    }
  }
}

for (const p of posts) check(`blogPost.${p.slug}`, p.body, `blog "${p.title}"`)
for (const t of team) check(`teamMember.${t.slug}`, t.bio, `team "${t.name}"`)

console.log(
  `\n${fail === 0 ? '✓ ALL CLEAN' : `✗ ${fail} mismatch(es)`} — ${posts.length} posts + ${team.length} bios checked`,
)
process.exit(fail === 0 ? 0 : 1)
