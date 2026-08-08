import { GraduationCap, Users, BookOpenText, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { createRipple } from '../utils/ripple.js'

const programmes = [
  {
    icon: GraduationCap,
    title: 'Master of Business Administration',
    short: 'MBA',
    path: '/programmes/mba',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    duration: '2 Years',
    approvals: 'AICTE / UGC',
    fees: '₹ 75,000 / Year',
  },
  {
    icon: Users,
    title: 'Master of Computer Applications',
    short: 'MCA',
    path: '/programmes/mca',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
    duration: '2 Years',
    approvals: 'AICTE / UGC',
    fees: '₹ 75,000 / Year',
  },
  {
    icon: BookOpenText,
    title: 'Bachelor of Arts in Islamic Studies',
    short: 'BA Islamic Studies',
    path: '/programmes/ba-islamic-studies',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80',
    duration: '3 Years',
    approvals: 'UGC',
    fees: '₹ 30,000 / Year',
  },
]

export default function Programmes() {
  const { ref, className } = useReveal()

  return (
    <section id="programmes" ref={ref} className={`container-xl py-16 ${className}`}>
      <h2 className="text-3xl font-bold text-center text-navy-800 mb-10">
        Our Online Programmes
        <span className="block w-14 h-1 bg-gold mx-auto mt-3 rounded-full" />
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {programmes.map((p) => (
          <div key={p.short} className="glass-card overflow-hidden flex flex-col">
            <div className="relative h-40">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy-900/40" />
              <div className="absolute top-4 left-4 w-11 h-11 rounded-full glass-strong flex items-center justify-center text-navy-800">
                <p.icon size={20} />
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-semibold text-navy-800 leading-snug">{p.title}</h3>
              <p className="text-gold font-semibold text-sm mb-3">{p.short}</p>

              <ul className="text-sm text-slate-600 space-y-1.5 mb-5">
                <li className="flex gap-2">
                  <Check size={15} className="text-gold shrink-0 mt-0.5" />
                  <span>Duration : {p.duration}</span>
                </li>
                <li className="flex gap-2">
                  <Check size={15} className="text-gold shrink-0 mt-0.5" />
                  <span>Approvals : {p.approvals}</span>
                </li>
                <li className="flex gap-2">
                  <Check size={15} className="text-gold shrink-0 mt-0.5" />
                  <span>Fees : {p.fees}</span>
                </li>
              </ul>

              <Link
                to={p.path}
                onMouseDown={createRipple}
                className="btn-shine glass-btn-solid mt-auto py-2.5"
              >
                View Programme <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="#" onMouseDown={createRipple} className="glass-btn text-navy-800 px-6 py-2.5">
          View All Programmes
        </a>
      </div>
    </section>
  )
}
