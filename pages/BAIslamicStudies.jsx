import { BookOpenText } from 'lucide-react'
import ProgrammeDetail from './ProgrammeDetail.jsx'

const baIslamicStudies = {
  icon: BookOpenText,
  title: 'Bachelor of Arts in Islamic Studies',
  short: 'BA Islamic Studies',
  tagline: 'BA Islamic Studies',
  image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80',
  duration: '3 Years',
  approvals: 'UGC',
  fees: '₹ 30,000 / Year',
  eligibility: 'A pass in 10+2 (Higher Secondary) or its equivalent from a recognized board.',
  highlights: [
    'Structured curriculum covering Islamic history, theology, and jurisprudence',
    'Guidance from qualified subject-matter faculty',
    'Flexible, fully online learning format',
    'UGC entitled degree',
  ],
}

export default function BAIslamicStudies() {
  return <ProgrammeDetail programme={baIslamicStudies} />
}
