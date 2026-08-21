import { Check, ArrowRight } from 'lucide-react'
import ProgrammeSidebar from '../components/ProgrammeSidebar.jsx'
import useReveal from '../hooks/useReveal.js'
import { createRipple } from '../utils/ripple.js'

export default function ProgrammeDetail({ programme }) {
  const { icon: Icon, title, short, tagline, image, duration, approvals, fees, eligibility, highlights } = programme
  const { ref, className } = useReveal()

  return (
    <section ref={ref} className={`container-xl py-10 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        <ProgrammeSidebar />

        <div className="flex-1 min-w-0">
          {/* Banner */}
          <div className="relative rounded-[26px] overflow-hidden mb-8 h-56 sm:h-72 glass-strong p-1.5">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy-900/50" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-navy-800 mb-3">
                  <Icon size={22} />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
                <p className="text-gold font-semibold mt-1">{tagline}</p>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Duration</p>
              <p className="font-semibold text-navy-800">{duration}</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Approvals</p>
              <p className="font-semibold text-navy-800">{approvals}</p>
            </div>
            <div className="glass-card p-4 text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Fees</p>
              <p className="font-semibold text-navy-800">{fees}</p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="glass rounded-2xl p-5 mb-8">
            <h2 className="text-lg font-bold text-navy-800 mb-2">Eligibility</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{eligibility}</p>
          </div>

          {/* Highlights */}
          <div className="glass rounded-2xl p-5 mb-8">
            <h2 className="text-lg font-bold text-navy-800 mb-3">Programme Highlights</h2>
            <ul className="space-y-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="text-gold shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#"
            onMouseDown={createRipple}
            className="btn-shine glass-btn-solid px-6 py-3"
          >
            Apply for {short} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
