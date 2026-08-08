import { ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

const facilities = [
  {
    title: 'Studio',
    desc: 'State-of-the-art studio for high-quality content development.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'LMS',
    desc: 'Advanced Learning Management System for seamless learning.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Datacenter',
    desc: 'Robust datacenter ensuring secure and uninterrupted learning.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Facilities() {
  const { ref, className } = useReveal()

  return (
    <section id="facilities" ref={ref} className={`container-xl py-16 ${className}`}>
      <h2 className="text-3xl font-bold text-center text-navy-800 mb-10">
        Our World-Class Facilities
        <span className="block w-14 h-1 bg-gold mx-auto mt-3 rounded-full" />
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {facilities.map((f) => (
          <div key={f.title} className="glass-card overflow-hidden">
            <img src={f.image} alt={f.title} className="w-full h-44 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-navy-800 mb-1">{f.title}</h3>
              <p className="text-sm text-slate-500 mb-3">{f.desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800">
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
