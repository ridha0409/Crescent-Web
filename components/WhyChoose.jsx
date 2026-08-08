import { Users, Smartphone, BookOpen, PlayCircle, Briefcase, Globe2 } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const features = [
  { icon: Users, title: 'Experienced Faculty', desc: 'Learn from expert faculty members' },
  { icon: Smartphone, title: 'Learn on the Go', desc: 'Study anytime, anywhere' },
  { icon: BookOpen, title: 'LMS Access', desc: 'Access to e-learning resources 24/7' },
  { icon: PlayCircle, title: 'Recorded Classes', desc: 'Watch, learn and revise at ease' },
  { icon: Briefcase, title: 'Placement Support', desc: 'Dedicated placement assistance' },
  { icon: Globe2, title: 'Globally Recognized', desc: 'UGC entitled degrees' },
]

export default function WhyChoose() {
  const { ref, className } = useReveal()

  return (
    <section ref={ref} className={`container-xl py-16 ${className}`}>
      <h2 className="text-3xl font-bold text-center text-navy-800 mb-10">
        Why Choose Crescent Online?
        <span className="block w-14 h-1 bg-gold mx-auto mt-3 rounded-full" />
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card p-5 text-center">
            <div className="w-12 h-12 rounded-full glass text-navy-800 flex items-center justify-center mx-auto mb-3">
              <Icon size={22} />
            </div>
            <p className="font-semibold text-navy-800 text-sm mb-1">{title}</p>
            <p className="text-xs text-slate-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
