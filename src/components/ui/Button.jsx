export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  download,
  type,
  disabled,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'
  const styles = {
    primary: 'bg-accent text-base hover:bg-accent/90',
    ghost:
      'border border-line text-ink hover:border-ink-dim hover:bg-surface',
  }

  const cls = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} download={download} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}