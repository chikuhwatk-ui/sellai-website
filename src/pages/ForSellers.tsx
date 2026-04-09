import { Link } from "react-router-dom";
import { DownloadSection } from "../components/DownloadSection";

const painPoints = [
  "Relying on word-of-mouth and hoping customers find you",
  "Paying for social media ads that reach the wrong audience",
  "Losing sales because buyers don't know you exist nearby",
];

const steps = [
  {
    number: "01",
    icon: "person_add",
    title: "Register",
    description:
      "Create your seller profile in under 2 minutes. No paperwork, no hassle.",
  },
  {
    number: "02",
    icon: "category",
    title: "Set Categories",
    description:
      "Tell us what you sell. Smart matching connects you with buyers looking for exactly your products.",
    highlighted: true,
  },
  {
    number: "03",
    icon: "notifications_active",
    title: "Receive Demands",
    description:
      "Get notified instantly when a buyer near you posts a request in your category.",
  },
  {
    number: "04",
    icon: "send",
    title: "Send Offers",
    description:
      "Use a credit to respond with your best price and delivery terms. Win the deal and grow your revenue.",
  },
];

const categories = [
  {
    name: "Consumer Tech",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrQ6gCR9xAaoZY1kfkTZj0allEtLJOtNow_NO1NCh-_eGVbj36dx_d0BEJTtQxpFQqBozEtQf37l35uaQelnWrX8POiMm29zEJsytSe0f-o7dzZayoBj4fayRKKImoirMA8R3RmEtWlqOGe9pGM6qKfTSgkDKji13waKxVlhGIkRUyM6GmAC7u3lPdlihihJnEwIbm0reN9BQVqRe5cZGO_nH6QC649F3_3iy9kwN3YQJQTA2d7_KML1_TBkq8FZk-nj-Bk-wWGY",
  },
  {
    name: "Apparel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrQ6gCR9xAaoZY1kfkTZj0allEtLJOtNow_NO1NCh-_eGVbj36dx_d0BEJTtQxpFQqBozEtQf37l35uaQelnWrX8POiMm29zEJsytSe0f-o7dzZayoBj4fayRKKImoirMA8R3RmEtWlqOGe9pGM6qKfTSgkDKji13waKxVlhGIkRUyM6GmAC7u3lPdlihihJnEwIbm0reN9BQVqRe5cZGO_nH6QC649F3_3iy9kwN3YQJQTA2d7_KML1_TBkq8FZk-nj-Bk-wWGY",
  },
  {
    name: "Beauty & Care",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrQ6gCR9xAaoZY1kfkTZj0allEtLJOtNow_NO1NCh-_eGVbj36dx_d0BEJTtQxpFQqBozEtQf37l35uaQelnWrX8POiMm29zEJsytSe0f-o7dzZayoBj4fayRKKImoirMA8R3RmEtWlqOGe9pGM6qKfTSgkDKji13waKxVlhGIkRUyM6GmAC7u3lPdlihihJnEwIbm0reN9BQVqRe5cZGO_nH6QC649F3_3iy9kwN3YQJQTA2d7_KML1_TBkq8FZk-nj-Bk-wWGY",
  },
  {
    name: "Industrial Supply",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrQ6gCR9xAaoZY1kfkTZj0allEtLJOtNow_NO1NCh-_eGVbj36dx_d0BEJTtQxpFQqBozEtQf37l35uaQelnWrX8POiMm29zEJsytSe0f-o7dzZayoBj4fayRKKImoirMA8R3RmEtWlqOGe9pGM6qKfTSgkDKji13waKxVlhGIkRUyM6GmAC7u3lPdlihihJnEwIbm0reN9BQVqRe5cZGO_nH6QC649F3_3iy9kwN3YQJQTA2d7_KML1_TBkq8FZk-nj-Bk-wWGY",
  },
];

const verificationBenefits = [
  {
    icon: "star",
    title: "Priority Listing",
    description:
      "Your offers appear first when buyers browse. Verified sellers get more visibility.",
  },
  {
    icon: "verified",
    title: "Trust Badge",
    description:
      "A visible badge on your profile that signals credibility and reliability to every buyer.",
  },
  {
    icon: "shield",
    title: "Protection",
    description:
      "Access to Sellai's dispute resolution and payment protection for every transaction.",
  },
];

const creditBundles = [
  {
    name: "Starter",
    price: "$7",
    credits: 5,
    perCredit: "$1.40",
    description: "Perfect for trying out the platform.",
    popular: false,
  },
  {
    name: "Growth",
    price: "$12",
    credits: 15,
    perCredit: "$0.80",
    description: "Great value for growing sellers.",
    popular: false,
  },
  {
    name: "Pro Dealer",
    price: "$20",
    credits: 50,
    perCredit: "$0.40",
    description: "Best value for active sellers.",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$35",
    credits: 100,
    perCredit: "$0.35",
    description: "Maximum reach for high-volume dealers.",
    popular: false,
  },
];

export default function ForSellers() {
  return (
    <main className="pt-24 overflow-hidden">
      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Seller Network
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] mb-6">
              Grow your business with{" "}
              <span className="text-primary">active buyers.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-10">
              Stop waiting for customers to find you. On Sellai, Zimbabwean
              buyers post what they need — and you respond directly with your
              best offer.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#download"
                className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
              >
                Join as Seller
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary/5 transition-all"
              >
                <span className="material-symbols-outlined align-middle mr-2 text-xl">
                  play_circle
                </span>
                See How It Works
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-4 border border-white/40 shadow-2xl shadow-emerald-900/5 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUd5ejg53ks4EWQ0ju1cplprWT37HbLwpigKU65H7WWAH2-c7XB30Ks_sbP8H38JIwvSw8n3mwFSGIE23xyh7IZOKRA5FVr9eCmPaMXlvM893rMcchNto1Agyo3xVwLx_0ktLmJh4-L7bKTnYfmvDXPjU2GFPOpZMSeYEF4zjZcA-X4CxLeJT2ZsztSPXN2h_a2eQ9KRrEkcjp2m_s-hiskcmlb_09xaUKz2VmMV7-NltFKB9sKMCFu-DlU-LPo-pfLOgsmPq60EU"
                alt="Seller dashboard preview"
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] mb-6">
            Struggling to find customers?
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
            For Zimbabwean sellers, reaching the right buyers is harder than it
            should be. Traditional methods waste your time and money.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point) => (
            <div
              key={point}
              className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 flex items-start gap-4"
            >
              <span className="material-symbols-outlined text-error text-3xl shrink-0 mt-0.5">
                cancel
              </span>
              <p className="text-on-surface text-lg leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center">
            <span className="material-symbols-outlined text-error text-4xl mb-4 block">
              group_off
            </span>
            <p className="text-3xl font-extrabold text-on-surface mb-2">
              Limited Reach
            </p>
            <p className="text-on-surface-variant font-medium">
              Missed Opportunities
            </p>
            <p className="text-on-surface-variant text-sm mt-1">
              Most local sellers only reach customers within walking distance of
              their shop
            </p>
          </div>
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center">
            <span className="material-symbols-outlined text-error text-4xl mb-4 block">
              hourglass_top
            </span>
            <p className="text-3xl font-extrabold text-on-surface mb-2">
              Wasted Time
            </p>
            <p className="text-on-surface-variant font-medium">
              No Guaranteed Leads
            </p>
            <p className="text-on-surface-variant text-sm mt-1">
              Hours spent on WhatsApp groups and social media with no way to know
              who's actually buying
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Groups Aren't Enough ── */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The Upgrade
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-[Manrope]">
            Why groups and marketplaces aren't enough
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              old: "You post and hope someone sees it",
              sellai: "Buyers post demands — you respond to guaranteed interest",
              icon: "visibility",
            },
            {
              old: "Spam drowns out your offers",
              sellai: "Credits filter out noise — only serious sellers respond",
              icon: "filter_alt",
            },
            {
              old: "No delivery — buyer arranges pickup",
              sellai: "Runners deliver for you — you focus on selling",
              icon: "local_shipping",
            },
            {
              old: "No trust signal — you're one of thousands",
              sellai: "Verification badge + trust score make you stand out",
              icon: "verified",
            },
          ].map((item) => (
            <div
              key={item.icon}
              className="bg-white/55 backdrop-blur-xl rounded-2xl p-6 border border-white/40 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-primary text-xl">
                  {item.icon}
                </span>
              </div>
              <div>
                <p className="text-on-surface-variant text-sm line-through decoration-red-400/50 mb-1.5">
                  {item.old}
                </p>
                <p className="text-on-surface font-semibold text-sm">
                  {item.sellai}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Four steps to your next sale
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-[2rem] p-8 border relative group transition-all ${
                step.highlighted
                  ? "bg-primary text-white border-primary shadow-xl shadow-emerald-900/20"
                  : "bg-white/55 backdrop-blur-xl border-white/40 hover:shadow-xl hover:shadow-emerald-900/5"
              }`}
            >
              <span
                className={`text-6xl font-black absolute top-6 right-8 select-none ${
                  step.highlighted ? "text-white/15" : "text-primary/10"
                }`}
              >
                {step.number}
              </span>
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  step.highlighted ? "bg-white/20" : "bg-primary/10"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-3xl ${
                    step.highlighted ? "text-white" : "text-primary"
                  }`}
                >
                  {step.icon}
                </span>
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  step.highlighted ? "text-white" : "text-on-surface"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  step.highlighted ? "text-white/80" : "text-on-surface-variant"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How Credits Work ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Credit System
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            How credits work
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-10 border border-white/40 shadow-2xl shadow-emerald-900/5">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">
                toll
              </span>
              <h3 className="text-xl font-bold text-on-surface">
                Intelligence Card
              </h3>
            </div>

            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    confirmation_number
                  </span>
                </div>
                <div>
                  <p className="text-on-surface font-bold mb-1">
                    1 credit = 1 offer sent to a buyer
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    When you see a buyer request that matches what you sell, spend
                    one credit to send them your offer with pricing and delivery
                    terms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    all_inclusive
                  </span>
                </div>
                <div>
                  <p className="text-on-surface font-bold mb-1">
                    Credits never expire
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Buy credits when you need them. No monthly subscriptions, no
                    pressure. Use them at your own pace.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    target
                  </span>
                </div>
                <div>
                  <p className="text-on-surface font-bold mb-1">
                    Only pay when you see opportunity
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Browse buyer demands for free. You only spend a credit when
                    you choose to respond — no wasted spend.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
              <p className="text-on-surface-variant text-sm font-medium mb-2 uppercase tracking-wider">
                Credit Bundles
              </p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-white/70 rounded-xl p-3 border border-white/50">
                  <p className="text-on-surface font-bold">Starter</p>
                  <p className="text-primary font-extrabold text-lg">$7</p>
                  <p className="text-on-surface-variant text-xs">5 credits</p>
                </div>
                <div className="bg-white/70 rounded-xl p-3 border border-white/50">
                  <p className="text-on-surface font-bold">Growth</p>
                  <p className="text-primary font-extrabold text-lg">$12</p>
                  <p className="text-on-surface-variant text-xs">15 credits</p>
                </div>
                <div className="bg-white/70 rounded-xl p-3 border border-white/50">
                  <p className="text-on-surface font-bold">Pro Dealer</p>
                  <p className="text-primary font-extrabold text-lg">$20</p>
                  <p className="text-on-surface-variant text-xs">50 credits</p>
                </div>
                <div className="bg-white/70 rounded-xl p-3 border border-white/50">
                  <p className="text-on-surface font-bold">Enterprise</p>
                  <p className="text-primary font-extrabold text-lg">$35</p>
                  <p className="text-on-surface-variant text-xs">
                    100 credits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Showcase ── */}
      <section className="bg-[#111e16] py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 block">
              Marketplace
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] text-white">
              Trending categories
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group rounded-[2rem] overflow-hidden relative aspect-[3/4]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-emerald-400 text-sm font-medium">
                    Active Demand
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Verification ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwdGyHPsffnXWIZCVzVEPYmNNtR_F7hJ6cwQnCnjh8E0kYwCwcsLhXlQLDKPZPCmn2GklV3bC2ECi7PGwQ3QQVhb4FnPuVeoF92dx9W0rUtEroDbPqnD2P6r4neFzX9y9uQIYRCv9c_MhzWJeprkWjfsBrmVQnWedg1Fzq_4x0UYMBwY6Oz1Ge0jpetgpZBHXlouCnoGV9myHM-1dSfubCVmMTkY2sYk-iEBH-MvWOP8xUUlpoEsnP7hnlFu2onfmc8QtwWms6gQA"
                alt="Verified seller"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center gap-3 shadow-lg">
              <span className="material-symbols-outlined text-primary text-3xl">
                verified
              </span>
              <div>
                <p className="font-bold text-on-surface text-sm">
                  Verified Seller
                </p>
                <p className="text-on-surface-variant text-xs">
                  Identity confirmed
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Verification
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] mb-6">
              Stand out as a trusted seller
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              Get verified to unlock premium features and build trust with
              buyers from day one.
            </p>

            <div className="flex flex-col gap-6">
              {verificationBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {benefit.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-on-surface mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Credit packs for every seller
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mt-4">
            No subscriptions. No monthly fees. Buy credits and use them whenever
            you're ready — they never expire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {creditBundles.map((bundle) => (
            <div
              key={bundle.name}
              className={`rounded-[2rem] p-8 border transition-all flex flex-col ${
                bundle.popular
                  ? "bg-primary text-white border-primary shadow-2xl shadow-emerald-900/20 scale-105"
                  : "bg-white/55 backdrop-blur-xl border-white/40"
              }`}
            >
              {bundle.popular && (
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 self-start">
                  Best Value
                </span>
              )}
              <h3
                className={`text-xl font-bold mb-1 ${
                  bundle.popular ? "text-white" : "text-on-surface"
                }`}
              >
                {bundle.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  bundle.popular ? "text-white/70" : "text-on-surface-variant"
                }`}
              >
                {bundle.description}
              </p>
              <div className="mb-2">
                <span
                  className={`text-5xl font-extrabold font-[Manrope] ${
                    bundle.popular ? "text-white" : "text-on-surface"
                  }`}
                >
                  {bundle.price}
                </span>
              </div>
              <p
                className={`text-sm mb-6 ${
                  bundle.popular ? "text-white/70" : "text-on-surface-variant"
                }`}
              >
                {bundle.credits} credits &middot; {bundle.perCredit} each
              </p>
              <div className="mt-auto">
                <a
                  href="#download"
                  className={`block text-center px-6 py-3 rounded-xl font-bold text-base transition-all hover:scale-105 ${
                    bundle.popular
                      ? "bg-white text-primary shadow-lg"
                      : "bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-lg shadow-emerald-500/20"
                  }`}
                >
                  Get Credits
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="mb-0">
        <div className="bg-gradient-to-r from-[#10B981] to-[#059669] py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] text-white mb-6">
              Ready to meet your next customer?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join sellers across Zimbabwe already growing their business on
              Sellai. Buy credits only when you need them.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#download"
                className="inline-block bg-white text-[#059669] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg"
              >
                Start Selling Today
              </a>
              <Link
                to="/contact"
                className="inline-block text-white/90 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Download ── */}
      <DownloadSection variant="dark" />
    </main>
  );
}
