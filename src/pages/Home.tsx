import { Link } from "react-router-dom";

const partners = ["TechVentures", "GlobalTrade", "AfriConnect", "SwiftPay", "LocalFirst"];

const steps = [
  {
    icon: "edit_note",
    number: "01",
    title: "Post Demand",
    description:
      "Describe what you need in plain language. Our AI understands context, urgency, and location to match you instantly.",
  },
  {
    icon: "storefront",
    number: "02",
    title: "Receive Offers",
    description:
      "Verified sellers and runners compete to fulfill your request with the best price, speed, and quality.",
  },
  {
    icon: "local_shipping",
    number: "03",
    title: "Choose & Deliver",
    description:
      "Pick the offer that suits you. Track your order in real time until it arrives at your doorstep.",
  },
];

const miniFeatures = [
  { icon: "psychology", label: "Smart Matching" },
  { icon: "translate", label: "Multi-Language" },
  { icon: "location_on", label: "Geo-Aware" },
  { icon: "trending_up", label: "Price Prediction" },
];

const trustBadges = [
  { icon: "verified_user", label: "Verified Sellers", description: "Every seller is identity-checked and reviewed." },
  { icon: "pin_drop", label: "PIN Handovers", description: "Secure delivery confirmation with unique PINs." },
  { icon: "account_balance_wallet", label: "Escrow Payments", description: "Funds held safely until you confirm receipt." },
];

const roles = [
  {
    icon: "shopping_cart",
    title: "Buyer",
    accent: "blue",
    accentColor: "text-blue-600",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    description:
      "Post what you need and get competitive offers from verified sellers and runners near you.",
    link: "/buyer-dashboard",
    cta: "Start Buying",
  },
  {
    icon: "store",
    title: "Seller",
    accent: "green",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    description:
      "List your products or respond to buyer demand. Grow your business with AI-powered visibility.",
    link: "/seller-feed",
    cta: "Start Selling",
  },
  {
    icon: "directions_run",
    title: "Runner",
    accent: "amber",
    accentColor: "text-amber-600",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    description:
      "Pick up and deliver orders in your area. Earn on your own schedule with flexible gigs.",
    link: "/runner-hub",
    cta: "Start Running",
  },
];

const testimonials = [
  {
    quote:
      "Sellai completely changed how I source products. I just describe what I need and offers come flooding in within minutes.",
    name: "Amina K.",
    role: "Small Business Owner",
  },
  {
    quote:
      "As a runner, I love the flexibility. The AI routing means I spend less time driving and more time earning.",
    name: "David M.",
    role: "Delivery Runner",
  },
  {
    quote:
      "The escrow system gave me the confidence to sell to strangers online. My revenue has tripled since joining.",
    name: "Thandiwe N.",
    role: "Independent Seller",
  },
];

const stats = [
  { value: "15,000+", label: "Runners" },
  { value: "2,500+", label: "Sellers" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

const comparisons = [
  { feature: "AI-powered demand matching", traditional: false, sellai: true },
  { feature: "Escrow payment protection", traditional: false, sellai: true },
  { feature: "Real-time delivery tracking", traditional: false, sellai: true },
  { feature: "Verified seller network", traditional: false, sellai: true },
  { feature: "Multi-language support", traditional: false, sellai: true },
  { feature: "Static product listings", traditional: true, sellai: false },
  { feature: "Manual search required", traditional: true, sellai: false },
  { feature: "No delivery integration", traditional: true, sellai: false },
];

export default function Home() {
  return (
    <main className="pt-32 overflow-hidden">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] mb-6">
          Stop searching.{" "}
          <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
            Start asking.
          </span>
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Sellai is the AI-powered marketplace where buyers post what they need
          and sellers compete to deliver. Faster, smarter, and built on trust.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/buyer-dashboard"
            className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
          >
            Get Started
          </Link>
          <button
            type="button"
            className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#006c49] text-[#006c49] hover:bg-[#006c49]/5 transition-all"
          >
            <span className="material-symbols-outlined align-middle mr-2 text-xl">
              play_circle
            </span>
            Watch Demo
          </button>
        </div>

        <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-4 border border-white/40 max-w-4xl mx-auto shadow-2xl shadow-emerald-900/5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPNx2fKQLAxpJspDnpX6YJtivupl2QVX54d8jDMmcyoWkqKxUvRAOAt72YOw-NH69ujfMz20-8e5HSVYtv4hgjp3TX1SSYk5GAXHYDIBxLUuvOy1-anAvYx16cIT_cXu2jUnhJ-2AyQ1yq9ht4RKygsoCfYrFPzc9iwgvrqnWkAmF196ilJ-UR4En8CaVOmzQTO5-dEz7zWKIfllfS_yERgURUrpjSa-vVYu8APdD5cW-4R6C12YJESOEv1URksVk6L4rqOUhLy7Y"
            alt="Sellai marketplace preview"
            className="w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      {/* ── Partner / Logo Bar ── */}
      <section className="mb-32">
        <p className="text-center text-sm text-on-surface-variant/60 font-medium uppercase tracking-widest mb-8">
          Trusted by leading partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 px-6">
          {partners.map((name) => (
            <span
              key={name}
              className="text-xl font-bold text-[#111e16]/20 tracking-wide select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Three simple steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 relative group hover:shadow-xl hover:shadow-emerald-900/5 transition-all"
            >
              <span className="text-6xl font-black text-[#10B981]/10 absolute top-6 right-8 select-none">
                {step.number}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#059669] text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16]">
                {step.title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Competitive Edge
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Why Sellai wins
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI-Powered Matching */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">
                auto_awesome
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#111e16]">
              AI-Powered Matching
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Our intelligent engine analyzes demand context, location,
              preferences, and seller capabilities to deliver the best matches
              in seconds — not hours.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {miniFeatures.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-xl bg-[#eefdf0] p-4"
                >
                  <span className="material-symbols-outlined text-[#059669]">
                    {f.icon}
                  </span>
                  <span className="font-semibold text-sm text-[#111e16]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Built In */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">
                shield
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#111e16]">
              Trust Built In
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Every transaction is protected end-to-end. From identity
              verification to escrow payments, we make sure both sides are
              covered.
            </p>
            <div className="flex flex-col gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-start gap-4 rounded-xl bg-[#eefdf0] p-4"
                >
                  <span className="material-symbols-outlined text-[#059669] mt-0.5">
                    {badge.icon}
                  </span>
                  <div>
                    <span className="font-semibold text-sm text-[#111e16] block">
                      {badge.label}
                    </span>
                    <span className="text-on-surface-variant text-sm">
                      {badge.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Role Cards ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            For Every Role
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Built for Everyone
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className={`bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border ${role.accentBorder} hover:shadow-xl transition-all flex flex-col`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${role.accentBg} flex items-center justify-center mb-6`}
              >
                <span
                  className={`material-symbols-outlined ${role.accentColor} text-3xl`}
                >
                  {role.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16]">
                {role.title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8 flex-1">
                {role.description}
              </p>
              <Link
                to={role.link}
                className={`inline-flex items-center gap-2 font-bold ${role.accentColor} hover:underline`}
              >
                {role.cta}
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Loved by thousands
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 flex flex-col"
            >
              <span className="material-symbols-outlined text-[#10B981]/30 text-5xl mb-4">
                format_quote
              </span>
              <p className="text-[#111e16] text-lg leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#111e16]">{t.name}</p>
                <p className="text-on-surface-variant text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#111e16] py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {s.value}
              </p>
              <p className="text-emerald-400 font-medium uppercase tracking-wider text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Sellai (Comparison) ── */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The Difference
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Why Sellai?
          </h2>
        </div>

        <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-8 gap-y-4 items-center">
            {/* Header */}
            <div />
            <span className="text-sm font-bold text-on-surface-variant text-center">
              Traditional
            </span>
            <span className="text-sm font-bold text-[#059669] text-center">
              Sellai
            </span>

            {comparisons.map((row) => (
              <div key={row.feature} className="contents">
                <span className="text-[#111e16] font-medium">
                  {row.feature}
                </span>
                <span className="flex justify-center">
                  {row.traditional ? (
                    <span className="material-symbols-outlined text-amber-500">
                      check_circle
                    </span>
                  ) : (
                    <span className="material-symbols-outlined text-red-400">
                      cancel
                    </span>
                  )}
                </span>
                <span className="flex justify-center">
                  {row.sellai ? (
                    <span className="material-symbols-outlined text-[#059669]">
                      check_circle
                    </span>
                  ) : (
                    <span className="material-symbols-outlined text-red-400">
                      cancel
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="mb-0">
        <div className="bg-gradient-to-r from-[#10B981] to-[#059669] py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] text-white mb-6">
              Ready to transform your commerce?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join thousands of buyers, sellers, and runners already using
              Sellai to trade smarter.
            </p>
            <Link
              to="/buyer-dashboard"
              className="inline-block bg-white text-[#059669] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
