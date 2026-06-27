const CLIENTS = [
  { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 },
  { id: 17 }, { id: 18 }, { id: 19 }, { id: 21 }, { id: 22 },
  { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 },
  { id: 28 }, { id: 29 },
]

export default function Clients() {
  return (
    <section
      className="py-14 sm:py-16 relative"
      style={{
        backgroundImage: 'url(https://tipcoengineering.com/assets/demos/parallax_03.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(10,22,22,0.86)' }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Trusted Worldwide
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            Our Clients
          </h2>
          <div className="flex justify-center">
            <span className="block h-1 w-10 rounded-full" style={{ background: 'var(--brand)' }} />
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-2 sm:gap-3">
          {CLIENTS.map(c => {
            const ext = c.id >= 16 ? 'png' : 'jpg'
            return (
              <div
                key={c.id}
                className="rounded-xl flex items-center justify-center p-2 sm:p-3 h-14 sm:h-16
                           transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                <img
                  src={`https://tipcoengineering.com/public/uploads/client-${c.id}.${ext}`}
                  alt={`Client ${c.id}`}
                  className="max-h-9 sm:max-h-10 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
