import { Link } from "react-router-dom";
import { DownloadSection } from "../components/DownloadSection";

const steps = [
  {
    icon: "edit_note",
    number: "01",
    title: "Post a Demand",
    description:
      "Tell us what you need. Describe the product or service and your location.",
  },
  {
    icon: "storefront",
    number: "02",
    title: "Sellers Compete",
    description:
      "Verified sellers near you see your demand and send their best offers.",
  },
  {
    icon: "local_shipping",
    number: "03",
    title: "Choose & Get it Delivered",
    description:
      "Pick the offer that works for you. A runner brings it to your door, confirmed with a secure PIN.",
  },
];

const miniFeatures = [
  { icon: "psychology", label: "Smart Matching" },
  { icon: "location_on", label: "Geo-Aware" },
  { icon: "verified", label: "Trust Scores" },
  { icon: "credit_card", label: "Credit-Based Offers" },
];

const trustBadges = [
  { icon: "pin_drop", label: "PIN-Secured Deliveries", description: "Every handoff confirmed with a unique PIN code." },
  { icon: "verified_user", label: "Seller Identity Verification", description: "Every seller passes identity checks before making offers." },
  { icon: "my_location", label: "Real-Time Delivery Tracking", description: "Track your runner from pickup to your doorstep." },
  { icon: "toll", label: "Credit-Based Offers", description: "Sellers use credits to send offers — no spam, only serious replies." },
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
    link: "/product",
    cta: "Learn More",
  },
  {
    icon: "store",
    title: "Seller",
    accent: "green",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    description:
      "Respond to buyer demand in your area. Grow your business with smart visibility and trust scores.",
    link: "/for-sellers",
    cta: "Learn More",
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
    link: "/for-runners",
    cta: "Learn More",
  },
];

const valueProps = [
  {
    icon: "money_off",
    title: "Zero Upfront Cost",
    description: "List your products for free. Only pay per offer with affordable credit bundles.",
  },
  {
    icon: "verified_user",
    title: "Verified Sellers",
    description: "Every seller passes identity checks before they can make offers.",
  },
  {
    icon: "pin_drop",
    title: "PIN-Secured Delivery",
    description: "Every handoff confirmed with a unique PIN. You pay only when you receive.",
  },
  {
    icon: "flag",
    title: "Built for Zimbabwe",
    description: "Local payments via Paynow. Designed for how commerce actually works here.",
  },
];

const comparisons = [
  { feature: "Smart demand matching", traditional: false, sellai: true },
  { feature: "PIN-verified delivery", traditional: false, sellai: true },
  { feature: "Real-time delivery tracking", traditional: false, sellai: true },
  { feature: "Verified seller network", traditional: false, sellai: true },
  { feature: "Credit-based system", traditional: false, sellai: true },
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
          The marketplace connecting buyers with verified local sellers and
          reliable delivery runners across Zimbabwe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#download"
            className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
          >
            Get the App
          </a>
          <Link
            to="/product"
            className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#006c49] text-[#006c49] hover:bg-[#006c49]/5 transition-all"
          >
            <span className="material-symbols-outlined align-middle mr-2 text-xl">
              info
            </span>
            See How It Works
          </Link>
        </div>

        <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-4 border border-white/40 max-w-4xl mx-auto shadow-2xl shadow-emerald-900/5">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPNx2fKQLAxpJspDnpX6YJtivupl2QVX54d8jDMmcyoWkqKxUvRAOAt72YOw-NH69ujfMz20-8e5HSVYtv4hgjp3TX1SSYk5GAXHYDIBxLUuvOy1-anAvYx16cIT_cXu2jUnhJ-2AyQ1yq9ht4RKygsoCfYrFPzc9iwgvrqnWkAmF196ilJ-UR4En8CaVOmzQTO5-dEz7zWKIfllfS_yERgURUrpjSa-vVYu8APdD5cW-4R6C12YJESOEv1URksVk6L4rqOUhLy7Y"
            alt="Sellai marketplace preview"
            className="w-full rounded-[1.5rem] object-cover"
          />
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
          {/* Smart Matching */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">
                auto_awesome
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#111e16]">
              Smart Matching
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Our algorithm matches your demand with the best nearby sellers
              based on distance, category, trust score, and availability.
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

          {/* Verified & Trusted */}
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#059669] text-3xl">
                shield
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#111e16]">
              Verified & Trusted
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Every transaction is protected with real safeguards. PIN-secured
              deliveries, identity-verified sellers, and a credit system that
              keeps offers serious.
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

      {/* ── Why Local Traders Choose Sellai ── */}
      <section className="bg-[#111e16] py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-[Manrope] text-white text-center mb-16">
            Why local traders choose Sellai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((vp) => (
              <div key={vp.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mx-auto mb-5">
                  <span className="material-symbols-outlined text-emerald-400 text-3xl">
                    {vp.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {vp.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {vp.description}
                </p>
              </div>
            ))}
          </div>
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

      {/* ── Download Section ── */}
      <DownloadSection />

      {/* ── CTA Section ── */}
      <section className="mb-0">
        <div className="bg-gradient-to-r from-[#10B981] to-[#059669] py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] text-white mb-6">
              Ready to try Sellai?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join buyers, sellers, and runners across Zimbabwe already using
              Sellai to trade smarter.
            </p>
            <a
              href="#download"
              className="inline-block bg-white text-[#059669] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg"
            >
              Get the App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
