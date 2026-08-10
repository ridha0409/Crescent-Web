import { GraduationCap, Users, BookOpenText } from 'lucide-react'

// Single source of truth for every programme on the site.
// `level` drives the UG / PG filtered listing pages + the navbar dropdown.
export const programmes = [
  {
    icon: GraduationCap,
    title: 'Master of Business Administration',
    short: 'MBA',
    path: '/programmes/mba',
    level: 'PG',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    duration: '2 Years',
    approvals: 'AICTE / UGC',
    fees: '₹ 75,000 / Year',
  },
  {
    icon: Users,
    title: 'Master of Computer Applications',
    short: 'MCA',
    path: '/programmes/mca',
    level: 'PG',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
    duration: '2 Years',
    approvals: 'AICTE / UGC',
    fees: '₹ 75,000 / Year',
  },
  {
    icon: BookOpenText,
    title: 'Bachelor of Arts in Islamic Studies',
    short: 'BA Islamic Studies',
    path: '/programmes/ba-islamic-studies',
    level: 'UG',
    image:
      'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80',
    duration: '3 Years',
    approvals: 'UGC',
    fees: '₹ 30,000 / Year',
  },
]

export const ugProgrammes = programmes.filter((p) => p.level === 'UG')
export const pgProgrammes = programmes.filter((p) => p.level === 'PG')
