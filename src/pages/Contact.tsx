import { DownloadSection } from "../components/DownloadSection";

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
      {/* -- Hero -- */}
      <section className="mb-20 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] mb-6">
          We'd love to hear from you.
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
          Whether you have a question, partnership inquiry, or just want to say
          hello — we're here for you.
        </p>
      </section>

      {/* -- Two Column Layout -- */}
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          {/* Email Card */}
          <div className="glass-card rounded-2xl p-8 border border-white/40 bloom-shadow">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#059669] text-3xl">
                  mail
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface font-[Manrope] mb-1">
                  Email
                </h3>
                <a
                  href="mailto:hello@sellai.africa"
                  className="text-primary font-medium hover:underline"
                >
                  hello@sellai.africa
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card rounded-2xl p-8 border border-white/40 bloom-shadow">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#059669] text-3xl">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface font-[Manrope] mb-1">
                  Location
                </h3>
                <p className="text-on-surface-variant">Harare, Zimbabwe</p>
              </div>
            </div>
          </div>

          {/* Partnership Note */}
          <div className="glass-card rounded-2xl p-8 border border-white/40 bloom-shadow">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#059669] text-3xl">
                  handshake
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface font-[Manrope] mb-1">
                  Partnerships
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Have a partnership inquiry? Reach out and our team will respond
                  within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/40 bloom-shadow">
          <h2 className="text-2xl font-extrabold font-[Manrope] mb-8">
            Send us a message
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-on-surface mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="w-full bg-surface-container-lowest rounded-xl px-5 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-on-surface mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-surface-container-lowest rounded-xl px-5 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-on-surface mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                className="w-full bg-surface-container-lowest rounded-xl px-5 py-3.5 text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              >
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
                <option value="press">Press</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-on-surface mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help?"
                className="w-full bg-surface-container-lowest rounded-xl px-5 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* -- Download CTA -- */}
      <section className="mb-12 text-center">
        <p className="text-on-surface-variant text-lg">
          Prefer to download the app?{" "}
          <a
            href="#download"
            className="text-primary font-semibold hover:underline"
          >
            Get Sellai now
          </a>
        </p>
      </section>

      {/* -- Download -- */}
      <DownloadSection />
    </main>
  );
}
