import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-ink-dim sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex items-center gap-6">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-ink"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}