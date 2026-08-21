import { Users } from 'lucide-react'
import ProgrammeDetail from './ProgrammeDetail.jsx'

const mca = {
  icon: Users,
  title: 'Master of Computer Applications',
  short: 'MCA',
  tagline: 'MCA',
  image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80',
  duration: '2 Years',
  approvals: 'AICTE / UGC',
  fees: '₹ 75,000 / Year',
  eligibility:
    "A bachelor's degree with Mathematics as one of the subjects at 10+2 level or graduation, from a recognized university.",
  highlights: [
    'Hands-on training in modern programming languages and frameworks',
    'Access to LMS and recorded lectures 24/7',
    'Experienced faculty from the computer science domain',
    'UGC entitled, AICTE approved degree',
  ],
}

export default function MCA() {
  return <ProgrammeDetail programme={mca} />
}
