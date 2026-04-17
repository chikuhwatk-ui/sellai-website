import { Link } from "react-router-dom";
import { DownloadSection } from "../components/DownloadSection";

const values = [
  {
    icon: "verified_user",
    title: "Trust",
    description:
      "Every transaction is backed by PIN-verified delivery, seller identity checks, and community accountability.",
  },
  {
    icon: "visibility",
    title: "Transparency",
    description:
      "Open pricing, real-time tracking, and honest reviews so every party knows exactly where they stand.",
  },
  {
    icon: "location_on",
    title: "Local-first",
    description:
      "Built for the neighborhoods we serve. Hyper-local matching keeps money circulating in your community.",
  },
  {
    icon: "diversity_3",
    title: "Inclusion",
    description:
      "Creating opportunities for everyone, regardless of background or technical ability.",
  },
];


export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* -- Hero -- */}
      <section className="mb-32 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
          About Our Vision
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] mb-6">
          Modernizing commerce for the{" "}
          <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
            Next Billion.
          </span>
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          We're building infrastructure that connects local markets to modern
          standards, starting in Harare, Zimbabwe.
        </p>

        <div className="max-w-5xl mx-auto">
          <AboutHeroIllustration />
        </div>
      </section>

      {/* -- Mission & Vision Bento -- */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Mission - 7 cols */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-6xl">
                hub
              </span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-[Manrope] mb-6">
              Empowering informal economies through technology
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              Making local commerce transparent, competitive, and trustworthy
              — starting with Zimbabwe.
            </p>
          </div>

          {/* Vision - 5 cols */}
          <div className="lg:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[320px] bg-gradient-to-br from-[#0E1B13] via-[#06231a] to-[#04130b]">
            {/* Decorative concentric rings — outward expansion across Africa */}
            <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <radialGradient id="visionGlow" cx="20%" cy="80%" r="80%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="320" fill="url(#visionGlow)" />
              {/* Concentric expansion rings */}
              {[60, 110, 160, 220, 290].map((r, i) => (
                <circle key={i} cx="80" cy="260" r={r} fill="none" stroke="rgba(111,251,190,0.18)" strokeWidth="1" strokeDasharray="2 6" />
              ))}
              {/* Country dots — Zim core, expansion targets */}
              <circle cx="80" cy="260" r="7" fill="#6FFBBE" />
              <circle cx="80" cy="260" r="14" fill="rgba(111,251,190,0.35)">
                <animate attributeName="r" values="7;20;7" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
              </circle>
              {[
                { x: 130, y: 200, label: 'ZA' },
                { x: 200, y: 145, label: 'KE' },
                { x: 145, y: 90, label: 'NG' },
                { x: 280, y: 80, label: 'EG' },
                { x: 250, y: 220, label: 'TZ' },
              ].map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="4" fill="rgba(111,251,190,0.7)" />
                  <text x={p.x + 8} y={p.y + 4} fill="rgba(255,255,255,0.55)" fontSize="9" fontWeight="700" fontFamily="Manrope, sans-serif">{p.label}</text>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2 block">
                Our Vision
              </span>
              <h3 className="text-2xl font-extrabold text-white font-[Manrope]">
                Expanding across Africa
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* -- Origin Story -- */}
      <section className="mb-32 -mx-6 md:-mx-8">
        <div className="bg-[#0E1B13] rounded-[2.5rem] mx-6 md:mx-8 px-10 md:px-16 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-[Manrope] text-white mb-8">
              Built in Zimbabwe, for Zimbabwe.
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed text-left md:text-center">
              <p>
                We watched a street vendor in Harare lose an entire day's income
                because a buyer couldn't find her stall after it moved.
                Meanwhile, that same buyer searched for hours for a product that
                was two blocks away.
              </p>
              <p>
                Abundance on one side. Scarcity on the other. Separated only by
                information.
              </p>
              <p>
                We'd tried everything ourselves — posting in group chats,
                scrolling online marketplaces, asking around. The tools existed,
                but none of them were{" "}
                <em className="text-white/90">built for this</em>. None of them
                understood what it means to buy and sell locally in Zimbabwe —
                the trust gap, the delivery problem, the payment friction.
              </p>
              <p className="text-white/90 font-medium">
                So we built the platform we wished existed.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-400 text-xl">
                    location_on
                  </span>
                </div>
                <span className="text-white/60 text-sm font-medium">
                  Harare, Zimbabwe
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-400 text-xl">
                    group
                  </span>
                </div>
                <span className="text-white/60 text-sm font-medium">
                  Zimbabwean founding team
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald-400 text-xl">
                    rocket_launch
                  </span>
                </div>
                <span className="text-white/60 text-sm font-medium">
                  Founded 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Values -- */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            What We Stand For
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 transition-all hover:bg-primary-container hover:shadow-xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-6 group-hover:bg-on-primary-container/10 transition-colors">
                <span className="material-symbols-outlined text-[#059669] text-3xl group-hover:text-on-primary-container transition-colors">
                  {v.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#111e16] group-hover:text-on-primary-container transition-colors">
                {v.title}
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed group-hover:text-on-primary-container/80 transition-colors">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* -- The Team Behind Sellai -- */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The People Behind Sellai
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope]">
            Small team. Big mission.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mx-auto mb-5">
              <span className="material-symbols-outlined text-[#059669] text-3xl">
                code
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#111e16] mb-2">
              Engineering
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              We built the entire platform — backend, mobile app, matching
              engine, and delivery infrastructure — from scratch in Zimbabwe.
            </p>
          </div>
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mx-auto mb-5">
              <span className="material-symbols-outlined text-[#059669] text-3xl">
                storefront
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#111e16] mb-2">
              Commerce
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              We've sold in WhatsApp groups, listed on Facebook, haggled at
              markets. We know the pain because we've lived it.
            </p>
          </div>
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mx-auto mb-5">
              <span className="material-symbols-outlined text-[#059669] text-3xl">
                public
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#111e16] mb-2">
              Local roots
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Every decision is informed by the reality on the ground — Paynow
              over Stripe, EcoCash over Apple Pay, PIN handoffs over signatures.
            </p>
          </div>
        </div>

        <p className="text-center text-on-surface-variant text-base mt-10 max-w-xl mx-auto leading-relaxed">
          We're a small, focused team of Zimbabwean entrepreneurs building the
          commerce infrastructure our communities deserve. We're not here to
          disrupt — we're here to serve.
        </p>
      </section>

      {/* -- CTA -- */}
      <section className="mb-24">
        <div className="bg-primary-container rounded-[2.5rem] px-10 md:px-16 py-16 md:py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] text-on-primary-container mb-6">
            Join the movement.
          </h2>
          <p className="text-on-primary-container/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Whether you're a buyer, seller, or runner — there's a place for you
            in the future of African commerce.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
            >
              Get the App
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-on-primary-container/30 text-on-primary-container hover:bg-on-primary-container/5 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* -- Download -- */}
      <DownloadSection variant="accent" />
    </main>
  );
}
