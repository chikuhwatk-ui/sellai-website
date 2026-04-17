/**
 * Branded illustration for the For Runners hero.
 * Shows a "live delivery in progress" scene — phone mockup of the runner app
 * over a stylized map. Pure SVG/CSS, no photos needed.
 */
export function RunnerHeroIllustration() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
      {/* Map backdrop */}
      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 border border-emerald-100/60 shadow-2xl shadow-emerald-900/5">
        <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {/* Subtle grid */}
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="route" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill="url(#grid)" />

          {/* Stylized roads */}
          <path d="M-20 120 Q 100 100, 200 140 T 420 180" fill="none" stroke="rgba(15,23,18,0.06)" strokeWidth="14" strokeLinecap="round" />
          <path d="M-20 280 Q 120 320, 220 290 T 420 320" fill="none" stroke="rgba(15,23,18,0.06)" strokeWidth="14" strokeLinecap="round" />
          <path d="M80 -20 Q 120 120, 100 240 T 80 520" fill="none" stroke="rgba(15,23,18,0.06)" strokeWidth="14" strokeLinecap="round" />
          <path d="M310 -20 Q 290 100, 320 220 T 300 520" fill="none" stroke="rgba(15,23,18,0.06)" strokeWidth="14" strokeLinecap="round" />

          {/* Active route — pickup → drop-off */}
          <path d="M70 380 Q 180 280, 220 200 T 330 110" fill="none" stroke="url(#route)" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="0" />
          <path d="M70 380 Q 180 280, 220 200 T 330 110" fill="none" stroke="url(#route)" strokeWidth="6" strokeLinecap="round" opacity="0.15" />

          {/* Pickup pin */}
          <circle cx="70" cy="380" r="40" fill="url(#pulse)">
            <animate attributeName="r" values="20;48;20" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="380" r="10" fill="white" stroke="#10B981" strokeWidth="3" />
          <circle cx="70" cy="380" r="4" fill="#10B981" />

          {/* Drop-off pin */}
          <g>
            <circle cx="330" cy="110" r="14" fill="#F59E0B" stroke="white" strokeWidth="3" />
            <path d="M330 102 L330 118 M322 110 L338 110" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>

        {/* Phone mockup — runner app */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] aspect-[9/19] rounded-[2.2rem] bg-[#0E1B13] p-2 shadow-[0_30px_60px_-15px_rgba(15,23,18,0.4)] rotate-[-6deg]">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0E1B13] rounded-b-2xl z-10" />
          <div className="w-full h-full rounded-[1.7rem] bg-gradient-to-b from-emerald-50 to-white overflow-hidden flex flex-col">
            {/* Status bar */}
            <div className="h-7 flex items-center justify-between px-4 pt-1 text-[8px] font-bold text-slate-700">
              <span>9:41</span>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-[10px]">network_cell</span>
                <span className="material-symbols-outlined text-[10px]">battery_full</span>
              </div>
            </div>
            {/* App header */}
            <div className="px-3 pb-2 pt-1 border-b border-emerald-100/60">
              <div className="text-[7px] font-bold text-emerald-700 uppercase tracking-widest">Active Delivery</div>
              <div className="text-[10px] font-extrabold text-slate-900 mt-0.5">Borrowdale → Avondale</div>
            </div>
            {/* Earnings card */}
            <div className="m-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-2 text-white">
              <div className="text-[6px] font-bold uppercase tracking-widest opacity-80">You'll earn</div>
              <div className="text-base font-extrabold leading-none mt-0.5">$8.50</div>
              <div className="text-[6px] mt-0.5 opacity-80">+ $1.20 tip likely</div>
            </div>
            {/* Order card */}
            <div className="mx-2 bg-white rounded-xl border border-slate-200 p-2 shadow-sm">
              <div className="flex items-center gap-1.5 text-[7px] text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Picked up · 4 min ago
              </div>
              <div className="text-[8px] font-bold text-slate-900 mt-0.5">iPhone 15 Pro Max</div>
              <div className="text-[6px] text-slate-500">From: TechHub Borrowdale</div>
            </div>
            {/* Navigation tile */}
            <div className="mx-2 mt-1.5 bg-amber-50 rounded-xl border border-amber-200/60 p-2">
              <div className="text-[7px] font-bold text-amber-700 uppercase tracking-widest">Next turn</div>
              <div className="text-[8px] font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px] text-amber-600">turn_right</span>
                Right onto Sam Nujoma in 350m
              </div>
            </div>
            {/* CTA */}
            <div className="mt-auto m-2 bg-emerald-500 rounded-xl py-1.5 text-center text-white text-[8px] font-extrabold uppercase tracking-widest">
              I've Arrived
            </div>
          </div>
        </div>

        {/* Floating motorcycle chip */}
        <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-lg border border-emerald-100 px-3 py-2 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-amber-600 text-base">two_wheeler</span>
          </div>
          <div>
            <div className="text-[9px] font-bold text-slate-900">Boda · ZW 4521</div>
            <div className="text-[8px] text-emerald-600 font-semibold">On the way</div>
          </div>
        </div>

        {/* Floating earnings chip */}
        <div className="absolute bottom-6 left-6 bg-[#0E1B13] rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-emerald-300 text-base">payments</span>
          </div>
          <div>
            <div className="text-[8px] font-bold text-emerald-300 uppercase tracking-widest">This week</div>
            <div className="text-sm font-extrabold text-white">$184.20</div>
          </div>
        </div>
      </div>
    </div>
  )
}
