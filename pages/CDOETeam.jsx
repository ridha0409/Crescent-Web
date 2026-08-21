import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, UserRound, Mail, Phone } from 'lucide-react'
import AboutSidebar from '../components/AboutSidebar.jsx'
import { createRipple } from '../utils/ripple.js'
import { facultyByProgramme, technicalTeam, nonTeaching } from '../data/cdoeTeam.js'

const tabs = ['Faculty', 'Technical Team', 'Non-Teaching']
const programmes = ['MBA', 'MCA']

function Avatar({ photo, name }) {
  // A remote photo can fail (offline, moved file) — fall back to the icon
  // rather than showing a broken image.
  const [failed, setFailed] = useState(false)

  return (
    <div className="w-24 h-24 rounded-full overflow-hidden bg-navy-100 flex items-center justify-center mb-4 shrink-0">
      {photo && !failed ? (
        <img
          src={photo}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <UserRound size={36} className="text-navy-400" />
      )}
    </div>
  )
}

function FacultyCard({ member }) {
  return (
    <div className="glass-strong rounded-[22px] p-5 h-full flex flex-col items-center text-center transition-transform duration-350 hover:-translate-y-1">
      <Avatar photo={member.photo} name={member.name} />
      <h3 className="font-semibold text-navy-900 text-sm">{member.name}</h3>
      <p className="text-xs text-red-700 font-medium mt-1">{member.designation}</p>
      {member.role && <p className="text-[11px] text-slate-500 mt-0.5">{member.role}</p>}

      <Link
        to={`/about/cdoe-team/${member.slug}`}
        onMouseDown={createRipple}
        className="mt-auto pt-3 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-navy-800 transition-colors duration-350"
      >
        <FileText size={13} />
        Read More
      </Link>
    </div>
  )
}

function StaffCard({ member }) {
  return (
    <div className="glass-strong rounded-[22px] p-5 flex flex-col items-center text-center transition-transform duration-350 hover:-translate-y-1">
      <Avatar photo={member.photo} name={member.name} />
      <h3 className="font-semibold text-navy-900 text-sm">{member.name}</h3>
      <p className="text-xs text-red-700 font-medium mt-1 leading-snug">{member.designation}</p>
    </div>
  )
}

export default function CDOETeam() {
  const [activeTab, setActiveTab] = useState('Faculty')

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-8 py-10 max-w-6xl mx-auto">
      <AboutSidebar />

      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">
          About Us
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">CDOE Team</h1>

        {/* Tab switcher */}
        <div className="inline-flex flex-wrap glass-strong rounded-full p-1 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-350 ${
                activeTab === tab
                  ? 'bg-navy-800/90 text-white shadow-glow-navy'
                  : 'text-slate-600 hover:text-navy-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Faculty — grouped by programme */}
        {activeTab === 'Faculty' && (
          <div className="space-y-8">
            {programmes.map((programme) => (
              <div key={programme}>
                <h2 className="text-sm font-bold text-navy-800 mb-4">{programme}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {(facultyByProgramme[programme] || []).map((member) => (
                    <FacultyCard key={member.slug} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Technical Team' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {technicalTeam.map((member) => (
              <StaffCard key={member.name} member={member} />
            ))}
          </div>
        )}

        {activeTab === 'Non-Teaching' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {nonTeaching.map((member) => (
              <StaffCard key={member.name} member={member} />
            ))}
          </div>
        )}

        {/* CDOE support */}
        <div className="glass-card mt-10 p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="text-sm font-semibold text-navy-800">CDOE Support</p>
          <a
            href="tel:+919790953750"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-navy-800 transition-colors duration-350"
          >
            <Phone size={14} /> +91 97909 53750
          </a>
          <a
            href="mailto:cdoesupport@crescent.education"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-navy-800 transition-colors duration-350"
          >
            <Mail size={14} /> cdoesupport@crescent.education
          </a>
        </div>
      </div>
    </div>
  )
}
