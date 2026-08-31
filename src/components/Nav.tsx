import { useState } from 'react'
import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons/SocialIcons'
import { MenuIcon, CloseIcon } from './icons/MenuIcons'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Education' },
  { href: '#skills', label: 'Skills' },
]

const sectionIds = links.map((link) => link.href.slice(1))

const socials = [
  {
    href: 'https://www.linkedin.com/in/alejandro-torres-2b2a5a367/',
    label: 'LinkedIn',
    Icon: LinkedInIcon,
  },
  {
    href: 'https://github.com/atorres502',
    label: 'GitHub',
    Icon: GitHubIcon,
  },
  {
    href: 'mailto:talejandro502@gmail.com',
    label: 'Email',
    Icon: EmailIcon,
  },
]

function Nav() {
  const active = useActiveSection(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a
          href="#about"
          className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100"
          onClick={() => setMenuOpen(false)}
        >
          Alejandro Torres
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    isActive
                      ? 'relative pb-1 text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-indigo-600 dark:text-indigo-400 dark:after:bg-indigo-400'
                      : 'relative pb-1 text-slate-600 transition after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-slate-900 after:transition-all after:duration-300 hover:text-slate-900 hover:after:w-full dark:text-slate-400 dark:after:bg-slate-100 dark:hover:text-slate-100'
                  }
                >
                  {link.label}
                </a>
              </li>
            )
          })}
          {socials.map(({ href, label, Icon }) => {
            const isExternal = !href.startsWith('mailto:')
            return (
              <li key={href}>
                <a
                  href={href}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={label}
                  className="block text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="text-slate-600 md:hidden dark:text-slate-400"
        >
          {menuOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 px-6 py-6 md:hidden dark:border-slate-800">
          <ul className="flex flex-col gap-4 text-sm">
            {links.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={
                      isActive
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="mt-6 flex gap-6">
            {socials.map(({ href, label, Icon }) => {
              const isExternal = !href.startsWith('mailto:')
              return (
                <a
                  key={href}
                  href={href}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  aria-label={label}
                  className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav
