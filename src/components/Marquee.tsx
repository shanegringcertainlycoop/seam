/**
 * Infinite horizontal scrolling marquee — editorial-style divider.
 * Pure CSS animation, no JS.
 */
export default function Marquee({
  items,
  speed = 30,
  separator = '\u00A0\u00A0\u2022\u00A0\u00A0',
}: {
  items: string[]
  speed?: number
  separator?: string
}) {
  const text = items.join(separator)
  // Duplicate so the loop is seamless
  const doubled = `${text}${separator}${text}${separator}`

  return (
    <div className="overflow-hidden py-6 bg-warm-50 border-y border-warm-100">
      <div
        className="marquee-track whitespace-nowrap"
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        <span className="inline-block font-display text-[clamp(1rem,2vw,1.5rem)] tracking-[-0.01em] text-warm-300 select-none">
          {doubled}
        </span>
      </div>
    </div>
  )
}
