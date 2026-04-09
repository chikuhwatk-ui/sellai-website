import { Link } from "react-router-dom";

const values = [
  {
    icon: "verified_user",
    title: "Trust",
    description:
      "Every transaction is backed by escrow, identity verification, and community accountability.",
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
      "Multi-language support, low-bandwidth mode, and USSD fallback ensure nobody is left behind.",
  },
];

const team = [
  {
    name: "Tendai Moyo",
    role: "Founder & CEO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqhMdjVNWyO1vewZresZMn5ALvXD5Ok5V1Z8ikjRcwto78BKD-N9l0FLr7EI37TS5ca0vC8Kxe6yRb3Z_KOHn_GKFGQmHGZ3NFmK9-lDTOF7Zwp4I74EBwJh_9bjJV6S-ozAnDp1I5uSSC6pg9mfd_Nt1EOUl-WzeVdj-pAao7nLgX6psypM3GWynh4AabB2lCT375q_YwdMdsydTSrSh-QeKdVDuy4JbfdMe25A_zRg0M7LtfukrS7TW5UDdb4wcvZTmsQ2seTOI",
  },
  {
    name: "Sarah Nkosi",
    role: "Head of Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcSvsLvpo_mXHYdRRP3Pp7s2eXpuNJdCkEDNTSnj7UUARL53bO0cifoP7MYrvnrtlDs652yzg5n3AC1PCfRgUWsl4aRaBVArsHR8zShcpWRTXMtiCxGrYUpgpcrM5LUWDVSmCe0wDQeYsC53Y_iGSPYrs2Wo5aC6ORlUNa5KheCWIviQUvXyuM9kvk7cOAP-8Cb0xdJ5ItR5qbCGZOZgCgQCIOTF_FCQrQvmjcuMpJ_uwN8clJ6yHCCMPEBcHCMIwCg75RFbsS_g",
  },
  {
    name: "David Zulu",
    role: "CTO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4ikL41jqyXlEeVYKYyAZygjUylbhKd8R7wWPZeM3ELtGBzJZqC7ezY-jviL8Rm_I7nqKvxR2_tc7l3GHTUDO2V8hsBtZ_60qGKwdbuNYLjc6bGK4zgxiO48zYsOzfyyHYMoaWjXLCLi8NUvFUNNzf00NaZsTduSB3EQYR0d8kMUzO6NP4k5atsRQeBq2EgJZu8BCcTR4nGBZJiyaxdNtkH3djWi7gjZIwyPnnSEzPGr7yDCW4YiL3xhEAczM2mm2DHAxXxWCs6dQ",
  },
  {
    name: "Amara Okafor",
    role: "Product Design",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-GsNbQ94t_W6IFZuNLi17LJ25p2NGxZf8G1qbo3e9fPaDZkbZoSExHXw3aofHn9ze35sxEiYfgcAW6MXtKTFFZClzBSLO77QuWYbB5TZZqq-HwqQWh5WfqI60ElxlYFFC-ei7F_qF9ux4nNiNbaHIN9sVr95P-A6RVC5ZYm6PL2bqeNh7eR6gBZdkHTRVWN2v1W-iTfEt25DGGtMjdNpmm8FKHKB1vOOX7I3sIhzOWn3s46V99v4XWATZ1kJOMisb7ZSX4Mg5VA",
  },
];

export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* ── Hero ── */}
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
          Sellai is bridging the gap between informal markets and modern
          technology — creating an inclusive, AI-powered ecosystem where anyone
          can buy, sell, or deliver with confidence.
        </p>

        <div className="relative rounded-[2rem] overflow-hidden max-w-5xl mx-auto">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPNx2fKQLAxpJspDnpX6YJtivupl2QVX54d8jDMmcyoWkqKxUvRAOAt72YOw-NH69ujfMz20-8e5HSVYtv4hgjp3TX1SSYk5GAXHYDIBxLUuvOy1-anAvYx16cIT_cXu2jUnhJ-2AyQ1yq9ht4RKygsoCfYrFPzc9iwgvrqnWkAmF196ilJ-UR4En8CaVOmzQTO5-dEz7zWKIfllfS_yERgURUrpjSa-vVYu8APdD5cW-4R6C12YJESOEv1URksVk6L4rqOUhLy7Y"
            alt="Sellai marketplace in action"
            className="w-full object-cover aspect-[16/7]"
          />
          {/* Glassmorphic quote overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 md:bottom-10 bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30">
            <p className="text-white text-base md:text-lg font-medium leading-relaxed italic">
              &ldquo;Commerce should not require a storefront, a smartphone, or
              even an internet connection to get started. It just requires
              trust.&rdquo;
            </p>
            <p className="text-white/70 text-sm font-semibold mt-3">
              — Tendai Moyo, Founder
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision Bento ── */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Mission — 7 cols */}
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
              We exist to give every small trader, street vendor, and community
              runner the same digital tools that power billion-dollar platforms
              — smart matching, secure payments, and real-time logistics — at
              zero upfront cost.
            </p>
          </div>

          {/* Vision — 5 cols */}
          <div className="lg:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[320px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbS8nRSGcU-H9X03UHsYkzYQLqHVjDPS70p787mrK4Ptyfp2QIhhE9YGn45hJdG4TpDVcAVJClLOwBorxNYh1_WvWbig4TvfLQ8jRoqKBcbXTaV0Kri0k3wEgp7IQW0_BmWMJtJqR9HrYNwQ7mDwHWIdKXipBrIgBttlwAWTI0EQ3DSIkLzSbN126hH9_yRPZnENNhcRWKoitFP0xvyMKoFWUUHNlzKOmREHHQp7oRYIn8CgkXPg29dIZ9i79IABMMdiHbfzcznXA"
              alt="Sellai coverage across Africa"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2 block">
                Our Vision
              </span>
              <h3 className="text-2xl font-extrabold text-white font-[Manrope]">
                A connected marketplace across every African city by 2030
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="mb-32 -mx-6 md:-mx-8">
        <div className="bg-[#0E1B13] rounded-[2.5rem] mx-6 md:mx-8 px-10 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 block">
                Our Origin
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-[Manrope] text-white mb-6">
                Born from a simple observation
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                In 2021, Tendai Moyo watched a street vendor in Harare lose an
                entire day's income because a buyer couldn't find her stall
                after it moved. Meanwhile, that same buyer searched for hours
                for a product that was two blocks away.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                That disconnect — abundance on one side, scarcity on the other,
                separated only by information — became the founding problem of
                Sellai. We set out to build a bridge: an AI layer that
                understands context, location, and intent, connecting informal
                markets to modern demand in real time.
              </p>
            </div>

            {/* Portrait + badge */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk4MNAiU4TMacSF3URVkcUOujYbO_04yprCYR_REgfXw7wtUD-xebTEfodsGLMZISqHcIs-hJr0LX1WQA19auygQlitra5O0AKRrQgKARK2VoHPBJHqq5J8kM9kADpyyzhG-KqpzN_NpJq-grYfPBc8nV_tqUUa_rq2AHKHdTwlB-h6TNYm6WF3Dcfp6sjpuZnSDg6cp3KbHBNJo-788fZfLF9iiDlRDN4evHFItADRoUf6pn1RKG3mMhmhjKU4GGZ-60wZmgKcu8"
                  alt="Tendai Moyo, Founder"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-emerald-500/30"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 whitespace-nowrap">
                  <p className="text-white text-sm font-semibold">
                    Founded 2021 &middot; Harare, Zimbabwe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
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

      {/* ── Team ── */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            The People Behind Sellai
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope]">
            Meet the Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="text-center group"
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-surface-container-low border-4 border-transparent group-hover:border-primary/30 transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#111e16]">
                {member.name}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="bg-primary-container rounded-[2.5rem] px-10 md:px-16 py-16 md:py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-[Manrope] text-on-primary-container mb-6">
            Join the movement.
          </h2>
          <p className="text-on-primary-container/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Whether you're a buyer, seller, or runner — there's a place for you
            in the future of African commerce.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/buyer-dashboard"
              className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-on-primary-container/30 text-on-primary-container hover:bg-on-primary-container/5 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
