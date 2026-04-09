import { useState } from "react";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqW-L3UCmPt4K-TxocFQ_WVvpW7Wovb6MqeveSxkqbAuvcs6jhevy0uezvStTWcXYaTbD32eO9REZ0SKmNeYL_fuH-eun0clkBNQyvjOPCZAGDOlCf-Cczvd2IxhKpBVXWwUEVn1otu_tIZU59EJwt880v9lCGg5VCaJ8QRZ2OHNWLzWyU5W3-lUar00pIIThwKChfeVF1EpD10kLVwLcy1aT5fOKgmpJn-wxLibROKHIl9PIlqGzyNjw0bAjc-BKjw9MB-aEfFJ0";

const demandCards = [
  {
    id: 1,
    title: "Bulk Eco-Friendly Packaging Supply",
    badge: "Buyer Exclusive",
    badgeColor: "bg-secondary text-on-secondary",
    time: "12m ago",
    distance: "0.8km",
    detail: "$2,400/mo",
    bidsInfo: "",
    buttonVariant: "filled" as const,
  },
  {
    id: 2,
    title: "Corporate Office Furniture Restoration",
    badge: "High Match",
    badgeColor: "bg-primary-container text-on-primary-container",
    time: "45m ago",
    distance: "2.4km",
    detail: "",
    bidsInfo: "3 Bids Rec.",
    buttonVariant: "outline" as const,
  },
  {
    id: 3,
    title: "Local Artisan Food Logistics",
    badge: "Runner Priority",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
    time: "2h ago",
    distance: "5.1km",
    detail: "6 Months",
    bidsInfo: "",
    buttonVariant: "filled" as const,
  },
  {
    id: 4,
    title: "Professional Interior Photography",
    badge: "Standard",
    badgeColor: "bg-surface-container-highest text-on-surface-variant",
    time: "4h ago",
    distance: "1.2km",
    detail: "Fixed Fee",
    bidsInfo: "",
    buttonVariant: "filled" as const,
  },
];

export default function SellerFeed() {
  const [sortBy, setSortBy] = useState("nearest");
  const [bidPrice, setBidPrice] = useState("");
  const [bidNotes, setBidNotes] = useState("");
  const [selectedCard, setSelectedCard] = useState(demandCards[0]);

  return (
    <main className="pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Seller Lead Feed
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] mb-4">
              Intelligence Hub
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              Connect with real-time buyer demands in your area. Browse, bid, and
              win — all from a single dashboard.
            </p>
          </div>

          {/* Verified Seller Profile Badge */}
          <div className="glass-card rounded-2xl border border-white/40 p-5 flex items-center gap-4 shrink-0 bloom-shadow">
            <img
              src={LOGO_URL}
              alt="SwiftLogistics logo"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-on-surface font-[Manrope]">
                  SwiftLogistics
                </span>
                <span className="material-symbols-outlined text-primary text-lg">
                  verified
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base text-tertiary">
                    military_tech
                  </span>
                  Top Tier
                </span>
                <span className="w-px h-3 bg-outline-variant" />
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base text-tertiary">
                    star
                  </span>
                  4.9 Rating
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Total Bids Sent */}
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30">
            <p className="text-sm text-on-surface-variant font-medium mb-1">
              Total Bids Sent
            </p>
            <p className="text-3xl font-extrabold text-on-surface font-[Manrope]">
              1,284
            </p>
          </div>

          {/* Win Rate */}
          <div className="bg-primary rounded-2xl p-6 relative overflow-hidden">
            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
            <div className="relative z-10">
              <p className="text-sm text-on-primary/80 font-medium mb-1">
                Win Rate
              </p>
              <p className="text-3xl font-extrabold text-on-primary font-[Manrope]">
                64.2%
              </p>
              <p className="text-xs text-on-primary/70 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                +2.4% this week
              </p>
            </div>
          </div>

          {/* Credits Remaining */}
          <div className="bg-surface-container-highest rounded-2xl p-6 border border-outline-variant/30">
            <p className="text-sm text-on-surface-variant font-medium mb-1">
              Credits Remaining
            </p>
            <p className="text-3xl font-extrabold text-on-surface font-[Manrope]">
              420
            </p>
            <a
              href="#"
              className="text-xs font-bold text-primary uppercase tracking-wider mt-1 inline-flex items-center gap-1 hover:underline"
            >
              <span className="material-symbols-outlined text-sm">
                add_circle
              </span>
              Refill Account
            </a>
          </div>
        </section>

        {/* ── Main Content: Feed + Sidebar ── */}
        <div className="flex gap-6">
          {/* ── Live Feed ── */}
          <section className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <h2 className="text-xl font-bold font-[Manrope] text-on-surface">
                  Live Feed: Nearby Demands
                </h2>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-surface-container rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-on-surface-variant border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
                >
                  <option value="nearest">Sort: Nearest</option>
                  <option value="newest">Sort: Newest</option>
                  <option value="budget">Sort: Budget</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {demandCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setSelectedCard(card)}
                  className={`glass-card rounded-2xl border p-5 text-left transition-all hover:scale-[1.01] hover:shadow-lg cursor-pointer ${
                    selectedCard.id === card.id
                      ? "border-primary/50 ring-2 ring-primary/20"
                      : "border-white/40"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {card.time}
                    </span>
                  </div>

                  <h3 className="font-bold text-on-surface font-[Manrope] mb-3 leading-snug">
                    {card.title}
                  </h3>

                  <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-4">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">
                        location_on
                      </span>
                      {card.distance}
                    </span>
                    {card.detail && (
                      <>
                        <span className="w-px h-3 bg-outline-variant" />
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">
                            payments
                          </span>
                          {card.detail}
                        </span>
                      </>
                    )}
                    {card.bidsInfo && (
                      <>
                        <span className="w-px h-3 bg-outline-variant" />
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">
                            groups
                          </span>
                          {card.bidsInfo}
                        </span>
                      </>
                    )}
                  </div>

                  {card.buttonVariant === "filled" ? (
                    <span className="inline-flex items-center gap-1.5 bg-primary text-on-primary text-sm font-bold px-4 py-2 rounded-xl">
                      <span className="material-symbols-outlined text-base">
                        bolt
                      </span>
                      Quick Bid
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 border-2 border-primary text-primary text-sm font-bold px-4 py-2 rounded-xl">
                      <span className="material-symbols-outlined text-base">
                        bolt
                      </span>
                      Quick Bid
                    </span>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* ── Quick Bid Sidebar ── */}
          <aside className="hidden xl:block w-[340px] shrink-0">
            <div className="glass-card rounded-2xl border border-white/40 p-6 bloom-shadow sticky top-28">
              <h3 className="font-bold font-[Manrope] text-on-surface mb-1">
                Quick Bid
              </h3>
              <p className="text-xs text-on-surface-variant mb-5">
                Submit your proposal for the selected lead
              </p>

              {/* Selected lead info */}
              <div className="bg-surface-container-low rounded-xl p-4 mb-5 border border-outline-variant/20">
                <p className="text-xs text-on-surface-variant mb-1">
                  Selected Lead
                </p>
                <p className="font-bold text-on-surface text-sm font-[Manrope] leading-snug">
                  {selectedCard.title}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  {selectedCard.distance}
                  <span className="w-px h-3 bg-outline-variant" />
                  {selectedCard.time}
                </div>
              </div>

              {/* Price input */}
              <label className="block mb-4">
                <span className="text-xs font-medium text-on-surface-variant mb-1.5 block">
                  Your Price
                </span>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold text-sm">
                    $
                  </span>
                  <input
                    type="text"
                    value={bidPrice}
                    onChange={(e) => setBidPrice(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-outline"
                  />
                </div>
              </label>

              {/* Bid notes */}
              <label className="block mb-5">
                <span className="text-xs font-medium text-on-surface-variant mb-1.5 block">
                  Bid Notes
                </span>
                <textarea
                  value={bidNotes}
                  onChange={(e) => setBidNotes(e.target.value)}
                  rows={3}
                  placeholder="Briefly describe your offer, timeline, and why you're the best fit..."
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant/40 text-on-surface text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-outline resize-none"
                />
              </label>

              {/* Fee breakdown */}
              <div className="flex flex-col gap-2 text-sm mb-5 border-t border-outline-variant/30 pt-4">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Service Fee</span>
                  <span className="font-medium">2%</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Credits Required</span>
                  <span className="font-bold text-on-surface">5</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold py-3 rounded-xl text-sm hover:scale-[1.02] transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">send</span>
                Submit Proposal
              </button>

              {/* Seller tip */}
              <div className="mt-5 bg-surface-container-low rounded-xl p-4 border border-outline-variant/20">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">
                    lightbulb
                  </span>
                  <div>
                    <p className="text-xs font-bold text-on-surface mb-1">
                      Seller Tip
                    </p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Bids submitted within 15 minutes of a demand posting are
                      3x more likely to win. Speed is your advantage!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
