import { useState } from "react";

const recentActivity = [
  {
    icon: "local_shipping",
    color: "bg-blue-100 text-blue-600",
    title: "Order Delivered",
    description: "5kg Basmati Rice from GreenField Grocers",
    time: "25 min ago",
  },
  {
    icon: "local_offer",
    color: "bg-emerald-100 text-emerald-600",
    title: "New Offer Received",
    description: "Organic Corner responded to your milk demand",
    time: "1h ago",
  },
  {
    icon: "payments",
    color: "bg-amber-100 text-amber-600",
    title: "Payment Confirmed",
    description: "$18.50 paid to FarmFresh Direct",
    time: "3h ago",
  },
];

export default function BuyerDashboard() {
  const [demandText, setDemandText] = useState("");
  const [urgency, setUrgency] = useState("ASAP");
  const [radius, setRadius] = useState("5km");
  const [step] = useState(1);

  return (
    <main className="pt-24 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* ── Hero Header ── */}
        <section>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Buyer Dashboard
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] mb-4">
            Welcome back, <span className="text-primary">Alex.</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
            Manage your demands, review offers from nearby sellers, and track
            your deliveries — all in one place.
          </p>
        </section>

        {/* ── Bento Grid ── */}
        <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            {/* Post New Demand Card */}
            <div className="glass-card bloom-shadow rounded-[2rem] p-8 border border-white/40 relative overflow-hidden">
              {/* Emerald glow top-right */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <span className="material-symbols-outlined text-primary text-3xl">
                  campaign
                </span>
                <h3 className="text-xl font-bold text-on-surface">
                  Post New Demand
                </h3>
              </div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <span className="material-symbols-outlined text-primary text-3xl">
                  insights
                </span>
                <p className="text-on-surface-variant text-sm font-medium">
                  Intelligence Card
                </p>
              </div>

              <div className="space-y-4 relative z-10">
                <div>
                  <label className="block text-on-surface-variant font-medium text-sm mb-2">
                    What do you need?
                  </label>
                  <input
                    type="text"
                    value={demandText}
                    onChange={(e) => setDemandText(e.target.value)}
                    placeholder="e.g. 2kg organic honey, fresh flowers..."
                    className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-on-surface-variant/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-on-surface-variant font-medium text-sm mb-2">
                      Urgency
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface font-medium focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="ASAP">ASAP</option>
                      <option value="Today">Today</option>
                      <option value="This Week">This Week</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-on-surface-variant font-medium text-sm mb-2">
                      Radius
                    </label>
                    <select
                      value={radius}
                      onChange={(e) => setRadius(e.target.value)}
                      className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface font-medium focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="5km">5 km</option>
                      <option value="10km">10 km</option>
                      <option value="25km">25 km</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-6 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-all shadow-lg shadow-emerald-500/20"
                >
                  <span className="material-symbols-outlined align-middle mr-2 text-xl">
                    cell_tower
                  </span>
                  Broadcast Demand
                </button>

                {/* 3-step progress dots */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        s === step
                          ? "bg-primary scale-125"
                          : "bg-outline-variant"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="glass-card bloom-shadow rounded-[2rem] p-8 border border-white/40">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  history
                </span>
                <h3 className="text-xl font-bold text-on-surface">
                  Recent Activity
                </h3>
              </div>

              <div className="space-y-4">
                {recentActivity.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color}`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-on-surface font-semibold text-sm">
                        {item.title}
                      </p>
                      <p className="text-on-surface-variant text-sm truncate">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-on-surface-variant/60 text-xs whitespace-nowrap mt-0.5">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            {/* Active Demands Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold font-[Manrope] text-on-surface">
                Active Demands
              </h2>
              <button
                type="button"
                className="text-primary font-semibold text-sm hover:underline flex items-center gap-1"
              >
                View History
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Main Demand Card */}
            <div className="glass-card bloom-shadow rounded-[2.5rem] p-8 border border-white/40">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-1">
                    5kg Fresh Tomatoes
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    3 offers received &bull; Posted 2h ago
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    <span className="material-symbols-outlined text-sm">
                      bolt
                    </span>
                    Priority
                  </span>
                </div>
              </div>

              {/* Offer Rows */}
              <div className="space-y-4">
                {/* Offer 1 - FarmFresh Direct */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-surface-container-low/60 rounded-2xl p-5 border border-outline-variant/30">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoPICy85VUbx96C3IBOaMKxDkvNkUuI0EFXUf4yTOnf3C2pVoyEgffLHFJ7olbB-OnsrzWEWKQcYdQmF1LHYA0lEKxI6AOmecyWnjzRC-jUdIJ4wpQQfDXOnRViXB63aUDHqzGasp-gzj202I2k-inEOkaHc4W5zl99teZ3K0ZRjT4LPX-_KoH3r16x__gbPtV15w8oU8LBbmoWgpsMMs6crNTzjAPWq2kgjHSyqeWDbzmw7tgnZsZGocWsH3rJB_GC-uVozMroEI"
                    alt="FarmFresh Direct"
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-on-surface font-bold text-sm">
                        FarmFresh Direct
                      </p>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        <span className="material-symbols-outlined text-sm">
                          star
                        </span>
                        <span className="text-xs font-bold text-on-surface-variant">
                          4.9
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                      <span className="font-bold text-on-surface text-lg">
                        $12.00
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          location_on
                        </span>
                        2.4 km
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="bg-gradient-to-r from-[#2170e4] to-[#0058be] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
                  >
                    Accept
                  </button>
                </div>

                {/* Offer 2 - Organic Corner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-surface-container-low/60 rounded-2xl p-5 border border-outline-variant/30">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyC5MdC-53TD1o5pIuTOPKQOVepXuDvcFvtj0j5mm95fin2NNaQ9wDCWQZpcGvFN0JAlh9HM9dHqjX5do1muObsfg_mfBCvhc4ncQlcfFhon29F_V6go-qRsRpHtnxCVeCtnnZGlCvVzvfMEU3zfhaY8EVy8rQl52eKY4NKED7gOtGJ4xkpiS6j0pH-o4wncwrtxjub7IM25P9li0XcV7JHhOyx2_wraX2vdx4niQ-qqB7v0iw9FhTbChbyuGVpTnV_4TMjWHJEgs"
                    alt="Organic Corner"
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-on-surface font-bold text-sm">
                        Organic Corner
                      </p>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        <span className="material-symbols-outlined text-sm">
                          star
                        </span>
                        <span className="text-xs font-bold text-on-surface-variant">
                          4.7
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant text-sm">
                      <span className="font-bold text-on-surface text-lg">
                        $14.50
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          location_on
                        </span>
                        0.8 km
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-300 transition-all"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Demand Card */}
            <div className="glass-card bloom-shadow rounded-[2rem] p-8 border border-white/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-1">
                    2L Whole Milk - Organic
                  </h3>
                  <p className="text-on-surface-variant text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-on-surface-variant/60 animate-pulse">
                      hourglass_top
                    </span>
                    Waiting for offers...
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  Broadcasting
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Runner Tracking ── */}
        <section className="bg-emerald-900 rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
          {/* Subtle glow accents */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-400/5 blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 block">
                Live Tracking
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-[Manrope] text-white mb-4">
                Your Runner, Marcus, is on the move.
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-emerald-400 text-2xl">
                    location_on
                  </span>
                  <div>
                    <p className="text-white/60 text-sm">Current Location</p>
                    <p className="text-white font-semibold">
                      Market Street &amp; 5th Ave
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-emerald-400 text-2xl">
                    schedule
                  </span>
                  <div>
                    <p className="text-white/60 text-sm">Estimated Arrival</p>
                    <p className="text-white font-semibold">12 minutes</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/30"
              >
                <span className="material-symbols-outlined align-middle mr-2 text-xl">
                  map
                </span>
                Track on Map
              </button>
            </div>

            {/* Map placeholder */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkQEQG1mUQVTDqDukh5pKJ94B8JcsdQL0DidKEH1SOiBW0MaT_etv7P-ARwon85O_c1qNEuIpKDcd4lc8I9uxfIL84c0SsXPcppz5F-C8j0_2arTP4Iuy7wmCwnTWIGZ9ARsDviVd_mGeOobhH5eLmg9mJ1-NexP8gUfUnRdipN3PcN1NkS-smw3NAW1rdVaIzJIZVcNsG-NuquA-P6zHv4GcyOWDfp6Kvnj8yGCNOx1PfkdCTGvC-f-xzWvO5VREEmzIkR_SAhMM"
                alt="Runner tracking map"
                className="w-full h-full object-cover"
              />
              {/* Pulsing bike icon overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-emerald-400/40 animate-ping" />
                  <div className="relative w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <span className="material-symbols-outlined text-white text-3xl">
                      pedal_bike
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
