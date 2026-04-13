import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { PHONE, PHONE_LINK } from '../constants'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/smart-syllabus-assistant', label: 'Product' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path)

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Limes Digital" className="h-10" width={160} height={40} />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors ${
                  isActive(l.to)
                    ? 'text-lime-700'
                    : 'text-slate-600 hover:text-lime-700'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 text-sm font-medium text-lime-700 bg-lime-50 px-4 py-2 rounded-lg hover:bg-lime-100 transition-colors"
            >
              <Phone size={16} />
              {PHONE}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 pt-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive(l.to) ? 'text-lime-700' : 'text-slate-600'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 mt-2 text-sm font-medium text-lime-700"
            >
              <Phone size={16} />
              {PHONE}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
