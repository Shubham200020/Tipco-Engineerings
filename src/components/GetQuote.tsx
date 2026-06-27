import { useState } from 'react'
import { Send } from 'lucide-react'

export default function GetQuote() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <section
      id="get-quote"
      className="py-16 sm:py-20"
      style={{ background: 'var(--background)' }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em] mb-3"
            style={{ color: 'var(--brand)' }}
          >
            Get in Touch
          </p>
          <h2
            className="font-black leading-tight mb-3"
            style={{ fontSize: 'clamp(24px, 4vw, 44px)', letterSpacing: '-0.025em', color: 'var(--foreground)' }}
          >
            Request a Quote
          </h2>
          <div className="flex justify-center mb-4">
            <span className="block h-1 w-10 rounded-full" style={{ background: 'var(--brand)' }} />
          </div>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--foreground-muted)' }}>
            Tell us about your process and we'll recommend the right machine for you — free of charge.
          </p>
        </div>

        {/* Form card */}
        <div
          className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: 'var(--foreground-muted)' }}>Full Name *</label>
              <input className="form-input" placeholder="e.g. Rajesh Sharma" value={form.name} onChange={set('name')} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: 'var(--foreground-muted)' }}>Email Address *</label>
              <input className="form-input" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: 'var(--foreground-muted)' }}>Company Name</label>
              <input className="form-input" placeholder="Your company" value={form.company} onChange={set('company')} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold" style={{ color: 'var(--foreground-muted)' }}>Phone Number *</label>
              <div className="flex gap-2">
                <select
                  className="form-input w-24 flex-shrink-0 pr-1"
                  onChange={set('phone')}
                  style={{ paddingRight: '4px' }}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+966">🇸🇦 +966</option>
                </select>
                <input
                  className="form-input flex-1"
                  type="tel"
                  placeholder="98765 43210"
                  value={form.phone}
                  onChange={set('phone')}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mt-4">
            <label className="text-[12px] font-semibold" style={{ color: 'var(--foreground-muted)' }}>Message / Requirements</label>
            <textarea
              className="form-input resize-none"
              rows={4}
              placeholder="Describe your application, material, required output, etc."
              value={form.message}
              onChange={set('message')}
            />
          </div>

          {/* reCAPTCHA mock */}
          <div
            className="mt-4 p-3 rounded-lg flex items-center gap-3 w-full max-w-[300px]"
            style={{ border: '1px solid var(--border)', background: 'var(--background)' }}
          >
            <input type="checkbox" id="robot" className="w-4 h-4 cursor-pointer accent-[color:var(--brand)]" />
            <label htmlFor="robot" className="text-sm cursor-pointer" style={{ color: 'var(--foreground-muted)' }}>
              I'm not a robot
            </label>
            <div className="ml-auto text-right leading-tight">
              <div className="text-[11px] font-bold" style={{ color: 'var(--foreground-muted)' }}>reCAPTCHA</div>
              <div className="text-[10px]" style={{ color: 'var(--foreground-subtle)' }}>Privacy · Terms</div>
            </div>
          </div>

          <button
            type="button"
            className="w-full mt-6 py-3.5 rounded-xl text-[14px] font-bold text-white flex items-center
                       justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, var(--brand) 0%, #0ea5e9 100%)',
              boxShadow: '0 4px 20px rgba(0,120,114,0.4)',
            }}
          >
            <Send size={15} />
            Send Request
          </button>
        </div>

      </div>
    </section>
  )
}
