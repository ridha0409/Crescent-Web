import useReveal from '../hooks/useReveal.js'
import { pgProgrammes } from '../data/programmes.js'
import ProgrammeGrid from '../components/ProgrammeGrid.jsx'
import ProgrammeCategorySidebar from '../components/ProgrammeCategorySidebar.jsx'

export default function PGProgrammes() {
  const { ref, className } = useReveal()

  return (
    <section ref={ref} className={`container-xl py-10 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-8">
        <ProgrammeCategorySidebar />

        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold text-navy-800 mb-2">
            PG Programmes
            <span className="block w-14 h-1 bg-gold mt-3 rounded-full" />
          </h1>
          <p className="text-slate-500 mb-10 max-w-xl">
            Postgraduate programmes offered at Crescent.
          </p>

          <ProgrammeGrid items={pgProgrammes} />
        </div>
      </div>
    </section>
  )
}