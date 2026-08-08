import { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, GraduationCap, Users, BookOpenText, ArrowRight } from 'lucide-react'
import { createRipple } from '../utils/ripple.js'

const courses = [
  {
    to: '/programmes/mba',
    icon: GraduationCap,
    title: 'MBA',
    subtitle: 'Master of Business Administration',
    duration: '2 Years',
  },
  {
    to: '/programmes/mca',
    icon: Users,
    title: 'MCA',
    subtitle: 'Master of Computer Applications',
    duration: '2 Years',
  },
  {
    to: '/programmes/ba-islamic-studies',
    icon: BookOpenText,
    title: 'BA Islamic Studies',
    subtitle: 'Bachelor of Arts in Islamic Studies',
    duration: '3 Years',
  },
]

export default function CoursesTab() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Sticky vertical side tab — left edge, mirrors Enquire Now on the right */}
      <button
        onClick={() => setOpen(true)}
        onMouseDown={createRipple}
        aria-label="Open courses list"
        className="btn-shine glass-btn-solid fixed left-0 top-1/2 -translate-y-1/2 z-50
                   text-sm tracking-wide px-2 py-4 rounded-r-2xl rounded-l-none
                   [writing-mode:vertical-rl] rotate-180 hover:pl-3"
      >
        Courses
      </button>

      {/* Overlay + panel */}
      {open && (
        <div
          className="fixed inset-0 z-[70] bg-navy-950/50 backdrop-blur-sm flex items-center justify-start sm:justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-sm rounded-[26px] overflow-hidden animate-fade-in-up"
          >
            {/* Header */}
            <div className="glass-dark text-white px-5 py-4 flex items-center justify-between">
              <div>
                <p className="font-semibold leading-none">Our Courses</p>
                <p className="text-xs text-white/60 mt-1">Choose a programme to explore</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close courses list"
                className="text-white/70 hover:text-white transition-colors duration-350"
              >
                <X size={18} />
              </button>
            </div>

            {/* Course list */}
            <div className="p-3">
              {courses.map(({ to, icon: Icon, title, subtitle, duration }) => (
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
                    <p className="text-xs text-slate-500 truncate">{subtitle}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-[11px] text-gold font-semibold">{duration}</span>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-navy-800 transition-colors duration-350" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
