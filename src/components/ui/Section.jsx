import { Reveal } from './Reveal'

export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 sm:py-32 ${className}`}
    >
      <Reveal>
        {eyebrow && (
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
        )}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}