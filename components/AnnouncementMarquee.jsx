const items = [
  { text: 'Admission Open-26', emphasis: true },
  { text: 'UG Admission', emphasis: false },
  { text: 'PG Admission', emphasis: false },
  { text: 'UGC Approved', emphasis: false },
]

function MarqueeItems() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 shrink-0">
          <span
            className={
              item.emphasis
                ? 'text-red-400 font-extrabold drop-shadow-[0_0_8px_rgba(248,113,113,0.35)]'
                : 'text-yellow-300/90 font-medium'
            }
          >
            {item.text}
          </span>
          <span
            className="w-1 h-1 rounded-full bg-white/20 shadow-[0_0_6px_rgba(255,255,255,0.5)]"
            aria-hidden="true"
          />
        </span>
      ))}
    </>
  )
}

function MarqueeContent() {
  return (
    <>
      <MarqueeItems />
      <MarqueeItems />
      <MarqueeItems />
    </>
  )
}

export default function AnnouncementMarquee() {
  return (
    <div className="relative isolate overflow-hidden">
      <style>{`
        @keyframes crescent-marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .crescent-marquee-track {
          display: inline-flex;
          animation: crescent-marquee 55s linear infinite;
        }
      `}</style>

      {/* Liquid glass base */}
      <div
        className="relative py-2.5"
        style={{
          background:
            'linear-gradient(120deg, rgba(15,23,42,0.55), rgba(30,41,59,0.4) 45%, rgba(15,23,42,0.55))',
          backdropFilter: 'blur(18px) saturate(180%)',
          WebkitBackdropFilter: 'blur(18px) saturate(180%)',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          boxShadow:
            'inset 0 1px 0 0 rgba(255,255,255,0.15), inset 0 -1px 0 0 rgba(255,255,255,0.04), 0 4px 24px -8px rgba(0,0,0,0.35)',
        }}
      >
        {/* top glossy sheen */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0) 100%)',
          }}
        />

        {/* edge fade so text doesn't hard-cut at container edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-900/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-900/70 to-transparent z-10" />

        <div className="relative flex">
          <div className="flex items-center gap-6 crescent-marquee-track whitespace-nowrap text-sm">
            <MarqueeContent />
          </div>
        </div>
      </div>
    </div>
  )
}