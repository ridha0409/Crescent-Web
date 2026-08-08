import { useState } from 'react'
import { createPortal } from 'react-dom'
import { X, Send } from 'lucide-react'
import { createRipple } from '../utils/ripple.js'

export default function EnquireNow() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: replace this with a real API call / email service (see notes below)
    console.log('Enquiry submitted:', form)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setOpen(false)
      setForm({ name: '', phone: '', email: '', message: '' })
    }, 1800)
  }

  return createPortal(
    <>
      {/* Sticky vertical side tab — fixed to the right edge, vertically centered */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 z-[65] pointer-events-auto">
        <button
          type="button"
          onClick={() => setOpen(true)}
          onMouseDown={createRipple}
          aria-label="Open enquiry form"
          className="btn-shine relative overflow-hidden text-white
                     font-semibold text-sm tracking-wide px-2 py-4 rounded-l-2xl
                     [writing-mode:vertical-rl] transition-all duration-350 ease-in-out
                     hover:pr-3 cursor-pointer"
          style={{
            background: 'linear-gradient(160deg, rgba(220,38,38,0.85), rgba(153,27,27,0.9))',
            backdropFilter: 'blur(16px) saturate(160%)',
            WebkitBackdropFilter: 'blur(16px) saturate(160%)',
            border: '1px solid rgba(255,255,255,0.25)',
            boxShadow: '0 8px 28px -6px rgba(153,27,27,0.55), inset 0 1px 0 0 rgba(255,255,255,0.15)',
          }}
        >
          Enquire Now
        </button>
      </div>

      {/* Overlay + modal */}
      {open && (
        <div
          className="fixed inset-0 z-[70] bg-navy-950/50 backdrop-blur-sm flex items-center justify-end sm:justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-sm rounded-[26px] overflow-hidden animate-fade-in-up"
          >
            {/* Header */}
            <div className="glass-dark text-white px-5 py-4 flex items-center justify-between">
              <div>
                <p className="font-semibold leading-none">Quick Enquiry</p>
                <p className="text-xs text-white/60 mt-1">We'll get back to you shortly</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close enquiry form"
                className="text-white/70 hover:text-white transition-colors duration-350"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form / success state */}
            <div className="p-5">
              {submitted ? (
                <div className="text-center py-6">
                  <p className="text-emerald-600 font-semibold mb-1">Thank you!</p>
                  <p className="text-sm text-slate-500">Your enquiry has been received.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full text-sm px-4 py-2.5 rounded-full glass outline-none
                               focus:ring-2 focus:ring-navy-800/20 transition-all duration-350 ease-in-out"
                  />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full text-sm px-4 py-2.5 rounded-full glass outline-none
                               focus:ring-2 focus:ring-navy-800/20 transition-all duration-350 ease-in-out"
                  />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full text-sm px-4 py-2.5 rounded-full glass outline-none
                               focus:ring-2 focus:ring-navy-800/20 transition-all duration-350 ease-in-out"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Which programme are you interested in?"
                    className="w-full text-sm px-4 py-2.5 rounded-2xl glass outline-none resize-none
                               focus:ring-2 focus:ring-navy-800/20 transition-all duration-350 ease-in-out"
                  />
                  <button
                    type="submit"
                    onMouseDown={createRipple}
                    className="btn-shine glass-btn-solid w-full py-2.5"
                  >
                    Submit Enquiry <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  )
}