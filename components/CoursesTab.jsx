import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpenText, GraduationCap, ArrowRight } from 'lucide-react'
import { createRipple } from '../utils/ripple.js'
import { ugProgrammes, pgProgrammes } from '../data/programmes.js'

const levels = [
  {
    to: '/programmes/ug',
    icon: BookOpenText,
    title: 'UG Programmes',
    count: ugProgrammes.length,
  },
  {
    to: '/programmes/pg',
    icon: GraduationCap,
    title: 'PG Programmes',
    count: pgProgrammes.length,
  },
]

export default function CoursesTab() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  const toggleOnClick = () => setOpen((v) => !v)

  // Close on outside tap — mainly for touch devices, which have no hover.
  useEffect(() => {
    if (!open) return
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [open])

  return (
    <div
      ref={containerRef}
      /* pointer-events-none: this wrapper is an invisible box pinned over the left
         edge of the page. Without it, the wrapper swallows clicks meant for the
         content underneath (the About Us sidebar). Children opt back in below. */
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex items-center pointer-events-none"
    >
      {/* Sticky vertical side tab */}
      <button
        onClick={toggleOnClick}
        onMouseDown={createRipple}
        aria-label="Open courses list"
        aria-expanded={open}
        className="btn-shine glass-btn-solid pointer-events-auto text-sm tracking-wide px-2 py-4
                   rounded-r-2xl rounded-l-none [writing-mode:vertical-rl] rotate-180
                   transition-[padding] duration-500 ease-out hover:pl-3"
      >
        Courses
      </button>

      {/* Flyout panel */}
      <div
        className={`ml-2 glass-strong rounded-[22px] p-3 w-64 origin-left
                    transition-all duration-500 ease-out
                    ${open
                      ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
                      : 'opacity-0 -translate-x-3 scale-95 pointer-events-none'}`}
      >
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide px-2 mb-2">
          Our Programmes
        </p>
        {levels.map(({ to, icon: Icon, title, count }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/50 transition-colors duration-350 group"
          >
            <div className="w-11 h-11 rounded-full glass text-navy-800 flex items-center justify-center shrink-0 group-hover:bg-navy-800/90 group-hover:text-white transition-colors duration-350">
              <Icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-navy-800 text-sm">{title}</p>
              <p className="text-xs text-slate-500">
                {count} programme{count !== 1 ? 's' : ''}
              </p>
            </div>
            <ArrowRight size={14} className="text-slate-300 group-hover:text-navy-800 transition-colors duration-350 shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  )
}