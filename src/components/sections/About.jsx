import { motion, useReducedMotion } from 'framer-motion'
import { about, profile } from '../../data/profile'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export function About() {
  const reduce = useReducedMotion()

  return (
    <section
      id="about"
      aria-label="About"
      className="relative scroll-mt-24 border-t border-line"
    >
      <motion.div
        variants={reduce ? undefined : container}
        initial={reduce ? false : 'hidden'}
        whileInView={reduce ? undefined : 'show'}
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
      >
        <motion.div
          variants={item}
          className="flex items-center justify-between gap-4 font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase"
        >
          <span className="text-accent">About / 01</span>
          <span className="hidden sm:block">Full Stack — UI/UX</span>
        </motion.div>

        <motion.h2
          variants={item}
          className="mt-10 max-w-4xl font-display text-[clamp(2rem,5.5vw,4rem)] leading-[0.92] font-bold tracking-tight text-ink uppercase"
        >
          The person{' '}
          <span className="font-serif font-normal tracking-normal text-accent normal-case italic">
            behind
          </span>{' '}
          the work
          <span
            aria-hidden="true"
            className="ml-[0.06em] inline-block h-[0.1em] w-[0.1em] bg-accent align-baseline"
          />
        </motion.h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.p
              variants={item}
              className="text-xl leading-relaxed text-ink sm:text-2xl"
            >
              {about.intro}
            </motion.p>
            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-3"
            >
              <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
              <span className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase">
                {profile.name}
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              variants={item}
              className="space-y-4 text-base leading-relaxed text-ink-dim"
            >
              {about.story.map((sentence) => (
                <p key={sentence}>{sentence}</p>
              ))}
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
            >
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface px-6 py-6 transition-colors duration-200 hover:bg-surface-2"
                >
                  <dt className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-3 font-display text-4xl font-bold tracking-tight text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
