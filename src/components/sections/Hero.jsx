import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/profile'
import { Button } from '../ui/Button'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const headline = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const line = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
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

function Download() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 1v8m0 0l3-3m-3 3L5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 11.5v1A1.5 1.5 0 004 14h8a1.5 1.5 0 001.5-1.5v-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const animate = reduce ? undefined : 'show'

  return (
    <section
      id="hero"
      aria-label="Intro"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_72%_8%,rgba(212,175,55,0.09),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <motion.div
          className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/5 blur-3xl"
          animate={reduce ? {} : { x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[-12%] right-[-8%] hidden h-[132%] w-[48%] rotate-[-8deg] border-l border-accent/25 bg-gradient-to-br from-surface-2 to-base lg:block"
      />

      <motion.div
        variants={reduce ? undefined : container}
        initial={reduce ? false : 'hidden'}
        animate={animate}
        className="relative flex flex-1 flex-col"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 pt-24 font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase sm:px-10">
          <motion.span variants={item}>Portfolio — Vol. 01</motion.span>
          <motion.span variants={item} className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for work
          </motion.span>
        </div>

        <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p variants={item} className="mb-6 text-sm text-ink-dim">
              (hello, I&apos;m{' '}
              <span className="text-ink">{profile.name}</span>)
            </motion.p>

            <motion.h1
              variants={headline}
              className="font-display text-[clamp(2.75rem,8.5vw,7rem)] leading-[0.88] font-bold tracking-tight text-ink uppercase"
            >
              <motion.span variants={line} className="block">
                Full Stack
              </motion.span>
              <motion.span
                variants={line}
                className="block font-serif font-normal tracking-normal text-accent normal-case italic"
              >
                developer
              </motion.span>
              <motion.span variants={line} className="block">
                &amp; UI/UX Designer
                <span className="ml-[0.08em] inline-block h-[0.12em] w-[0.12em] bg-accent align-baseline" />
              </motion.span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-md text-base leading-relaxed text-ink-dim"
            >
              {profile.tagline} I design and ship end-to-end products — from the
              database to the last pixel.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="#projects">
                View Projects
                <ArrowUpRight />
              </Button>
              <Button href={profile.resumeUrl} variant="ghost" download>
                <Download />
                Download Resume
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="relative hidden h-[62vh] items-center justify-center lg:col-span-5 lg:flex"
          >
            <span className="pointer-events-none absolute font-display text-[11rem] leading-none font-bold text-ink/[3%] select-none">
              MT
            </span>
            <svg
              viewBox="0 0 420 420"
              aria-hidden="true"
              className="h-full w-full max-w-[26rem] animate-spin-slow text-accent/25"
            >
              <circle
                cx="210"
                cy="210"
                r="200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="2 12"
              />
              <circle
                cx="210"
                cy="210"
                r="150"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="1 8"
                className="text-ink/15"
              />
            </svg>
            <div
              aria-hidden="true"
              className="absolute h-44 w-44 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="absolute flex h-24 w-24 items-center justify-center rounded-full border border-accent/40">
              <div className="h-3 w-3 rounded-full bg-accent" />
            </div>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[0.65rem] tracking-[0.5em] text-ink-dim uppercase [writing-mode:vertical-rl]">
              Full Stack — UI/UX — 2026
            </span>
          </motion.div>
        </div>

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 pb-10 font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase sm:px-10">
          <motion.span variants={item}>Mohammed Taha — 2026</motion.span>
          <motion.span variants={item} className="hidden sm:block">
            React / Node / TypeScript / Figma
          </motion.span>
        </div>
      </motion.div>
    </section>
  )
}