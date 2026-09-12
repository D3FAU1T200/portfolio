export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-ink-dim">
      {children}
    </span>
  )
}