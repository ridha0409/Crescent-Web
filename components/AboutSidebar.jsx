// import { NavLink } from 'react-router-dom'
// import { Landmark, Compass, MessageSquareQuote } from 'lucide-react'

// const links = [
//   { to: '/about', label: 'About Crescent', icon: Landmark, end: true },
//   { to: '/about/vision-mission', label: 'Vision & Mission', icon: Compass },
//   { to: '/about/chancellor-message', label: "Chancellor's Message", icon: MessageSquareQuote },
// ]

// export default function AboutSidebar() {
//   return (
//     <aside className="lg:sticky lg:top-24 lg:self-start w-full lg:w-64 shrink-0">
//       <div className="glass-strong rounded-[22px] p-4">
//         <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide px-2 mb-2">
//           About Us
//         </p>
//         <nav className="space-y-1">
//           {links.map(({ to, label, icon: Icon, end }) => (
//             <NavLink
//               key={to}
//               to={to}
//               end={end}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-350 ${
//                   isActive
//                     ? 'text-white bg-navy-800/90 shadow-glow-navy'
//                     : 'text-slate-600 hover:bg-white/50 hover:text-navy-800'
//                 }`
//               }
//             >
//               <Icon size={16} className="shrink-0" />
//               {label}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </aside>
//   )
// }

import { NavLink } from 'react-router-dom'
import { Landmark, Compass, MessageSquareQuote, Users } from 'lucide-react'

const links = [
  { to: '/about', label: 'About Crescent', icon: Landmark, end: true },
  { to: '/about/vision-mission', label: 'Vision & Mission', icon: Compass },
  { to: '/about/chancellor-message', label: "Chancellor's Message", icon: MessageSquareQuote },
  { to: '/about/cdoe-team', label: 'CDOE Team', icon: Users },
]

export default function AboutSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start w-full lg:w-64 shrink-0 relative z-10">
      <div className="glass-strong rounded-[22px] p-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide px-2 mb-2">
          About Us
        </p>
        <nav className="space-y-1 relative z-10">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative z-10 flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                 cursor-pointer pointer-events-auto select-none leading-snug
                 transition-colors duration-350 ${
                  isActive
                    ? 'text-white bg-navy-800/90 shadow-glow-navy'
                    : 'text-slate-600 hover:bg-white/50 hover:text-navy-800'
                }`
              }
            >
              <Icon size={16} className="shrink-0" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
