import { useState } from "react";
import { Link } from "react-router-dom";

const painPoints = [
  "Spending thousands on ads with no guaranteed ROI",
  "Maintaining an expensive website that nobody visits",
  "Waiting for customers to find you organically",
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
      "Tell us what you sell. Our AI will match you with buyers looking for exactly your products.",
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
      "Respond with your best price and delivery terms. Win the deal and grow your revenue.",
  },
];

const categories = [
  {
    name: "Consumer Tech",
    demands: "1.2k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrQ6gCR9xAaoZY1kfkTZj0allEtLJOtNow_NO1NCh-_eGVbj36dx_d0BEJTtQxpFQqBozEtQf37l35uaQelnWrX8POiMm29zEJsytSe0f-o7dzZayoBj4fayRKKImoirMA8R3RmEtWlqOGe9pGM6qKfTSgkDKji13waKxVlhGIkRUyM6GmAC7u3lPdlihihJnEwIbm0reN9BQVqRe5cZGO_nH6QC649F3_3iy9kwN3YQJQTA2d7_KML1_TBkq8FZk-nj-Bk-wWGY",
  },
  {
    name: "Apparel",
    demands: "4.8k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrQ6gCR9xAaoZY1kfkTZj0allEtLJOtNow_NO1NCh-_eGVbj36dx_d0BEJTtQxpFQqBozEtQf37l35uaQelnWrX8POiMm29zEJsytSe0f-o7dzZayoBj4fayRKKImoirMA8R3RmEtWlqOGe9pGM6qKfTSgkDKji13waKxVlhGIkRUyM6GmAC7u3lPdlihihJnEwIbm0reN9BQVqRe5cZGO_nH6QC649F3_3iy9kwN3YQJQTA2d7_KML1_TBkq8FZk-nj-Bk-wWGY",
  },
  {
    name: "Beauty & Care",
    demands: "2.1k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrQ6gCR9xAaoZY1kfkTZj0allEtLJOtNow_NO1NCh-_eGVbj36dx_d0BEJTtQxpFQqBozEtQf37l35uaQelnWrX8POiMm29zEJsytSe0f-o7dzZayoBj4fayRKKImoirMA8R3RmEtWlqOGe9pGM6qKfTSgkDKji13waKxVlhGIkRUyM6GmAC7u3lPdlihihJnEwIbm0reN9BQVqRe5cZGO_nH6QC649F3_3iy9kwN3YQJQTA2d7_KML1_TBkq8FZk-nj-Bk-wWGY",
  },
  {
    name: "Industrial Supply",
    demands: "850",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdrQ6gCR9xAaoZY1kfkTZj0allEtLJOtNow_NO1NCh-_eGVbj36dx_d0BEJTtQxpFQqBozEtQf37l35uaQelnWrX8POiMm29zEJsytSe0f-o7dzZayoBj4fayRKKImoirMA8R3RmEtWlqOGe9pGM6qKfTSgkDKji13waKxVlhGIkRUyM6GmAC7u3lPdlihihJnEwIbm0reN9BQVqRe5cZGO_nH6QC649F3_3iy9kwN3YQJQTA2d7_KML1_TBkq8FZk-nj-Bk-wWGY",
  },
];

const verificationBenefits = [
  {
    icon: "star",
    title: "Priority Listing",
    description:
      "Your offers appear first when buyers browse. Verified sellers get 3x more visibility.",
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

const pricingTiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for individual sellers just getting started.",
    features: [
      "Up to 50 offers/month",
      "Basic analytics dashboard",
      "Standard support",
      "1 category listing",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth Scale",
    price: "$149",
    period: "/mo",
    description: "For growing businesses ready to scale their reach.",
    features: [
      "Unlimited offers",
      "Advanced analytics & insights",
      "Priority support",
      "Up to 10 category listings",
      "Verified seller badge",
      "Featured placement",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    name: "Custom Fleet",
    price: "Custom",
    period: "",
    description: "Enterprise solutions for large-scale operations.",
    features: [
      "Everything in Growth Scale",
      "Dedicated account manager",
      "API access",
      "Unlimited categories",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const categoryOptions = [
  "Consumer Tech",
  "Apparel",
  "Beauty & Care",
  "Industrial Supply",
  "Food & Beverage",
  "Home & Garden",
];

export default function ForSellers() {
  const [sliderValue, setSliderValue] = useState(25);
  const [selectedCategory, setSelectedCategory] = useState("Consumer Tech");

  const estimatedRevenue = sliderValue * 500;

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
              Skip the expensive websites and ad campaigns. On Sellai, buyers
              come to you with real demand — all you have to do is respond.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/seller-feed"
                className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
              >
                Join as Seller
              </Link>
              <button
                type="button"
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary/5 transition-all"
              >
                <span className="material-symbols-outlined align-middle mr-2 text-xl">
                  play_circle
                </span>
                See How It Works
              </button>
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
            Traditional methods are expensive, slow, and unreliable. You deserve
            better.
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
              trending_up
            </span>
            <p className="text-3xl font-extrabold text-on-surface mb-2">
              $4,200+
            </p>
            <p className="text-on-surface-variant font-medium">
              High Ad Costs
            </p>
            <p className="text-on-surface-variant text-sm mt-1">
              Average monthly spend for online ads with diminishing returns
            </p>
          </div>
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 text-center">
            <span className="material-symbols-outlined text-error text-4xl mb-4 block">
              visibility_off
            </span>
            <p className="text-3xl font-extrabold text-on-surface mb-2">
              2.3%
            </p>
            <p className="text-on-surface-variant font-medium">
              Low Visibility
            </p>
            <p className="text-on-surface-variant text-sm mt-1">
              Average conversion rate from traditional online storefronts
            </p>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Four steps to explosive growth
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

      {/* ── Earnings Calculator ── */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Revenue Potential
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Estimate your earnings
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/55 backdrop-blur-xl rounded-[2rem] p-10 border border-white/40 shadow-2xl shadow-emerald-900/5">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">
                insights
              </span>
              <h3 className="text-xl font-bold text-on-surface">
                Intelligence Card
              </h3>
            </div>

            <div className="mb-8">
              <label className="block text-on-surface-variant font-medium mb-3">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border border-outline-variant bg-surface-container-low px-4 py-3 text-on-surface font-medium focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-on-surface-variant font-medium">
                  Orders per month
                </label>
                <span className="text-on-surface font-bold text-lg">
                  {sliderValue}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-primary bg-outline-variant"
              />
              <div className="flex justify-between text-sm text-on-surface-variant mt-2">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
              <p className="text-on-surface-variant text-sm font-medium mb-2 uppercase tracking-wider">
                Estimated Monthly Revenue
              </p>
              <p className="text-5xl font-extrabold text-primary font-[Manrope]">
                ${estimatedRevenue.toLocaleString()}
              </p>
              <p className="text-on-surface-variant text-sm mt-2">
                Based on average order value in {selectedCategory}
              </p>
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
                    {cat.demands} active demands
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
            Plans that scale with you
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-[2rem] p-8 border transition-all flex flex-col ${
                tier.popular
                  ? "bg-primary text-white border-primary shadow-2xl shadow-emerald-900/20 scale-105 py-12"
                  : "bg-white/55 backdrop-blur-xl border-white/40"
              }`}
            >
              {tier.popular && (
                <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 self-start">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-xl font-bold mb-2 ${
                  tier.popular ? "text-white" : "text-on-surface"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  tier.popular ? "text-white/70" : "text-on-surface-variant"
                }`}
              >
                {tier.description}
              </p>
              <div className="mb-8">
                <span
                  className={`text-5xl font-extrabold font-[Manrope] ${
                    tier.popular ? "text-white" : "text-on-surface"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span
                    className={`text-lg ${
                      tier.popular ? "text-white/70" : "text-on-surface-variant"
                    }`}
                  >
                    {tier.period}
                  </span>
                )}
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined text-xl ${
                        tier.popular ? "text-white/80" : "text-primary"
                      }`}
                    >
                      check_circle
                    </span>
                    <span
                      className={`text-sm ${
                        tier.popular ? "text-white/90" : "text-on-surface-variant"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/seller-feed"
                className={`text-center px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 ${
                  tier.popular
                    ? "bg-white text-primary shadow-lg"
                    : "bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-lg shadow-emerald-500/20"
                }`}
              >
                {tier.cta}
              </Link>
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
              Join thousands of sellers already growing their business on
              Sellai. No upfront costs, no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/seller-feed"
                className="inline-block bg-white text-[#059669] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg"
              >
                Start Selling Today
              </Link>
              <Link
                to="/"
                className="inline-block text-white/90 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
