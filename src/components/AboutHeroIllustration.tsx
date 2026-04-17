/**
 * Branded illustration for the About hero.
 * Stylized map of Zimbabwe with glowing nodes representing the
 * buyer–seller–runner network. Pure SVG/CSS, no photos.
 */
export function AboutHeroIllustration() {
  return (
    <div className="relative w-full aspect-[16/7] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#0E1B13] via-[#06231a] to-[#04130b] shadow-2xl shadow-emerald-900/20">
      {/* Glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-[40%] h-[60%] rounded-full bg-emerald-400/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[50%] rounded-full bg-amber-400/15 blur-[100px]" />
      </div>

      <svg viewBox="0 0 1200 525" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlowAmber" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="525" fill="url(#aboutGrid)" />

        {/* Stylized Zimbabwe outline (simplified silhouette) */}
        <path
          d="M 380 165
             L 740 158
             Q 820 170, 850 200
             L 870 230
             Q 880 280, 850 330
             L 800 380
             Q 700 410, 620 405
             L 530 395
             Q 460 385, 410 350
             L 370 295
             Q 350 240, 380 165 Z"
          fill="rgba(16,185,129,0.05)"
          stroke="rgba(16,185,129,0.35)"
          strokeWidth="1.5"
        />

        {/* Connection lines between cities */}
        {[
          // Harare → Bulawayo
          { x1: 620, y1: 240, x2: 480, y2: 330 },
          // Harare → Mutare
          { x1: 620, y1: 240, x2: 780, y2: 270 },
          // Harare → Gweru
          { x1: 620, y1: 240, x2: 540, y2: 290 },
          // Harare → Masvingo
          { x1: 620, y1: 240, x2: 600, y2: 340 },
          // Bulawayo → Gweru
          { x1: 480, y1: 330, x2: 540, y2: 290 },
          // Mutare → Masvingo
          { x1: 780, y1: 270, x2: 600, y2: 340 },
        ].map((l, i) => (
          <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="3 4" />
        ))}

        {/* City nodes */}
        {[
          { x: 620, y: 240, label: 'Harare', size: 14, glow: 'nodeGlow', primary: true },
          { x: 480, y: 330, label: 'Bulawayo', size: 11, glow: 'nodeGlow' },
          { x: 780, y: 270, label: 'Mutare', size: 10, glow: 'nodeGlow' },
          { x: 540, y: 290, label: 'Gweru', size: 9, glow: 'nodeGlow' },
          { x: 600, y: 340, label: 'Masvingo', size: 9, glow: 'nodeGlowAmber' },
          { x: 700, y: 200, label: 'Bindura', size: 8, glow: 'nodeGlowAmber' },
          { x: 430, y: 240, label: 'Hwange', size: 8, glow: 'nodeGlow' },
        ].map((c, i) => (
          <g key={i}>
            <circle cx={c.x} cy={c.y} r={c.size * 3} fill={`url(#${c.glow})`}>
              <animate attributeName="r" values={`${c.size * 1.5};${c.size * 3.5};${c.size * 1.5}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={c.x} cy={c.y} r={c.size / 2.5} fill="white" stroke={c.primary ? '#10B981' : 'rgba(16,185,129,0.6)'} strokeWidth={c.primary ? '2.5' : '1.5'} />
            <text x={c.x} y={c.y + c.size + 14} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontWeight="600" fontFamily="Manrope, sans-serif">
              {c.label}
            </text>
          </g>
        ))}

        {/* Animated pulse dots traveling along edges */}
        {[
          { x1: 620, y1: 240, x2: 480, y2: 330, delay: 0 },
          { x1: 620, y1: 240, x2: 780, y2: 270, delay: 1 },
          { x1: 480, y1: 330, x2: 540, y2: 290, delay: 0.5 },
        ].map((p, i) => (
          <circle key={i} r="3" fill="#6FFBBE">
            <animateMotion dur="3s" repeatCount="indefinite" begin={`${p.delay}s`}>
              <mpath />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin={`${p.delay}s`} />
            <path d={`M${p.x1} ${p.y1} L${p.x2} ${p.y2}`} fill="none" />
          </circle>
        ))}
      </svg>

      {/* Top-left chip */}
      <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 text-[11px] font-bold text-emerald-300 uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Live across Zimbabwe
      </div>

      {/* Bottom-right stat strip */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-2 text-white">
          <div className="text-[9px] font-bold uppercase tracking-widest opacity-70">Buyers</div>
          <div className="text-base font-extrabold">12k+</div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-2 text-white">
          <div className="text-[9px] font-bold uppercase tracking-widest opacity-70">Sellers</div>
          <div className="text-base font-extrabold">2.8k</div>
        </div>
        <div className="bg-emerald-500/90 backdrop-blur-md rounded-2xl px-4 py-2 text-white">
          <div className="text-[9px] font-bold uppercase tracking-widest opacity-90">Cities</div>
          <div className="text-base font-extrabold">7</div>
        </div>
      </div>
    </div>
  )
}
