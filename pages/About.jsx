import { Link } from 'react-router-dom'
import { Landmark, ShieldCheck, Users2, Award, ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import { createRipple } from '../utils/ripple.js'
import AboutSidebar from '../components/AboutSidebar.jsx'
import StatsBar from '../components/StatsBar.jsx'

const facts = [
  { icon: Landmark, label: 'Established 1984' },
  { icon: ShieldCheck, label: 'UGC Entitled' },
  { icon: Users2, label: 'Expert Faculty' },
  { icon: Award, label: 'AICTE Approved' },
]

export default function About() {
  const { ref, className } = useReveal()

  return (
    <section ref={ref} className={`container-xl py-10 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />

        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold text-navy-800 mb-2">
            About the University
            <span className="block w-14 h-1 bg-gold mt-3 rounded-full" />
          </h1>
          <p className="text-slate-500 mb-8 max-w-xl">
            Learn about our history, purpose and what makes Crescent a trusted
            name in higher education.
          </p>

          <div className="glass-strong rounded-[28px] overflow-hidden p-2 mb-8">
            <img
              src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80"
              alt="Crescent Institute campus"
              className="w-full h-64 sm:h-80 object-cover rounded-[20px]"
            />
          </div>

          <h2 className="text-xl font-bold text-navy-800 mb-3">
            B.S. Abdur Rahman Crescent Institute of Science &amp; Technology
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            B.S. Abdur Rahman Crescent Institute of Science &amp; Technology was
            established in the year 1984 under the aegis of B.S. Abdur Rahman
            Crescent Educational &amp; Charitable Trust. Over four decades, the
            institute has grown into a UGC-entitled, AICTE-approved centre of
            learning offering undergraduate, postgraduate and online programmes
            across a wide range of disciplines.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-8">
            Our online programmes are designed to bring the same academic
            rigour and faculty expertise of our on-campus courses to working
            professionals and distance learners, backed by a modern LMS,
            recorded lectures and dedicated placement support.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {facts.map(({ icon: Icon, label }) => (
              <div key={label} className="glass rounded-2xl py-3 px-2 text-center">
                <div className="w-10 h-10 rounded-full glass-strong text-navy-800 flex items-center justify-center mx-auto mb-2">
                  <Icon size={16} />
                </div>
                <p className="text-[11px] font-medium text-slate-600 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <StatsBar />

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-navy-800 mb-2">Vision &amp; Mission</h3>
              <p className="text-sm text-slate-600 mb-4">
                See what drives us and the values that shape every programme we offer.
              </p>
              <Link
                to="/about/vision-mission"
                onMouseDown={createRipple}
                className="glass-btn text-navy-800 px-5 py-2 text-sm"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-navy-800 mb-2">Chancellor's Message</h3>
              <p className="text-sm text-slate-600 mb-4">
                A note from our Chancellor on Crescent's journey and vision for the future.
              </p>
              <Link
                to="/about/chancellor-message"
                onMouseDown={createRipple}
                className="glass-btn text-navy-800 px-5 py-2 text-sm"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
