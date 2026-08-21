import { Link } from 'react-router-dom'
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, BookOpenText, GraduationCap } from 'lucide-react'
import { ugProgrammes, pgProgrammes } from '../data/programmes.js'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Facilities', to: '/#facilities' },
  { label: "FAQ's", to: '/faq' },
  { label: 'Contact Us', to: '/#footer' },
]

const levels = [
  { to: '/programmes/ug', icon: BookOpenText, label: 'UG Programmes', count: ugProgrammes.length },
  { to: '/programmes/pg', icon: GraduationCap, label: 'PG Programmes', count: pgProgrammes.length },
]

const socials = [Facebook, Instagram, Linkedin, Youtube]

// Same crimson gradient used on the "Enquire Now" side tab, so the footer
// reads as part of the same brand accent instead of the default navy glass.
const footerBg = {
  background: 'linear-gradient(160deg, rgba(220,38,38,0.85), rgba(153,27,27,0.9))',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(255,255,255,0.25)',
  boxShadow: '0 20px 60px -12px rgba(153,27,27,0.55), inset 0 1px 0 0 rgba(255,255,255,0.15)',
}

export default function Footer() {
  return (
    <footer
      id="footer"
      style={footerBg}
      className="text-white pt-12 pb-6 mt-8 rounded-t-[40px]"
    >
      <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center font-bold text-white">
              C
            </div>
            <p className="text-lg font-bold text-white">Crescent</p>
          </div>
          <p className="text-xs text-white">Institute of Science &amp; Technology</p>
          <div className="flex gap-3 mt-4">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-white/30 transition-colors duration-350"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white font-semibold mb-3 text-sm">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(({ label, to }) => (
              <li key={label}>
                <Link to={to} className="hover:text-white transition-colors duration-350">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3 text-sm">Programmes</p>
          <ul className="space-y-2 text-sm">
            {levels.map(({ to, icon: Icon, label, count }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 hover:text-white transition-colors duration-350">
                  <Icon size={13} />
                  {label} <span className="text-white">({count})</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/programmes"
            className="inline-block mt-4 glass text-white text-xs font-semibold px-4 py-2 rounded-full"
          >
            Apply Now
          </Link>
        </div>

        <div>
          <p className="text-white font-semibold mb-3 text-sm">For Admissions</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={13} /> +91 91500 62979
            </li>
            <li className="flex items-center gap-2">
              <Phone size={13} /> +91 97907 72370
            </li>
            <li className="flex items-center gap-2">
              <Mail size={13} /> onlineadmissions@crescent.education
            </li>
          </ul>
        </div>
      </div>

      <div className="container-xl flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
        <p className="text-xs text-white">© {new Date().getFullYear()} Crescent Institute of Science &amp; Technology. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs text-white">
          <span className="px-3 py-1 rounded-full glass">UGC</span>
          <span className="px-3 py-1 rounded-full glass">Accredited</span>
          <span className="px-3 py-1 rounded-full glass">NAAC A</span>
        </div>
      </div>
    </footer>
  )
}