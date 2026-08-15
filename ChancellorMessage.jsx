import { Quote } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import AboutSidebar from '../components/AboutSidebar.jsx'

export default function ChancellorMessage() {
  const { ref, className } = useReveal()

  return (
    <section ref={ref} className={`container-xl py-10 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />

        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold text-navy-800 mb-2">
            Chancellor's Message
            <span className="block w-14 h-1 bg-gold mt-3 rounded-full" />
          </h1>
          <p className="text-slate-500 mb-10 max-w-xl">
            A note from the Chancellor of B.S. Abdur Rahman Crescent Institute
            of Science &amp; Technology.
          </p>

          <div className="glass-card p-6 sm:p-8">
            <Quote className="text-gold mb-4" size={28} />
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Since our founding in 1984, Crescent has stayed committed to one
              simple idea — that quality education should be accessible,
              rigorous and rooted in strong values. Our online programmes
              carry forward that same commitment, bringing the expertise of
              our faculty to learners wherever they are.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              I invite every student to make the most of the opportunities
              Crescent offers — to learn, to question, and to grow into
              professionals who make a difference in the world.
            </p>
            <p className="font-semibold text-navy-800 text-sm">Chancellor</p>
            <p className="text-xs text-slate-500">
              B.S. Abdur Rahman Crescent Institute of Science &amp; Technology
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
