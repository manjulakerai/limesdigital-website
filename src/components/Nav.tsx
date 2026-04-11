import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lime-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LD</span>
            </div>
            <span className="text-xl font-semibold text-slate-800">
              Limes Digital
            </span>
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
              href="tel:0478922177"
              className="flex items-center gap-2 text-sm font-medium text-lime-700 bg-lime-50 px-4 py-2 rounded-lg hover:bg-lime-100 transition-colors"
            >
              <Phone size={16} />
              0478 922 177
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-600"
            onClick={() => setOpen(!open)}
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
              href="tel:0478922177"
              className="flex items-center gap-2 mt-2 text-sm font-medium text-lime-700"
            >
              <Phone size={16} />
              0478 922 177
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
