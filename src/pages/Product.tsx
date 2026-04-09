import { DownloadSection } from '../components/DownloadSection'

export default function Product() {
  return (
    <main className="pt-32 overflow-hidden">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
          Product
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] mb-6">
          See how Sellai{' '}
          <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
            works.
          </span>
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
          From posting a demand to receiving your delivery — here's the experience for buyers, sellers, and runners.
        </p>
      </section>

      {/* ── For Buyers ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The Buyer Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope]">
            Find what you need, fast
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 — Post Your Demand */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">edit_note</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111e16]">Post Your Demand</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
              Describe what you need and where — sellers nearby will see it instantly.
            </p>
            {/* Mockup */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 mb-2 block">
                Your demand
              </span>
              <p className="text-on-surface font-semibold text-base mb-3">5kg Fresh Tomatoes</p>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
                <span className="material-symbols-outlined text-base text-primary">location_on</span>
                Harare CBD
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-base text-primary">schedule</span>
                ASAP
              </div>
            </div>
          </div>

          {/* Step 2 — Compare Offers */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">compare_arrows</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111e16]">Compare Offers</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
              Verified sellers compete for your business. Pick the best fit.
            </p>
            {/* Mockup — two offer cards */}
            <div className="flex flex-col gap-3">
              <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-lg border-2 border-[#10B981]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[#111e16]">FarmFresh Direct</span>
                  <span className="text-[#059669] font-extrabold text-lg">$12.00</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-amber-500 text-sm">star</span>
                    4.9
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">near_me</span>
                    2.4km
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-[#111e16]">Organic Corner</span>
                  <span className="text-on-surface-variant font-extrabold text-lg">$14.50</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-amber-500 text-sm">star</span>
                    4.7
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">near_me</span>
                    0.8km
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 — Track Delivery */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">local_shipping</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111e16]">Track Delivery</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
              Follow your runner in real time and confirm handoff with a PIN.
            </p>
            {/* Mockup */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#10B981]/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#059669] text-xl">directions_run</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-[#111e16]">Marcus N.</p>
                  <p className="text-xs text-on-surface-variant">Your runner</p>
                </div>
              </div>
              <div className="bg-[#10B981]/10 rounded-xl p-3 mb-3">
                <p className="text-sm font-semibold text-[#059669] text-center">5 minutes away</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-on-surface-variant">Handoff PIN</span>
                <span className="font-mono font-bold text-[#111e16] tracking-widest">****</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── For Sellers ── */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              The Seller Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope]">
              Reach buyers who need you
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 — See Live Demands */}
            <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#059669] text-3xl">feed</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16]">See Live Demands</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                Browse real-time requests from buyers in your area.
              </p>
              {/* Mockup */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-blue-600 text-lg">inventory_2</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#111e16]">Eco-Friendly Packaging</p>
                    <p className="text-xs text-on-surface-variant mt-1">Bulk order, 50 units</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-on-surface-variant pt-3 border-t border-outline-variant/20">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">near_me</span>
                    0.8km away
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                    12 min ago
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 — Send Your Offer */}
            <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#059669] text-3xl">send</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16]">Send Your Offer</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                Set your price and delivery terms. One credit per offer.
              </p>
              {/* Mockup */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant">Your price</span>
                    <span className="font-extrabold text-lg text-[#059669]">$12.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant">Delivery</span>
                    <span className="font-semibold text-sm text-[#111e16]">Same day</span>
                  </div>
                  <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="text-xs text-on-surface-variant">Credit cost</span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-amber-600">
                      <span className="material-symbols-outlined text-sm">toll</span>
                      1 credit
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — Grow Your Reputation */}
            <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#059669] text-3xl">trending_up</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16]">Grow Your Reputation</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                Build trust and win more orders with a strong profile.
              </p>
              {/* Mockup */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-amber-500 text-2xl">star</span>
                  <span className="font-extrabold text-3xl text-[#111e16]">4.9</span>
                </div>
                <p className="text-xs text-on-surface-variant mb-4">Trust Score</p>
                <div className="flex items-center justify-center gap-6">
                  <div>
                    <p className="font-bold text-lg text-[#111e16]">120+</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Orders</p>
                  </div>
                  <div className="w-px h-8 bg-outline-variant/30" />
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-[#059669] text-2xl mb-0.5">verified</span>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── For Runners ── */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The Runner Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope]">
            Deliver and earn
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 — Accept Deliveries */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">assignment</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111e16]">Accept Deliveries</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
              Browse available tasks near you and pick what works.
            </p>
            {/* Mockup */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#059669] text-lg mt-0.5">trip_origin</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant/60">Pickup</p>
                    <p className="font-semibold text-sm text-[#111e16]">Market Square</p>
                  </div>
                </div>
                <div className="ml-[11px] border-l-2 border-dashed border-outline-variant/40 h-4" />
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant/60">Dropoff</p>
                    <p className="font-semibold text-sm text-[#111e16]">5th Avenue</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-sm">
                <span className="text-on-surface-variant">Distance</span>
                <span className="font-bold text-[#111e16]">3.2km</span>
              </div>
            </div>
          </div>

          {/* Card 2 — Navigate & Deliver */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">map</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111e16]">Navigate & Deliver</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
              Follow the optimized route and deliver with confidence.
            </p>
            {/* Mockup — stylized map */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg">
              <div className="relative bg-[#e8f8ea] rounded-xl h-36 overflow-hidden">
                {/* Stylized route lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" fill="none">
                  <path d="M30 90 Q60 90 80 60 Q100 30 140 40 Q170 48 175 30" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeDasharray="0" />
                  <circle cx="30" cy="90" r="6" fill="#10B981" />
                  <circle cx="175" cy="30" r="6" fill="#006c49" />
                  {/* Animated runner dot */}
                  <circle cx="110" cy="38" r="4" fill="#059669" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <div className="absolute bottom-2 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-[10px] font-bold text-[#059669]">
                  ETA: 8 min
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  Pickup
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#006c49]" />
                  Dropoff
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 — Get Paid */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">payments</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#111e16]">Get Paid</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
              Fast, transparent payouts after every completed delivery.
            </p>
            {/* Mockup */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant/60 mb-1">Today's earnings</p>
                <p className="font-extrabold text-3xl text-[#111e16]">$24.00</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-variant">Commission</span>
                  <span className="font-semibold text-[#111e16]">10%</span>
                </div>
                <div className="flex items-center justify-between text-sm pt-3 border-t border-outline-variant/20">
                  <span className="text-on-surface-variant">Payout via</span>
                  <span className="font-semibold text-[#059669] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">account_balance</span>
                    Paynow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security & Trust ── */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Built on Trust
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope]">
              Security at every step
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6 mx-auto">
                <span className="material-symbols-outlined text-[#059669] text-4xl">pin_drop</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16]">PIN-Verified Handoffs</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Every delivery is confirmed with a unique PIN code shared only between buyer and runner — no mix-ups, no disputes.
              </p>
            </div>

            <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6 mx-auto">
                <span className="material-symbols-outlined text-[#059669] text-4xl">verified_user</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16]">Seller Identity Checks</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Every seller passes identity verification before they can respond to demands, so you always know who you're dealing with.
              </p>
            </div>

            <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center hover:shadow-xl hover:shadow-emerald-900/5 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6 mx-auto">
                <span className="material-symbols-outlined text-[#059669] text-4xl">my_location</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16]">Real-Time Tracking</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Follow your delivery from pickup to dropoff on a live map. Know exactly where your order is at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Old Way vs Sellai Way ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The Shift
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope]">
            The old way vs the Sellai way
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-red-500 text-xl">history</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface-variant">The old way</h3>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Search groups & marketplaces",
                "Scroll through hundreds of listings",
                "DM sellers, wait for replies",
                "Negotiate price back and forth",
                "Arrange your own transport",
                "Hope it's what you ordered",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-on-surface-variant/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-on-surface-variant">{i + 1}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sellai Way */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border-2 border-[#10B981]/30 shadow-lg shadow-emerald-900/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#059669] text-xl">bolt</span>
              </div>
              <h3 className="text-xl font-bold text-[#059669]">The Sellai way</h3>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Post what you need",
                "Verified sellers send offers",
                "Compare prices & trust scores",
                "Accept the best offer",
                "Runner delivers to your door",
                "Confirm with PIN — done",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#10B981]/15 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#059669] text-lg">check</span>
                  </div>
                  <p className="text-on-surface font-medium text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Download ── */}
      <DownloadSection variant="accent" />
    </main>
  )
}
