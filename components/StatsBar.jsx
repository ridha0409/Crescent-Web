import { Trophy, BookOpen, Building2, Users } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const stats = [
  { icon: Trophy, value: '40+', label: 'Years of Excellence' },
  { icon: BookOpen, value: '55+', label: 'Programmes' },
  { icon: Building2, value: '12', label: 'Schools' },
  { icon: Users, value: '30K+', label: 'Alumni' },
]

export default function StatsBar() {
  const { ref, className } = useReveal()

  return (
    <section ref={ref} className={`container-xl -mt-8 relative z-20 ${className}`}>
      <div className="glass-strong rounded-[26px] grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/40">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3 justify-center py-6 px-3">
            <div className="w-11 h-11 rounded-full glass-btn-solid text-white shrink-0">
              <Icon size={20} />
            </div>
            <div>
              <p className="text-xl font-bold text-navy-800 leading-none">{value}</p>
              <p className="text-xs text-slate-500 mt-1">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
