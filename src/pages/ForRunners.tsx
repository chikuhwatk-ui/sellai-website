import { Link } from "react-router-dom";

const painPoints = [
  {
    icon: "money_off",
    title: "Predatory Commissions",
    description:
      "Other platforms take up to 40% of every delivery. Sellai caps runner fees at 12%, so you keep what you earn.",
  },
  {
    icon: "wrong_location",
    title: "Zero Local Availability",
    description:
      "Most gig apps ignore underserved areas. Sellai's AI matches demand to nearby runners — no dead zones.",
  },
];

const steps = [
  {
    icon: "app_registration",
    number: "01",
    title: "Register",
    description:
      "Sign up in minutes with your phone number and basic details. No lengthy paperwork required.",
  },
  {
    icon: "verified",
    number: "02",
    title: "Verify Vehicle",
    description:
      "Upload your vehicle documents and pass a quick background check to get approved.",
  },
  {
    icon: "my_location",
    number: "03",
    title: "Set Area",
    description:
      "Choose your preferred delivery zones and availability hours. Work where and when it suits you.",
  },
  {
    icon: "rocket_launch",
    number: "04",
    title: "Start Earning",
    description:
      "Accept delivery requests, complete orders, and watch your earnings grow — with instant payouts.",
    highlight: true,
  },
];

const vehicleTypes = [
  {
    icon: "electric_bike",
    title: "E-Bikes",
    tier: "$$",
    description:
      "Perfect for short-distance urban deliveries. Low cost, high demand in city centres.",
  },
  {
    icon: "directions_car",
    title: "Standard Vehicles",
    tier: "$$$",
    description:
      "Cars and motorcycles for medium-range orders. The most popular runner category.",
  },
  {
    icon: "local_shipping",
    title: "Cargo Vans",
    tier: "$$$$",
    description:
      "Handle bulk and oversized deliveries for premium payouts per trip.",
  },
];

export default function ForRunners() {
  return (
    <main className="pt-24 overflow-hidden">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-on-tertiary-container bg-tertiary-container/15 px-4 py-2 rounded-full mb-6">
              Earn on Your Terms
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] mb-6 text-on-surface">
              Earn per delivery with the{" "}
              <span className="bg-gradient-to-r from-tertiary-container to-tertiary bg-clip-text text-transparent">
                Sellai runner network.
              </span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-10">
              Flexible income, instant payouts, and fair commissions. Join
              thousands of runners already delivering on their own schedule.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/runner-hub"
                className="bg-gradient-to-r from-tertiary-container to-tertiary text-on-tertiary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-tertiary-container/20"
              >
                Become a runner
              </Link>
              <button
                type="button"
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/5 transition-all"
              >
                <span className="material-symbols-outlined align-middle mr-2 text-xl">
                  payments
                </span>
                View Earnings
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[2rem] p-4 border border-white/40 shadow-2xl shadow-tertiary-container/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdaruTdJbe1b0Gc238X2O8y-kF_T8GKkTVF4q0iTxjnY-8KV4yLYnMYgNVWJO44b8qfrbUh11KlSVdmQbHscfwUQtNwJSTgReLjdnr1GF7pv7yAyetphqC3XKt-C9rpYS-ZTS1oYTyAr3VTwvwlQpsa2yT3FNEwBb3MqN4VqiITArweIYIM-tBIVzY1VoI8mZScFU92s-izLEe2Z-956qo7yCUletCURRoY0CK4CSiOgntn8PtKEkm0G4WrH5qW8abL3_n5TZXmAQ"
                alt="Sellai runner delivering an order"
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>
            {/* Floating payout badge */}
            <div className="absolute -bottom-4 left-6 glass-card rounded-2xl px-5 py-3 border border-white/40 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-container/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary-container text-xl">
                  account_balance_wallet
                </span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium">
                  Average Daily Payout
                </p>
                <p className="text-lg font-extrabold text-on-surface font-[Manrope]">
                  $240.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-tertiary-container mb-4 block">
            The Problem
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] text-on-surface">
            Stop giving away your{" "}
            <span className="bg-gradient-to-r from-error to-error/70 bg-clip-text text-transparent">
              hard-earned profits.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-error/5 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-error-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-error-container text-3xl">
                  {point.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">
                {point.title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-6 border border-white/40 text-center">
            <p className="text-4xl font-extrabold font-[Manrope] text-tertiary-container mb-1">
              88%
            </p>
            <p className="text-on-surface-variant text-sm font-medium">
              Runner Retention Rate
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 border border-white/40 text-center">
            <p className="text-4xl font-extrabold font-[Manrope] text-tertiary-container mb-1">
              Instant
            </p>
            <p className="text-on-surface-variant text-sm font-medium">
              Payouts to Your Wallet
            </p>
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-tertiary-container mb-4 block">
            Getting Started
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] text-on-surface">
            Four steps to the driver's seat
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-[2rem] p-8 border relative group hover:shadow-xl transition-all ${
                step.highlight
                  ? "bg-primary-container/15 border-primary-container/30 hover:shadow-primary/10"
                  : "bg-white/55 backdrop-blur-xl border-white/40 hover:shadow-emerald-900/5"
              }`}
            >
              <span className="text-6xl font-black text-tertiary-container/10 absolute top-6 right-8 select-none">
                {step.number}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-tertiary-container/15 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary-container text-3xl">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">
                {step.title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Vehicle Types ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-tertiary-container mb-4 block">
            Vehicles
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] text-on-surface">
            What can you drive?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Vehicle cards */}
          <div className="flex flex-col gap-6">
            {vehicleTypes.map((vehicle) => (
              <div
                key={vehicle.title}
                className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 hover:shadow-xl hover:shadow-tertiary-container/5 transition-all flex items-start gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-tertiary-container/15 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-tertiary-container text-3xl">
                    {vehicle.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-on-surface">
                      {vehicle.title}
                    </h3>
                    <span className="text-sm font-bold text-tertiary-container bg-tertiary-container/10 px-3 py-1 rounded-full">
                      {vehicle.tier}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map with overlays */}
          <div className="relative">
            <div className="glass-card rounded-[2rem] p-4 border border-white/40 shadow-2xl shadow-tertiary-container/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAan7MOLhE1Wvq3KZCtUvsYLHTq9xMwnv1mC9PYZcWy20Y_W7Xqx4BCvW9S51THIkMG8ZvBQ8I084x3yRu2l9t-Eh0bVhah8APS-c9z8dVE63BJLWgxg6tz4tzAd0ZxC-1KTSjnFE4OlM7USTXN3wRW-rqr1YjkGFapEdInMhFRgPCqyzezG0TBqzgZgJFy2nR3QXYVbOVy0o2RYd8LfoOVRh8PzMID9aSQNfkGcYmFf_LFJNd6-y5PyXa6GaNiwMn5g_TcmfyeGIc"
                alt="Delivery coverage map"
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>

            {/* Pulsing demand marker */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-tertiary-container/30 animate-ping" />
                <span className="relative block w-5 h-5 rounded-full bg-tertiary-container border-2 border-white shadow" />
              </div>
              <span className="mt-2 text-xs font-bold text-on-tertiary bg-tertiary-container px-3 py-1 rounded-full shadow whitespace-nowrap">
                High Demand Zone
              </span>
            </div>

            {/* PIN Verification card */}
            <div className="absolute -bottom-4 right-6 glass-card rounded-2xl px-5 py-3 border border-white/40 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/15 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">
                  pin
                </span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-medium">
                  PIN Verification
                </p>
                <p className="text-sm font-bold text-on-surface">
                  Secure handoff every time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#111e16] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] text-white mb-6">
            Ready to run?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Sign up today and start earning with the fastest-growing delivery
            network. Your first delivery is just minutes away.
          </p>
          <Link
            to="/runner-hub"
            className="inline-block bg-gradient-to-r from-tertiary-container to-tertiary text-on-tertiary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-tertiary-container/20"
          >
            Become a runner
          </Link>
        </div>
      </section>
    </main>
  );
}
