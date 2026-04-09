export default function RunnerHub() {
  return (
    <main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-tertiary-container mb-2 block">
              Runner Hub
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-[Manrope] text-on-surface">
              Intelligence Deck
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-surface-container rounded-full p-1">
            <button
              type="button"
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-full font-bold text-sm transition-all"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              Active
            </button>
            <button
              type="button"
              className="px-5 py-2.5 rounded-full font-bold text-sm text-on-surface-variant hover:bg-surface-container-high transition-all"
            >
              Offline
            </button>
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ── Left Column (8-col) ── */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Map Card */}
            <div className="relative h-[450px] rounded-3xl overflow-hidden border border-white/40 shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmK35qt3Ul-LOTccA5Mp1RY0dMN6IY5motqssXUShhUZ3ZXQVD7ro0l6eR2c8LU2n-SJ6cGXYm602aVc3BJoQeQwUhl5zydGhpwQlYXKofO2OLala8JLw2HxEOslAIC9DAflARl8I3_VhQ03vOfHsrlQT5cv2YNiMeo8BIMYs1Jzk6acUjJ2k0_5bhvkBd5DI5skIqIqmWNA_UvhPGO7Sb_cbMGG4sIqOLDUgW8LwuVep0-h9JM3jmwRfNKJIXrMc5nzMU-1JxnPM"
                alt="Live delivery map"
                className="w-full h-full object-cover"
              />
              {/* Floating transit card */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto glass-card rounded-2xl px-5 py-4 border border-white/40 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    navigation
                  </span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-medium">
                    Current Transit
                  </p>
                  <p className="text-base font-bold text-on-surface font-[Manrope]">
                    3.2 Miles to Pickup
                  </p>
                </div>
              </div>
            </div>

            {/* Current Task Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/40 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface text-2xl">
                    assignment
                  </span>
                  <h2 className="text-lg font-bold text-on-surface font-[Manrope]">
                    Current Task #4892
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-sm">
                    warning
                  </span>
                  Urgent
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {/* Pickup */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-3 h-3 rounded-full bg-primary-container shrink-0 ring-4 ring-primary-container/20" />
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wide mb-1">
                      Pickup
                    </p>
                    <p className="text-sm font-bold text-on-surface">
                      240 Tech Plaza, Palo Alto
                    </p>
                  </div>
                </div>
                {/* Dropoff */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-3 h-3 rounded-full bg-secondary-container shrink-0 ring-4 ring-secondary-container/20" />
                  <div>
                    <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wide mb-1">
                      Dropoff
                    </p>
                    <p className="text-sm font-bold text-on-surface">
                      881 Mission St, San Francisco
                    </p>
                  </div>
                </div>
              </div>

              {/* PIN Entry */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                <div className="flex-1">
                  <label className="text-xs text-on-surface-variant font-medium uppercase tracking-wide mb-2 block">
                    Delivery PIN
                  </label>
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="----"
                    className="w-full sm:w-48 text-center text-2xl font-bold tracking-[1em] font-[Manrope] text-on-surface bg-surface-container rounded-xl px-4 py-3 border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-outline-variant"
                  />
                </div>
                <button
                  type="button"
                  className="bg-primary text-on-primary px-8 py-3.5 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">
                    check_circle
                  </span>
                  Complete
                </button>
              </div>
            </div>
          </div>

          {/* ── Right Column (4-col) ── */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Earnings Card */}
            <div className="relative bg-primary rounded-3xl p-6 sm:p-8 overflow-hidden">
              {/* Decorative glow circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-container/20 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-tertiary-container/15 blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-on-primary/70 text-xl">
                    account_balance_wallet
                  </span>
                  <p className="text-on-primary/70 text-sm font-medium">
                    Today's Payout
                  </p>
                </div>
                <p className="text-4xl font-extrabold text-on-primary font-[Manrope] mb-3">
                  $240.00
                </p>
                <span className="inline-flex items-center gap-1 bg-white/15 text-on-primary text-xs font-bold px-3 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  +12% from average
                </span>
              </div>
            </div>

            {/* Demand Heatmap Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/40 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-on-surface text-xl">
                  local_fire_department
                </span>
                <h3 className="text-base font-bold text-on-surface font-[Manrope]">
                  Demand Heatmap
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {/* Financial District */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-on-surface">
                      Financial District
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-error/10 text-error px-2 py-0.5 rounded-full">
                      Critical
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-error to-error/70"
                      style={{ width: "92%" }}
                    />
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">92%</p>
                </div>

                {/* SoMa Tech Hub */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-on-surface">
                      SoMa Tech Hub
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-tertiary-container/10 text-tertiary px-2 py-0.5 rounded-full">
                      High
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-tertiary-container to-tertiary"
                      style={{ width: "74%" }}
                    />
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">74%</p>
                </div>

                {/* Marina District */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-on-surface">
                      Marina District
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Steady
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-container"
                      style={{ width: "45%" }}
                    />
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">45%</p>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full text-center text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-1"
              >
                View Full Intelligence
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Partner Perks Card */}
            <div className="rounded-3xl p-6 border border-tertiary-container/20 bg-tertiary-container/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-tertiary text-xl">
                    local_gas_station
                  </span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wide">
                    Partner Perks
                  </p>
                  <p className="text-sm font-bold text-on-surface">
                    Save 15% on fuel today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
