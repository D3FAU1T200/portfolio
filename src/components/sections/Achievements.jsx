import { motion, useReducedMotion } from 'framer-motion'
import { Tag } from '../ui/Tag'

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
  show: { transition: { staggerChildren: 0.1 } },
}

const cards = [
  {
    index: '(01)',
    title: 'Competitive Programming',
    metric: '500+',
    description:
      'Problems solved across Codeforces, LeetCode, and CodeChef, with a peak contest rating in the top tier.',
    tags: ['Codeforces', 'LeetCode', 'CodeChef'],
  },
  {
    index: '(02)',
    title: 'DSA / Problem Solving',
    metric: 'Top 5%',
    description:
      'A strong foundation in data structures and algorithms — dynamic programming, graphs, and complexity analysis.',
    tags: ['Algorithms', 'Data Structures', 'System Design'],
  },
  {
    index: '(03)',
    title: 'Hackathons & Certifications',
    metric: '6 Wins',
    description:
      'Winner and finalist across national hackathons, backed by certifications in cloud and frontend engineering.',
    tags: ['Hackathons', 'Cloud', 'Frontend'],
  },
]

const milestones = [
  {
    year: '2022',
    title: 'First Contest',
    text: 'Placeholder milestone — started competitive programming and solved the first 100 problems.',
  },
  {
    year: '2024',
    title: 'National Finalist',
    text: 'Placeholder milestone — reached the finals of a national-level hackathon.',
  },
  {
    year: '2026',
    title: 'Certified & Shipping',
    text: 'Placeholder milestone — earned cloud certifications and shipped production work.',
  },
]

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 11L11 5M11 5H6M11 5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Achievements() {
  const reduce = useReducedMotion()

  return (
    <section
      id="achievements"
      aria-label="Achievements"
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
          <span className="text-accent">Achievements / 02</span>
          <span className="hidden sm:block">Track record</span>
        </motion.div>

        <motion.h2
          variants={item}
          className="mt-10 max-w-4xl font-display text-[clamp(2rem,5.5vw,4rem)] leading-[0.92] font-bold tracking-tight text-ink uppercase"
        >
          The record{' '}
          <span className="font-serif font-normal tracking-normal text-accent normal-case italic">
            so far
          </span>
          <span
            aria-hidden="true"
            className="ml-[0.06em] inline-block h-[0.1em] w-[0.1em] bg-accent align-baseline"
          />
        </motion.h2>

        <motion.ul
          variants={reduce ? undefined : stagger}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <motion.li key={card.title} variants={item} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-2 sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase transition-colors duration-300 group-hover:text-accent">
                    {card.index}
                  </span>
                  <span className="text-ink-dim transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">
                    <ArrowUpRight />
                  </span>
                </div>

                <p className="mt-10 font-display text-4xl font-bold tracking-tight text-ink">
                  {card.metric}
                </p>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                  {card.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={item}
          className="mt-20 flex items-center justify-between gap-4 font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase"
        >
          <span>Timeline</span>
          <span className="hidden sm:block">2022 — Present</span>
        </motion.div>

        <div className="relative mt-10">
          <span
            aria-hidden="true"
            className="absolute top-[5px] right-0 left-0 hidden h-px bg-line md:block"
          />
          <motion.ol
            variants={reduce ? undefined : stagger}
            className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8"
          >
            {milestones.map((milestone, index) => (
              <motion.li
                key={milestone.title}
                variants={item}
                className="relative pl-10 md:pl-0"
              >
                {index < milestones.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-3 left-[4px] h-[calc(100%+2.5rem)] w-px bg-line md:hidden"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute top-0.5 left-0 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full border border-accent/50 bg-base md:static md:mb-6 md:flex"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" />
                </span>
                <p className="font-mono text-[0.7rem] tracking-[0.25em] text-accent uppercase">
                  {milestone.year}
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                  {milestone.text}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </motion.div>
    </section>
  )
}