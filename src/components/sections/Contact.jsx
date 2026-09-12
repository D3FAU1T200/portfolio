import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../../data/profile'
import { Button } from '../ui/Button'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbgjvrlp'

const ease = [0.16, 1, 0.3, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const field =
  'mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-ink-dim/50 focus:border-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40'

const label =
  'font-mono text-[0.7rem] tracking-[0.25em] text-ink-dim uppercase'

const statusMessage = {
  idle: 'I will get back to you in 24 hours.',
  loading: 'Sending your message…',
  success: 'Thanks — your message has been sent.',
  error: 'Something went wrong. Please try again, or email me directly.',
}

const statusColor = {
  idle: 'text-ink-dim',
  loading: 'text-ink-dim',
  success: 'text-accent',
  error: 'text-red-400',
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

function Spinner() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.25"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function stripProtocol(url) {
  return url.replace(/^https?:\/\//, '')
}

export function Contact() {
  const reduce = useReducedMotion()
  const [status, setStatus] = useState('idle')

  const linkedin = profile.socials.find((social) => social.label === 'LinkedIn')
  const github = profile.socials.find((social) => social.label === 'GitHub')

  const details = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    linkedin && {
      label: 'LinkedIn',
      value: stripProtocol(linkedin.url),
      href: linkedin.url,
      external: true,
    },
    github && {
      label: 'GitHub',
      value: stripProtocol(github.url),
      href: github.url,
      external: true,
    },
    {
      label: 'Location',
      value: profile.location,
    },
  ].filter(Boolean)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('loading')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact"
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
          <span className="text-accent">Contact / 05</span>
          <span className="hidden sm:block">Say hello</span>
        </motion.div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div variants={item}>
            <h2 className="max-w-xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95] font-bold tracking-tight text-ink uppercase">
              Let&apos;s build something{' '}
              <span className="font-serif font-normal tracking-normal text-accent normal-case italic">
                meaningful
              </span>
              <span
                aria-hidden="true"
                className="ml-[0.06em] inline-block h-[0.1em] w-[0.1em] bg-accent align-baseline"
              />
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-dim">
              I&apos;m open to freelance projects, full-time roles, and
              collaborations worth building. Share what you&apos;re working on
              and I&apos;ll reply within a day or two.
            </p>

            <ul className="mt-10">
              {details.map((detail) => (
                <li
                  key={detail.label}
                  className="border-t border-line last:border-b"
                >
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.external ? '_blank' : undefined}
                      rel={detail.external ? 'noreferrer' : undefined}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className={label}>{detail.label}</span>
                      <span className="flex items-center gap-2 text-sm text-ink-dim transition-colors duration-200 group-hover:text-accent">
                        {detail.value}
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight />
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-between gap-4 py-4">
                      <span className={label}>{detail.label}</span>
                      <span className="text-sm text-ink-dim">
                        {detail.value}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <form
              onSubmit={handleSubmit}
              aria-busy={status === 'loading'}
              className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={label}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={label}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className={label}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className={`${field} resize-none`}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto"
                >
                  {status === 'loading' ? (
                    <>
                      Sending...
                      <Spinner />
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowUpRight />
                    </>
                  )}
                </Button>
                <p
                  role={status === 'error' ? 'alert' : 'status'}
                  aria-live={status === 'error' ? 'assertive' : 'polite'}
                  className={`text-xs ${statusColor[status]}`}
                >
                  {statusMessage[status]}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
