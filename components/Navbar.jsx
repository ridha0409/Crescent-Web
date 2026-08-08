import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, ArrowRight, Menu, X } from 'lucide-react'
import { createRipple } from '../utils/ripple.js'

const links = [
  { label: 'Home', href: '/' },
  {
    label: 'Programmes',
    href: '/#programmes',
    dropdown: [
      {
        label: 'UG Programme',
        submenu: [
          { label: 'BA Islamic Studies', to: '/programmes/ba-islamic-studies' },
        ],
      },
      {
        label: 'PG Programme',
        submenu: [
          { label: 'MBA', to: '/programmes/mba' },
          { label: 'MCA', to: '/programmes/mca' },
        ],
      },
    ],
  },
  { label: 'Facilities', href: '/#facilities' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact Us', href: '/#footer' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSub, setActiveSub] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-5">
      <div className="container-xl !px-0">
        <div className="glass-strong rounded-[24px] px-4 sm:px-6 flex items-center justify-between py-2.5">
          <Link to="/" className="flex items-center gap-3">
            <img
  src="/src/assets/crescent-logo.png"
  alt="Crescent Institute of Science & Technology"
  className="h-12 w-auto object-contain"
/>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpen(true)}
                onMouseLeave={() => {
                  if (link.dropdown) {
                    setOpen(false)
                    setActiveSub(null)
                  }
                }}
              >
                <a
                  href={link.href}
                  className="relative flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-navy-800 transition-colors duration-350 py-2"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gold rounded-full transition-all duration-350 group-hover:w-full" />
                </a>

                {link.dropdown && open && (
                  <div className="absolute top-full left-0 pt-3 w-56 animate-fade-in-up">
                    <div className="glass-strong rounded-2xl py-2 shadow-glass-lg">
                      {link.dropdown.map((item) =>
                        item.submenu ? (
                          <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() => setActiveSub(item.label)}
                          >
                            <div className="flex items-center justify-between px-4 py-2 text-sm text-slate-600 hover:bg-white/60 hover:text-navy-800 transition-colors duration-350 cursor-default">
                              {item.label}
                              <ChevronRight size={14} />
                            </div>

                            {activeSub === item.label && (
                              <div className="absolute top-0 left-full pl-2 w-52 animate-fade-in-up">
                                <div className="glass-strong rounded-2xl py-2 shadow-glass-lg">
                                  {item.submenu.map((sub) => (
                                    <Link
                                      key={sub.to}
                                      to={sub.to}
                                      className="block px-4 py-2 text-sm text-slate-600 hover:bg-white/60 hover:text-navy-800 transition-colors duration-350"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-white/60 hover:text-navy-800 transition-colors duration-350"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <a
            href="/#programmes"
            onMouseDown={createRipple}
            className="btn-shine glass-btn-solid hidden lg:inline-flex text-sm px-5 py-2.5"
          >
            Apply Now <ArrowRight size={15} />
          </a>

          <button className="lg:hidden text-navy-800" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl px-5 py-4 space-y-3 animate-fade-in-up">
            {links.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <p className="text-sm font-medium text-slate-700 mb-1">{link.label}</p>
                  <div className="pl-3 space-y-2">
                    {link.dropdown.map((item) =>
                      item.submenu ? (
                        <div key={item.label}>
                          <p className="text-sm text-slate-600">{item.label}</p>
                          <div className="pl-3 space-y-1">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                className="block text-sm text-slate-500 py-1"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="block text-sm text-slate-500 py-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <a key={link.label} href={link.href} className="block text-sm font-medium text-slate-700">
                  {link.label}
                </a>
              )
            )}
            <a
              href="/#programmes"
              onMouseDown={createRipple}
              className="btn-shine glass-btn-solid text-sm px-5 py-2.5 w-full"
            >
              Apply Now <ArrowRight size={15} />
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
