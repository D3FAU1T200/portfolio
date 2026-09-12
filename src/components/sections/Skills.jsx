import { motion, useReducedMotion } from 'framer-motion'
import { exploring, skillGroups } from '../../data/profile'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative scroll-mt-24 border-t border-line"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            variants={item}
            className="flex items-center justify-between gap-4 font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase"
          >
            <span className="text-accent">Skills / 04</span>
            <span className="hidden sm:block">Toolkit</span>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-10 max-w-4xl font-display text-[clamp(2rem,5.5vw,4rem)] leading-[0.92] font-bold tracking-tight text-ink uppercase"
          >
            Tools{' '}
            <span className="font-serif font-normal tracking-normal text-accent normal-case italic">
              of the trade
            </span>
            <span
              aria-hidden="true"
              className="ml-[0.06em] inline-block h-[0.1em] w-[0.1em] bg-accent align-baseline"
            />
          </motion.h2>
        </motion.div>

        <motion.ul
          variants={reduce ? undefined : stagger}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12"
        >
          {skillGroups.map((category) => (
            <motion.li
              key={category.title}
              variants={item}
              className={`h-full ${category.span}`}
            >
              <article className="group h-full rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/30 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase transition-colors duration-300 group-hover:text-accent">
                    ({category.index})
                  </span>
                  <span className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase">
                    {category.skills.length} skills
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink">
                  {category.title}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex items-center rounded-full border border-line bg-surface-2 px-3 py-1.5 font-mono text-xs text-ink-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={reduce ? undefined : item}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 rounded-2xl border border-line bg-surface p-8 sm:p-10"
        >
          <div className="flex items-center justify-between gap-4 font-mono text-[0.7rem] tracking-[0.25em] uppercase">
            <h3 className="text-accent">Currently Exploring</h3>
            <span className="hidden text-ink-dim sm:block">Learning now</span>
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {exploring.map((tech) => (
              <li key={tech.name} className="group">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150"
                  />
                  <span className="font-display text-lg font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                    {tech.name}
                  </span>
                </div>
                <p className="mt-2 pl-[1.125rem] text-sm leading-relaxed text-ink-dim">
                  {tech.note}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
