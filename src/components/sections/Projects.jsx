import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../../data/profile'
import { Button } from '../ui/Button'
import { Tag } from '../ui/Tag'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const fromLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

const fromRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
}

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10L10 4M10 4H5M10 4v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GitHubMark() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

function ProjectVisual({ project }) {
  return (
    <div
      aria-hidden="true"
      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-2 to-base transition-colors duration-300 group-hover:border-accent/40"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,black,transparent)]" />
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <span className="absolute bottom-2 left-5 font-display text-[7rem] leading-none font-bold text-ink/[4%] select-none">
        {project.index}
      </span>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/40 transition-transform duration-700 group-hover:rotate-45">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </div>
      </div>
      <span className="absolute top-5 left-5 font-mono text-[0.65rem] tracking-[0.3em] text-ink-dim uppercase">
        Visual placeholder
      </span>
      <span className="absolute top-5 right-5 font-mono text-[0.65rem] tracking-[0.3em] text-ink-dim uppercase">
        {project.kind}
      </span>
    </div>
  )
}

function ProjectContent({ project }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.7rem] tracking-[0.25em] text-accent uppercase">
          ({project.index})
        </span>
        <span className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase">
          Featured
        </span>
      </div>

      <h3
        id={`project-${project.index}`}
        className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
      >
        {project.title}
      </h3>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink">
        {project.summary}
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase">
            The Problem
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-ink-dim">
            {project.problem}
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase">
            The Solution
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-ink-dim">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase">
          The Impact
        </h4>
        <ul className="mt-3 space-y-2.5">
          {project.impact.map((entry) => (
            <li
              key={entry}
              className="flex items-start gap-3 text-sm leading-relaxed text-ink-dim"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 bg-accent"
              />
              {entry}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase">
          Technologies
        </h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <Button href={project.github} variant="ghost">
          <GitHubMark />
          GitHub
        </Button>
        <Button href={project.demo}>
          Live Demo
          <ArrowUpRight />
        </Button>
      </div>
    </>
  )
}

export function Projects() {
  const reduce = useReducedMotion()

  return (
    <section
      id="projects"
      aria-label="Projects"
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
            <span className="text-accent">Projects / 03</span>
            <span className="hidden sm:block">Selected work</span>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-10 max-w-4xl font-display text-[clamp(2rem,5.5vw,4rem)] leading-[0.92] font-bold tracking-tight text-ink uppercase"
          >
            Selected{' '}
            <span className="font-serif font-normal tracking-normal text-accent normal-case italic">
              work
            </span>
            <span
              aria-hidden="true"
              className="ml-[0.06em] inline-block h-[0.1em] w-[0.1em] bg-accent align-baseline"
            />
          </motion.h2>
        </motion.div>

        <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-32">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1
            return (
              <motion.article
                key={project.title}
                aria-labelledby={`project-${project.index}`}
                variants={reduce ? undefined : container}
                initial={reduce ? false : 'hidden'}
                whileInView={reduce ? undefined : 'show'}
                viewport={{ once: true, margin: '-120px' }}
                className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <motion.div
                  variants={
                    reduce ? undefined : reversed ? fromRight : fromLeft
                  }
                  className={`lg:col-span-6 ${
                    reversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ProjectVisual project={project} />
                </motion.div>

                <motion.div
                  variants={reduce ? undefined : item}
                  className={`lg:col-span-6 ${
                    reversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <ProjectContent project={project} />
                </motion.div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
