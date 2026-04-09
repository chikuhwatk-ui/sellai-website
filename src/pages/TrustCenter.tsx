const verificationSteps = [
  { label: "Email Address", status: "completed", icon: "check" },
  { label: "Identity Document", status: "completed", icon: "check" },
  { label: "Live Selfie", status: "pending", icon: "photo_camera" },
  { label: "Residential Address", status: "locked", icon: "lock" },
];

const guaranteeCards = [
  {
    icon: "pin_drop",
    title: "PIN Handovers",
    description:
      "Every delivery is confirmed with a unique PIN code, ensuring only the rightful recipient receives the package.",
  },
  {
    icon: "account_balance_wallet",
    title: "Escrow Payments",
    description:
      "Funds are held securely in escrow until both parties confirm a successful transaction.",
  },
  {
    icon: "verified_user",
    title: "Seller Vetting",
    description:
      "All sellers undergo identity checks and continuous review to maintain marketplace integrity.",
  },
];

const securityLog = [
  {
    icon: "login",
    title: "Successful Login",
    detail: "Chrome on Windows 10",
    timestamp: "Today, 9:42 AM",
    status: "Success",
    statusColor: "bg-primary-container text-on-primary-container",
  },
  {
    icon: "receipt_long",
    title: "Verified Transaction #8821",
    detail: "Escrow released to seller",
    timestamp: "Yesterday, 3:18 PM",
    status: "Verified",
    statusColor: "bg-primary-container text-on-primary-container",
  },
  {
    icon: "password",
    title: "Password Updated",
    detail: "Security credentials changed",
    timestamp: "Jan 10, 2026",
    status: "Updated",
    statusColor: "bg-surface-container text-on-surface-variant",
  },
];

export default function TrustCenter() {
  const completedCount = verificationSteps.filter(
    (s) => s.status === "completed"
  ).length;
  const progressPercent = Math.round(
    (completedCount / verificationSteps.length) * 100
  );

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <section className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary font-label mb-4">
            <span className="material-symbols-outlined text-[16px]">
              security
            </span>
            Security Protocol 4.0
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-on-surface font-headline leading-tight">
            Trust &amp; Verification Center
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-on-surface-variant text-lg font-body">
            Your transactions are shielded by military-grade encryption,
            multi-factor authentication, and continuous threat monitoring — so
            you can trade with absolute confidence.
          </p>
        </section>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ── Left column (4 cols) ── */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Verification Progress */}
            <div className="glass-card rounded-2xl border border-outline-variant/40 p-6 bloom-shadow">
              <h2 className="text-lg font-bold text-on-surface font-headline mb-5">
                Verification Progress
              </h2>

              <ol className="space-y-4 mb-6">
                {verificationSteps.map((step, i) => {
                  const isCompleted = step.status === "completed";
                  const isPending = step.status === "pending";

                  return (
                    <li key={i} className="flex items-center gap-3">
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm shrink-0 ${
                          isCompleted
                            ? "bg-primary-container text-on-primary-container"
                            : isPending
                            ? "border-2 border-primary bg-transparent text-primary"
                            : "bg-surface-container text-on-surface-variant/50"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {step.icon}
                        </span>
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          isCompleted
                            ? "text-on-surface"
                            : isPending
                            ? "text-on-surface"
                            : "text-on-surface-variant/50"
                        }`}
                      >
                        {step.label}
                      </span>
                    </li>
                  );
                })}
              </ol>

              {/* Progress bar */}
              <div className="mb-1 flex items-center justify-between text-xs text-on-surface-variant">
                <span>{progressPercent}% Complete</span>
                <span className="font-semibold text-on-surface">
                  Level 2 Limit: $5,000
                </span>
              </div>
              <div className="h-2 rounded-full bg-surface-container overflow-hidden mb-5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-container transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <button className="w-full py-3 rounded-xl text-on-primary font-semibold text-sm bg-gradient-to-r from-primary to-primary-container hover:opacity-90 transition-opacity cursor-pointer">
                Complete Verification
              </button>
            </div>

            {/* Active Protection Intelligence */}
            <div className="glass-card rounded-2xl border border-outline-variant/40 p-6 bloom-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  shield
                </span>
                <h2 className="text-lg font-bold text-on-surface font-headline">
                  Active Protection
                </h2>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Your account is protected by{" "}
                <span className="font-semibold text-on-surface">2FA</span> and{" "}
                <span className="font-semibold text-on-surface">
                  Biometric Locks
                </span>
                .
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                View security settings
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* ── Right column (8 cols) ── */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* The Sellai Guarantee */}
            <div>
              <h2 className="text-2xl font-bold text-on-surface font-headline mb-5">
                The Sellai Guarantee
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {guaranteeCards.map((card, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-2xl border border-outline-variant/40 p-5 bloom-shadow flex flex-col items-start gap-3"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-surface-container-lowest shadow-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        {card.icon}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-on-surface font-headline">
                      {card.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Log */}
            <div>
              <h2 className="text-2xl font-bold text-on-surface font-headline mb-5">
                Security Log
              </h2>
              <div className="glass-card rounded-2xl border border-outline-variant/40 divide-y divide-outline-variant/30 bloom-shadow overflow-hidden">
                {securityLog.map((entry, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-4"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                        {entry.icon}
                      </span>
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-on-surface truncate">
                        {entry.title}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {entry.detail}
                      </p>
                    </div>
                    <div className="text-right shrink-0 flex flex-col items-end gap-1">
                      <span className="text-[11px] text-on-surface-variant whitespace-nowrap">
                        {entry.timestamp}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${entry.statusColor}`}
                      >
                        {entry.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Banner */}
            <div className="relative rounded-2xl overflow-hidden h-48 bloom-shadow">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9aAGmNsAxpuluOr-_kD6j31KAc7WUdxoA3ajVbOIal8L58AtMfPUz_BBtkAsbcmTs44cMLwN9FN46WYqYU31CkAf_LL3jABzMsTI0Ark0bn99_6S7Ej6TxvAKTd4Vi91XLXw_N2FzZcIPrXO7OVtlL8FZLddgGD6yu2juq3R8qr_uWBUEluGFs8QrEzk7yvnc-eug7gCNSBVC0GwS_B5-9UDQeBfn7kVrOmv7zSiMly2NbeLcLDBGBQjy4dCTCttwTTHjjY8ZSyU"
                alt="Institutional Security"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-on-surface/70" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h3 className="text-2xl font-bold text-white font-headline mb-1">
                  Institutional Security
                </h3>
                <p className="text-sm text-white/80">
                  SOC2 compliant infrastructure protecting every transaction on
                  Sellai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
