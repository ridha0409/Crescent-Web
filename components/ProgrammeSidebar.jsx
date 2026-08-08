import { NavLink } from 'react-router-dom'
import { GraduationCap, Users, BookOpenText } from 'lucide-react'

const programmes = [
  { to: '/programmes/mba', label: 'MBA', icon: GraduationCap },
  { to: '/programmes/mca', label: 'MCA', icon: Users },
  { to: '/programmes/ba-islamic-studies', label: 'BA Islamic Studies', icon: BookOpenText },
]

export default function ProgrammeSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start w-full lg:w-64 shrink-0">
      <div className="glass-strong rounded-[22px] p-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide px-2 mb-2">
          Our Programmes
        </p>
        <nav className="space-y-1">
          {programmes.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-350 ${
                  isActive
                    ? 'text-white bg-navy-800/90 shadow-glow-navy'
                    : 'text-slate-600 hover:bg-white/50 hover:text-navy-800'
                }`
              }
            >
              <Icon size={16} className="shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
