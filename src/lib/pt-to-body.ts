/**
 * Portable Text → markdown-ish string. Inverse of the seed converter in
 * studio-seam-marketing/scripts/seed-from-marketing.ts, producing exactly the
 * format the marketing page renderers parse (## h2, **bold**, <a>, <em>,
 * - bullets, N. numbered). Pure — no Astro/Sanity deps, so it is unit-testable.
 */
type Span = { _type: string; text?: string; marks?: string[] }
type MarkDef = { _key: string; _type: string; href?: string; newTab?: boolean }
export type PtBlock = {
  _type: string
  style?: string
  listItem?: 'bullet' | 'number'
  markDefs?: MarkDef[]
  children?: Span[]
}

function spanToText(span: Span, markDefs: MarkDef[]): string {
  let t = span.text ?? ''
  for (const mark of span.marks ?? []) {
    if (mark === 'strong') {
      t = `**${t}**`
    } else if (mark === 'em') {
      t = `<em>${t}</em>`
    } else {
      const def = markDefs.find((d) => d._key === mark)
      if (def?._type === 'link' && def.href) {
        const attrs = def.newTab ? ' target="_blank" rel="noopener noreferrer"' : ''
        t = `<a href="${def.href}"${attrs}>${t}</a>`
      }
    }
  }
  return t
}

const blockText = (b: PtBlock): string =>
  (b.children ?? []).map((c) => spanToText(c, b.markDefs ?? [])).join('')

export function ptToBody(blocks?: PtBlock[]): string {
  if (!blocks?.length) return ''
  const paras: string[] = []
  let listBuf: string[] = []
  let listKind: 'bullet' | 'number' | null = null

  const flush = () => {
    if (!listBuf.length) return
    if (listKind === 'number') {
      paras.push(listBuf.map((l, i) => `${i + 1}. ${l}`).join('\n'))
    } else {
      paras.push(listBuf.map((l) => `- ${l}`).join('\n'))
    }
    listBuf = []
    listKind = null
  }

  for (const b of blocks) {
    if (b._type !== 'block') continue
    if (b.listItem === 'bullet' || b.listItem === 'number') {
      if (listKind && listKind !== b.listItem) flush()
      listKind = b.listItem
      listBuf.push(blockText(b))
      continue
    }
    flush()
    const text = blockText(b)
    paras.push(b.style === 'h2' ? `## ${text}` : text)
  }
  flush()
  return paras.join('\n\n')
}
