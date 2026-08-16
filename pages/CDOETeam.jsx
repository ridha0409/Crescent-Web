import { useState } from 'react'
import { FileText, UserRound } from 'lucide-react'
import AboutSidebar from '../components/AboutSidebar.jsx'

const facultyData = {
  MBA: [
    {
      name: 'Dr. S. Thowseaf',
      designation: 'Assistant Professor',
      photo: null,
      profileUrl:
        'https://online.crescent-institute.edu.in/img/facilities/Dr.%20S.%20Thowseaf%20-%20Faculty%20Profilenew.pdf',
    },
    {
      name: 'Dr. V. Agalya',
      designation: 'Assistant Professor',
      photo: null,
      profileUrl:
        'https://online.crescent-institute.edu.in/img/facilities/Dr.V.%20AGALYA%20-%20Faculty%20Profilenew.pdf',
    },
  ],
  MCA: [
    {
      name: 'Dr. E. Jeslin Renjith',
      designation: 'Assistant Professor',
      photo: null,
      profileUrl: 'https://online.crescent-institute.edu.in/faculty',
    },
    {
      name: 'Dr. P. Maheswari',
      designation: 'Assistant Professor',
      photo: null,
      profileUrl:
        'https://online.crescent-institute.edu.in/img/facilities/Faculty%20Profile%20Maheswari%20Pnew1.pdf',
    },
    {
      name: 'Mrs. S. Manjula',
      designation: 'Assistant Professor',
      photo: null,
      profileUrl:
        'https://online.crescent-institute.edu.in/img/facilities/Faculty%20Profile-MANJULAnew.pdf',
    },
  ],
}

const tabs = ['MBA', 'MCA']

function FacultyCard({ member }) {
  return (
    <div className="glass-strong rounded-[22px] p-5 flex flex-col items-center text-center transition-transform duration-350 hover:-translate-y-1">
      <div className="w-24 h-24 rounded-full overflow-hidden bg-navy-100 flex items-center justify-center mb-4 shrink-0">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <UserRound size={36} className="text-navy-400" />
        )}
      </div>
      <h3 className="font-semibold text-navy-900 text-sm">{member.name}</h3>
      <p className="text-xs text-red-700 font-medium mt-1">{member.designation}</p>
      <a
        href={member.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-navy-800 transition-colors duration-350"
      >
        <FileText size={13} />
        More Info
      </a>
    </div>
  )
}

export default function CDOEteam() {
  const [activeTab, setActiveTab] = useState('MBA')

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-8 py-10 max-w-6xl mx-auto">
      <AboutSidebar />

      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">
          About Us
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">CDOE Team</h1>

        {/* Tab switcher */}
        <div className="inline-flex glass-strong rounded-full p-1 mb-8">
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

        {/* Faculty grid for the active programme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {facultyData[activeTab].map((member) => (
            <FacultyCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
