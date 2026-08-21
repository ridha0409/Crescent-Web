import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import { createRipple } from '../utils/ripple.js'

const faqs = [
  { q: 'Are the programmes UGC approved?', a: 'Yes, all programmes offered are UGC entitled and AICTE approved where applicable.' },
  { q: 'What is the duration of the programmes?', a: 'MBA and MCA are 2-year programmes, while BA Islamic Studies is a 3-year programme.' },
  { q: 'How are the classes conducted?', a: 'Classes are conducted through live interactive sessions supplemented with recorded lectures on the LMS.' },
  { q: 'Is there any placement support?', a: 'Yes, dedicated placement assistance is provided to all enrolled students.' },
  { q: 'Can I access recorded classes?', a: 'Yes, recorded classes are available 24/7 through the Learning Management System.' },
  { q: 'How do I apply?', a: 'You can apply online by clicking the Apply Now button and completing the admission form.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref, className } = useReveal()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" ref={ref} className={`container-xl py-16 ${className}`}>
      <h2 className="text-3xl font-bold text-center text-navy-800 mb-10">
        Frequently Asked Questions
        <span className="block w-14 h-1 bg-gold mx-auto mt-3 rounded-full" />
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass rounded-2xl overflow-hidden transition-all duration-350">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-navy-800"
            >
              {f.q}
              {openIndex === i ? <Minus size={16} className="text-gold shrink-0" /> : <Plus size={16} className="text-gold shrink-0" />}
            </button>
            {openIndex === i && (
              <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed animate-fade-in-up">{f.a}</p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="#" onMouseDown={createRipple} className="glass-btn text-navy-800 px-6 py-2.5">
          View All FAQs
        </a>
      </div>
    </section>
  )
}