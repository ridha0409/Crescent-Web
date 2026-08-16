import { NavLink } from 'react-router-dom'
import { ugProgrammes, pgProgrammes } from '../data/programmes.js'

// Shows only the programmes belonging to the current page's level
// (UG or PG), instead of every programme on the site.
export default function ProgrammeSidebar({ level }) {
  const items = level === 'UG' ? ugProgrammes : pgProgrammes

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start w-full lg:w-64 shrink-0">
      <div className="glass-strong rounded-[22px] p-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide px-2 mb-2">
          {level === 'UG' ? 'UG Programmes' : 'PG Programmes'}
        </p>
        <nav className="space-y-1">
          {items.map(({ path, short, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-350 ${
                  isActive
                    ? 'text-white bg-navy-800/90 shadow-glow-navy'
                    : 'text-slate-600 hover:bg-white/50 hover:text-navy-800'
                }`
              }
            >
              <Icon size={16} className="shrink-0" />
              {short}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}