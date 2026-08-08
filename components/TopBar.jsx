import { Phone, Mail } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="glass-dark text-white text-xs sm:text-sm relative z-[60]">
      <div className="container-xl flex flex-wrap items-center justify-between gap-2 py-2">
        <div className="flex flex-wrap items-center gap-4">
          <span className="hidden sm:inline text-white/70">For Admissions :</span>
          <a href="tel:+919150062979" className="flex items-center gap-1.5 hover:text-gold transition-colors duration-350">
            <Phone size={13} /> +91 91500 62979
          </a>
          <a href="tel:+919797072370" className="flex items-center gap-1.5 hover:text-gold transition-colors duration-350">
            <Phone size={13} /> +91 97907 72370
          </a>
          <a
            href="mailto:onlineadmissions@crescent.education"
            className="hidden md:flex items-center gap-1.5 hover:text-gold transition-colors duration-350"
          >
            <Mail size={13} /> onlineadmissions@crescent.education
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gold transition-colors duration-350">
            Student Login
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="hover:text-gold transition-colors duration-350">
            LMS Login
          </a>
        </div>
      </div>
    </div>
  )
}
