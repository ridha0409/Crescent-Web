import useReveal from '../hooks/useReveal.js'
import WhoWeAre from '../components/WhoWeAre.jsx'
import ProgrammeLevelSplit from '../components/ProgrammeLevelSplit.jsx'

export default function ProgrammesOffered() {
  const { ref, className } = useReveal()

  return (
    <>
      <section ref={ref} className={`container-xl pt-10 ${className}`}>
        <h1 className="text-3xl font-bold text-center text-navy-800 mb-2">
          Programmes Offered
          <span className="block w-14 h-1 bg-gold mx-auto mt-3 rounded-full" />
        </h1>
        <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">
          Choose a category to explore the full list of programmes under it.
        </p>

        <ProgrammeLevelSplit />
      </section>

      <WhoWeAre />
    </>
  )
}
