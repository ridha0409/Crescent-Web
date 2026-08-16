import { GraduationCap } from 'lucide-react'
import ProgrammeDetail from './ProgrammeDetail.jsx'

const mba = {
  icon: GraduationCap,
  title: 'Master of Business Administration',
  short: 'MBA',
  tagline: 'MBA',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  duration: '2 Years',
  approvals: 'AICTE / UGC',
  fees: '₹ 75,000 / Year',
  eligibility:
    "A bachelor's degree in any discipline from a recognized university with a minimum of 50% aggregate marks.",
  highlights: [
    'Live interactive online classes with recorded backup access',
    'Industry-relevant curriculum across finance, marketing, HR, and operations',
    'Dedicated placement support and career guidance',
    'UGC entitled, AICTE approved degree',
  ],
}

export default function MBA() {
  return <ProgrammeDetail programme={mba} />
}
