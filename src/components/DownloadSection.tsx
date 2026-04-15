export function DownloadSection({ variant = 'default' }: { variant?: 'default' | 'dark' | 'accent' }) {
  const isDark = variant === 'dark'
  const isAccent = variant === 'accent'

  return (
    <section id="download" className={`py-24 px-8 ${isDark ? 'bg-[#0E1B13]' : isAccent ? 'bg-primary-container' : ''}`}>
      <div className={`max-w-4xl mx-auto text-center ${isDark ? 'text-white' : isAccent ? 'text-on-primary-container' : 'text-on-background'}`}>
        <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${isDark ? 'text-emerald-400' : isAccent ? 'text-on-primary-container/70' : 'text-primary'}`}>
          Get Started Today
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold font-[Manrope] tracking-tight mb-6">
          Download the Sellai App
        </h2>
        <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : isAccent ? 'text-on-primary-container/80' : 'text-on-surface-variant'}`}>
          Available on iOS and Android. The marketplace where buyers post demands and verified sellers respond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg ${
              isDark
                ? 'bg-white text-[#0E1B13] shadow-white/10'
                : isAccent
                  ? 'bg-on-primary-container text-white shadow-on-primary-container/20'
                  : 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-emerald-500/20'
            }`}
          >
            <span className="material-symbols-outlined">android</span>
            Google Play
          </a>
          <a
            href="#download"
            className={`px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all ${
              isDark
                ? 'bg-white/10 text-white border border-white/20'
                : isAccent
                  ? 'bg-white/20 backdrop-blur-md text-on-primary-container border border-on-primary-container/20'
                  : 'bg-white border border-outline-variant/30 text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">phone_iphone</span>
            App Store
          </a>
        </div>
        <p className={`text-xs mt-6 ${isDark ? 'text-slate-500' : isAccent ? 'text-on-primary-container/50' : 'text-on-surface-variant/60'}`}>
          Free to download.
        </p>
      </div>
    </section>
  )
}
