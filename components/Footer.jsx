import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = ['Home', 'Programmes', 'Facilities', 'FAQ', 'Contact Us']
const programmes = ['MBA', 'MCA', 'BA Islamic Studies']
const socials = [Facebook, Instagram, Linkedin, Youtube]

export default function Footer() {
  return (
    <footer id="footer" className="glass-dark-strong text-white/80 pt-12 pb-6 mt-8 rounded-t-[40px]">
      <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center font-bold text-white">
              C
            </div>
            <p className="text-lg font-bold text-white">Crescent</p>
          </div>
          <p className="text-xs text-white/60">Institute of Science &amp; Technology</p>
          <div className="flex gap-3 mt-4">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-gold/80 transition-colors duration-350"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-white font-semibold mb-3 text-sm">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-gold transition-colors duration-350">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3 text-sm">Programmes</p>
          <ul className="space-y-2 text-sm">
            {programmes.map((p) => (
              <li key={p}>
                <a href="#programmes" className="hover:text-gold transition-colors duration-350">
                  {p}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-block mt-4 glass text-white text-xs font-semibold px-4 py-2 rounded-full"
          >
            Apply Now
          </a>
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
        <p className="text-xs text-white/50">© {new Date().getFullYear()} Crescent Institute of Science &amp; Technology. All rights reserved.</p>
        <div className="flex items-center gap-4 text-xs text-white/60">
          <span className="px-3 py-1 rounded-full glass">UGC</span>
          <span className="px-3 py-1 rounded-full glass">Accredited</span>
          <span className="px-3 py-1 rounded-full glass">NAAC A</span>
        </div>
      </div>
    </footer>
  )
}
