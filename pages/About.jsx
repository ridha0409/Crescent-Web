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

const highlights = [
  { value: '37', label: 'Years of Excellence' },
  { value: '55', label: 'Programmes' },
  { value: '12', label: 'Schools' },
  { value: '30', label: 'Undergraduate Programmes' },
  { value: '25', label: 'Postgraduate Programmes' },
]

export default function About() {
  const { ref, className } = useReveal()

  return (
    <section ref={ref} className={`container-xl py-10 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />

        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold text-navy-800 mb-2">
            About Us
            <span className="block w-14 h-1 bg-gold mt-3 rounded-full" />
          </h1>
          <p className="text-slate-500 mb-8 max-w-xl">
            A renowned Quality Leadership Institution at the greenest spot of Chennai.
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
            Since 1984, B.S. Abdur Rahman Crescent Institute of Science and Technology
            is a renowned Quality Leadership Institution located at the greenest spot of
            Chennai near Tambaram.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Through our long history of 37 years of excellence, the Institution has
            offered access to a wide range of academic opportunities. With 55
            programmes, grouped under 12 different Schools, 30 Undergraduate
            programmes, 25 Postgraduate programmes, and Ph.D.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            This institution is an intellectual destination that challenges conventional
            thinking and stimulates passion to redefine learning. The distinctive
            teaching at this institution makes the students and scholars to compete with
            themselves and each other. Apart from providing top-notch education, our
            green campus and well-planned student life are solely dedicated to making
            students utilize the ambiance to the fullest.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-8">
            Through our wide array of educational programmes and unique clubs to foster
            student development activities, we provide opportunities and experiences
            that build community, help you grow personally and professionally, and
            create a place that you can call home now and throughout your life.
          </p>

          {/* At a glance */}
          <div className="glass-strong rounded-[24px] p-5 sm:p-6 mb-10">
            <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-4">
              At a glance
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {highlights.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-navy-800 leading-none">{value}</p>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

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

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-navy-800 mb-2">Visionary Team</h3>
              <p className="text-sm text-slate-600 mb-4">
                Meet the leadership whose vision shapes every programme we offer.
              </p>
              <Link
                to="/about/visionary-team"
                onMouseDown={createRipple}
                className="glass-btn text-navy-800 px-5 py-2 text-sm"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-navy-800 mb-2">Chancellor&apos;s Message</h3>
              <p className="text-sm text-slate-600 mb-4">
                A note from our Chancellor on Crescent&apos;s journey and vision for the future.
              </p>
              <Link
                to="/about/chancellor-message"
                onMouseDown={createRipple}
                className="glass-btn text-navy-800 px-5 py-2 text-sm"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold text-navy-800 mb-2">CDOE Team</h3>
              <p className="text-sm text-slate-600 mb-4">
                Meet the faculty, technical and non-teaching team behind our online programmes.
              </p>
              <Link
                to="/about/cdoe-team"
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
