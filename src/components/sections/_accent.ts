// SEAM headings use a mid-sentence italic accent (e.g. "Turn the work into
// *a recognized mark.*"). Authors wrap the accented words in *asterisks*; this
// renders them as the signature italic seam-tone emphasis.
export function accent(text: string | undefined, tone = 'seam-600'): string {
  if (!text) return ''
  const esc = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return esc.replace(
    /\*([^*]+)\*/g,
    `<em class="italic font-normal text-${tone}">$1</em>`,
  )
}
