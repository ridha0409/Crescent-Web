import { Link } from 'react-router-dom'
import { Landmark, Leaf, ShieldCheck, Users2, ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import { createRipple } from '../utils/ripple.js'

const facts = [
  { icon: Landmark, label: 'Established', value: '1984' },
  { icon: Leaf, label: 'Green Campus', value: '' },
  { icon: ShieldCheck, label: 'UGC Entitled', value: '' },
  { icon: Users2, label: 'Online Learning', value: '' },
]

export default function About() {
  const { ref, className } = useReveal()

  return (
    <section ref={ref} className={`container-xl py-8 ${className}`}>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="glass-strong rounded-[28px] overflow-hidden p-2">
          <img
            src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1000&q=80"
            alt="Institute campus"
            className="w-full h-72 sm:h-80 object-cover rounded-[20px]"
          />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-4">
            About Us
            <span className="block w-14 h-1 bg-gold mt-3 rounded-full" />
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Since 1984, B.S. Abdur Rahman Crescent Institute of Science and Technology
            is a renowned Quality Leadership Institution located at the greenest spot of
            Chennai near Tambaram.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Through our long history of 37 years of excellence, the Institution has
            offered access to a wide range of academic opportunities. With 55
            programmes, grouped under 12 different Schools, 30 Undergraduate
            programmes, 25 Postgraduate programmes, and Ph.D.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            This institution is an intellectual destination that challenges conventional
            thinking and stimulates passion to redefine learning. The distinctive
            teaching at this institution makes the students and scholars to compete with
            themselves and each other.
          </p>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl py-3 text-center">
                <div className="w-11 h-11 rounded-full glass-strong text-navy-800 flex items-center justify-center mx-auto mb-2">
                  <Icon size={18} />
                </div>
                {value && <p className="font-bold text-navy-800 text-sm">{value}</p>}
                <p className="text-[11px] text-slate-500 leading-tight">{label}</p>
              </div>
            ))}
          </div>

          <Link to="/about" onMouseDown={createRipple} className="glass-btn text-navy-800 px-6 py-2.5">
            Know More About Us <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
